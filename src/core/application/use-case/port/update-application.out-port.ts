import { ApplicationEntity } from "@core/domain/entities/application.entity";

export abstract class UpdateApplicationOutPort {
  abstract update(application: ApplicationEntity): Promise<ApplicationEntity>;
}
