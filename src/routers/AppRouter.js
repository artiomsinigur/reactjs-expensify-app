import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../src/components/Dashboard'
import Create from '../src/components/Create'
import Edit from '../src/components/Edit'
import Help from '../src/components/Help'
import NotFoundPage from '../src/components/NotFoundPage'
import Header from '../src/components/Header'

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