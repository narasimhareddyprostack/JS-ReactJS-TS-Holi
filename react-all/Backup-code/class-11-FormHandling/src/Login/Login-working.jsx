import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","pwd":""})
    let updateHandler = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
  
    let submitHandler =(event)=>{
        
        alert(JSON.stringify(user))
    }
    return <div>
                <h3>Login Component</h3>
                <pre>{JSON.stringify(user)}</pre>
                <form onSubmit={submitHandler}>
                    Email Id: <input type="text" onChange={updateHandler} name="email" /> <br />
                    Password: <input type="text" onChange={updateHandler} name="pwd"/> <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;