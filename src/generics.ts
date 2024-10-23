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

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");
result.data?.username;

let result1 = fetch<Product>("url");
result1.data?.title;
