import {
  ArgumentInvalidException,
  ArgumentNotProvidedException,
} from "@core/exceptions";
import { invariant } from "@techmely/utils";
import { ApplicationType } from "../enums/application.enums";
import { ApplicationProps, CreateApplicationProps } from "../types";
import { AggregateRoot } from "./aggregate.base";
import { UniqueEntityID } from "./unique-entity";
import { ApplicationCreatedDomainEvent } from "../events/application-created.event";

export class ApplicationEntity extends AggregateRoot<ApplicationProps> {
  static create(createProps: CreateApplicationProps) {
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
    const { name, position, type } = this.getProps();
    invariant(
      name && name.trim() !== "",
      new ArgumentNotProvidedException("Application name is required")
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
      Object.values(ApplicationType).includes(type),
      new ArgumentInvalidException("Invalid application type")
    );
  }

  isApplication(): boolean {
    return this.getProps().type === ApplicationType.Application;
  }

  isUtility(): boolean {
    return this.getProps().type === ApplicationType.Utility;
  }

  isGroup(): boolean {
    return this.getProps().type === ApplicationType.Group;
  }
}
