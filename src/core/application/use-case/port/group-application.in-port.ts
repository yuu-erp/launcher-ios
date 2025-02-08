import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationProps } from "@core/domain/types";
import { UseCase } from "@core/domain/use-cases.port.base";

export interface GroupApplicationCommand {
  application1: ApplicationProps;
  application2: ApplicationProps;
}

export abstract class GroupApplicationInPort
  implements UseCase<GroupApplicationCommand, ApplicationEntity>
{
  abstract execute(
    request: GroupApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
