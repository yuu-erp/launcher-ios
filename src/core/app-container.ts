import { ApplicationModule } from "./application/application.module";
import { BaseContainer } from "./infrastructure/di";
import { InfrastructureModule } from "./infrastructure/infrastructure.module";

export class AppContainer extends BaseContainer {
  constructor() {
    super({
      defaultScope: "Singleton",
      skipBaseClassChecks: true,
    });
  }

  public init(): void {
    this.initializeCore();
  }

  private initializeCore() {
    this.provideApplication();
    this.provideInfrastructure();
  }

  private provideApplication() {
    this.load(new ApplicationModule());
  }

  private provideInfrastructure() {
    this.load(new InfrastructureModule());
  }
}
