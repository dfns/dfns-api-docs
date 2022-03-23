import {
  IsoDatetime,
  EntityId,
  DocumentSnapshot,
  BadRequestError,
  EntityNotFoundError,
} from '../Foundations'

// FIXME: Missing documentation for CallbackEvent
export type CallbackEvent = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for callbackSubscriptionId
  callbackSubscriptionId: EntityId

  // FIXME: Missing documentation for kind
  kind: CallbackEventKind

  // FIXME: Missing documentation for documentSnapshot
  documentSnapshot: DocumentSnapshot

  // FIXME: Missing documentation for timestampUtc
  timestampUtc?: IsoDatetime

  // FIXME: Missing documentation for status
  status: CallbackEventStatus
}

// FIXME: Missing documentation for CallbackSubscription
export type CallbackSubscription = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for eventKind
  eventKind: CallbackEventKind

  // FIXME: Missing documentation for url
  url: string

  // FIXME: Missing documentation for statusFilter
  statusFilter?: string[]

  // FIXME: Missing documentation for tagsFilter
  tagsFilter?: string[]
}

// FIXME: Missing documentation for CallbackEventKind
export enum CallbackEventKind {
  // FIXME: Missing documentation for Payment
  Payment = 'Payment',

  // FIXME: Missing documentation for PolicyExecution
  PolicyExecution = 'PolicyExecution',
}

// FIXME: Missing documentation for CallbackEventStatus
export enum CallbackEventStatus {
  // FIXME: Missing documentation for Sent
  Sent = 'Sent',

  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for CallbackStatus
export enum CallbackStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',

  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}
