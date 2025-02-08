import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationProps } from "@core/domain/types";
import { UseCase } from "@core/domain/use-cases.port.base";

export interface UpdateApplicationCommand extends ApplicationProps {}

export abstract class UpdateApplicationInPort
  implements UseCase<UpdateApplicationCommand, ApplicationEntity>
{
  abstract execute(
    request: UpdateApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
