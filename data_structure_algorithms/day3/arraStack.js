class ArrayStack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) return "Empty Stack";
    return this.items.pop();
  }

  print() {
    console.log(this.items.join(" <- "));
  }
}

const arrayStack = new ArrayStack();
arrayStack.push(2);
arrayStack.push(1);
arrayStack.push(3);

console.log("print the stack");
arrayStack.print();

console.log("pop the stack");
console.log(arrayStack.pop());

console.log("print the stack after pop");
arrayStack.print();
