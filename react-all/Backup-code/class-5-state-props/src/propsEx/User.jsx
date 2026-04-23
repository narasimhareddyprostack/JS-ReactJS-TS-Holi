import React from "react";
import Emp from "./Emp";
class User extends React.Component{
    uid=101;
    uname="Rahul";
    loc=['Wayanad','Bangalore']
    render(){
        return <div>
                    <h3>User Component</h3>
                    <hr/>
                    <Emp eid={this.uid} 
                         ename={this.uname} 
                         eloc={this.loc}/>
                         
                </div>
    }
}
export default User;