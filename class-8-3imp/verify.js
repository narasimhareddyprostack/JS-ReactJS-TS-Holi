let user={}
let emp={
    eid:101,
    ename:"Rahul",
    esal:450000
}
console.log(emp.eid)//101
console.log(emp.email)//undefined
console.log(emp.length)//undefined
console.log(Object.keys(emp))
console.log(Object.keys(emp).length)
console.log(Object.keys(emp).length>0)

if (Object.keys(user).length>0) {
    console.log("Not Empty Object")
} else {
    console.log("Empty Object")
}