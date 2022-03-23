import {
  Epoch,
  BlockchainAddress,
  Amount,
  PublicKey,
  Tag,
  EntityId,
  IsoDate,
  IsoDatetime,
  BadRequestError,
  EntityNotFoundError,
  PaymentRequiredError,
  DuplicateError,
} from '../Foundations'

// FIXME: Missing documentation for Signature
export type Signature = {
  // FIXME: Missing documentation for r
  r: string

  // FIXME: Missing documentation for s
  s: string

  // FIXME: Missing documentation for recid
  recid: number
}

// FIXME: Missing documentation for PublicKeyRecord
export type PublicKeyRecord = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for publicKey
  publicKey: PublicKey

  // FIXME: Missing documentation for signerIds
  signerIds: string[]

  // FIXME: Missing documentation for groupThreshold
  groupThreshold: number

  // FIXME: Missing documentation for groupSize
  groupSize: number

  // FIXME: Missing documentation for tags
  tags?: Tag[]

  // FIXME: Missing documentation for isEddsa
  isEddsa: boolean
}

// FIXME: Missing documentation for WalletBalance
export type WalletBalance = {
  // FIXME: Missing documentation for walletId
  walletId: string

  // FIXME: Missing documentation for asset
  asset: string

  // FIXME: Missing documentation for balance
  balance: Amount

  // FIXME: Missing documentation for timestamp
  timestamp: Epoch
}

// FIXME: Missing documentation for WalletAddress
export type WalletAddress = {
  // FIXME: Missing documentation for walletId
  walletId: string

  // FIXME: Missing documentation for asset
  asset: string

  // FIXME: Missing documentation for address
  address: BlockchainAddress
}

// FIXME: Missing documentation for WalletTx
export type WalletTx = {
  // FIXME: Missing documentation for from
  from: BlockchainAddress

  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for asset
  asset: string

  // FIXME: Missing documentation for txHash
  txHash: string

  // FIXME: Missing documentation for timestamp
  timestamp: Epoch

  // FIXME: Missing documentation for status
  status: string

  // FIXME: Missing documentation for blockHash
  blockHash: string

  // FIXME: Missing documentation for blockHeight
  blockHeight: string

  // FIXME: Missing documentation for confirmations
  confirmations?: number
}

// FIXME: Missing documentation for CreateSignatureInput
export type CreateSignatureInput = {
  // FIXME: Missing documentation for hash
  hash: string
}

// FIXME: Missing documentation for CreatePublicKeyInput
export type CreatePublicKeyInput = {
  // FIXME: Missing documentation for externalId
  externalId?: string

  // FIXME: Missing documentation for assetAccountId
  assetAccountId: EntityId

  // FIXME: Missing documentation for groupThreshold
  groupThreshold: number

  // FIXME: Missing documentation for groupSize
  groupSize: number

  // FIXME: Missing documentation for isEddsa
  isEddsa: boolean

  // FIXME: Missing documentation for tags
  tags?: Tag[]
}

// FIXME: Missing documentation for CreateWalletTxInput
export type CreateWalletTxInput = {
  // FIXME: Missing documentation for to
  to: BlockchainAddress

  // FIXME: Missing documentation for amount
  amount: Amount

  // FIXME: Missing documentation for asset
  asset: string
}

// FIXME: Missing documentation for PublicKeyStatus
export enum PublicKeyStatus {
  // FIXME: Missing documentation for Active
  Active = 'Active',

  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',

  // FIXME: Missing documentation for Compromised
  Compromised = 'Compromised',
}
