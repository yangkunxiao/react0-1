import React, { Component } from 'react';
import store from './store/index.js'
import ToDoListUi from './ToDoListUi.js'


class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { ...store.getState(), loading: true };
        this.handlerChange = this.handlerChange.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
        // this.removeItem = this.removeItem.bind(this);

        //监测store的变化
        store.subscribe(this.storeChange)
    }
    //调用setState 更新数据
    storeChange() {
        this.setState(store.getState())
    }
    //删除
    removeItem(index) {
        store.dispatch({
            type: 'delItem',
            index: index
        })
    }
    //添加
    handlerClick() {
        store.dispatch({
            type: 'addItem',
            value: this.state.inputValue
        });
        this.setState({
            inputValue: ''
        })
    }
    //输入
    handlerChange(e) {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
        const action = {
            type: 'changeInput',
            value: e.target.value
        };
        store.dispatch(action)
    }

    componentDidMount() {
        store.dispatch({
            type:'getList'
        })
    }

    render() {
        return (
            <ToDoListUi
                list={this.state.list}
                inputValue={this.state.inputValue}
                removeItem={this.removeItem}
                handlerChange={this.handlerChange}
                handlerClick={this.handlerClick}
            />
        );
    }
}

export default ToDoList;