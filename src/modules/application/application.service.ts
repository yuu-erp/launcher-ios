import { APPLICATION_USE_CASE } from "@core/app.symbols";
import { GetApplicationsInteractor } from "@core/application/use-case/interactors/get-application.interactor";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { inject, injectable } from "inversify";
import { IApplicationService } from "./interfaces/application.service.interface";
import { CreateApplicationInteractor } from "@core/application/use-case/interactors/create-application.interactor";
import { ApplicationProps } from "@core/domain/types";

@injectable()
export class ApplicationService implements IApplicationService {
  constructor(
    @inject(APPLICATION_USE_CASE.GET_APPLICATIONS_USE_CASE)
    private readonly getApplicationsUseCase: GetApplicationsInteractor,
    @inject(APPLICATION_USE_CASE.CREATE_APPLICATION_USE_CASE)
    private readonly createApplicationUseCase: CreateApplicationInteractor
  ) {}

  getApplications(): ApplicationEntity[] | Promise<ApplicationEntity[]> {
    return this.getApplicationsUseCase.execute();
  }

  createApplication(
    body: ApplicationProps
  ): ApplicationEntity | Promise<ApplicationEntity> {
    return this.createApplicationUseCase.execute(body);
  }
}
