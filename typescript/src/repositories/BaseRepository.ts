export class BaseRepository<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  delete(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getAll(): T[] {
    return [...this.items];
  }

  findById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}
