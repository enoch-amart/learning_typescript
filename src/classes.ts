// class Account {
//   readonly id: number;
//   owner: string;
//   private _balance: number;
//   nickname?: string;

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }

//   private calculateTax(): number {
//     return 0;
//   }

//   getBalance(): number {
//     return this._balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }

//   withdraw(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance -= amount;
//   }
// }

// let account = new Account(1, "Enoch", 0);
// account.deposit(100);
// console.log(account.balance);
// account.withdraw(50);
// console.log(account.balance);

// console.log(account instanceof Account);

// console.log(account.getBalance());

// Parameter properties
class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
}
