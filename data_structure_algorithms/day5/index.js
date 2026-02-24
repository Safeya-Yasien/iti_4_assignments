class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.all = [];
  }

  // helper method which creates a new node to be inserted and call the insertNode method to insert the node in the tree
  insert(value) {
    let newNode = new Node(value);

    // if the tree is empty then insert the new node as root
    if (!this.root) {
      this.root = newNode;
      this.all.push(newNode.value);
      //   if the tree is not empty then insert the new node in the tree
      //   we send root to start from it to search for the location to insert the new node
    } else this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree it moves over the tree to find the location to insert the node
  insertNode(currentNode, nodeToAdd) {
    // if the value is less than left
    if (nodeToAdd.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = nodeToAdd;
        this.all.push(nodeToAdd.value);
      } else this.insertNode(currentNode.left, nodeToAdd);
    }
    // if the value is greater than right
    else if (nodeToAdd.value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = nodeToAdd;
        this.all.push(nodeToAdd.value);
      } else this.insertNode(currentNode.right, nodeToAdd);
    }
  }

  // helper method that calls the removeNode method to remove the node from the tree
  remove(value) {
    this.root = this.removeNode(this.root, value);
    this.all = this.all.filter((item) => item !== value);
  }

  removeNode(node, key) {
    // if the root is null then tree is empty
    if (node === null) return null;
    // if value to be delete is less than move left
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if value to be delete is greater than move right
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if value is similar to the root's value
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
    //   move to it's space 
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      let aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }
}

const tree = new Tree();
tree.insert(5);
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);

console.log("all nodes in the tree: ", tree.all);

tree.remove(30);
console.log("all nodes in the tree after removing 30: ", tree.all);
