class Account{
    acc_Name="Rahul";
    acc_Bal;

    open_Account(){
        console.log("Account Opened")
    }
    deposit(){
        console.log("Amount Deposited")
    }
    withdrawl(){
        console.log("Insuffient Balace")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    get_St(){
        console.log("Pay 50 INR")
    }
    close_Account(){
        console.log("Balance -Ve... Deposit")
    }
}
let a1=new Account();
//how to access class memebers(propety/method)
//using object
a1.open_Account()
a1.deposit()
a1.withdrawl()
a1.get_Bal()
a1.get_St()
a1.close_Account()