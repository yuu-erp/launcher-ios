import { ApplicationEntity } from "@core/domain/entities/application.entity";

export abstract class CreateApplicationOutPort {
  abstract insert(user: ApplicationEntity): Promise<ApplicationEntity>;
}
