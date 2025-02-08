import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { MoveApplicationProps } from "@core/domain/types";
import { UseCase } from "@core/domain/use-cases.port.base";

export interface MoveApplicationCommand extends MoveApplicationProps {}

export abstract class MoveApplicationInPort
  implements UseCase<MoveApplicationCommand, ApplicationEntity>
{
  abstract execute(
    request: MoveApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
