class BankAccount{
    constructor(accountNumber,owner,balance){
        this.accountNumber=accountNumber
        this.owner=owner
        this.balance=balance
        this.withdraw=function(){
           let  money=parseInt(prompt('enter amount to wirhdraw for',this.owner))
            
            if(this.balance>money){
                this.balance-=money

                
            }else{
                console.log('insuficient balance')
            }
        }
    }
}
cust1=new BankAccount('ac111','cabeey',6700)
cust1.withdraw()
console.log('your balance is $',cust1.balance)