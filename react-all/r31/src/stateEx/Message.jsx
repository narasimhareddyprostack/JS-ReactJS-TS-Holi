import React, { useState } from "react";

const Message = () => {
    console.log("Functional Component Render")

    const [state, setState] = useState("Hello");
    const gmHandler = () => {
        setState("Good Morning");
    };
    const gnHandler = () => {
        setState("Good Night");
    };
    return (
        <div>
            <h3>Message Component</h3>
            <h3>Value: {state}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>
    );
};

export default Message;