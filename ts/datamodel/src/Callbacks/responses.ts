import {
  IsoDatetime,
  EntityId,
  DocumentSnapshot,
  BadRequestError,
  EntityNotFoundError,
} from '../Foundations'
import {
  CallbackEvent,
  CallbackSubscription,
  CallbackEventKind,
  CallbackEventStatus,
  CallbackStatus,
} from './types'

// Response for CreateCallbackSubscription

export type CreateCallbackSubscriptionError = {
  error: BadRequestError
}

export type CreateCallbackSubscriptionResponse =
  | CallbackSubscription
  | CreateCallbackSubscriptionError

// Response for ReadCallbackSubscriptionById

export type ReadCallbackSubscriptionByIdError = {
  error: EntityNotFoundError
}

export type ReadCallbackSubscriptionByIdResponse =
  | CallbackSubscription
  | ReadCallbackSubscriptionByIdError

// Response for ListCallbackSubscriptions

export type ListCallbackSubscriptionsError = {
  error: any
}

export type ListCallbackSubscriptionsResponse =
  | CallbackSubscription
  | ListCallbackSubscriptionsError

// Response for ArchiveCallbackSubscription

export type ArchiveCallbackSubscriptionError = {
  error: any
}

export type ArchiveCallbackSubscriptionResponse =
  | CallbackSubscription
  | ArchiveCallbackSubscriptionError

// Response for ReadCallbackEventById

export type ReadCallbackEventByIdError = {
  error: EntityNotFoundError
}

export type ReadCallbackEventByIdResponse =
  | CallbackEvent
  | ReadCallbackEventByIdError

// Response for ListCallbackEvents

export type ListCallbackEventsError = {
  error: any
}

export type ListCallbackEventsResponse = CallbackEvent | ListCallbackEventsError
