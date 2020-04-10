import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('Should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '10',
            desc: 'January rent',
            note: 'This was the place where we spend more',
            amount: 105000,
            createAt: 0
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('Should remove item by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('Should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            desc: 'changed'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].desc).toBe(action.updates.desc)
})

test('Should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            desc: 'changed'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})