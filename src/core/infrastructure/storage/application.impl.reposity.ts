import { INFRASTRUCTURE } from "@core/app.symbols";
import { IApplicationRepository } from "@core/domain/repo";
import { inject, injectable } from "inversify";
import { type StoragePort } from "./storage.port";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { EntityId } from "@techmely/types";

@injectable()
export class ApplicationImplReposity implements IApplicationRepository {
  private readonly key: string = "APPLICATION_STORAGE";

  constructor(
    @inject(INFRASTRUCTURE.IN_MEMORY_STORAGE)
    private readonly storage: StoragePort
  ) {}

  findAll(): ApplicationEntity[] {
    return this.storage.get(this.key) || [];
  }

  findByID(id: EntityId): ApplicationEntity | null {
    const allApplication = this.findAll();
    return allApplication.find((app) => app.getProps().id === id) || null;
  }

  insert(entity: ApplicationEntity): ApplicationEntity {
    const allApplication = this.findAll();
    allApplication.push(entity);
    this.storage.set(this.key, allApplication);
    return entity;
  }

  insertMany(entities: ApplicationEntity[]): void {
    const allApplication = this.findAll();
    this.storage.set(this.key, [...allApplication, ...entities]);
  }

  update(entity: ApplicationEntity): void {
    const allApplication = this.findAll().map((app) =>
      app.getProps().id === entity.getProps().id ? entity : app
    );
    this.storage.set(this.key, allApplication);
  }

  updateMany(entities: ApplicationEntity[]): void {
    const allApplication = this.findAll();
    const updatedMap = new Map(
      entities.map((entity) => [entity.getProps().id, entity])
    );
    const updatedApplications = allApplication.map((app) =>
      updatedMap.has(app.getProps().id)
        ? updatedMap.get(app.getProps().id)!
        : app
    );
    this.storage.set(this.key, updatedApplications);
  }

  delete(entity: ApplicationEntity): boolean {
    const allApplication = this.findAll();
    const updatedApplications = allApplication.filter(
      (app) => app.getProps().id !== entity.getProps().id
    );
    if (allApplication.length === updatedApplications.length) return false;
    this.storage.set(this.key, updatedApplications);
    return true;
  }

  deleteById(id: EntityId): boolean {
    const allApplication = this.findAll();
    const updatedApplications = allApplication.filter(
      (app) => app.getProps().id !== id
    );
    if (allApplication.length === updatedApplications.length) return false;
    this.storage.set(this.key, updatedApplications);
    return true;
  }

  // Các phương thức không cần thiết
  find(): ApplicationEntity | null {
    throw new Error("Method not implemented.");
  }

  findByKey(): ApplicationEntity | null {
    throw new Error("Method not implemented.");
  }
}
