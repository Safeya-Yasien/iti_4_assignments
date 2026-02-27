class ConfigureVals {
  static instance = null;
  constructor(xPoint = 0, yPoint = 0, shape = null) {
    if (ConfigureVals.instance === null) {
      this.xPoint = xPoint;
      this.yPoint = yPoint;
      this.shape = shape;
      ConfigureVals.instance = this;
    } else {
      return ConfigureVals.instance;
    }
  }
}

console.log("Configure Values Pattern");
const configA = new ConfigureVals();
console.log(configA.xPoint);

const configB = new ConfigureVals(100, 200, "Square");
console.log(configB.xPoint);
