// observer pattern
// when change in store happened, all customers should be notified

class Store {
  constructor() {
    this.subscribers = [];
    this.newProduct = "";
  }

  subscribe(customer) {
    this.subscribers.push(customer);
  }

  unsubscribe(customer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== customer);
  }

  addProduct(productName) {
    this.newProduct = productName;
    console.log(`Added new product: ${productName}`);
    this.notify();
  }

  notify() {
    this.subscribers.forEach((sub) => {
      sub.update(this);
    });
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  update(product) {
    console.log(
      `${this.name}: A new product "${product.newProduct}" is now available in the store.`,
    );
  }
}

console.log(`\n Observer pattern \n\n`);
let myStore = new Store();

let user1 = new Customer("Ahmed");
let user2 = new Customer("Mostafa");

myStore.subscribe(user1);
myStore.subscribe(user2);

myStore.addProduct("phone");

myStore.unsubscribe(user1);

myStore.addProduct("laptop");
