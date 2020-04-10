// Reducers
// ============================
// const state = [{
//     id: '123abc',
//     desc: 'January rent',
//     note: 'This was the place where we spend more',
//     amount: 105000,
//     createAt: 0
// }]

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // return state.concat(action.expense)
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(item => item.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return { ...expense, ...action.updates }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}

export default expensesReducer