//  generic classes
// class KeyValuePair<K, V> {
//   constructor(public key: K, public value: V) {}
// }

// let pair = new KeyValuePair<string, number>("Nok", 100);

// let newPair = new KeyValuePair("hola", "great");

// Generic Functions
class ArrayUtils {
  wrapInArray<T>(value: T) {
    return [value];
  }
}

let arrays = new ArrayUtils();
let numbers = arrays.wrapInArray(1);
