class BankAccount{
    constructor(accountNumber,owner,balance){
        this.accountNumber=accountNumber
        this.owner=owner
        this.balance=balance
        this.deposit=function(){
             let  money=parseInt(prompt('enter amount to deposit for',this.owner))
             this.balance+=money

                
            
        }
    }
}
cust1=new BankAccount('ac111','cabeey',50000)
cust1.deposit()
console.log('your balance is $',cust1.balance)