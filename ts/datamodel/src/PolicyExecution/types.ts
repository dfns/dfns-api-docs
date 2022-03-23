import {
  Policy,
  PolicyRule,
  PolicyControl,
  PolicyActivityKind,
} from '../PolicyManagement'
import {
  EntityId,
  IsoDate,
  IsoDatetime,
  DocumentSnapshot,
  Tag,
  Amount,
  InitiatorKind,
  BadRequestError,
  PaymentRequiredError,
  EntityNotFoundError,
  DuplicateError,
  DfnsError,
} from '../Foundations'

// FIXME: Missing documentation for PolicyExecution
export type PolicyExecution = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for kind
  kind: PolicyActivityKind

  // FIXME: Missing documentation for status
  status: ExecutionStatus

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for initiatorKind
  initiatorKind: InitiatorKind

  // FIXME: Missing documentation for initiatingEventId
  initiatingEventId: EntityId

  /**
   * Applied poliies stored along with PolicyExecution status as-raw-json-string. This ensures that even if somebody tampers with policy, the audit log would have actual-literal representation of what was executed.
   *
   */
  documentedPolicies?: DocumentSnapshot[]

  // FIXME: Missing documentation for documentedActivity
  documentedActivity: DocumentSnapshot

  // FIXME: Missing documentation for controlExecutions
  controlExecutions?: PolicyControlExecution[]

  // FIXME: Missing documentation for policyId
  policyId: EntityId
}

// FIXME: Missing documentation for PolicyControlExecution
export type PolicyControlExecution = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for status
  status: ExecutionStatus

  // FIXME: Missing documentation for controlId
  controlId: EntityId

  // FIXME: Missing documentation for dateExecuted
  dateExecuted: IsoDatetime

  // FIXME: Missing documentation for dateFullfiled
  dateFullfiled: IsoDatetime

  // FIXME: Missing documentation for policyExecutionId
  policyExecutionId: EntityId
}

// FIXME: Missing documentation for ExecutionCertificate
export type ExecutionCertificate = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for checksum
  checksum: string

  // FIXME: Missing documentation for initiatingEventId
  initiatingEventId: EntityId

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for appliedPolicies
  appliedPolicies?: Policy[]
}

// FIXME: Missing documentation for AppraisableActivity
export type AppraisableActivity = {}

// FIXME: Missing documentation for ExecutionStatus
export enum ExecutionStatus {
  // FIXME: Missing documentation for Awaiting
  Awaiting = 'Awaiting',

  // FIXME: Missing documentation for Passed
  Passed = 'Passed',

  // FIXME: Missing documentation for Failed
  Failed = 'Failed',

  // FIXME: Missing documentation for Timedout
  Timedout = 'Timedout',
}
