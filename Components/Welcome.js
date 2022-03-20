import React, {Component} from 'react';
import Spinner from 'reactjs-simple-spinner';

class Welcome extends Component{

    state = {
        message : 'Welcome! Click to view JSON loaded data',
        jsdata : null
    }
    load = () => {
        this.setState ({message :null});
        fetch('https://jsonplaceholder.typicode.com/todos/8').then(response => response.json())
        .then(json=>this.setState({jsdata:json.title}));
    }
    render(){
        return (
            <div>
                {(!this.state.message && !this.state.jsdata) && <div><br/><Spinner/></div>}
                {!this.state.jsdata && <h2>
                    {this.state.message}
                </h2>}
                {this.state.jsdata && 
                    <div>
                        <h2>The loaded data:</h2>
                        <h2 class="redstyle">
                            {this.state.jsdata}
                        </h2>
                    </div>
                }
                {!this.state.jsdata &&
                    <button onClick = {this.load}>
                        Button
                    </button>
                }
            </div>
        )
    }   
} 

export {Welcome}; 