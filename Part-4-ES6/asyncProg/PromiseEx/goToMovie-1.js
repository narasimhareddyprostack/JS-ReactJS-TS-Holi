let goToMovie=(success,failure)=>{
    let acc_Bal=100;
    if (acc_Bal>=500) {
        success("Go To Movie without POPCORN")
    } else {
        failure("GO To PG")
    }
}

goToMovie(()=>{},()=>{})