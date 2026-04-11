export function CreatedAt(constructor) {
    console.log(`Class ${constructor.name} initialized at: ${new Date().toLocaleString()}`);
    constructor.prototype.createdAt = new Date();
}
