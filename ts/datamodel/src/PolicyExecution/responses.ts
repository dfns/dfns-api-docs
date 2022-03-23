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
import {
  PolicyExecution,
  PolicyControlExecution,
  ExecutionCertificate,
  AppraisableActivity,
  ExecutionStatus,
} from './types'
import { PolicyApprovalNotAllowedError } from './errors'

// Response for ReadPolicyCertificateByHash

export type ReadPolicyCertificateByHashError = {
  error: any
}

export type ReadPolicyCertificateByHashResponse =
  | ExecutionCertificate
  | ReadPolicyCertificateByHashError
