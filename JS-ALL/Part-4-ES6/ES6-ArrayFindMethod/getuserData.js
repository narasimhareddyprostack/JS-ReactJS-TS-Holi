async function getUserData(name){
    let user_Resp=await fetch('https://dummyjson.com/users')
    let user_Data=await user_Resp.json();
    let users=user_Data.users;
    let user = users.find(user=>user.firstName===name)

    return user;
}
getUserData("Lily").then((user)=>{console.log(user)})