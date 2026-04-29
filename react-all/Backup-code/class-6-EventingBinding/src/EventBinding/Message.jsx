import React, { Component } from "react";

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: "Hello"
        };
    }

    updateHandler = (value) => {
        console.log(value);
        this.setState({ msg: value });
    }

    render(){
        return (
            <div>
                <h2>Message Component</h2>
                <h3>Value: {this.state.msg}</h3>

                <button onClick={this.updateHandler.bind(this,"GM")}>GM</button>
                <button onClick={this.updateHandler.bind(this,"GA")}>GA</button>
                <button onClick={this.updateHandler.bind(this,"GE")}>GE</button>
                <button onClick={this.updateHandler.bind(this,"GN")}>GN</button>
            </div>
        );
    }
}

export default Message;