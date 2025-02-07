import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationProps } from "@core/domain/types";
import { UseCase } from "@core/domain/use-cases.port.base";

export interface CreateApplicationCommand extends ApplicationProps {}

export abstract class CreateApplicationInPort
  implements UseCase<CreateApplicationCommand, ApplicationEntity>
{
  abstract execute(
    request: CreateApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
