import React,{ Component } from 'react'
import { Redirect } from 'react-router-dom';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.props.history.push('/home')
    }



    render() { 
        return ( 
            <h1>jspang</h1>
         );
    }
}
 
export default Index;


// function Index(){
//     return (
//         <div>
//             {/* <Redirect to='/home'/> */}
//             <h1>jspang</h1>
//         </div>
//     )
// }

// export default Index;