import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = {
        focusedInput: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (focusedInput) => {
        this.setState(() => ({ focusedInput }))
    }

    render() {
        return (
            <div>
                <input type='text' onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
                <div>
                    <input 
                        type='radio' 
                        name='sortBy' 
                        id='sortByDate' 
                        value='date'
                        onChange={(e) => {
                            this.props.dispatch(sortByDate())
                        }}
                    />
                    <label htmlFor='sortByDate'>Sort by date</label>
                </div>
                <div>
                    <input 
                        type='radio' 
                        name='sortBy' 
                        id='sortByAmount' 
                        value='amount' 
                        onChange={(e) => {
                            this.props.dispatch(sortByAmount())
                        }} 
                    />
                    <label htmlFor='sortByAmount'>Sort by amount</label>
                </div>
                <div>
                    <select 
                        name="sortBy"
                        value={this.props.filters.sortBy} 
                        onChange={(e) => {
                            if(e.target.value === 'date') {
                                this.props.dispatch(sortByDate())
                            } else if(e.target.value === 'amount') {
                                this.props.dispatch(sortByAmount())
                            }
                        }
                    }>
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                    </select>
                </div>
                <div>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="expenseStartDateId" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="expenseEndDateId" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    showClearDates={true}
                    showDefaultInputIcon={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)