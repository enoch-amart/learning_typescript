"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance -= amount;
    }
}
let account = new Account(1, "Enoch", 0);
account.deposit(100);
console.log(account.balance);
account.withdraw(50);
console.log(account.balance);
console.log(account instanceof Account);
//# sourceMappingURL=classes.js.map