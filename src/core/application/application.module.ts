import { APPLICATION_SERVICE, APPLICATION_USE_CASE } from "@core/app.symbols";
import { BaseModule } from "@core/infrastructure/di";
import { interfaces } from "inversify";
import { LayoutService } from "./services/layout.service";
import { CalculateLayoutInteractor } from "./use-case/interactors/calculate-layout.interactor";
import { GetLayoutInteractor } from "./use-case/interactors/get-layout.interactor";

export class ApplicationModule extends BaseModule {
  constructor() {
    super((bind: interfaces.Bind) => {
      this.init(bind);
    });
  }

  public init(bind: interfaces.Bind): void {
    this.layoutService(bind);
    this.calculateLayoutUsecase(bind);
    this.getLayoutUsecase(bind);
  }

  private layoutService(bind: interfaces.Bind): void {
    bind<LayoutService>(APPLICATION_SERVICE.LAYOUT_SERVICE).to(LayoutService);
  }

  private calculateLayoutUsecase(bind: interfaces.Bind): void {
    bind<CalculateLayoutInteractor>(
      APPLICATION_USE_CASE.CALCULATE_LAYOUT_USE_CASE
    ).to(CalculateLayoutInteractor);
  }
  private getLayoutUsecase(bind: interfaces.Bind): void {
    bind<GetLayoutInteractor>(APPLICATION_USE_CASE.GET_LAYOUT_USE_CASE).to(
      GetLayoutInteractor
    );
  }
}
