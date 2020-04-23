import React from 'react';
import './App.css';
import Menu from './components/menu';
import {fetchData} from './api/axios';
import md5 from 'md5';
const list = [
    {
        name: 'string',
	    url: 'string'
    }
]

const data = {
    url:'/employee/login',
    body:{
        "loginName": 1234567890,
        "loginPass": md5('111111'),
        "appId": "2",
        "loginType": "1"
    }
}

fetchData({
    url:'/employee/login',
    body:{
        "loginName": 1234567890,
        "loginPass": md5('111111'),
        "appId": "2",
        "loginType": "1"
    },
    callack:(res) => {
        console.log(res)
    }
})

function App() {
  return (
    <div className="App">
        <Menu  />
    </div>
  );
}

export default App;
