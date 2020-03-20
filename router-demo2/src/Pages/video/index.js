import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom'
import '../../Css/Video/index.css'

import ReactPage from './react';
import VuePage from './vue';
import FlutterPage from './flutter';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.props.history.push('/video/react')
    }
    render() { 
        return ( 
            <div className="videoDiv">
                <ul className="clearfix">
                    <li>
                        <Link to='/video/react' >react教程</Link>
                    </li>
                    <li>
                        <Link to='/video/vue' >vue教程</Link>
                    </li>
                    <li>
                        <Link to='/video/flutter' >flutter教程</Link>
                    </li>
                </ul>
                <div className="videoMain">
                    <Route path="/video/react" component={ ReactPage }/>
                    <Route path="/video/vue" component={ VuePage }/>
                    <Route path="/video/flutter" component={ FlutterPage }/>
                </div>
            </div>
         );
    }
}
 
export default Index;