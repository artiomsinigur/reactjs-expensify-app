import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('Should return amount on single expense', () => {
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(1900)
})

test('Should return total amount of all expenses', () => {
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(286900)
})