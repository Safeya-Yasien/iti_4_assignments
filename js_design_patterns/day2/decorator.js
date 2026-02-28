// decorator pattern
// we have base class we want to add some functionality to it without modifying the base class

// base class
class Pizza {
  getDescription() {
    return "Unknown";
  }
  getPrice() {
    return 0;
  }
}

class PeppyPaneer extends Pizza {
  getDescription() {
    return "Peppy Paneer";
  }
  getPrice() {
    return 120;
  }
}

class Farmhouse extends Pizza {
  getDescription() {
    return "Farmhouse";
  }
  getPrice() {
    return 150;
  }
}

class Margherita extends Pizza {
  getDescription() {
    return "Margherita";
  }
  getPrice() {
    return 100;
  }
}

class ChickenFiesta extends Pizza {
  getDescription() {
    return "Chicken Fiesta";
  }
  getPrice() {
    return 180;
  }
}

class FreshTomato {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + " with Fresh Tomato";
  }

  getPrice() {
    return this.pizza.getPrice() + 20;
  }
}

console.log(`\n Decorator pattern \n\n`);

let order1 = new Margherita();
// 100
console.log(`${order1.getDescription()} costs ${order1.getPrice()}`);

order1 = new FreshTomato(order1);
// 120 + 20 = 120
console.log(`${order1.getDescription()} costs ${order1.getPrice()}`);
