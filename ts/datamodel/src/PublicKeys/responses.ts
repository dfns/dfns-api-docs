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
import {
  Signature,
  PublicKeyRecord,
  WalletBalance,
  WalletAddress,
  WalletTx,
  CreateSignatureInput,
  CreatePublicKeyInput,
  CreateWalletTxInput,
  PublicKeyStatus,
} from './types'

// Response for ReadPublicKey

export type ReadPublicKeyError = {
  error: EntityNotFoundError
}

export type ReadPublicKeyResponse = PublicKeyRecord | ReadPublicKeyError

// Response for CreatePublicKey

export type CreatePublicKeyError = {
  error: any
}

export type CreatePublicKeyResponse = PublicKeyRecord | CreatePublicKeyError

// Response for CreateSignature

export type CreateSignatureError = {
  error: EntityNotFoundError | PaymentRequiredError
}

export type CreateSignatureResponse = Signature | CreateSignatureError

// Response for ReadWalletBalances

export type ReadWalletBalancesError = {
  error: EntityNotFoundError | BadRequestError
}

export type ReadWalletBalancesResponse = WalletBalance | ReadWalletBalancesError

// Response for ReadWalletAddress

export type ReadWalletAddressError = {
  error: EntityNotFoundError | BadRequestError
}

export type ReadWalletAddressResponse = WalletAddress | ReadWalletAddressError

// Response for ReadWalletTransactions

export type ReadWalletTransactionsError = {
  error: EntityNotFoundError | BadRequestError
}

export type ReadWalletTransactionsResponse =
  | WalletTx
  | ReadWalletTransactionsError

// Response for CreateWalletTransaction

export type CreateWalletTransactionError = {
  error: EntityNotFoundError | BadRequestError
}

export type CreateWalletTransactionResponse =
  | WalletTx
  | CreateWalletTransactionError
