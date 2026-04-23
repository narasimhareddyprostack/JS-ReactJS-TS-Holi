class Account{
    acc_Bal=0;
    deposit_Amount(amount){
       this.acc_Bal=this.acc_Bal+amount; 
    }
}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.deposit_Amount(500)
a1.deposit_Amount(1000)
console.log(a1)
a2.deposit_Amount(50)
a2.deposit_Amount(1500)
a2.deposit_Amount(2500)

console.log(a2)