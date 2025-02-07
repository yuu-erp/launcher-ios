import { ApplicationType } from "../enums";
import { IApplicationCreatedDE } from "../types";
import { ApplicationMetadata } from "../value-objects";
import { ApplicationCreatedDomainEvent } from "./application-created.event";
import { DomainEvent, IDomainEvent } from "./domain-event.base";

export class ApplicationUpdateDomainEvent
  extends DomainEvent
  implements IApplicationCreatedDE
{
  name: string;
  logo: string;
  url: string;
  page: number;
  position: { width: number; height: number; x: number; y: number };
  type: ApplicationType;
  metadata?: ApplicationMetadata;

  constructor(props: IDomainEvent<ApplicationCreatedDomainEvent>) {
    super(props);
    this.name = props.name;
    this.logo = props.logo;
    this.url = props.url;
    this.page = props.page;
    this.position = props.position;
    this.type = props.type;
  }
}
