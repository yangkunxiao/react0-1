
import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show:true
        };
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick(){
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <Fragment>
                <button onClick={ this.handlerClick }>72变</button>
                <div className={ this.state.show ? 'show' : 'hide' }>大圣到了</div>
                <CSSTransition
                    in={ this.state.show }
                    timeout={2000}
                    classNames="boss-text"
                >
                     <div>Boss-孙悟空</div>
                </CSSTransition>
            </Fragment>
        );
    }
}

export default Boss;