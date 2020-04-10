import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        <table>
            <tbody>
                {
                    props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} {...expense} />
                    })
                }
            </tbody>
        </table>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

// 2. Redux provides a Connect function to connect component(s) to the store.
    // First: connect() takes the STATE and PROPS 
    // Second: connect()() takes the COMPONENT
export default connect(mapStateToProps)(ExpenseList)