import { EntityId } from "@techmely/types";

export interface RepositoryPort<Entity> {
  find(): Entity | null;
  findAll(): Entity[];
  findByKey(): Entity | null;
  findByID(id: EntityId): Entity | null;

  insert(entity: Entity): void | Entity;
  insertMany(entities: Entity[]): void | Entity[];

  update(entity: Entity): void | Entity;
  updateMany(entities: Entity[]): void | Entity[];

  delete(entity: Entity): boolean;
  deleteById(id: EntityId): boolean;
}
