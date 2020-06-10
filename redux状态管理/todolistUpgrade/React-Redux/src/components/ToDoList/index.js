import React, { Component } from "react";
import "./index.css";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
// import store from "../../store";
// 6. 在 TodoList 中，我们就不需要使用 import store from store 以及定义 constructor 获取 store 了，而是通过 react-redux 的 connect 来获取
import { connect } from "react-redux";

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = store.getState();
  // }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder="todo" className="todo-input" onChange={this.props.handleInputChange} value={ this.props.inputValue }/>
          <Button type="primary" onClick={ this.props.handleClick } className="todo-submit">
            提交
          </Button>
        </div>
        <div className="todo-list">
          <List
            size="large"
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item>
                {index + 1} - {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

// 8. 定义 mapStateToProps 方法，把 store 里面的数据，映射成组件里面的 props，其中参数 state 就是 store 里面的数据
const mapStateToProps = (state) => {
  return {
    // 9. 定义 inputValue
    inputValue: state.inputValue,
    // 11. 定义 list
    list: state.list,
  };
};


const mapDispatchToProps =(dispatch) => {
  return {
    handleInputChange(e){
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick(){
      const action = {
        type:'add_value'
      }
      dispatch(action)
    }
  }
}

// export default TodoList;


// 7. 导出 connect 方法，让 TodoList 和 store 做连接，需要对应两个规则，即：mapStateToProps 和
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
