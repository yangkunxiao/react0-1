import React, { Component } from "react";
import { Button, Input, List } from "antd";
import ListItem from "../ListItem";
import "./index.css";
import store from "../../store";
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../../store/actionsTypes'; 
import { getInputChangeAction, getAddItemAction,initState,getInitList } from '../../store/actionsCreate'; // 3. 引入 actionCreators
import axios from 'axios'

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   inputValue: "",
    //   todoList: [],
    // };
    this.state = store.getState();
    this.addValue = this.addValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    // 2. 绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  // 3. 在 handleStoreChange 中处理数据
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleChange(e) {
    let value = e.target.value;
    // e.persist();
    // this.setState(() => ({
    //   inputValue: e.target.value,
    // }));


    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value,
    // };
    // store.dispatch(action);

    const aciton = getInputChangeAction(value);
    store.dispatch(aciton)
  }
  addValue() {
    let value = this.state.inputValue;
    const action = getAddItemAction(value)
    // let list = [...this.state.todoList];
    // this.setState(() => ({
    //   todoList: [...list, value],
    //   inputValue: "",
    // }));

    // store.dispatch({
    //     type:ADD_TODO_ITEM,
    //     value
    // })

    store.dispatch(action)

  }
  handleDelete(index) {
    console.log(index);
    let list = [...this.state.todoList];
    list.splice(index, 1);
    this.setState(() => ({
      todoList: list,
    }));
  }
  renderListItems() {
    return this.state.todoList.map((item, index) => {
      return (
        <ListItem
          key={index}
          index={index}
          item={item}
          handleDelete={this.handleDelete}
        />
      );
    });
  }
  componentDidMount() {
    console.log(this.props);
    const action = getInitList();
    store.dispatch(action)
    // axios.get('https://www.fastmock.site/mock/90803af96e6379807adf1b0b4f078c6b/demo1/api/todolist').then(res => {
    //     console.log(res);
    //     const action = initState(res.data.toDoList)
    //     store.dispatch(action)
    // })
  }
  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="inp">
          {/* 1. Input 绑定 handleInputChange 事件 */}
          <Input
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.handleChange}
            onPressEnter={this.addValue}
          />
          <Button
            type="primary"
            className="todo-submit"
            onClick={this.addValue}
          >
            添加
          </Button>
        </div>
        <div className="todo-list">
          {/* {this.renderListItems()} */}
          <List
            size="large"
            bordered
            dataSource={this.state.todoList}
            renderItem={(item, index) => (
              <List.Item>
                {item}------
                <Button onClick={() => this.handleDelete(index)}>删除</Button>
              </List.Item>
            )}
          ></List>
        </div>
      </div>
    );
  }
}
