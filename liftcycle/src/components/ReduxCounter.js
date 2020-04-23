import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add,minus } from '../store/actions/counter'
import { fetchData } from '../store/actions/dataActoins';


//用于建立store中的state和组件的映射
function mapStateToProps(state) {
	return {
		count: state.count
	}
}

const mapDispatchToProps = {
    add,
    minus,
    fetchData
}

class ReduxCounter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        this.props.fetchData().then(res => {
            console.log(res,'json')
        })
        this.setState({
            count:this.state.count + 1
        })
        this.setState(() => {
            return {count:this.state.count + 1}
        })
        this.setState({
            count:this.state.count + 1
        })
    }
	add() {
        this.props.add()
        // this.props.dispatch(add())
		// this.setState({
		//     count:this.state.count + 1
		// })
	}
	minus() {
        this.props.minus();
        // this.props.dispatch(minus())
		// this.setState({
		//     count:this.state.count - 1
		// })
	}
	render() {
		return (
			<>
                <p>我是redux component组件</p>
				<p>{this.props.count}</p>
				<button onClick={() => this.add()}>加</button>
				<button onClick={() => this.minus()}>减</button>
			</>
		)
	}
}
//传入mapStateToProps之后，组件会订阅store中状态的变化
//mapDispatchToProps作为第二个参数，
export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter)
