import { BaseModule } from "@core/infrastructure/di";
import { interfaces } from "inversify";
import { IApplicationService } from "./interfaces/application.service.interface";
import { ApplicationService } from "./application.service";
import { MODULE } from "@core/app.symbols";
import { ApplicationController } from "./application.controller";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.applicationService(bind);
    this.applicationController(bind);
  }

  private applicationService(bind: interfaces.Bind): void {
    bind<IApplicationService>(MODULE.APPLICATION_SERVICE).to(
      ApplicationService
    );
  }
  private applicationController(bind: interfaces.Bind): void {
    bind<ApplicationController>(MODULE.APPLICATION_CONTROLLER).to(
      ApplicationController
    );
  }
}
