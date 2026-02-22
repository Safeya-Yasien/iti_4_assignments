// Create Single LinkedList ==> Add(value)  , Print()
// Count Nodes in MyList
// SearchNode
// Insert at Beginning
// Remove Node Remove(value)
// Remove Duplicate Nodes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // add (end)
  add(value) {
    // create new node with value = 10
    const newNode = new Node(value);
    // if list is empty = create new node = null
    // we make head for the first time only point to first node after that
    // this.head will point always to the first node so we use current to loop through the list
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      //   while the next node is not null
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // insert at the beginning
  insertAtBeginning(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // print
  print() {
    let current = this.head;
    let listValues = "";
    // why current only
    // because if we use current.next will not get the last value because it will be null
    while (current) {
      listValues += `${current.value} -> `;
      current = current.next;
    }
    console.log(listValues + "null");
  }

  countNodes() {
    return this.length;
  }

  // search node
  searchNode(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  //    remove by value
  remove(value) {
    // if head is empty there is nothing to remove
    if (!this.head) return null;

    // if we have to remove the first node 'head'
    if (this.head.value === value) {
      // then make head point to the next node
      this.head = this.head.next;
      this.length--;
      return;
    }

    // else it's another node in any position in the list
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return;
      }
      current = current.next;
    }
  }

  //  remove duplicate
  removeDuplicate() {
    let current = this.head;
    // for no duplicate
    // fast search not search element by element
    const seen = new Set();

    let prev = null;

    while (current) {
      if (seen.has(current.value)) {
        prev.next = current.next;
        this.length--;
      } else {
        seen.add(current.value);
        prev = current;
      }
      current = current.next;
    }
  }
}

const myList = new LinkedList();
// add two values to the list
myList.add(10);
myList.add(20);
console.log("print the list after adding first two nodes");
myList.print();

myList.insertAtBeginning(5);
console.log("print the list after inserting at the beginning");
myList.print();

console.log("Count:", myList.countNodes());

myList.add(20);
console.log("print the list after adding duplicate node");
myList.print();

myList.removeDuplicate();
console.log("print the list after removing duplicate nodes");
myList.print();

console.log("search of value", myList.searchNode(5));
console.log("search of value", myList.searchNode(30));
