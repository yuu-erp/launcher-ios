import { StoragePort } from "./storage.port";

export class InMemoryStorage<T extends Record<string, any> = any>
  implements StoragePort<T>
{
  private variables: Map<string, any>;

  constructor() {
    this.variables = new Map();
  }

  set<K extends string>(key: K, value: T[K] | unknown): void {
    this.variables.set(key, value);
  }

  setAll(data: T): void {
    Object.entries(data).forEach(([key, value]) => {
      this.variables.set(key, value);
    });
  }

  get<K extends string>(key: K): T[K] | null {
    return (this.variables.get(key) as T[K]) ?? null;
  }

  remove<K extends string>(key: K): void {
    this.variables.delete(key);
  }

  clear(): void {
    this.variables.clear();
  }

  getAll(): T {
    const result = {} as T;
    this.variables.forEach((value, key) => {
      result[key as keyof T] = value;
    });
    return result;
  }
}
