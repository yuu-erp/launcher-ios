import { ApplicationUpdateDomainEvent } from "@core/domain/events/application-update.event";
import { EventHandler } from "./application-event.handler";

export class UpdateApplicationEventHandle
  implements EventHandler<ApplicationUpdateDomainEvent>
{
  constructor() {}
  async handle(_domainEvent: ApplicationUpdateDomainEvent): Promise<void> {}
}
