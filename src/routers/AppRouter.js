import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Edit from '../components/Edit'
import Help from '../components/Help'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'

export default function AppRouter () {
    return ( 
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route path="/help" component={Help} />
                    <Route component={NotFoundPage} />
                    
                    {/* <Route path="/help">
                        <Help />
                    </Route>
                    <Route path="/edit">
                        <Edit />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route exact path="/">
                        <Dashboard />
                    </Route>
                    <Route>
                        <NotFoundPage />
                    </Route> */}
                </Switch>
            </div>
        </BrowserRouter>
    )
}