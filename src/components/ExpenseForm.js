import React from 'react'
import { escape, unescape } from 'validator'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize' // To fixed a bug

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            desc: props.expense ? props.expense.desc : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: ''
        }
    }

    onDescChange = (e) => {
        const desc = e.target.value
        this.setState(() => ({ desc: escape(desc) }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        // new Intl.NumberFormat().format(amount)
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }))
    }

    onSubmit = (e) =>{
        e.preventDefault()
        if (!this.state.desc || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))

            // Send data to create a new expense
            // parseFloat(12345.33, 10) * 100
            // 1234533
            // parseFloat(12345, 10) * 100
            // 1234500
            this.props.onSubmitForm({
                desc: this.state.desc,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Description" 
                            value={unescape(this.state.desc)}
                            onChange={this.onDescChange}
                            autoFocus
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Amount" 
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                        />
                    </div>
                    <div>
                        <SingleDatePicker
                            date={this.state.createdAt} // momentPropTypes.momentObj or null
                            onDateChange={this.onDateChange} // PropTypes.func.isRequired
                            focused={this.state.focused} // PropTypes.bool
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                            id="expenseDataPicker" // PropTypes.string.isRequired,
                            numberOfMonths={ 1 }
                            isOutsideRange={() => false}
                        />
                    </div>
                    <div>
                        <textarea 
                            placeholder="Add a note for your expense (optional)" 
                            value={this.state.note}
                            onChange={this.onNoteChange}
                        />
                    </div>
                    <button>{this.props.isForm === 'create' ? 'Add Expense' : 'Update Expense'}</button>
                </form>
            </div>
        )
    }
}