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

// class Ride {
//   private static _activeRides: number = 0;
//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides++;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// let ride3 = new Ride();
// ride3.start();
// ride3.start();

// console.log(Ride.activeRides);

// Inheritance - a mechanism that allows us to reuse our codes
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   test() {
//     console.log("Taking test, wellll");
//   }
// }

// let student = new Student(1, "Enoch", "Amart");
// console.log(student.fullName);
// student.walk();
// student.test();

// method overriding
// class Teacher extends Person {
//   override get fullName() {
//     return "Professor " + super.fullName;
//   }
// }

// class Principal extends Person {
//   override get fullName() {
//     return "Principal " + super.fullName;
//   }
// }

// let teacher = new Teacher("Enoch", "Amarteifio");
// console.log(teacher.fullName);

// Polymorphism -  poly - many; morph- forms; many forms. an object can take many different forms
// Open Closed Principle - classes should be open for extension and closed for modification

// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// printNames([
//   new Student(1, "Abigail", "Yemoley"),
//   new Teacher("Enoch", "Amarteifio"),
//   new Principal("Nok", "Amart"),
// ]);

// Interfaces - only used when there's no method implementation. use for structure
// shape of the class - use of interface. only have method declarations. the signature of our method
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEven(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }

  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
