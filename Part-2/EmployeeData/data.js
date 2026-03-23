let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:45000},
    {eid:103,ename:"Priya",esal:55000},
    {eid:104,ename:"Modi",esal:45000},
    {eid:105,ename:"Amith",esal:65000},
    {eid:106,ename:"DK",esal:45000},
]
function displayData(){
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                   <td>${emp.eid}</td>
                   <td>${emp.ename}</td>
                   <td>4{emp.esal}</td>
                   </tr>`
    }
    document.querySelector(".xyz").innerHTML=rows;
    //document.querySelector(".xyz").innerHTML="GE"
    
}