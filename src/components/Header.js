import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify App</h1>
        <ul>
            <li><NavLink exact to="/" activeClassName="is-active">Home</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create</NavLink></li>
            <li><NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
        </ul>
    </header>
)

export default Header