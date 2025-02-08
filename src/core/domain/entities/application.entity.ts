import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
} from "@core/exceptions";
import { invariant } from "@techmely/utils";
import { ApplicationType } from "../enums/application.enums";
import { ApplicationCreatedDomainEvent } from "../events/application-created.event";
import { ApplicationProps } from "../types";
import { AggregateRoot } from "./aggregate.base";
import { UniqueEntityID } from "./unique-entity";

export class ApplicationEntity extends AggregateRoot<ApplicationProps> {
  static create(createProps: ApplicationProps) {
    const id = new UniqueEntityID(createProps.id);
    const props = { ...createProps };
    const application = new ApplicationEntity({ id, props });
    application.addEvent(
      new ApplicationCreatedDomainEvent({
        aggregateId: id,
        ...props,
        _metadata: {
          timestamp: Date.now(),
        },
      })
    );
    return application;
  }

  validate(): void {
    const { name, position, type, page } = this.getProps();
    invariant(
      name && name.trim() !== "",
      new ArgumentNotProvidedException("Application name is required")
    );
    invariant(
      page != null && typeof page === "number",
      new ArgumentNotProvidedException(
        "Application page is required and must be a number"
      )
    );
    invariant(
      position.width > 0,
      new ArgumentNotProvidedException("Position width must be greater than 0")
    );
    invariant(
      position.height > 0,
      new ArgumentNotProvidedException("Position height must be greater than 0")
    );
    invariant(
      position.x != null && typeof position.x === "number",
      new ArgumentNotProvidedException("Position x must be greater than 0")
    );
    invariant(
      position.y != null && typeof position.y === "number",
      new ArgumentNotProvidedException("Position y must be greater than 0")
    );
    invariant(
      Object.values(ApplicationType).includes(type),
      new ArgumentInvalidException("Invalid application type")
    );
  }

  isGroup(): boolean {
    return this.getProps().type === ApplicationType.Group;
  }

  isUtility(): boolean {
    return this.getProps().type === ApplicationType.Utility;
  }

  isApplication(): boolean {
    return this.getProps().type === ApplicationType.Application;
  }
}
