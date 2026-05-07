import { useState } from "react";
let Login = ()=>{
    let [user,setUser]=useState({"email":"","pwd":""})
    let emailHandler = (event)=>{
        setUser({...user,"email":event.target.value})
    }
    let pwdHandler = (event)=>{
        setUser({...user,"pwd":event.target.value})
    }
    let submitHandler =(event)=>{
        
        alert(JSON.stringify(user))
    }
    return <div>
                <h3>Login Component</h3>
                <pre>{JSON.stringify(user)}</pre>
                <form onSubmit={submitHandler}>
                    Email Id: <input type="text" onChange={emailHandler}/> <br />
                    Password: <input type="text" onChange={pwdHandler}/> <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
}
export default Login;