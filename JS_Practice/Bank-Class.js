class BankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    //methods are outside of the constructor
    deposit () {
        console.log( `${this.ownerName} has made a deposit of $20 into account number ${this.acctNum}. ${this.ownerName} now has a balance of ${this.balance}`)
    }
    withdraw () {
        console.log( `${this.ownerName} has made a withdraw of $100 into account number ${this.acctNum}. ${this.ownerName} now has a balance of ${this.balance}`)
    }


}
const poorGuy = new BankAccount("Danny", 250, 26438764);
poorGuy.deposit ()
poorGuy.withdraw ()

class CheckingAccount extends BankAccount {
    constructor (ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
            this.overdraftEnabled = overdraftEnabled; 
    }
         withdraw (cash = this.balance) {
                if (cash < 0) {
                    
                    return console.log(`Account number ${this.acctNum} belonging to ${this.ownerName} has been over drafted by a withdrawl of ${this.overdraftEnabled}. Over draft fees have been applied. The current balance is ${this.balance} dollars.`)
                }
                
            }

    }
const veryBroke = new CheckingAccount("Kevin", -80, 465343543, "$50")
veryBroke.withdraw ()


class SavingsAccount extends BankAccount {
    constructor (ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
            this.overdraftEnabled = overdraftEnabled;
    }
    withdraw (cash = this.balance, withdrawl = this.overdraftEnabled) {
        if (cash - withdrawl < 0) {
                    
                    return console.log(` !! Account number ${this.acctNum} belonging to ${this.ownerName} cannot withdraw ${this.overdraftEnabled} dollars due to insufficient funds. Current balance is ${this.balance} dollars. Step your money game up!`)
                }  else  {
                    return console.log("Transaction completed!")
                }
                
            }

    }
const inDebt = new SavingsAccount("Joe", 100, 465343543, 90)
inDebt.withdraw ()
// Thanks for the help Susan!