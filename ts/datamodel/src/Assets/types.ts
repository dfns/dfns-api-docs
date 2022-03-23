import { PublicKeyStatus } from '../PublicKeys'
import {
  Initiator,
  IsoDate,
  IsoDatetime,
  Amount,
  EntityId,
  PublicKey,
  Tag,
  AssetSymbol,
  Countries,
  DfnsError,
  BadRequestError,
  EntityNotFoundError,
  EntityExpiredError,
  DuplicateError,
  PaymentRequiredError,
  DfnsCertificate,
} from '../Foundations'

// FIXME: Missing documentation for PaymentInitiation
export type PaymentInitiation = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for paymentId
  paymentId: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: EntityId

  // FIXME: Missing documentation for status
  status: PaymentInitiationStatus

  // FIXME: Missing documentation for orgId
  orgId?: EntityId

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for sender
  sender: DfnsAssetAccount

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  // FIXME: Missing documentation for dateInitiated
  dateInitiated: IsoDatetime

  /**
   * In case payment initiation is rejected by the system, this field will contain information about it.
   *
   */
  rejectionReason?: string
}

// FIXME: Missing documentation for BlockchainWalletAddress
export type BlockchainWalletAddress = {
  // FIXME: Missing documentation for kind
  kind: PaymentInstrumentKind.BlockchainWalletAddress

  // FIXME: Missing documentation for address
  address: string
}

// FIXME: Missing documentation for DfnsAssetAccount
export type DfnsAssetAccount = {
  // FIXME: Missing documentation for kind
  kind: PaymentInstrumentKind.DfnsAssetAccount

  // FIXME: Missing documentation for id
  id: EntityId
}

// FIXME: Missing documentation for AssetAccount
export type AssetAccount = {
  // FIXME: Missing documentation for id
  id: EntityId

  /**
   * Field can be used, if account or wallet created in liqidity management, core banking, or other system prior to creating it in the Dfns system.
   *
   * This way account can be linked, and tracked by external system.
   */
  externalId?: EntityId

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for status
  status: AssetAccountStatus

  // FIXME: Missing documentation for address
  address?: string

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for publicKeyId
  publicKeyId?: EntityId

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for name
  name: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdate
  dateUpdate: IsoDatetime

  // FIXME: Missing documentation for groupSize
  groupSize: number

  // FIXME: Missing documentation for groupThreshold
  groupThreshold: number

  // FIXME: Missing documentation for authorizations
  authorizations?: AssetAccountAuthorization[]
}

// FIXME: Missing documentation for Payment
export type Payment = {
  // FIXME: Missing documentation for id
  id: EntityId

  /**
   * Field can be used, if payment  created in liqidity management, core banking, or other system prior to creating it in the Dfns system.
   *
   * This way account can be linked, and tracked by external system.
   */
  externalId?: EntityId

  // FIXME: Missing documentation for status
  status: PaymentStatus

  // FIXME: Missing documentation for orgId
  orgId?: EntityId

  // FIXME: Missing documentation for initiator
  initiator: Initiator

  // FIXME: Missing documentation for assetAccountId
  assetAccountId: EntityId

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for sender
  sender: DfnsAssetAccount

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  /**
   * SWIFT (MT, ISO15022) field. Represents additional information about payment.
   *
   */
  narrative?: string

  // FIXME: Missing documentation for note
  note?: string

  // FIXME: Missing documentation for receiverAddress
  receiverAddress: string

  // FIXME: Missing documentation for policyCertificate
  policyCertificate?: DfnsCertificate

  // FIXME: Missing documentation for dateCreated
  dateCreated?: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated?: IsoDatetime

  // FIXME: Missing documentation for dateExecuted
  dateExecuted?: IsoDatetime

  // FIXME: Missing documentation for dateBroadcasted
  dateBroadcasted?: IsoDatetime

  // FIXME: Missing documentation for dateFirstConfirmed
  dateFirstConfirmed?: IsoDatetime

  // FIXME: Missing documentation for dateConfirmed
  dateConfirmed?: IsoDatetime

  // FIXME: Missing documentation for dateSettled
  dateSettled?: IsoDatetime

  // FIXME: Missing documentation for txHash
  txHash?: string

  // FIXME: Missing documentation for blockHeight
  blockHeight?: number
}

// FIXME: Missing documentation for AssetAccountAuthorization
export type AssetAccountAuthorization = {
  // FIXME: Missing documentation for kind
  kind: AssetAccountAuthorizationKind

  // FIXME: Missing documentation for entityId
  entityId: EntityId

  // FIXME: Missing documentation for permission
  permission: AssetAccountPermissions
}

/**
 * Balance of one asset account.
 */
export type AssetAccountBalance = {
  /**
   * Id of the AssetAccount.
   */
  id: EntityId

  /**
   * Asset Symbol of the account.
   */
  assetSymbol: AssetSymbol

  /**
   * Balance of the account.
   */
  balance: Amount
}

// FIXME: Missing documentation for UpdateAssetAccountPayload
export type UpdateAssetAccountPayload = {
  // FIXME: Missing documentation for status
  status: AssetAccountStatus

  // FIXME: Missing documentation for address
  address?: string

  // FIXME: Missing documentation for publicKey
  publicKey?: string

  // FIXME: Missing documentation for uniqueName
  uniqueName?: string
}

// FIXME: Missing documentation for CreateAssetAccountInput
export type CreateAssetAccountInput = {
  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for groupSize
  groupSize?: number

  // FIXME: Missing documentation for groupThreshold
  groupThreshold?: number

  /**
   * If public key is present, the asset account will be added to an existing signing group.
   */
  publicKey?: PublicKey

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  /**
   * Name chosen for the Asset Account
   */
  name?: string
}

// FIXME: Missing documentation for CreatePaymentInput
export type CreatePaymentInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for assetSymbol
  assetSymbol: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for receiver
  receiver: PaymentInstrument

  // FIXME: Missing documentation for note
  note?: string

  // FIXME: Missing documentation for narrative
  narrative?: string
}

// FIXME: Missing documentation for PaymentInstrument
export type PaymentInstrument = BlockchainWalletAddress | DfnsAssetAccount

// FIXME: Missing documentation for PaymentInstrumentKind
export enum PaymentInstrumentKind {
  // FIXME: Missing documentation for DfnsAssetAccount
  DfnsAssetAccount = 'DfnsAssetAccount',

  // FIXME: Missing documentation for BlockchainWalletAddress
  BlockchainWalletAddress = 'BlockchainWalletAddress',
}

// FIXME: Missing documentation for PaymentInitiationStatus
export enum PaymentInitiationStatus {
  // FIXME: Missing documentation for Initiated
  Initiated = 'Initiated',

  // FIXME: Missing documentation for Canceled
  Canceled = 'Canceled',

  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',
}

// FIXME: Missing documentation for AssetAccountStatus
export enum AssetAccountStatus {
  //Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
  Creating = 'Creating',

  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',

  // FIXME: Missing documentation for Failed
  Failed = 'Failed',
}

// FIXME: Missing documentation for PaymentStatus
export enum PaymentStatus {
  // FIXME: Missing documentation for Initiated
  Initiated = 'Initiated',

  // FIXME: Missing documentation for Declined
  Declined = 'Declined',

  // FIXME: Missing documentation for Approved
  Approved = 'Approved',

  // FIXME: Missing documentation for Executed
  Executed = 'Executed',

  // FIXME: Missing documentation for Rejected
  Rejected = 'Rejected',

  // FIXME: Missing documentation for Broadcasted
  Broadcasted = 'Broadcasted',

  // FIXME: Missing documentation for Confirmed
  Confirmed = 'Confirmed',

  // FIXME: Missing documentation for Settled
  Settled = 'Settled',
}

// FIXME: Missing documentation for AssetAccountAuthorizationKind
export enum AssetAccountAuthorizationKind {
  // FIXME: Missing documentation for Employee
  Employee = 'Employee',

  // FIXME: Missing documentation for Group
  Group = 'Group',

  // FIXME: Missing documentation for ApiKey
  ApiKey = 'ApiKey',
}

// FIXME: Missing documentation for AssetAccountPermissions
export enum AssetAccountPermissions {
  // FIXME: Missing documentation for InitiatePayments
  InitiatePayments = 'InitiatePayments',

  // FIXME: Missing documentation for ReadBalance
  ReadBalance = 'ReadBalance',

  // FIXME: Missing documentation for ReadPublicKey
  ReadPublicKey = 'ReadPublicKey',
}
