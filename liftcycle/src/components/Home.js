import React, { Component } from 'react'



class Home extends Component {
    //生命周期
    //挂载阶段
	constructor(props) {
		super(props)
		this.state = {
			name: 'kaka',
			age: 0,
			title: props.title
        }
        // this.handlerClick = this.handlerClick.bind(this)
    }
    /**
     * 会在调用 render 方法之前调用
     * 并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state.
     * 如果返回 null 则不更新任何内容。
     * 此方法无权访问组件实例
     */
    // static getDerivedStateFromProps(prosp,state){
        
    // }
    // render(){

    // }
    componentDidMount(){

    }

    //更新阶段
    // getDerivedStateFromProps(props,state){

    // }

    //首次渲染或使用 forceUpdate() 时不会调用该方法。
    shouldComponentUpdate(nextProps,nextState){
        return true
    }
    // render(){

    // }
    /**
     * 
     * 在最近一次渲染输出（提交到 DOM 节点）之前调用。
     * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
     * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
     */
    // getSnapshotBeforeUpdate(prevProps,prevState){
    // }
    componentDidUpdate(prevProps,preState,snapshot){

    }

    //卸载
    componentWillUnmount(){

    }

    //错误处理 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
    //会在渲染阶段调用，因此不允许出现副作用
    componentDidCatch(error,info){

    }
    static getDerivedStateFromError(err){
        // return { hasError: true };
    }


    /**
     * 无意义的使用：componentWillMount componentWillUnMount 前者会被自动合并紧state 后者即将卸载不会做任何处理
     * 有条件的使用：componentDidMount 如果无条件的使用，会造成循环渲染。
     * 禁止使用：componentWillUpdate shouldComponeUpdate 会造成死循环 在一个更新阶段尚未render之前，使用setState将会造成递归死循环
     * 任意使用：componentDidMount componentWillReceisveProps
     */

    handlerClick(e,params){
        // this.setState(state => ({
        //     name:'m'
        // }))
        console.log(params,e)
    }
	render() {
        console.log('render')
        const t = <script>alert(0)</script>;
		return (
			<div>
                <h1 >
                    {this.state.name}---{t}---{this.state.title}
                </h1>
                <button onClick={(e) => this.handlerClick(e,'234')}>按钮1</button>
            </div>
		)
	}
}

Home.defaultProps = {
    
}

export default Home
