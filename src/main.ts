import { AppContainer } from "@core/app-container";
import { APPLICATION_USE_CASE } from "@core/app.symbols";
import { CalculateLayoutInteractor } from "@core/application/use-case/interactors/calculate-layout.interactor";
import { CreateApplicationInteractor } from "@core/application/use-case/interactors/create-application.interactor";
import { GetApplicationsInteractor } from "@core/application/use-case/interactors/get-application.interactor";
import { GetLayoutInteractor } from "@core/application/use-case/interactors/get-layout.interactor";
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
    calculateLayoutUseCase.execute();
    logger.debug("getLayoutUseCase: ", getLayoutUseCase.execute());
    logger.log("Metanode application successfully started");

    // TEST APPLICATION CORE BESINEES
    const createApplicationUseCase = app.get<CreateApplicationInteractor>(
      APPLICATION_USE_CASE.CREATE_APPLICATION_USE_CASE
    );
    const application = createApplicationUseCase.execute({
      id: 1,
      name: "Dapp 1",
      logo: "https://",
      url: "https://",
      type: 1,
      page: 0,
      position: {
        width: 1,
        height: 1,
        x: 0,
        y: 0,
      },
    });
    logger.debug("🌼 Create Application entity success!", application);
    const getApplicationsUseCase = app.get<GetApplicationsInteractor>(
      APPLICATION_USE_CASE.GET_APPLICATIONS_USE_CASE
    );
    logger.debug(
      "🌼 Get Applications entity success!",
      getApplicationsUseCase.execute()
    );
  } catch (error) {
    logger.error("Application fail", error);
  }
}

bootstrap();
