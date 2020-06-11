import React, { Component } from "react";
import Header from "./components/head";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header />
      </Provider>
    );
  }
}

export default App;
