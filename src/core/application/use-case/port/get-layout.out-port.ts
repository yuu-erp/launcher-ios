import { ILayout } from "@core/domain/types/layout.types";

export abstract class GetLayoutOutPort {
  abstract getAll(): ILayout;
}
