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
// interface Person {
//   name: string;
// }

// class Persons {
//   constructor(public name: string) {}
// }

// class customer extends Persons {}

// // type contraint
// function echo<T extends string | number>(value: T): T {
//   return value;
// }
// echo("hello");

// // Shape object contraint
// function echo2<T extends { name: string }>(value: T): T {
//   return value;
// }
// echo2({ name: "enoch" });

// // interface contraint
// function echo3<T extends Person>(value: T): T {
//   return value;
// }

// // class contraint
// function echo4<T extends Person>(value: T): T {
//   return value;
// }
// echo4(new customer("a"));
// echo4(new Persons("hello"));

// Extending generic classes
// interface Product {
//   name: string;
//   price: number;
// }
// class Store<T> {
//   protected _objects: T[] = [];

//   add(obj: T): void {
//     this._objects.push(obj);
//   }

//   find(property: keyof T, value: unknown): T | undefined {
//     return this._objects.find((obj) => obj[property] == value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "Enoch", price: 100 });
// store.find("name", "Enoch");
// store.find("price", 100);

// // Pass on the generic type parameter
// class CompressbileStore<T> extends Store<T> {
//   compress() {}
// }

// // let store = new CompressbileStore<Product>();

// // Restrict the generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((obj) => obj.name === name);
//   }
// }

// // Fixing or terminating the generic type parameter
// class ProductStore extends Store<Product> {
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// Type mapping
interface Product {
  name: string;
  price: number;
}

type ReadOnlyProduct = {
  readonly [K in keyof Product]: Product[K];
};

// to genralised it
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

// to get optional
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// to get Nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnlyProduct = {
  name: "a",
  price: 4,
};
