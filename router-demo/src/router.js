import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

function AppRouter() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/list/123'>列表</Link>
                    </li>
                </ul>
                <div>
                    <Route path='/' exact component={Index}></Route>
                    <Route path='/list/:id' exact component={List}></Route>
                    <Route path='/home' exact component={Home}></Route>
                </div>
            </div>
        </Router>
    )
}

export default AppRouter;