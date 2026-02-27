class ToyDuck {
  constructor(color, price) {
    this.color = color;
    this.price = price;
  }
}

class ToyCar {
  constructor(color, price, name) {
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

class ToyFactory {
  createToy(item) {
    switch (item.type) {
      case "duck":
        return new ToyDuck(item.color, item.price);
      case "car":
        return new ToyCar(item.color, item.price, item.name);
      default:
        throw new Error("Toy type not supported.");
    }
  }
}

const factory = new ToyFactory();

const rubberDucky = factory.createToy({
  type: "duck",
  color: "yellow",
  price: 5.99,
});

const sportsCar = factory.createToy({
  type: "car",
  color: "red",
  price: 15.0,
  name: "Lightning Bolt",
});

console.log("Factory Pattern");
console.log(rubberDucky);
console.log(sportsCar);
