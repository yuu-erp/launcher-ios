import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationProps } from "@core/domain/types";
import { UseCase } from "@core/domain/use-cases.port.base";

export abstract class UpdateApplicationInPort
  implements UseCase<ApplicationProps, ApplicationEntity>
{
  abstract execute(
    request: ApplicationProps
  ): ApplicationEntity | Promise<ApplicationEntity>;
}
