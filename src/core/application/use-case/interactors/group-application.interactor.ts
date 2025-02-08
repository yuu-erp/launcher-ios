import { INFRASTRUCTURE } from "@core/app.symbols";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { type IApplicationRepository } from "@core/domain/repo";
import { NotFoundException } from "@core/exceptions";
import { inject, injectable } from "inversify";
import {
  GroupApplicationCommand,
  GroupApplicationInPort,
} from "../port/group-application.in-port";

@injectable()
export class GroupApplicationInteractor implements GroupApplicationInPort {
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly applicationReposity: IApplicationRepository
  ) {}

  execute(
    request: GroupApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity> {
    const { application1, application2 } = request;
    const existingApp1 = this.applicationReposity.findByID(application1.id);
    if (!existingApp1)
      throw new NotFoundException("Ứng dụng không tồn tại", {
        id: application1.id,
      });
    const existingApp2 = this.applicationReposity.findByID(application2.id);
    if (!existingApp2)
      throw new NotFoundException("Ứng dụng không tồn tại", {
        id: application2.id,
      });

    console.log("existingApp1", existingApp1);
    console.log("existingApp2", existingApp2);
    return existingApp1;
  }
}
