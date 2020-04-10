import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpenseById, removeExpenseById } from '../actions/expenses' 

const Edit = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmitForm={(expense) => {
                    props.dispatch(editExpenseById(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button type="button" onClick={() => {
                props.dispatch(removeExpenseById(props.expense.id))
                props.history.push('/')
            }}>
                Remove
            </button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(Edit)