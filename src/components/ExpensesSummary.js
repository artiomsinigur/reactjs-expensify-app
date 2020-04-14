import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

const ExpensesSummary = ({ expenseCount, totalExpenses }) => (
    <div>
        <p><strong>Summary:</strong> You have: {expenseCount} expenses of total amount: {numeral(totalExpenses / 100).format('$0,0.00')}</p>
    </div>
)

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        totalExpenses: selectTotalExpenses(visibleExpenses),
        expenseCount: visibleExpenses.length
    }
}

export default connect(mapStateToProps)(ExpensesSummary)