import { INFRASTRUCTURE } from "@core/app.symbols";
import { type IApplicationRepository } from "@core/domain/repo";
import { UseCase } from "@core/domain/use-cases.port.base";
import { NotFoundException } from "@core/exceptions";
import { EntityId } from "@techmely/types";
import { inject, injectable } from "inversify";

@injectable()
export class DeleteApplicationInteractor implements UseCase<EntityId, boolean> {
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly applicationReposity: IApplicationRepository
  ) {}

  execute(request: EntityId): boolean | Promise<boolean> {
    const existingApp = this.applicationReposity.findByID(request);
    if (!existingApp) throw new NotFoundException("Ứng dụng không tồn tại");
    return this.applicationReposity.deleteById(request);
  }
}
