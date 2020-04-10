import moment from 'moment'

export default [{
    id: '1',
    desc: 'Gym',
    note: '',
    amount: 1900,
    createdAt: moment(0)
}, {
    id: '2',
    desc: 'Rent car',
    note: '',
    amount: 35000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    desc: 'Buy TV',
    note: '',
    amount: 250000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]