import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { inject, injectable } from "inversify";
import { GetApplicationsOutPort } from "../port/get-applications.out-port";
import { UseCase } from "@core/domain/use-cases.port.base";
import { INFRASTRUCTURE } from "@core/app.symbols";

@injectable()
export class GetApplicationsInteractor
  implements UseCase<unknown, ApplicationEntity[]>
{
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly getApplicationsPort: GetApplicationsOutPort
  ) {}
  execute(): ApplicationEntity[] | Promise<ApplicationEntity[]> {
    return this.getApplicationsPort.findAll();
  }
}
