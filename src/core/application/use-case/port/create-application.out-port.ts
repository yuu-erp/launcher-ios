import { ApplicationEntity } from "@core/domain/entities/application.entity";

export abstract class CreateApplicationOutPort {
  abstract insert(payload: ApplicationEntity): ApplicationEntity;
}
