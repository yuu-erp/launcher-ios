import { ILayoutRepository } from "@core/domain/repo/layout.repository";
import { ILayout } from "@core/domain/types/layout.types";
import { type StoragePort } from "./storage.port";
import { inject, injectable } from "inversify";
import { INFRASTRUCTURE } from "@core/app.symbols";

@injectable()
export class LayoutStorage implements ILayoutRepository {
  private readonly key: string = "LAYOUT_CALCULATION";
  constructor(
    @inject(INFRASTRUCTURE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort<ILayout>
  ) {}

  insert(payload: ILayout) {
    this.storage.set(this.key, payload);
  }

  getAll(): ILayout | null {
    return this.storage.get(this.key) as ILayout | null;
  }
}
