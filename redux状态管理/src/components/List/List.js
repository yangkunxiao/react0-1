import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import { Button, Input } from 'antd';
import './list.css';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      list: [],
    };
    this.inpChange = this.inpChange.bind(this);
    this.renderItems = this.renderItems.bind(this);
    this.addList = this.addList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  renderItems() {
    return this.state.list.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          index={index}
          handleDelete={this.handleDelete}
        />
      );
    });
  }

  handleDelete(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState(() => ({
      list: list,
    }));
  }

  addList() {
    if (this.state.inputText) {
      this.setState({
        list: [...this.state.list, this.state.inputText],
        inputText: '',
      });
    }
  }

  inpChange(e) {
    e.persist();
    this.setState({
      inputText: e.target.value,
    });
  }

  render() {
    return (
      <>
        <Input
          value={this.state.inputText}
          placeholder="Basic usage"
          onChange={this.inpChange}
          onPressEnter={this.addList}
        />
        <Button type="primary" onClick={this.addList}>
          添加
        </Button>
        <hr />
        <ul>{this.renderItems()}</ul>
      </>
    );
  }
}
