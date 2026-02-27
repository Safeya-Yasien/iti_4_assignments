class CEO {
  static instance = null;
  constructor(name, age, address) {
    if (CEO.instance === null) {
      this.name = name;
      this.age = age;
      this.address = address;
      CEO.instance = this;
    } else {
      return CEO.instance;
    }
  }
}

console.log("CEO Singleton");
const boss1 = new CEO("ahmed", 50, "cairo");
const boss2 = new CEO("mostafa", 40, "alx");
const boss3 = new CEO();

console.log(boss1);
console.log(boss2);
console.log(boss3);
