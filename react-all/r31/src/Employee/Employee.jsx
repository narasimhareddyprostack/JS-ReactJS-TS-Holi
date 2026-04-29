import { useEffect, useState } from "react";
import Axios from 'axios'
let Employee=()=>{
    let [users,setUsers]  = useState([]);
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{setUsers(resp.data)})
        .catch((err)=>{console.log(err)})
    },[])
    return <div className="container mt-5">
                <h3 className="mb-4">Employee Component</h3>
                <pre>{JSON.stringify(users)}</pre>
                {
                    users.length>0 ? 
                    <>
                    <table className="table table-striped table-hover table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee Name</th>
                                    <th>City</th>
                                </tr>
                                
                            </thead>
                            <tbody>
                            {
                                users.map((user,index)=>{
                                    return <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.username}</td>
                                                <td>{user.address.city}</td>
                                            </tr>
                                })
                            }
                            </tbody>
                    </table>
                    </> : <>No Data</>
                }
            </div>
}
export default Employee;