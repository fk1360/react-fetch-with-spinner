import React, {Component} from 'react';
import Spinner from 'reactjs-simple-spinner';

class Welcome extends Component{

    state = {
        message : 'Welcome! Click to view JSON loaded data',
        jss : null
    }
    login = () => {
        this.setState ({message :null});
        fetch('https://jsonplaceholder.typicode.com/todos/8').then(response => response.json())
        .then(json=>this.setState({jss:json.title}));
        

    }
    lld = () => {
        console.log(this.urll);
    }
    render(){
        return (
            <div>
                {(!this.state.message && !this.state.jss) && <div><br/><Spinner/></div>}
                {!this.state.jss && <h2>
                    {this.state.message}
                </h2>}
                {this.state.jss && 
                    <div>
                        <h2>The loaded data:</h2>
                        <h2 class="redstyle">
                            {this.state.jss}
                        </h2>
                    </div>
                }
                {!this.state.jss &&
                    <button onClick = {this.login}>
                        Button
                    </button>
                }
            </div>
        )
    }   
} 

export {Welcome};