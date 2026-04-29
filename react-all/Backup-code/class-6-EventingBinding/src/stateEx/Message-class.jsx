import React from "react";

class Message extends React.Component{
    constructor(props){
        super(props);
        console.log("First Constructor")
        this.state={"msg":"Hello"}
    }
    gmHandler = ()=>{
        this.setState({"msg":"Good Morining"});
    }
    gnHandler = ()=>{
        this.setState({"msg":"Goood Night"});
    }
    render(){
        console.log("Second Render method")
        return <div>
                    <h3>Message Component</h3>
                    <h3>Value:{this.state.msg}</h3>
                    <button onClick={this.gmHandler}>GM</button>
                    <button onClick={this.gnHandler}>GN</button>
                </div>
    }
}
export default Message;