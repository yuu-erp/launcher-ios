import { ApplicationEntity } from "@core/domain/entities/application.entity";

export abstract class GetApplicationsOutPort {
  abstract findAll(): ApplicationEntity[];
}
