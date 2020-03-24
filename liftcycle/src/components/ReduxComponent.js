import React,{ Component } from 'react';
import { Provider } from 'react-redux'
import { store } from '../store'
import RedexCounter from './ReduxCounter';
// import { fetchData } from '../store/actions/dataActoins';

class ReduxComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){

    }

    render(){
        return (
            <Provider store={store}>
                <RedexCounter />
            </Provider>
        )
    }
}

export default ReduxComponent