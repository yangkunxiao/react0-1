import React, { Component } from 'react';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 };
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(){
        this.setState({
            count:++this.state.count
        })
    }

    componentWillUn

    render() { 
        return ( 
            <div>
                <p>{ this.state.count }</p>
                <button onClick={ this.handlerClick }>点击</button>
            </div>
         );
    }
}
 
export default Example;