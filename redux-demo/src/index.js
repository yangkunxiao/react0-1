import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <TodoList />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
