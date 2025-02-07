// core/application
export const APPLICATION_SERVICE = {
  LAYOUT_SERVICE: Symbol.for("LayoutService"),
};

export const APPLICATION_USE_CASE = {
  CALCULATE_LAYOUT_USE_CASE: Symbol.for("CalculateLayoutInteractor"),
  GET_LAYOUT_USE_CASE: Symbol.for("GetLayoutUseCase"),
};

export const INFRASTRUCTURE = {
  IN_MEMORY_STORAGE: Symbol.for("InMemoryStorage"),
  LAYOUT_STORAGE: Symbol.for("LayoutStorage"),
};
