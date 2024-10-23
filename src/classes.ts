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

// // Parameter properties
// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   // getters
//   get balance(): number {
//     return this._balance;
//   }

//   // setters
//   set setOwner(name: string) {
//     this.owner = name;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) throw new Error("Invalid amount");
//     this._balance += amount;
//   }
// }

// let account = new Account(1, "Enoch", 0);
// console.log(account.balance);
// account.setOwner = "Noky boy";
// console.log(account);

// Index Signatures
// class SeatAssignment {
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Enoch";
// seats.A2 = "boyy";

// console.log(seats);

// static properties. it is a property that belongs to a class and not an object

class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides++;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();

let ride3 = new Ride();
ride3.start();
ride3.start();

console.log(Ride.activeRides);
