import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

export default function ExpenseListItem({ dispatch, id, desc, amount, createdAt }) {
    // const formatAmount = new Intl.NumberFormat('us-US', {style: 'currency', currency: 'USD'}).format(amount / 100)
    const numeralFormat = numeral(amount / 100).format('$0,0.00a')
    return (
        <tr>
            <th>
                <Link to={`/edit/${id}`}>
                    {desc}
                </Link>
            </th>
            <td>{numeralFormat}</td>
            <td>{moment(createdAt).format('MMM Do YYYY')}</td>
            {/* <td><button type="button" onClick={() => {
                dispatch(removeExpenseById(id))
            }}>Remove</button></td> */}
        </tr>
    )
}

// We don't need the state so we don't use mapStateToProps
// Export the component to have access to dispatch() props
// export default connect()(ExpenseListItem)