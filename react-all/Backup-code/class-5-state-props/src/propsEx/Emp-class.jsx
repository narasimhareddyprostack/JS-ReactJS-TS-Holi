import React from "react";
class Emp extends React.Component{

    render(){
        return <div>
                    <h3>Emp Component</h3>
                    <pre>{JSON.stringify(this.props)}</pre>
                </div>
    }
}
export default Emp;