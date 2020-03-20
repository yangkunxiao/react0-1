import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
        // this.handlerChange = this.handlerChange.bind(this);
    }
    // handlerChange(e){
    //     console.log(e.target.value)
    // }
    render() {
        const { inputValue,list,handlerChange,handlerClick } = this.props;
        return (
            <Fragment>
                <div>
                    <input value={ inputValue } onChange={ handlerChange }/>
                    <button onClick={ handlerClick }>添加</button>
                </div>
                <ul>
                    {
                        list.map((v, i) => {
                            return (
                                <li key={i + v}>{ v }</li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        inputValue: state.inputValue,
        list:state.list
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerChange(e){
            console.log(e.target.value);
            const action = {
                type:'changeInput',
                value:e.target.value
            }
            dispatch(action)
        },
        handlerClick(){
            const action = {
                type:'addItem',
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);