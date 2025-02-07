import { Entity } from "@core/domain/entities";

export interface Mapper<
  DomainEntity extends Entity<unknown>,
  DbRecord,
  Response = unknown
> {
  toPersistence(entity: DomainEntity): DbRecord;
  toDomain(record: DbRecord): DomainEntity;
  toResponse(entity: DomainEntity): Response;
}
