import { ValueObject } from "../entities";

export interface IApplicationMetadata {}
export class ApplicationMetadata extends ValueObject<IApplicationMetadata> {
  protected validate(props: IApplicationMetadata): void {}
}
