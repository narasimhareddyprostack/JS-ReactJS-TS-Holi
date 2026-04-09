class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
    deposit(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
let a1=new Account(101,'Rahul',5000);
let a2=new Account(102,'Sonia',15000);
let a3=new Account(103,'Priya',25000);
console.log(a1)
console.log(a2)
console.log(a3)

a1.deposit(50000)
a2.deposit(15000)
console.log("After Depositing")
console.log(a1)
console.log(a2)
console.log(a3)
a1.withdrawl(50)
a2.withdrawl(5000)
a3.withdrawl(20000)
console.log("After withdrawl")
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a1.get_Bal())
console.log(a2.get_Bal())
console.log(a3.get_Bal())