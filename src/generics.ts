//  generic classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<string, number>("Nok", 100);

let newPair = new KeyValuePair("hola", "great");
