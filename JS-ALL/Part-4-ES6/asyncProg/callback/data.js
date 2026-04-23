let employees=[
    {eid:101,ename:"Rahul",esal:45000.45},
    {eid:102,ename:"Sonia",esal:55000.45}
]
function createEmployee(emp,callback){
    setTimeout(()=>{
        employees.push(emp);
        callback()
    },4000);
}
function getEmployees(){
    setTimeout(()=>{
        let rows="";
        for(let emp of employees){
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                     </tr>`
        }
        document.getElementById('tdata').innerHTML=rows;
        //document.getElementById('tdata').innerHTML="GM"
    },2000);
}
createEmployee({eid:103,ename:"Priya",esal:45000.45},getEmployees)
//getEmployees()