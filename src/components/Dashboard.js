import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const Dashboard = () => (
    <div>
        <ExpenseList />
        <ExpenseListFilters />
    </div>
)

export default Dashboard