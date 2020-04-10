import React from 'react'
import { Link } from 'react-router-dom'

export default function ExpenseListItem({ dispatch, id, desc, amount, createdAt }) {
    return (
        <tr>
            <th>
                <Link to={`/edit/${id}`}>
                    {desc}
                </Link>
            </th>
            <td>{amount}</td>
            <td>{createdAt}</td>
            {/* <td><button type="button" onClick={() => {
                dispatch(removeExpenseById(id))
            }}>Remove</button></td> */}
        </tr>
    )
}

// We don't need the state so we don't use mapStateToProps
// Export the component to have access to dispatch() props
// export default connect()(ExpenseListItem)