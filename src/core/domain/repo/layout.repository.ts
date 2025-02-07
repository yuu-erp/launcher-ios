import { ILayout } from "../types/layout.types";

export interface ILayoutRepository {
  insert(payload: ILayout): void;
  getAll(): ILayout | null;
}
