//  generic classes
// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair<string, number>("Nok", 100);

// let newPair = new KeyValuePair("hola", "great");

// Generic Functions
// class ArrayUtils {
//   wrapInArray<T>(value: T) {
//     return [value];
//   }
// }

// let arrays = new ArrayUtils();
// let numbers = arrays.wrapInArray(1);

// Generic interfaces

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }

// let result = fetch<User>("url");
// result.data?.username;

// let result1 = fetch<Product>("url");
// result1.data?.title;

// Generic constraints
interface Person {
  name: string;
}

class Persons {
  constructor(public name: string) {}
}

class customer extends Persons {}

// type contraint
function echo<T extends string | number>(value: T): T {
  return value;
}
echo("hello");

// Shape object contraint
function echo2<T extends { name: string }>(value: T): T {
  return value;
}
echo2({ name: "enoch" });

// interface contraint
function echo3<T extends Person>(value: T): T {
  return value;
}

// class contraint
function echo4<T extends Person>(value: T): T {
  return value;
}
echo4(new customer("a"));
echo4(new Persons("hello"));
