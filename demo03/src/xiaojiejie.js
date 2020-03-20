import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Item from './itemList.js'
import Boss from './boss.js'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            list: []
        }
    }
    handlerInput() {
        this.setState({
            message: this.input.value,
        })
    }

    componentDidMount(){
        axios.post('https://www.easy-mock.com/mock/5db5359720dfdd7f0fe88112/react-demo/getUserInfo_copy_1572156898451')
        .then(res => {
            console.log(res,'axios 数据请求成功');
            this.setState({
                list:res.data.data.list
            })
        },err => {
            console.log(err,'axios 数据请求失败')
        })
    }

    addList() {
        if (this.state.message) {
            this.setState({
                list: [...this.state.list, this.state.message],
                message: ''
            }, () => {
                console.log(this.state.list.length)
            })
        }
    }

    removeItem(i) {
        let arr = JSON.parse(JSON.stringify(this.state.list));
        arr.splice(i, 1);
        this.setState({
            list: arr
        }, () => {
            console.log(this.state.list.length)
        })
    }

    render() {
        // let list = this.state.list.map((v,i) => {
        //     return <li onClick={() => this.removeItem(i)} key={i}>{v}</li>
        // })
        return (
            <Fragment>
                {/* 单行注释 */}
                {
                    //多行注释
                }
                <Boss/>
                <input ref={(input) => { this.input = input }} value={this.state.message} onChange={this.handlerInput.bind(this)} />
                <br />
                <button onClick={this.addList.bind(this)}>新增分类</button>
                <Item ref={(ul) => { this.ul = ul }} list={this.state.list} removeItem={(i) => this.removeItem(i)} />
            </Fragment>
        )
    }
}

export default Xiaojiejie;