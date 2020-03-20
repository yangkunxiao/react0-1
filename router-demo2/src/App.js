import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './Css/reset.css'
import './Css/index.css'
import Index from './Pages/index'
import Video from './Pages/video'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routerConfig : [
                { path:'/',title:'首页',exact:true,component:Index },
                { path:'/video',title:'视频教程',exact:false,component:Video },
                { path:'/workspace',title:'职场论坛',exact:false }
            ]
        }
    }
    render() {
        return (
            <Router>
                <div className="mainDiv">
                    {/* 左侧导航栏 */}
                    <div className="leftNav">
                        <h3>一级导航</h3>
                        <ul className="">
                            {/* <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li>
                                <Link to="/video">视频教程</Link>
                            </li>
                            <li>
                                <Link to="/workspace">职场论坛</Link>
                            </li> */}
                            {
                                this.state.routerConfig.map((v,i) => {
                                    return (
                                        <li key={v.path}>
                                            <Link to={v.path}>{ v.title }</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* 右侧 */}
                    <div className="rightMain">
                        {/* <Route path="/" exact component={Index}/>
                        <Route path="/video" component={Video}/> */}
                        {
                            this.state.routerConfig.map((v,i) => {
                                return (
                                    <Route path={ v.path } key={ v.path } component={ v.component } exact={ v.exact }></Route>
                                )
                            })
                        }
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;