import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from '../routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
// Inject CSS into the DOM
import './styles/style.scss'

const store = configureStore()
// store.dispatch(addExpense({ desc: 'Weater bill', amount: 595, createdAt: 1585976053643 }))
// store.dispatch(addExpense({ desc: 'Meal bill', amount: 1600, createdAt: 1586620800000 }))
// store.dispatch(addExpense({ desc: 'Gas bill', amount: 260, createdAt: 1587225600000 }))

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// 1. Redux Provider makes the Redux store available to the rest of app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));