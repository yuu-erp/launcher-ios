import { INFRASTRUCTURE } from "@core/app.symbols";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { type IApplicationRepository } from "@core/domain/repo";
import { NotFoundException } from "@core/exceptions";
import { inject, injectable } from "inversify";
import {
  MoveApplicationCommand,
  MoveApplicationInPort,
} from "../port/move-application.in-port";

@injectable()
export class MoveApplicationInteractor implements MoveApplicationInPort {
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly applicationReposity: IApplicationRepository
  ) {}

  execute(
    request: MoveApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity> {
    const { id, position } = request;
    // 🔹 Tìm ứng dụng theo ID (cần await vì có thể là bất đồng bộ)
    const existingApp = this.applicationReposity.findByID(id);
    if (!existingApp)
      throw new NotFoundException("Ứng dụng không tồn tại", {
        id,
      });
    // 🔹 Lấy thuộc tính hiện tại của ứng dụng
    const props = existingApp.getProps();
    // 🔹 Tạo ứng dụng mới với dữ liệu cập nhật
    const newApplication = ApplicationEntity.create({
      ...props,
      position: position,
    });
    // 🔹 Cập nhật ứng dụng trong repository và trả về kết quả
    this.applicationReposity.update(newApplication);
    return existingApp;
  }
}
