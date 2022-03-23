import {
  EntityId,
  IsoDatetime,
  BadRequestError,
  PaymentRequiredError,
  EntityNotFoundError,
  DfnsError,
} from '../Foundations'

// FIXME: Missing documentation for ApiKeyRecord
export type ApiKeyRecord = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for status
  status: ApiKeyStatus

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for authorId
  authorId: EntityId

  // FIXME: Missing documentation for apiKey
  apiKey: string

  // FIXME: Missing documentation for scopes
  scopes?: string[]
}

// FIXME: Missing documentation for ApiKeyStatus
export enum ApiKeyStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',

  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}
