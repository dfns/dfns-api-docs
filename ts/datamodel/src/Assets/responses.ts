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
import {
  PaymentInitiation,
  BlockchainWalletAddress,
  DfnsAssetAccount,
  AssetAccount,
  Payment,
  AssetAccountAuthorization,
  AssetAccountBalance,
  UpdateAssetAccountPayload,
  CreateAssetAccountInput,
  CreatePaymentInput,
  PaymentInstrument,
  PaymentInstrumentKind,
  PaymentInitiationStatus,
  AssetAccountStatus,
  PaymentStatus,
  AssetAccountAuthorizationKind,
  AssetAccountPermissions,
} from './types'
import { InsufficientFunds } from './errors'

// Response for InitiatePayment

export type InitiatePaymentError = {
  error: BadRequestError | PaymentRequiredError | InsufficientFunds
}

export type InitiatePaymentResponse = Payment | InitiatePaymentError

// Response for CreateAssetAccount

export type CreateAssetAccountError = {
  error: PaymentRequiredError
}

export type CreateAssetAccountResponse = AssetAccount | CreateAssetAccountError

// Response for ReadAssetAccountById

export type ReadAssetAccountByIdError = {
  error: any
}

export type ReadAssetAccountByIdResponse =
  | AssetAccount
  | ReadAssetAccountByIdError

// Response for ListAssetAccounts

export type ListAssetAccountsError = {
  error: any
}

export type ListAssetAccountsResponse = AssetAccount | ListAssetAccountsError

// Response for ArchiveAssetAccount

export type ArchiveAssetAccountError = {
  error: EntityNotFoundError
}

export type ArchiveAssetAccountResponse =
  | AssetAccount
  | ArchiveAssetAccountError

// Response for ReadAssetAccountBalanceById

export type ReadAssetAccountBalanceByIdError = {
  error: any
}

export type ReadAssetAccountBalanceByIdResponse =
  | AssetAccountBalance
  | ReadAssetAccountBalanceByIdError
