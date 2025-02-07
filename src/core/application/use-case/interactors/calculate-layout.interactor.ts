import { APPLICATION_SERVICE, INFRASTRUCTURE } from "@core/app.symbols";
import { LayoutService } from "@core/application/services/layout.service";
import { UseCase } from "@core/domain/use-cases.port.base";
import { inject, injectable } from "inversify";
import { CalculateLayoutOutPort } from "../port/calculate-layout.out-port";
import { ILayout } from "@core/domain/types";

@injectable()
export class CalculateLayoutInteractor implements UseCase<unknown, ILayout> {
  constructor(
    @inject(APPLICATION_SERVICE.LAYOUT_SERVICE)
    private readonly layoutService: LayoutService,
    @inject(INFRASTRUCTURE.LAYOUT_STORAGE)
    private readonly calculateLayoutPort: CalculateLayoutOutPort
  ) {}

  execute(): ILayout {
    const payload = this.layoutService.execute();
    return this.calculateLayoutPort.insert(payload);
  }
}
