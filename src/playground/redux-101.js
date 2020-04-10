import { createStore } from 'redux'

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return { 
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({ type: 'RESET' })

const setCount = ({ count = 10 } = {}) => ({
    type: 'SET',
    count
})

// Or with ordinary function
// const setCount = (count) => ({
//     type: 'SET',
//     count: count ? count : 100
// })

// Reducers
// 1. Reducers are pure functions
    // Ex. 1 This is NOT pure function
    const b = 10
    const add = (a) => a + b

    // Ex. 2 This is pure function
    const add = (a, b) => a + b

// 2. Never change state or action

// State contains previous data
// Action set new data
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state
    }
}

const store = createStore(countReducer)

// Fetch store state
// console.log(store.getState())

// subscribe() function gets called every time the state change
// You can use subscribe() to update the UI in response to state changes.
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Actions
// Important part is that you should not mutate the state object, but return a new object if the state changes.
// store.dispatch({ 
//     type: 'INCREMENT',
//     incrementBy: 5
// })

// Call here to stop watching
// unsubscribe()

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount({ decrementBy: 5 }))
store.dispatch(decrementCount())
store.dispatch(setCount())
store.dispatch(setCount({ count: 100 }))