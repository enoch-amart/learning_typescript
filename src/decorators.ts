// // parameterized decorators
// type ComponentOptions = {
//   selector: string;
// };

// // decorator Factory
// function Component(value: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = value;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDOM = () => {
//       console.log("Inserting the component in the DOM");
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }

// //Decorator Composition
// @Component({ selector: "#my-profile" })
// @Pipe
// class ProfileComponent {}

// Method Decorations
// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (message: string) {
//     console.log("Before");
//     original.call(this, message);
//     console.log("After");
//   };
// }

// // making it more generic.
// function Log1(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("Before");
//     original.call(this, ...args);
//     console.log("After");
//   };
// }

// class Person {
//   @Log
//   say(message: string) {
//     console.log("Person says " + message);
//   }
// }

// let person = new Person();
// person.say("Hello world");

// Accessor Decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    // return null;
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("enoch", "amarteifio");
console.log(person.fullName);
