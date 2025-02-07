import { AppContainer } from "@core/app-container";
import { APPLICATION_USE_CASE } from "@core/app.symbols";
import { CalculateLayoutInteractor } from "@core/application/use-case/interactors/calculate-layout.interactor";
import { GetLayoutInteractor } from "@core/application/use-case/interactors/get-layout.interactor";
import { ApplicationEntity } from "@core/domain/entities/application.entity";
import { ApplicationType } from "@core/domain/enums";
import { Emitter } from "@core/infrastructure/event";
import { Logger } from "@core/infrastructure/logger";

async function bootstrap() {
  const logger = new Logger();
  logger.log("Starting compilation in watch mode...");
  try {
    const app = new AppContainer();
    app.init();
    const calculateLayoutUseCase = app.get<CalculateLayoutInteractor>(
      APPLICATION_USE_CASE.CALCULATE_LAYOUT_USE_CASE
    );
    logger.log("CalculateLayoutInteractor dependencies initialized");
    const getLayoutUseCase = app.get<GetLayoutInteractor>(
      APPLICATION_USE_CASE.GET_LAYOUT_USE_CASE
    );
    logger.log("GetLayoutInteractor dependencies initialized");
    calculateLayoutUseCase.execute();
    console.log(getLayoutUseCase.execute());
    logger.log("Metanode application successfully started");
    const eventBus = new Emitter();
    eventBus.on("ApplicationCreatedDomainEvent", (event: any) => {
      console.log("🔥 Application Created Event Triggered:", event);
    });
    const application = ApplicationEntity.create({
      id: 1,
      name: "My Application",
      logo: "logo.png",
      url: "",
      page: 1,
      position: { width: 200, height: 100, x: 0, y: 0 },
      type: ApplicationType.Application, // Hoặc Utility hoặc Group
    });
    await application.publishEvents(logger, eventBus);
    console.log("application: ", application);
  } catch (error) {
    logger.error("Application fail", error);
  }
}

bootstrap();
