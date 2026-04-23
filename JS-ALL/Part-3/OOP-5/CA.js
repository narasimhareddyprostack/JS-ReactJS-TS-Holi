import Account from './Account.js'
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
let ca1=new CA(102,'Sonia','sg@gmail.com',10000,'Noida-Addr');
console.log(ca1)
console.log(ca1.get_Bal())