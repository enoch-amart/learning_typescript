"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance -= amount;
    }
}
let account = new Account(1, "Enoch", 0);
console.log(account.getBalance());
//# sourceMappingURL=classes.js.map