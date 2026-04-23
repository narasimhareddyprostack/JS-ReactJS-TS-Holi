let users=[];
async function getData(){
    let resp=await fetch('https://jsonplaceholder.typicode.com/users')
    users=await resp.json();
    displayData()
}
//write a script to display user data in HTML Table
function displayData(){
    let rows="";
    for(let  user of users){
        rows=rows+`<tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.address.city}</td>
                        <td>${user.company.name}</td>
                  </tr>`
    }    
    document.querySelector('.abc').innerHTML=rows;
}
getData()