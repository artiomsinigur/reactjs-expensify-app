import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const Create = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmitForm={(expense) => {
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
            isForm='create'
        />
    </div>
)
export default connect()(Create)