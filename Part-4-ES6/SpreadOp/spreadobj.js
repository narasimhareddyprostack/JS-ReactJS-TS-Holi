let user={
    eid:101,
    ename:"RG",
    email:"rg@gmail.com"
}
//creating new object
let emp={...user}
let details={
    email:"rg@ibm.com",
    esal:45000.45,
    loc:"Bangalore"
}
let emp_Details={...emp,...details}
console.log(emp_Details)