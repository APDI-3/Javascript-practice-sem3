class BankAccount{
    constructor(accountNumber,owner,balance){
        this.accountNumber=accountNumber
        this.owner=owner
        this.balance=balance
    }
}
acc1=new BankAccount('ac1234','cabeey',6700)
acc2=new BankAccount('ac1236','muse',6700)
acc3=new BankAccount('ac1236','guux',6700)
console.log(acc3)
console.log(acc1.balance)
console.log(acc2.accountNumber)
console.log(acc3.owner)