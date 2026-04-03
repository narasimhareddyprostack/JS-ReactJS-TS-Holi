let employees=[
    {eid:101,ename:"Rahul",esal:45000.45},
    {eid:102,ename:"Sonia",esal:55000.45}
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;
            flag?resolve("Data Inserted"):reject("Failed")
            employees.push(emp);
        },4000)
    })
}
let getEmployees=()=>{
     setTimeout(()=>{
        let rows="";
        employees.forEach((emp)=>{
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                        </tr>`
        })
        document.getElementById('tdata').innerHTML=rows;
     },2000)
}
createEmployee({eid:103,ename:"Priya",esal:65000})
.then((resp)=>{
    console.log(resp)
})
.catch((err)=>{
    console.log(err)
})
getEmployees();