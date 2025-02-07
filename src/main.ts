import { AppContainer } from "@core/app-container";
import { APPLICATION_USE_CASE } from "@core/app.symbols";
import { UpdateApplicationEventHandle } from "@core/application/event-handler/update-application.event-handle";
import { CalculateLayoutInteractor } from "@core/application/use-case/interactors/calculate-layout.interactor";
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
    calculateLayoutUseCase.execute();
    logger.log("Metanode application successfully started");
    const event = new Emitter();
    event.on("ApplicationUpdateDomainEvent", (event: any) => {
      new UpdateApplicationEventHandle("huiu").handle(event);
    });
  } catch (error) {
    logger.error("Application fail", error);
  }
}

bootstrap();
