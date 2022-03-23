import {
  EntityId,
  IsoDatetime,
  BadRequestError,
  PaymentRequiredError,
  EntityNotFoundError,
  DfnsError,
} from '../Foundations'
import { ApiKeyRecord, ApiKeyStatus } from './types'
import { ApiKeyActionNotAllowed } from './errors'

// Response for CreateApiKey

export type CreateApiKeyError = {
  error: ApiKeyActionNotAllowed
}

export type CreateApiKeyResponse = ApiKeyRecord | CreateApiKeyError

// Response for RetrieveActiveApiKeys

export type RetrieveActiveApiKeysError = {
  error: any
}

export type RetrieveActiveApiKeysResponse =
  | ApiKeyRecord
  | RetrieveActiveApiKeysError

// Response for RevokeApiKey

export type RevokeApiKeyError = {
  error: any
}

export type RevokeApiKeyResponse = ApiKeyRecord | RevokeApiKeyError
