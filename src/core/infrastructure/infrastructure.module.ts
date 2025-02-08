import { interfaces } from "inversify";
import { BaseModule } from "./di";
import { ILayoutRepository } from "@core/domain/repo/layout.repository";
import { LayoutStorage } from "./storage/layout.storage";
import { INFRASTRUCTURE } from "@core/app.symbols";
import { StoragePort } from "./storage";
import { InMemoryStorage } from "./storage/in-memory-storage";
import { IApplicationRepository } from "@core/domain/repo";
import { ApplicationImplReposity } from "./storage/application.impl.reposity";

export class InfrastructureModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.layoutStorage(bind);
    this.applicationImplReposity(bind);
    this.inMemoryStorage(bind);
  }

  private layoutStorage(bind: interfaces.Bind): void {
    bind<ILayoutRepository>(INFRASTRUCTURE.LAYOUT_STORAGE).to(LayoutStorage);
  }

  private applicationImplReposity(bind: interfaces.Bind): void {
    bind<IApplicationRepository>(INFRASTRUCTURE.APPLICATION_STORAGE).to(
      ApplicationImplReposity
    );
  }

  private inMemoryStorage(bind: interfaces.Bind): void {
    bind<StoragePort>(INFRASTRUCTURE.IN_MEMORY_STORAGE).to(InMemoryStorage);
  }
}
