"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set owner_(name) {
        this.owner = name;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
}
let account = new Account(1, "Enoch", 0);
console.log(account.balance);
account.owner_ = "Noky boy";
console.log(account);
//# sourceMappingURL=classes.js.map