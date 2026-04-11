export function CreatedAt(constructor: any) {
  console.log(
    `Class ${constructor.name} initialized at: ${new Date().toLocaleString()}`,
  );
  constructor.prototype.createdAt = new Date();
}
