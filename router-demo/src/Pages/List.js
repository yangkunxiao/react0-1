import React,{ Fragment,Component } from 'react'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props,this.props.match.params.id)
    }
    render() { 
        return ( 
            <h1>list-page</h1>
         );
    }
}
 
export default List;