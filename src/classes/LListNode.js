export default class LListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
    getNext() {
        return this.next;
    }
    getValue() {
        return this.value;
    }
    setNext(next) {
        this.next = next;
    }
    setValue(value) {
        this.value = value;
    }
}