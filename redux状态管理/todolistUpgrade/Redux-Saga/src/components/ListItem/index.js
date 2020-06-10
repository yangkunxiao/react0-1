import React ,{ Component } from 'react'
import { Button } from 'antd'

export default class ListItem extends Component {
    constructor(props){
        super(props);
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    handleDeleteItem(){
        this.props.handleDelete(this.props.index)
    }
    render(){
        return (
            <li>
                { this.props.item }------<Button onClick={ this.handleDeleteItem }>删除</Button>
            </li>
        )
    }
}