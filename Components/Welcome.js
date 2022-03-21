import React, {Component} from 'react';
import Spinner from 'reactjs-simple-spinner';

class Welcome extends Component{

    state = {
        showmessage : true,
        jsdata : null
    }
    load = () => {
        this.setState ({showmessage :false});
        fetch('https://jsonplaceholder.typicode.com/todos/8').then(response => response.json())
        .then(json=>this.setState({jsdata:json.title}));
    }
    render(){
        return (
            <div>
                {(!this.state.showmessage && !this.state.jsdata) && <div><br/><Spinner/><br/></div>}
                {(this.state.showmessage && !this.state.jsdata) && <h2>
                    Welcome! Click to view JSON loaded data
                </h2>}
                {this.state.jsdata && 
                    <div>
                        <h2>The loaded data:</h2>
                        <h2 className="redstyle">
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