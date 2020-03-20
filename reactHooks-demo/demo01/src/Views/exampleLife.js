import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
// class ExampleLife extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count:0
//         };
//         this.setCount = this.setCount.bind(this);
//     }

//     setCount(){
//         this.setState({
//             count:++this.state.count
//         })
//     }

//     componentDidMount(){
//         console.log(`你已经点击了${this.state.count}按钮`)
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log(nextProps,nextState);
//         return true
//     }

//     componentWillUpdate(nextProps,nextState){
//         console.log(nextProps,nextState);
//     }

//     componentDidUpdate(preProps,preState){
//         console.log(`你已经点击了${this.state.count}按钮`)
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.count}</p>
//                 <button onClick={ this.setCount }>点击</button>
//             </div>
//         );
//     }
// }

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟你来了！Index页面');
        return () => {
            console.log('useEffect=>老弟你走了！Index页面')
        }
    },[]);
    return <h2>hello index</h2>
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟你来了！List页面');
        return () => {
            console.log('useEffect=>老弟你走了！List页面')
        }
    },[])
    return <h2>hello list</h2>
}

function ExampleLife() {
    const [count, setCount] = useState(0)
    const [age, setAge] = useState(19)

    useEffect(() => {
        console.log(`你已经点击了${count}次按钮`)
    }, [count])
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => { setCount(count + 1) }}>点击</button>
            <Router>
                <ul>
                    <li>
                        <Link to='/'>Index</Link>
                    </li>
                    <li>
                        <Link to='/list'>List</Link>
                    </li>
                </ul>
                <Route exact path='/' component={Index} />
                <Route path='/list' component={List} />
            </Router>
        </div>
    )
}

export default ExampleLife;