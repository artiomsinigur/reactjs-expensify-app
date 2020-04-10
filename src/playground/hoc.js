import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is: {props.info}</p>
    </div>
)

// Define an ordinary function then, return an Higher Order Component (HOC)
const withAdminWarning = (WrappedComponent) => {
    // Higher Order Component
    return (props) => (
        <div>
            { props.isAdmin && <p>This are your panel</p> }
            <WrappedComponent { ...props } />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? (
                <WrappedComponent info={props.info} />
            ) : (
                <p>Please login</p> 
            )}
        </div>
    )
}


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info={'Here are your details'}/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={true} info={'Here are your details'}/>, document.getElementById('app'))