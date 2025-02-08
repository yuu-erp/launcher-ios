import { INFRASTRUCTURE } from "@core/app.symbols";
import { ILayoutRepository } from "@core/domain/repo/layout.repository";
import { ILayout } from "@core/domain/types/layout.types";
import { inject, injectable } from "inversify";
import { type StoragePort } from "./storage.port";
import { EntityId } from "@techmely/types";

@injectable()
export class LayoutStorage implements ILayoutRepository {
  private readonly key: string = "LAYOUT_CALCULATION";
  constructor(
    @inject(INFRASTRUCTURE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort
  ) {}

  find(): ILayout | null {
    return this.storage.get(this.key);
  }
  insert(entity: ILayout): void | ILayout {
    this.storage.set(this.key, entity);
  }

  // Các phương thức không cần thiết
  findAll(): ILayout[] {
    throw new Error("Method not implemented.");
  }
  findByKey(): ILayout {
    throw new Error("Method not implemented.");
  }
  findByID(_id: EntityId): ILayout | null {
    throw new Error("Method not implemented.");
  }

  insertMany(_entities: ILayout[]): void | ILayout[] {
    throw new Error("Method not implemented.");
  }

  update(_entities: ILayout): void | ILayout {
    throw new Error("Method not implemented.");
  }
  updateMany(_entities: ILayout[]): void | ILayout[] {
    throw new Error("Method not implemented.");
  }

  delete(_entities: ILayout): boolean {
    throw new Error("Method not implemented.");
  }
  deleteById(_id: string): boolean {
    throw new Error("Method not implemented.");
  }
}
