import { invariant } from "@techmely/utils";
import { ArgumentNotProvidedException } from "../../exceptions/exceptions";
import { generatePrefixId } from "../../helpers/ids";
import { UniqueEntityID } from "../entities/unique-entity";

type DomainEventMetadata = {
  /** Timestamp when this domain event occurred */
  readonly timestamp: number;

  /** ID for correlation purposes (for Integration Events,logs correlation, etc).
   */
  readonly correlationId?: string;

  /**
   * Causation id used to reconstruct execution order if needed
   */
  readonly causationId?: string;

  /**
   * User ID for debugging and logging purposes
   */
  readonly appId?: string;
};

export type IDomainEvent<T> = Omit<T, "id" | "_metadata"> & {
  _metadata: DomainEventMetadata;
  aggregateId: UniqueEntityID;
};

export abstract class DomainEvent {
  readonly id: UniqueEntityID;
  readonly aggregateId: UniqueEntityID;
  readonly _metadata: DomainEventMetadata;

  constructor(domainEvent: IDomainEvent<unknown>) {
    invariant(
      domainEvent,
      new ArgumentNotProvidedException("Domain event props should not be empty")
    );
    invariant(
      domainEvent._metadata &&
        typeof domainEvent._metadata.timestamp === "number",
      new ArgumentNotProvidedException(
        "Timestamp should be provided in domain event metadata"
      )
    );
    this.id = new UniqueEntityID(generatePrefixId("de"));
    this.aggregateId = domainEvent.aggregateId;
    this._metadata = {
      correlationId: domainEvent?._metadata?.correlationId,
      causationId: domainEvent?._metadata?.causationId,
      timestamp: domainEvent?._metadata?.timestamp,
      appId: domainEvent?._metadata?.appId,
    };
  }
}
