// stack using single linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedListStack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    // empty
    if (!this.top) return "Empty Stack";
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }

  print() {
    let current = this.top;
    let values = "";
    while (current) {
      values += current.value + " -> ";
      current = current.next;
    }
    console.log(values + "null");
  }
}

const singleLInkedListStack = new SingleLinkedListStack();
singleLInkedListStack.push(2);
singleLInkedListStack.push(1);
singleLInkedListStack.push(3);

console.log("print the stack");
singleLInkedListStack.print();

console.log("pop the stack");
console.log(singleLInkedListStack.pop());

console.log("print the stack after pop");
singleLInkedListStack.print();

console.log("******************** Double Linked List *********************");

// stack using double linked list
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedListStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new DoubleNode(value);
    if (this.top) {
      this.top.next = newNode;
      newNode.prev = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (!this.top) return "Empty Stack";
    const value = this.top.value;
    this.top = this.top.prev;
    if (this.top) this.top.next = null;
    return value;
  }

  print() {
    let current = this.top;
    let values = "";
    while (current) {
      values += current.value + " <-> ";
      current = current.prev;
    }
    console.log(values + "null");
  }
}

const doubleLinkedListStack = new DoubleLinkedListStack();
doubleLinkedListStack.push(2);
doubleLinkedListStack.push(1);
doubleLinkedListStack.push(3);

console.log("print the stack");
doubleLinkedListStack.print();

console.log("pop the stack");
console.log(doubleLinkedListStack.pop());

console.log("print the stack after pop");
doubleLinkedListStack.print();
