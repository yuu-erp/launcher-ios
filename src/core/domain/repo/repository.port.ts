export interface RepositoryPort<Entity> {
  findAll(): Entity[];
  findByKey(): Entity;

  insert(entity: Entity): void;
  insertMany(entities: Entity[]): void | Entity[];

  update(entity: Entity): void | Entity;
  updateMany(entities: Entity[]): void | Entity[];

  delete(entity: Entity): boolean;
  deleteById(id: string): boolean;
}
