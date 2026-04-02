let goToMovie=(success,failure)=>{
    let acc_Bal=1000;
    if (acc_Bal>=500) {
        success("Go To Movie without POPCORN")
    } else {
        failure("GO To PG")
    }
}
new Promise()
goToMovie((resp)=>{console.log(resp)},(err)=>{console.log(err)})