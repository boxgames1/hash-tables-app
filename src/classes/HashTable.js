import LList from "./LList";
import HashTableIterator from "./HashTableIterator";

class HashTable {
  constructor(size) {
    this.elements = 0;
    this.size = size;
    this.buckets = [];
    for (let i = 0; i < size; i++) {
      this.buckets.push(new LList([]));
    }
  }
  empty() {
    return this.elements === 0;
  }
  clear() {
    this.buckets.forEach(bucket => {
      bucket.clear();
    });
    this.elements = 0;
  }
  begin() {
    return HashTableIterator[Symbol.iterator](this);
  }
  insert(item) {
    if (this.find(item)) return;
    let pos = this.hashFunction(item);
    this.buckets[pos].push_back(item);
    this.elements++;
  }
  erase(item) {
    const pos = this.hashFunction(item);
    const list = this.buckets[pos];
    const itemToErase = list.find(item);
    if (itemToErase !== list.end()) {
      list.erase(itemToErase);
      this.elements--;
    }
  }
  find(item) {
    let pos = this.hashFunction(item);
    return this.buckets[pos].find(item);
  }
  hashFunction(item) {
    let len = JSON.stringify(item).length;
    return len % this.size;
  }
}

export default HashTable;
