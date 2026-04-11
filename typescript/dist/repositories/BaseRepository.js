export class BaseRepository {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    delete(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    getAll() {
        return [...this.items];
    }
    findById(id) {
        return this.items.find((item) => item.id === id);
    }
}
