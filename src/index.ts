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

//  Type Alias
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Enoch",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// Union type - giving a parameter more than one type. use vertical bar to create union type |
// function kgToLbs(weight: number | string): number {
//   // narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");

// Intersection
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// literal (exact or specific value) type
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// Nullable types
// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase);
//   else console.log("hola!");
// }

// greet(undefined);

// optional chaining -- <?> optional property access operator
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);

console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// optional call operator
let log: any = null;

log?.("a");
