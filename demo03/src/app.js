import React,{ Component } from 'react';

class App extends Component {
    render(){
        return (
            <ul className="my-app">
                <li>
                    <div>Hello Yang</div>
                </li>
                <li>
                    <div>Hello Kun</div>
                </li>
                <li>
                    <div>Hello Xiao</div>
                </li>
            </ul>
        )

        // var child1 = React.createElement('li',null,"hello yang");
        // var child2 = React.createElement('li',null,"hello kun");
        // var root = React.createElement('ul',{ className:'my-app' },child1,child2);
        // return root
    }
}

export default App;