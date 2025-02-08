import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { type IApplicationRepository } from "@core/domain/repo";
import { NotFoundException } from "@core/exceptions";
import {
  UpdateApplicationCommand,
  UpdateApplicationInPort,
} from "../port/update-application.in-port";
import { inject, injectable } from "inversify";
import { INFRASTRUCTURE } from "@core/app.symbols";

@injectable()
export class UpdateApplicationInteractor implements UpdateApplicationInPort {
  constructor(
    @inject(INFRASTRUCTURE.APPLICATION_STORAGE)
    private readonly applicationReposity: IApplicationRepository
  ) {}

  execute(
    request: UpdateApplicationCommand
  ): ApplicationEntity | Promise<ApplicationEntity> {
    // 🔹 Tìm ứng dụng theo ID (cần await vì có thể là bất đồng bộ)
    const existingApp = this.applicationReposity.findByID(request.id);
    if (!existingApp) throw new NotFoundException("Ứng dụng không tồn tại");
    // 🔹 Lấy thuộc tính hiện tại của ứng dụng
    const props = existingApp.getProps();
    // 🔹 Tạo ứng dụng mới với dữ liệu cập nhật
    const newApplication = ApplicationEntity.create({ ...props, ...request });
    // 🔹 Cập nhật ứng dụng trong repository và trả về kết quả
    this.applicationReposity.update(newApplication);
    return newApplication;
  }
}
