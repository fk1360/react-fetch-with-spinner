import React, {Component} from 'react';
import Spinner from 'reactjs-simple-spinner';

class Welcome extends Component{

    state = {
        showMessage : true,
        jsData : null,
        respOk: true,
    }
    load = () => {
        this.setState({respOk: true});
        this.setState({showMessage :false});
        fetch('https://jsonplaceholder.typicode.com/todos/8').then(res => res.json())
        .then(json=>this.setState({jsData:json.title}))
        .catch(error => {if (error) {this.setState({respOk: false})}});
    }
    render(){
        return (
            <div>
                {(!this.state.showMessage && !this.state.jsData) && <div><br/><Spinner/><br/></div>}
                {(this.state.showMessage && !this.state.jsData) && <h2>
                    Welcome! Click to view JSON loaded data
                </h2>}
                {this.state.jsData && 
                    <div>
                        <h2>The loaded data:</h2>
                        <h2 className="redstyle">
                            {this.state.jsData}
                        </h2>
                    </div>
                }
                {!this.state.respOk && !this.state.jsData && <h2>An error occured! Please try again</h2>}
                {!this.state.jsData &&
                    <button onClick = {this.load}>
                        Load Data
                    </button>
                }
            </div>
        ) 
    }   
}  

export {Welcome}; 