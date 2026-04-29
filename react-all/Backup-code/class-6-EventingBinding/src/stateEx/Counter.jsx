import { useState } from "react";

let Counter = ()=>{
    let [counter, setCounter] = useState(1)

    let incrHandler = ()=>{
        setCounter(counter+1)
    }
     let decrHandler = ()=>{
        setCounter(counter-1)
    }
    return <div>
                <h1>Counter Component</h1>
                <h2>Counter Value:{counter}</h2>
                <button onClick={incrHandler}>INCR</button>
                <button onClick={decrHandler} disabled={counter <= 0}>DECR</button>
            </div>
}
export default Counter;