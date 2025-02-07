export interface StoragePort<T extends Record<string, any> = any> {
  set<K extends string>(key: K, value: T[K] | unknown): void;
  setAll(data: T): void;
  get<K extends string>(key: K): T[K] | null;
  remove<K extends string>(key: K): void;
  clear(): void;
  getAll(): T;
}
