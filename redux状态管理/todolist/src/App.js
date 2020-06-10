import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';

// function App() {
//   return ( 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// import styles from './assets/css/Button.module.css';
// import './assets/css/another-stylesheet.css';
// import MyComponent from './components/LoadableotherComponent'

// class App extends React.Component {
//   async componentDidMount() {
//     // import('./Hello.js').then(({ modulesA }) => {
//     //     console.log(modulesA,'----------componentDidMount')
//     // })
//     const {modulesA} = await import('./Hello');
//     console.log(modulesA,'----------componentDidMount')
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <div className="wrap">box</div>
//           <button className={styles.error}>click</button>
//           <MyComponent />
//         </header>
//       </div>
//     );
//   }
// }

// import List from './components/List/List'

// class App extends Component {
// 	render(){
// 		return (
// 			<List />
// 		)
// 	}
// }

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import NotFound from './page/404';
import TimeLine from './page/TimeLine';
import MenuSide from './components/Menu';

function optionalFunc(message, callback) {
  // const allowTransition = window.confirm(message)
  // callback(allowTransition)
}
//BrowserRouter - basename 为里面的子目录提供基础路径名
//getUserConfirmation 用于确认导航的功能
//orceRefresh 如果为 true，则路由器将在页面导航中使用整页刷新
//keyLength 设置它里面路由的 location.key 的长度。默认为 6。 key 的作用：点击同一个链接时，每次该路由下的 location.key都会改变，可以通过 key 的变化来刷新页面。

const supportHitory = 'pushState' in window.history;

const FadIn = () => {
  return <div>fadin</div>;
};

const FadOut = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

function App() {
  return (
    <Router
      basename="/"
      getUserConfirmation={optionalFunc('Are you sure', () => {
        alert(0);
      })}
      forceRefresh={!supportHitory}
    >
      <div id="main">
        <MenuSide />
        <div className="right-info">
          <Header />
          <ScrollToTop>
            <Switch>
              <Redirect from="/" to="/ab" exact />
              <Route path="/timeline" component={TimeLine} />
              <Route path="/about" render={() => <div>about</div>} />
              <Route path="/fadin" render={() => <FadIn />} />
              <FadOut path="/fadout" component={FadIn} />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}

export default App;
