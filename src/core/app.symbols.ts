// core/application
export const APPLICATION_SERVICE = {
  LAYOUT_SERVICE: Symbol.for("LayoutService"),
};

export const APPLICATION_USE_CASE = {
  CALCULATE_LAYOUT_USE_CASE: Symbol.for("CalculateLayoutInteractor"),
  GET_LAYOUT_USE_CASE: Symbol.for("GetLayoutInteractor"),
  // APPLICATION
  GET_APPLICATIONS_USE_CASE: Symbol.for("GetApplicationsInteractor"),
  CREATE_APPLICATION_USE_CASE: Symbol.for("CreateApplicationInteractor"),
  UPDATE_APPLICATION_USE_CASE: Symbol.for("UpdateApplicationInteractor"),
  DELETE_APPLICATION_USE_CASE: Symbol.for("DeleteApplicationInteractor"),
  MOVE_APPLICATION_USE_CASE: Symbol.for("MoveApplicationInteractor"),
  GROUP_APPLICATION_USE_CASE: Symbol.for("GroupApplicationInteractor"),
};

export const INFRASTRUCTURE = {
  IN_MEMORY_STORAGE: Symbol.for("InMemoryStorage"),
  LAYOUT_STORAGE: Symbol.for("LayoutStorage"),
  APPLICATION_STORAGE: Symbol.for("ApplicationImplReposity"),
};

export const MODULE = {
  APPLICATION_SERVICE: Symbol.for("ApplicationService"),
  APPLICATION_CONTROLLER: Symbol.for("ApplicationController"),
};
