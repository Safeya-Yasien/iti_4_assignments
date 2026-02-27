class ConfigureVals {
  static instance = null;
  constructor(xpoint = 0, ypoint = 0, shape = null) {
    if (ConfigureVals.instance === null) {
      this.xpoint = xpoint;
      this.ypoint = ypoint;
      this.shape = shape;
      ConfigureVals.instance = this;
    } else {
      return ConfigureVals.instance;
    }
  }
}

console.log("Configure Values Pattern");
const configA = new ConfigureVals();
console.log(configA.xpoint);

const configB = new ConfigureVals(100, 200, "Square");
console.log(configB.xpoint);
