import moment from 'moment'
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters'

test('Should set text to filter action object with provided value', () => {
    expect(setTextFilter('bill')).toEqual({
        type: 'SET_TEXT',
        text: 'bill'
    })
})

test('Should set text to filter action object with default value', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})

test('Should generate set start date action object', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate set end date action object', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    })
})