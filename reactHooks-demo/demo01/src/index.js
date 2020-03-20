import React ,{ Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Example from './Views/example'
import ExampleHooks from './Views/exampleHooks'
import ExampleMultple from './Views/exampleMultple'
import ExampleLife from './Views/exampleLife'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <ExampleLife />
                <ExampleMultple />
                <ExampleHooks />
                <Example />
            </Fragment>
         );
    }
}
 
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
