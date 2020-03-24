import React, { useState } from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Home from './components/Home'
import ReduxComponent from './components/ReduxComponent'
import Input from './components/Input'
import HookComponent from './components/HookComponent'
import Context from './components/Context'
import SubComponent from './components/SubComponent'
import UseReducers from './components/UseReducers'

function App() {
	return (
		<Router>
            <ul>
                <li>
                    <Link to='/' >首页</Link>
                </li>
                <li>
                    <Link to='/input'  >评价</Link>
                </li>
                <li>
                    <Link to='/hook/2' >hook</Link>
                </li>
                <li>
                    <Link to={{ pathname:'/context' ,search:'name=kaka', hash: "#the-hash",
    state: { fromDashboard: true } }} >context</Link>
                </li>
            </ul>
            <Route path='/' exact component={ ReduxComponent } />
            <Route path='/input' component={ Input } />
            <Route path='/hook/:id?' component={ HookComponent } />
            <Route path='/context' component={ Context } />
        </Router>
	)
}

export default App
