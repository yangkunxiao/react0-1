import React from 'react';
import './App.css';
import { Button } from 'antd'
import store from './store';
import { addCount,minusCount,addCountChange } from './store/actionsCreate'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = store.getState()
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleMinuxClick = this.handleMinuxClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this)

    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }

  handleAddClick(){
    // let count = this.state.count;

    // this.setState(() => ({
    //   count : ++count
    // }))
    const action = addCount();
    store.dispatch(action)

  }
  handleMinuxClick(){
    let count = this.state.count;
    this.setState(() => ({
      count : --count
    }))
  }
  render (){
    return (
      <div className="App" style={{ margin:'100px' }}>
          <Button onClick={ () => this.handleMinuxClick() }>-</Button>
          <span style={{ margin:'0 100px' }}>{ this.state.count }</span>
          <Button onClick={ () => this.handleAddClick() }>+</Button>
      </div>
    );
  }
}

export default App;
