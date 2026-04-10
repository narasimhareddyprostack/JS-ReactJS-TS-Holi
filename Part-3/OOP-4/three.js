class Account{
    constructor(name,email,addr){
        this.acc_Name=name;
        this.acc_Email=email;
        this.acc_Addr=addr;
    }
    get_Bal(){}
}
class SA extends Account{
    min_Bal=500;
    constructor(id,name,email,amount,addr){
        super(name,email,addr);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}

class CA extends Account{
     min_Bal=5000;
    constructor(id,name,email,amount,addr){
        super(name,email,addr);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}

let sa1=new SA(101,'Rahul','rg@gmail.com',10000,'Bangalore-Addr')
let ca1=new CA(102,'Sonia','sg@gmail.com',10000,'Noida-Addr')
console.log(sa1)
console.log(ca1)
console.log(sa1.get_Bal())
console.log(ca1.get_Bal())