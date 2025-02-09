import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { type IApplicationService } from "./interfaces/application.service.interface";
import { inject, injectable } from "inversify";
import { MODULE } from "@core/app.symbols";
import { ApplicationProps } from "@core/domain/types";

@injectable()
export class ApplicationController {
  constructor(
    @inject(MODULE.APPLICATION_SERVICE)
    private readonly applicationService: IApplicationService
  ) {}

  getApplications(): ApplicationEntity[] | Promise<ApplicationEntity[]> {
    return this.applicationService.getApplications();
  }

  createApplication(
    body: ApplicationProps
  ): ApplicationEntity | Promise<ApplicationEntity> {
    return this.applicationService.createApplication(body);
  }
}
