import { INFRASTRUCTURE } from "@core/app.symbols";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { inject, injectable } from "inversify";
import {
  CreateApplicationCommand,
  CreateApplicationInPort,
} from "../port/create-application.in-port";
import { CreateApplicationOutPort } from "../port/create-application.out-port";

@injectable()
export class CreateApplicationInteractor implements CreateApplicationInPort {
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly createApplicationPort: CreateApplicationOutPort
  ) {}

  execute(
    request: CreateApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity> {
    const application = ApplicationEntity.create(request);
    return this.createApplicationPort.insert(application);
  }
}
