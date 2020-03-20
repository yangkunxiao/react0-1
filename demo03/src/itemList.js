import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './style.css'
import { CSSTransition,TransitionGroup } from 'react-transition-group';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <ul>
                <TransitionGroup>
                    {
                        this.props.list.map((v, i) => {
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='boss-text'
                                    unmountOnExit
                                    appear={true}
                                    key={i + v}
                                >
                                    <li onClick={() => this.props.removeItem(i)} key={i + v}>{v}</li>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </ul>
        );
    }
}

Item.propTypes = {
    list: PropTypes.array.isRequired,
    removeItem: PropTypes.func
}

Item.defaultProps = {
    list: []
}

export default Item;