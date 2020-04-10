import { addExpense, editExpenseById, removeExpenseById } from '../../actions/expenses'

test('Should remove expense action object', () => {
    expect(removeExpenseById('123abc')).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should edit expense action object with provided values', () => {
    expect(editExpenseById('123abc', { desc: 'desc test' })).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            desc: 'desc test',
        }
    })
})

test('Should add expense action object with provided values', () => {
    const expectedData = { 
        desc: 'desc test',
        note: '',
        amount: '100',
        createdAt: 1234
    }
    expect(addExpense(expectedData)).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expectedData,
            id: expect.any(String)
        }
    })
})

test('Should add expense action object with default values', () => {
    const expectedData = addExpense()
    expect(expectedData).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            desc: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})