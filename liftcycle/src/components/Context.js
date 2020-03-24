import React,{ Component } from 'react';
const ThemeContext = React.createContext('light');
function Context(props){
    console.log(props.history)
    let name = 'dark'
    return (
        <ThemeContext.Provider value={name}>
            <ToolBar />
        </ThemeContext.Provider>
    )
}

function ToolBar (){
    return (
        <ThemeButton />
    )
}

// function ThemeButton (){
//     const contextType = ThemeContext;
//     console.log(contextType.value,'contexttype')
//      return (
//          <ThemeContext.Consumer>
//              {
//                  (name) =>  <button>12---{ name } </button>
//              }
            
//         </ThemeContext.Consumer>
//      )
// }
class ThemeButton extends Component {
    static contextType = ThemeContext;
    render(){
        let value = this.context;
        return (
            <button>12---{ value }</button>
        )
    }
}

export default Context;