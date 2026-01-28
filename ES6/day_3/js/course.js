// create generator
export function* generator() {
  let id = "id" + Math.random().toString(16).slice(2);
  while (true) {
    yield id++;
  }
}
