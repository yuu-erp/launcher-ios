import { ILayout } from "@core/domain/types/layout.types";

export abstract class CalculateLayoutOutPort {
  abstract insert(payload: ILayout): ILayout;
}
