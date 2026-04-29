import { useState } from "react";

let Message=()=>{
    let [msg,setMsg] = useState("Hello")
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
     let gaHandler = ()=>{
        setMsg("Good Afternoon")
    }
     let geHandler = ()=>{
        setMsg("Good Evening")
    }
     let gnHandler = ()=>{
        setMsg("Good Night")
    }

    return <div>
                <h2>Message Component</h2>
                <h3>Value:{msg}</h3>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gaHandler}>GA</button>
                <button onClick={geHandler}>GE</button>
                <button onClick={gnHandler}>GN</button>
            </div>
}
export default Message;