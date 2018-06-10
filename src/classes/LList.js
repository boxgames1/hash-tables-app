import LListNode from "./LListNode";
import LListIterator from "./LListIterator";
//Needs an array of values
export default class LList {
  constructor(values) {
    let current;
    this.header = new LListNode(null, null);
    current = this.header;
    for (const value of values) {
      let newNode = new LListNode(value, null);
      current.setNext(newNode);
      current = newNode;
    }
  }
  getPrevious(node) {
    const iterator = this.begin();
    if (this.header.getNext() === node) {
      iterator.reset();
      return iterator;
    }
    let itemItr = iterator.next();
    while (!itemItr.done && itemItr.value.getNext() !== node) {
      itemItr = iterator.next();
    }
    return iterator;
  }
  // Cost: O(n), O(1) at beginning
  erase(pos) {
    let curr = pos.current();
    if (!this.empty() && curr != null) {
      let result = curr.getNext();
      // Get Previous node is the most expensive part of this process
      let prev = this.getPrevious(curr).current();
      if (prev !== null) {
        prev.setNext(result);
        curr.setNext(null);
        return LListIterator[Symbol.iterator](result, this);
      }
    }
  }
  // Cost: O(1) at beginning
  insert(pos, val) {
    const newNode = new LListNode(val, pos.current().getNext());
    pos.current().setNext(newNode);
    pos.next();
    return pos;
  }
  push_back(item) {
    const last = this.end();
    this.insert(last, item);
  }
  // Cost: O(n)
  find(item) {
    const iterator = this.begin();
    let itemItr = {
      value: iterator.current(),
      done: false
    };
    while (!itemItr.done) {
      if (itemItr.value.getValue() === item) return iterator;
      itemItr = iterator.next();
    }
    return false;
  }
  // Cost: O(n)
  clear() {
    while (!this.empty()) {
      this.erase(this.begin());
    }
  }
  // Cost: O(1)
  empty() {
    return this.header.getNext() === null;
  }
  // Cost: O(1)
  begin() {
    return LListIterator[Symbol.iterator](this.header.getNext(), this);
  }
  // Cost: O(n)
  end() {
    const iterator = this.begin();
    let item = iterator.next();
    if (!item.value) {
      return this.begin();
    }
    while (item.value && item.value.getNext() != null) {
      item = iterator.next();
    }
    return iterator;
  }

  // Cost: O(n)
  clone(node) {
    if (node === null) return null;
    else return new LListNode(node.getValue(), this.clone(node.getNext()));
  }

  values() {
    const iterator = this.begin();
    let iterable = false;
    const values = [];
    while (
      !iterable &&
      iterator.current() !== null &&
      iterator.current().getValue() != null
    ) {
      values.push(iterator.current().getValue());
      iterable = iterator.next().done;
    }
    return values;
  }

  print() {
    const iterator = this.begin();
    let iterable = false;
    while (!iterable && iterator.current() !== null) {
      console.log(iterator.current().getValue());
      iterable = iterator.next().done;
    }
  }
}
