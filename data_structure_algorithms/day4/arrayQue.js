class ArrayQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) return "Empty Queue";
    return this.items.shift();
  }

  print() {
    console.log(`[${this.items.join(", ")}]`);
  }
}

const arrayQueue = new ArrayQueue();
arrayQueue.enqueue(2);
arrayQueue.enqueue(1);
arrayQueue.enqueue(3);

console.log("print the queue");
arrayQueue.print();

console.log("pop the queue");
console.log(arrayQueue.dequeue());

console.log("print the queue after pop");
arrayQueue.print();
