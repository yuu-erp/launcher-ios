import { ApplicationModule } from "./core/application/application.module";
import { BaseContainer } from "./core/infrastructure/di";
import { InfrastructureModule } from "./core/infrastructure/infrastructure.module";
import { ApplicationModule as ApplicationDappModule } from "./modules/application/application.module";
export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCore();
    this.initializeModule();
  }

  private initializeCore() {
    this.provideApplication();
    this.provideInfrastructure();
  }

  private initializeModule() {
    this.provideApplicationModule();
  }

  private provideApplication() {
    this.load(new ApplicationModule());
  }

  private provideInfrastructure() {
    this.load(new InfrastructureModule());
  }

  // MODULE
  private provideApplicationModule() {
    this.load(new ApplicationDappModule());
  }
}
