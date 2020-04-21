import React,{ Component } from 'react'
//废弃componentWillMount, componentWillReceiveProps, componentWillUpdate
//新增关键getSnapshotBeforeUpdate 、getDerivedStateFromProps
class Greeting extends Component {
    constructor(props){
        super();
        this.state = {
            count:0
        }
        console.log('constructor')
    }
    /**
     * 
     * getDerivedStateFromProps 会在调用 render 方法之前调用，
     * 并且在初始挂载及后续更新时都会被调用。
     * 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     */
    static getDerivedStateFromProps(props, state){
        console.log(props, state,'getDerivedStateFromProps');
        return null
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState,'shouldComponentUpdate');
        return true
    }
    /**
     * 在最近一次渲染输出（提交到 DOM 节点）之前调用。
     * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
     * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
     */
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(prevProps,prevState,"getSnapshotBeforeUpdate");
        return 1
    }
    /**
     * componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
     * 你也可以在 componentDidUpdate() 中直接调用 setState()，
     * 但请注意它必须被包裹在一个条件语句里，正如上述的例子那样进行处理，
     * 否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能
     */
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(prevProps,prevState,snapshot,'componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    componentDidCatch(error, info){

    }
    static getDerivedStateFromError(error){
        console.log(error,'getDerivedStateFromError');
        return {  hasError: true  }
    }
	render() {
        console.log('render')
		return <>
            <button onClick={ () => { this.setState({
                count:this.state.count + 1
            }) } }>点击+1</button>
        </>
	}
}
export default Greeting

/**
 * dom渲染前保存了快照 以便后续使用
 */
//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     // 保存滚动位置的快照
//     if (prevProps.list.length < this.props.list.length) {
//       const list = this.listRef.current;
//       return list.scrollHeight - list.scrollTop;
//     }
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // 如果有快照的值，说明已经增加的新的项.
//     // 调整滚动位置使得新的项不会挤走老的项
//     // 快照是从getSnapshotBeforeUpdate返回出来的
//     if (snapshot !== null) {
//       const list = this.listRef.current;
//       list.scrollTop = list.scrollHeight - snapshot;
//     }
//   }

//=======================================

//React 15.X 初始化和更新分别写在constructor和componentWillReceiveProps.
// class Parent extends Component{
//     render(){
//         return (
//         <Child age={18} />
//         )
//     }
// }
// class Child extends Components{
//     constructor(props){
//         super(props);
//         this.state = {
//             age: this.props.age //装载阶段初始化state
//         }
//     }
//     componentWillReceiveProps(nextProps){
//         if(nextProps.age !== this.state.age){
//             this.setState({
//                 age: nextProps.age
//             }) // 修改state
//         }
//     }
//     render(){...}
// }
//===========react16============
// constructor(props){
//     super(props);
//     this.state = {
//         age: ''
//     }
// }
// static getDerivedStateFromProps(nextProps,prevState){
//     if(nextProps.age !== prevState.age){
//         return {
//             age: nextProps.age
//         }
//     }
//     return null;
// }
