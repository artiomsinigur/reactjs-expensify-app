import moment from 'moment'

// Get visible expenses
// const getVisibleExpenses = (expenses, filters)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true

        // const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate 
        // const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase())

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

export default getVisibleExpenses