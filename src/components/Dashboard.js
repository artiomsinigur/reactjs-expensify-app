import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const Dashboard = () => (
    <div>
        <ExpensesSummary />
        <ExpenseList />
        <ExpenseListFilters />
    </div>
)

export default Dashboard