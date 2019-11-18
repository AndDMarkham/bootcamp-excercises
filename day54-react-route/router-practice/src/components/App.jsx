import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Nav from './Nav.jsx'
import User from './Users/User.jsx'
import Home from './Home.jsx'

const App = props => {

    return (
        <>
            <Router history={history} >
                <Nav />
                <Switch>
                    <Route path="/user" component={User} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default App;