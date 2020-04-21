import React,{ PureComponent } from 'react'
// PureComponent的自动添加shouldComponentUpate函数 只有props变化的时候 才会重新渲染
class  CounterComponent extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            count:1
        }
    }
    render(){
        return (
            <>
                <button onClick={ () => this.setState(state => ({count:state.count + 1})) }>Count:{ this.state.count }</button>
            </>
        )
    }
}

export default CounterComponent