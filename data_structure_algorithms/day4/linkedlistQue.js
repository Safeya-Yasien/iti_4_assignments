class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleQueue {
  constructor() {
    this.front = null;
    this.teal = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.teal) {
      this.front = this.teal = newNode;
      return;
    }
    newNode.prev = this.teal;
    this.teal.next = newNode;
    this.teal = newNode;
  }

  dequeue() {
    if (!this.front) return "Empty Queue";

    const popedValue = this.front.value;
    this.front = this.front.next;

    if (this.front) {
      this.front.prev = null;
    }
    return popedValue;
  }

  print() {
    let current = this.front;
    let values = "[";
    while (current) {
      values += current.value + ", ";
      current = current.next;
    }
    console.log(values + "]");
  }
}

const doublyQueue = new DoubleQueue();
doublyQueue.enqueue(2);
doublyQueue.enqueue(1);
doublyQueue.enqueue(3);

console.log("print the queue");
doublyQueue.print();

console.log("pop the queue");
console.log(doublyQueue.dequeue());

console.log("print the queue after pop");
doublyQueue.print();
