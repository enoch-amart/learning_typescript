// // Advanced type Exercises
// // Exercise 1

// type Users = {
//   name: string;
//   age: number;
//   occupation?: string;
// };

// let users: Users[] = [
//   { name: "John Smith", age: 30, occupation: "Software enginner" },
//   { name: "Kate Muller", age: 28 },
// ];

// // Exercise 2
// type Birds = {
//   fly: () => void;
// };

// type Fish = {
//   swim: () => void;
// };

// type Pet = Birds | Fish;

// let pet: Pet = {
//   fly: () => {},

//   swim: () => {},
// };

// // Exercise 3
// type DayOfWeek =
//   | "Monday"
//   | "Tuesday"
//   | "Wednesday"
//   | "Thursday"
//   | "Friday"
//   | "Saturday"
//   | "Sunday";

// // Exercise 4
// let user = getUser();
// console.log(user?.address?.street)

// let x = foo ?? bar();

// // Exercise 5

// Exercises - Classes, Interfaces and Object-oriented Programming
// exercise 1
// class Logger {
//   constructor(public fileName: string) {}

//   write(message: string): string {
//     return "hello";
//   }
// }

// // Exercise 2
// class Person {
//   constructor(public firstName: string, public lastName: string) {}

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// // Exercise 3
// class Employee extends Person {
//   constructor(public salary: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
// }

// // exercise 4
// // Private members are not inherited by child classes

// // exercise 5
// interface Address {
//   street: string;
//   city: string;
//   zipCode: number;
// }

// interface Employees {
//   name: string;
//   salary: number;
//   address: Address;
// }

// Exercise - Generic
// Exercise 1

function echo<T>(arg: T): T {
  return arg;
}

// Exercise 2
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

// Exercise 3
class Entity<T> {
  constructor(public ID: T) {}
}

// Exercise 4
interface User {
  UserID: number;
  username: string;
}

// keyof User returns a union of the properties of User. "userId" | "username"
