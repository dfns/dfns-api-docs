import {
  EntityId,
  IsoDate,
  IsoDatetime,
  Username,
  GroupOrPermission,
  Amount,
  Tag,
  AssetSymbol,
  InitiatorKind,
  DocumentSnapshot,
  DfnsError,
  BadRequestError,
  PaymentRequiredError,
  EntityExpiredError,
  EntityNotFoundError,
  DuplicateError,
} from '../Foundations'
import {
  Policy,
  NotifyAndAuditPolicyControl,
  RequestApprovalPolicyControl,
  PolicyRule,
  PolicyControl,
  CreateAmountLimitPrConf,
  UpdateAmountLimitPrConf,
  CreateOutgoingVelocityPrConf,
  CreateSiphoningPrConf,
  SiphoningPrConf,
  UpdateSiphonPrConf,
  AmountLimitPrConf,
  UpdateOutgoingVelocityPrConf,
  OutgoingVelocityPrConf,
  CreateRequestApprovalPcConf,
  UpdateRequestApprovalPcConf,
  CreateNotifyAndAuditPcConf,
  UpdateNotifyAndAuditPcConf,
  AssetAccountSelector,
  PolicyManagementPreferences,
  Create,
  UpdatePolicyRuleInput,
  CreatePolicyInput,
  UpdatePolicyInput,
  CreatePolicyControlInput,
  UpdatePolicyControlInput,
  CreatePolicyRuleInput,
  CreatePolicyRuleConfiguration,
  UpdatePolicyRuleConfiguration,
  UpdatePolicyControlConfiguration,
  CreatePolicyControlConfiguration,
  PolicyRuleConfiguration,
  PolicyActivityKind,
  PolicyStatus,
  PolicyControlKind,
  PolicyRuleKind,
} from './types'

// Response for CreatePolicy

export type CreatePolicyError = {
  error: BadRequestError
}

export type CreatePolicyResponse = Policy | CreatePolicyError

// Response for UpdatePolicy

export type UpdatePolicyError = {
  error: BadRequestError | EntityNotFoundError
}

export type UpdatePolicyResponse = Policy | UpdatePolicyError

// Response for ReadyPolicyById

export type ReadyPolicyByIdError = {
  error: EntityNotFoundError
}

export type ReadyPolicyByIdResponse = Policy | ReadyPolicyByIdError

// Response for ListPolicies

export type ListPoliciesError = {
  error: any
}

export type ListPoliciesResponse = Policy | ListPoliciesError

// Response for ArchivePolicy

export type ArchivePolicyError = {
  error: EntityNotFoundError
}

export type ArchivePolicyResponse = Policy | ArchivePolicyError

// Response for CreatePolicyControl

export type CreatePolicyControlError = {
  error: BadRequestError
}

export type CreatePolicyControlResponse =
  | PolicyControl
  | CreatePolicyControlError

// Response for UpdatePolicyControl

export type UpdatePolicyControlError = {
  error: BadRequestError | EntityNotFoundError
}

export type UpdatePolicyControlResponse =
  | PolicyControl
  | UpdatePolicyControlError

// Response for ReadyPolicyControlById

export type ReadyPolicyControlByIdError = {
  error: EntityNotFoundError
}

export type ReadyPolicyControlByIdResponse =
  | PolicyControl
  | ReadyPolicyControlByIdError

// Response for ListPolicyControls

export type ListPolicyControlsError = {
  error: any
}

export type ListPolicyControlsResponse = PolicyControl | ListPolicyControlsError

// Response for ArchivePolicyControl

export type ArchivePolicyControlError = {
  error: EntityNotFoundError
}

export type ArchivePolicyControlResponse =
  | PolicyControl
  | ArchivePolicyControlError

// Response for CreatePolicyRule

export type CreatePolicyRuleError = {
  error: BadRequestError
}

export type CreatePolicyRuleResponse = Policy | CreatePolicyRuleError

// Response for UpdatePolicyRule

export type UpdatePolicyRuleError = {
  error: BadRequestError | EntityNotFoundError
}

export type UpdatePolicyRuleResponse = Policy | UpdatePolicyRuleError

// Response for ReadyPolicyRuleById

export type ReadyPolicyRuleByIdError = {
  error: EntityNotFoundError
}

export type ReadyPolicyRuleByIdResponse = Policy | ReadyPolicyRuleByIdError

// Response for ListPolicyRules

export type ListPolicyRulesError = {
  error: any
}

export type ListPolicyRulesResponse = Policy | ListPolicyRulesError

// Response for ArchivePolicyRule

export type ArchivePolicyRuleError = {
  error: EntityNotFoundError
}

export type ArchivePolicyRuleResponse = Policy | ArchivePolicyRuleError
