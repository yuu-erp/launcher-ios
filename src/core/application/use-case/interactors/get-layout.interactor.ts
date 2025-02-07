import { ILayout } from "@core/domain/types/layout.types";
import { UseCase } from "@core/domain/use-cases.port.base";
import { GetLayoutOutPort } from "../port/get-layout.out-port";
import { inject, injectable } from "inversify";
import { INFRASTRUCTURE } from "@core/app.symbols";

@injectable()
export class GetLayoutInteractor implements UseCase<unknown, ILayout> {
  constructor(
    @inject(INFRASTRUCTURE.LAYOUT_STORAGE)
    private readonly getLayoutPort: GetLayoutOutPort
  ) {}

  execute(): ILayout {
    return this.getLayoutPort.find();
  }
}
