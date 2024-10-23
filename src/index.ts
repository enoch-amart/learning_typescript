// Arrays
// let numbers: number[] = [1, 2, 3];

// Tuples - fixed element array where each element has a particular type
// let user: [number, string] = [1, "Mosh"];
// user.push(1);
// console.log(user);

// Enums - a list of related constants
// const small = 1;
// const medium = 2;
// const large = 3;

// using enum to declare them. use PascalCase naming
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

// Functions - ? to make the parameter optional eg.  taxYear?: number
// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000);

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Enoch",
  retire: (date: Date) => {
    console.log(date);
  },
};
