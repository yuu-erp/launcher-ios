import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { injectable } from "inversify";
import {
  CreateApplicationCommand,
  CreateApplicationInPort,
} from "../port/create-application.in-port";
import { CreateApplicationOutPort } from "../port/create-application.out-port";

@injectable()
export class CreateApplicationInteractor implements CreateApplicationInPort {
  constructor(
    private readonly createApplicationPort: CreateApplicationOutPort
  ) {}

  execute(
    request: CreateApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity> {
    const application = ApplicationEntity.create(request);
    return this.createApplicationPort.insert(application);
  }
}
