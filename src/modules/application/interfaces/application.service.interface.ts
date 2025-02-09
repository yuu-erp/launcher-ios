import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationProps } from "@core/domain/types";

export interface IApplicationService {
  getApplications(): ApplicationEntity[] | Promise<ApplicationEntity[]>;
  createApplication(
    body: ApplicationProps
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
