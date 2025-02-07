import { ApplicationEntity } from "../entities/application.entity";
import { RepositoryPort } from "./repository.port";

export interface IApplicationRepository
  extends RepositoryPort<ApplicationEntity> {}
