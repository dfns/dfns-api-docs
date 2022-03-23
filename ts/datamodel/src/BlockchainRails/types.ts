import { EntityId } from '../Foundations'

// FIXME: Missing documentation for CreateKeychainAttempt
export type CreateKeychainAttempt = {
  // FIXME: Missing documentation for parties
  parties: number

  // FIXME: Missing documentation for threshold
  threshold: number

  // FIXME: Missing documentation for accountId
  accountId: EntityId
}

// FIXME: Missing documentation for CreateKeychainStatus
export enum CreateKeychainStatus {
  // FIXME: Missing documentation for Success
  Success = 'Success',

  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}
