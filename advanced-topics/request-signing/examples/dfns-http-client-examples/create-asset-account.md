# Create an Asset Account <a href="#create-account-example" id="create-account-example"></a>
This example uses the dfnsHttpClient to create a user using delegated registration. The user is
created with a key credential, and once the user is created, the user creates a second key
credential.

## Setup
To run the example, you will need to:
1. create a service account (API Key in the dashboard) or a Personal Access Token (PAT).
1. repalce `<REPLACE_ME>` on line 8 with the Service Account's, or PAT's, token.
1. replace `<REPLACE_ME>` on line 9 with the Service Account's, or PAT's, private key.
1. replace `<REPLACE_ME>` on line 10 with the app ID for your account.

### Notes
This example is not meant for production. In production:
* the service account's token and private key should be stored securely, not hard coded into your application.

## Code
{% tabs %}
{% tab title="createAssetAccount.ts" %}
{% code title="createAssetAccount.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import crypto from 'crypto'

import { ClientSideHttpClient } from './dfnsHttpClient'
import { AssetsClient } from './AssetsClient'
import { AssetSymbol } from './Foundations'
import { SignMessage } from './utils'

const token = '<REPLACE_ME>'
const privateKey = '<REPLACE_ME>'
const appId = '<REPLACE_ME>'
const baseUrl = 'api.dfns.ninja'
const origin = 'https://app.dfns.ninja'
const rpId = 'dfns.ninja'

const signMessage : SignMessage = async (message: Buffer, humanReadableMessage: string) : Promise<Buffer> => {
  console.log(`Signing: ${humanReadableMessage}`)
  return crypto.sign(
    undefined,
    message,
    privateKey
  )
}

export const createAssetAccount = async () : Promise<boolean> => {
  const clientSideClient = new ClientSideHttpClient(
    appId,
    baseUrl,
    origin,
    rpId,
  )

  if (!await clientSideClient.authAsApiKey(
    token,
    signMessage
  )) {
    console.log('Authentication failed.')
    return false
  }

  const assetsClient = new AssetsClient(clientSideClient)

  const assetAccount = await assetsClient.createAssetAccount({
    assetSymbol: AssetSymbol.ETH,
    name: 'Test Account: ' + (new Date()).toISOString(),
  })
  console.log(JSON.stringify(assetAccount, null, 2))

  return true
}
```
{% endcode %}
{% endtab %}
{% tab title="AssetsClient.ts" %}
{% code title="AssetsClient.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import * as Assets from './Assets'
import * as Foundations from './Foundations'
import { HttpClient } from './dfnsHttpClient'
import { RiskKind } from './utils'

class AssetsClient {
  private _httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
  }

  get httpClient(): HttpClient {
    return this._httpClient
  }

  /**
   * Initiates payment in provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within same network and same kind of asset (currency or otherwise). Response either confirms initiation of payment process (success) or gives reason why it’s not possible (failure).
   *
   * ## Notes
   *
   * 1.  This operation can be used to transfer native currencies, ERC20 coins, and FA1.2 coins.
   * 2.  When the payment is in the process of being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the [`GetPaymentById` method](./GetPaymentById.md).
   * 3.  Error `replacement fee too low` can occur with all state-changing operations (such as this one). It happens when the address you are trying to send from has a pending transaction that has not been confirmed yet. When you then try to resend a new transaction it has the same nonce as the unconfirmed one. What that message error means is that the gas price is lower for this new transaction than the gas price on the pending transaction.
   *
   * <!--  -->
   *
   * @param body {CreatePaymentInput}
   * @returns {Promise<Assets.Payment>}
   * @throws {BadRequestError} Payment initiation payload is invalid, and missing parameters. See `description` field for additional details.
   * @throws {PaymentRequiredError} GasStation requires additional top-up.
   * @throws {InsufficientFunds} Asset Account doesn't have sufficient funds to process payment
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async initiatePayment(
    body: Assets.CreatePaymentInput,
    assetAccountId: string
  ): Promise<Assets.Payment> {
    const resourcePath =
      '/assets/asset-accounts/' +
      encodeURIComponent(assetAccountId) +
      '/payments'
    return this.httpClient
      .post<Assets.Payment>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'badPaymentInitiation': {
            const errorMessage =
              `Payment initiation payload is invalid, and missing parameters. See 'description' field for additional details.` ||
              error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'paymentRequired': {
            const errorMessage =
              `GasStation requires additional top-up.` || error.message
            throw new Foundations.PaymentRequiredError(
              errorMessage,
              serviceName
            )
          }
          case 'InsufficientFunds': {
            const errorMessage =
              `Asset Account doesn't have sufficient funds to process payment` ||
              error.message
            throw new Assets.InsufficientFunds(errorMessage, serviceName)
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   *
   * ## GetPaymentById
   *
   * Given an `AssetAccountId` and `PaymentId`, returns a specific `Payment` entity.
   *
   *
   * @returns {Promise<Assets.Payment>}
   * @throws {EntityNotFoundError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getPaymentById(
    assetAccountId: string,
    paymentId: string
  ): Promise<Assets.Payment> {
    const resourcePath =
      '/assets/asset-accounts/' +
      encodeURIComponent(assetAccountId) +
      '/payments/' +
      encodeURIComponent(paymentId) +
      ''
    return this.httpClient
      .get<Assets.Payment>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'NotFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Returns list of all `Payment` entities belonging to the same organization as the caller. Additional filters can be provided; see list of parameters for the operation.
   *
   * @returns {Promise<Assets.Payment>}
   * @throws {EntityNotFoundError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listPayments(assetAccountId: string): Promise<Assets.Payment> {
    const resourcePath =
      '/assets/asset-accounts/' +
      encodeURIComponent(assetAccountId) +
      '/payments'
    return this.httpClient
      .get<Assets.Payment>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'NotFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Creates new `AssetAccount` entity associated with a specific `assetSymbol` (such as `ETH`). Returns new asset ID.
   *
   * ## Notes
   *
   * 1.  If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup).
   *
   * 2.  Error `groupThreshold/groupSize cannot be empty` happens if the default values of `3/7` for `groupThreshold` or `groupSize` respectively didn't get applied server-side. In the rare case that this happens, add those values to the request body in production (and `3/5` on testnets).
   *
   * 3.  Error `parties is larger than the available number of peers` happens whenever you set `groupThreshold` or `groupSize` higher than the number of nodes provisioned by the system (`3/7` on production, `3/5` on testnets).
   *
   * 4.  This operation is asynchronous. We create a record in the database with a `Creating` status and return a response with an asset account ID (starting with `aa-`). In the background, we generate a new public key. When this is done, the record in database is updated with additional information and the status is set to `Enabled`.
   *     If it were synchronous, then the response would have to contain all the information about the created asset account, such as public key. This would mean a significant delay on the initial response, up to the key generation time (10, 15, even 30+ seconds).
   *
   * 5. Our MPC threshold signature protocol requires computationally heavy setup for [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) key generation. With our current deployment, this process takes on average half a minute. If you anticipate a higher key generation throughput, please reach out to us.
   *
   *
   *
   *
   * <!--  -->
   *
   * @param body {CreateAssetAccountInput}
   * @returns {Promise<Assets.AssetAccount>}
   * @throws {EntityNotFoundError} Unable to find `publicKey` provided in request body.
   * @throws {BadRequestError} Unable to create asset account entity with provided configuration
   * @throws {PaymentRequiredError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async createAssetAccount(
    body: Assets.CreateAssetAccountInput
  ): Promise<Assets.AssetAccount> {
    const resourcePath = '/assets/asset-accounts'
    return this.httpClient
      .post<Assets.AssetAccount>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'publicKeyNotFound': {
            const errorMessage =
              `Unable to find 'publicKey' provided in request body.` ||
              error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'invalidConfiguration': {
            const errorMessage =
              `Unable to create asset account entity with provided configuration` ||
              error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'paymentRequired': {
            const errorMessage = `` || error.message
            throw new Foundations.PaymentRequiredError(
              errorMessage,
              serviceName
            )
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Retrieves a particular instance of `AssetAccount` by its `id`. If not found, returns `EntityNotFoundError` with a message indicating which table from which it's missing.
   *
   * ## Notes
   *
   * `address` is derived from the `publicKey` via a blockchain-specific function.
   *
   * <!--  -->
   *
   * @returns {Promise<Assets.AssetAccount>}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getAssetAccountById(
    assetAccountId: string
  ): Promise<Assets.AssetAccount> {
    const resourcePath =
      '/assets/asset-accounts/' + encodeURIComponent(assetAccountId) + ''
    return this.httpClient
      .get<Assets.AssetAccount>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Returns list of all `AssetAccount` entities belonging to the same organization as the caller. Additional filters can be provided; see list of parameters for the operation.
   *
   * <!--  -->
   *
   * @returns {Promise<Assets.AssetAccount[]>}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listAssetAccounts(
    status?: Assets.AssetAccountStatus
  ): Promise<Assets.AssetAccount[]> {
    const resourcePath =
      '/assets/asset-accounts?' +
      (status ? 'status=' + encodeURIComponent(status) : '')
    return this.httpClient
      .get<{ items: Assets.AssetAccount[] }>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response.items)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Deactivates a specific `AssetAccount` entity by its `AssetAccountId` and marks its `status` as `Archived`.
   *
   * @returns {Promise<Assets.AssetAccount>}
   * @throws {EntityNotFoundError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async archiveAssetAccount(
    assetAccountId: string
  ): Promise<Assets.AssetAccount> {
    const resourcePath =
      '/assets/asset-accounts/' + encodeURIComponent(assetAccountId) + ''
    return this.httpClient
      .delete<Assets.AssetAccount>(resourcePath, undefined, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   * Retrieves the balance of the `AssetAccount` by its `id`. Returns an instance of `AssetAccountBalance`.
   *
   * <!--  -->
   *
   * @returns {Promise<Assets.AssetAccountBalance>}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getAssetAccountBalanceById(
    assetAccountId: string
  ): Promise<Assets.AssetAccountBalance> {
    const resourcePath =
      '/assets/asset-accounts/' +
      encodeURIComponent(assetAccountId) +
      '/balance'
    return this.httpClient
      .get<Assets.AssetAccountBalance>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          case 'Access To Resource Not Allowed': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Bad Request': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'Not Found': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }
}

export { AssetsClient }
```
{% endcode %}
{% endtab %}
{% tab title="Foundations.ts" %}
{% code title="Foundations.ts" overflow="wrap" lineNumbers="true" %}
```typescript
export class DfnsError extends Error {
  name: string = 'DfnsError'

  errorName: string = ''
  httpStatus: number = 500
  shouldTriggerInvestigation: boolean = false
  serviceName: string = 'SERVICE_NOT_DEFINED'
  causes?: string[] = []
  isDfnsError: boolean = true

  constructor(
    message: string,
    serviceName: string,
    causes: string[] = [],
    shouldTriggerInvestigation: boolean = true
  ) {
    super(message)

    this.serviceName = serviceName || (process.env.SERVICE_NAME as string)
    this.shouldTriggerInvestigation = shouldTriggerInvestigation
    this.causes = causes

    if (typeof serviceName !== 'string') {
      this.serviceName = 'SERVICE_NOT_DEFINED'
      this.shouldTriggerInvestigation = true
    }
  }

  toErrorObject() {
    const stackTrace = this.stack || ''
    return {
      name: this.name,
      errorName: this.errorName,
      serviceName: this.serviceName,
      message: this.message,
      causes: this.causes,
      shouldTriggerInvestigation: this.shouldTriggerInvestigation,
      httpStatus: this.httpStatus,
      stackTrace,
    }
  }

  toString() {
    return JSON.stringify(this.toErrorObject())
  }
}
export class EntityNotFoundError extends DfnsError {
  name: string = 'EntityNotFoundError'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 404
  errorName: string = 'Not Found'
}
export class ForbiddenError extends DfnsError {
  name: string = 'ForbiddenError'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 403
  errorName: string = 'Access To Resource Not Allowed'
}
export class PaymentRequiredError extends DfnsError {
  name: string = 'PaymentRequiredError'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 402
  errorName: string = 'Payment Required'
}
export class UnauthorizedError extends DfnsError {
  name: string = 'UnauthorizedError'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 401
  errorName: string = 'Unauthorized'
}
export class BadRequestError extends DfnsError {
  name: string = 'BadRequestError'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 400
  errorName: string = 'Bad Request'
}

export type EmployeeInitiator = {
  kind: InitiatorKind.Employee
  orgId: EntityId
  employeeId: EntityId
}

export type DfnsCustomerServiceInitiator = {
  kind: InitiatorKind.DfnsCustomerService
  orgId: EntityId
  apiKeyId: EntityId
}

export type ApiKeyInitiator = {
  kind: InitiatorKind.ApiKey
  orgId: EntityId
  apiKeyId: EntityId
}

export type BlockchainAddressInitiator = {
  kind: InitiatorKind.BlockchainAddress
  address: string
}

export type IsoDatetime = string
export type Amount = string
export type EntityId = string
export type Tag = string
export type PublicKey = string
export type DfnsCertificate = string
export type IntegerPositiveStrict = number
export type Initiator =
  | EmployeeInitiator
  | DfnsCustomerServiceInitiator
  | ApiKeyInitiator
  | BlockchainAddressInitiator

export enum AssetSymbol {
  //Cardano native currency
  ADA = 'ADA',
  //Algorand native currency
  ALGO = 'ALGO',
  //Avalanche
  AVAX = 'AVAX',
  //Bitcoin. The first and the only.
  BTC = 'BTC',
  //Elon’s favorite Dog.
  DOGE = 'DOGE',
  //Near native currency
  NEAR = 'NEAR',
  //Constellation native currency
  DAG = 'DAG',
  //Polkadot native currency
  DOT = 'DOT',
  //Centrifuge native currency
  CFG = 'CFG',
  //Ethereum
  ETH = 'ETH',
  //Goerli Ethereum
  ETH_GOERLI = 'ETH_GOERLI',
  //Sepolia Ethereum
  ETH_SEPOLIA = 'ETH_SEPOLIA',
  //Elrond
  EGLD = 'EGLD',
  //Fantom
  FTM = 'FTM',
  //Optimism
  OP = 'OP',
  //Skale
  sFUEL = 'sFUEL',
  //Arbitrum
  ARB = 'ARB',
  //AirDAO native currency
  AMB = 'AMB',
  //Lite Coin native currency
  LTC = 'LTC',
  //Kusama – Polkadot’s Canary network
  KSM = 'KSM',
  //Tron native currency
  TRX = 'TRX',
  //Stellar native coin.
  XLM = 'XLM',
  //Ripple.
  XRP = 'XRP',
  //Cosmos.
  ATOM = 'ATOM',
  //Polygon
  MATIC = 'MATIC',
  //Mumbai Polygon
  MATIC_MUMBAI = 'MATIC_MUMBAI',
  //Tezos native currency
  XTZ = 'XTZ',
  //Solana
  SOL = 'SOL',
  //Polymesh
  POLYX = 'POLYX',
  //Euro
  EUR = 'EUR',
  //US Dollar
  USD = 'USD',
  //Pound sterling
  GBP = 'GBP',
  //Swiss franc
  CHF = 'CHF',
  //Binance Coin
  BNB = 'BNB',
  //testnet Binance Coin
  BNB_TESTNET = 'BNB_TESTNET',
}

export type AssetSymbolMetadata = {
  label: string
  smallestUnitDecimal: number
}

export enum InitiatorKind {
  Employee = 'Employee',
  DfnsCustomerService = 'DfnsCustomerService',
  DfnsStaff = 'DfnsStaff',
  ApiKey = 'ApiKey',
  BlockchainAddress = 'BlockchainAddress',
}
```
{% endcode %}
{% endtab %}
{% tab title="Assets.ts" %}
{% code title="Assets.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import {
  Initiator,
  IsoDatetime,
  Amount,
  DfnsError,
  EntityId,
  PublicKey,
  Tag,
  AssetSymbol,
  DfnsCertificate,
  IntegerPositiveStrict,
} from './Foundations'

export class InsufficientFunds extends DfnsError {
  name: string = 'InsufficientFunds'
  serviceName: string
  message: string
  causes?: string[]
  shouldTriggerInvestigaton: boolean
  isDfnsError: boolean = true
  httpStatus: number = 422
  errorName: string = 'Insufficient funds in asset account'
}

export type PaymentInitiation = {
  id: EntityId
  paymentId: EntityId
  externalId?: EntityId
  status: PaymentInitiationStatus
  orgId?: EntityId
  initiator: Initiator
  assetSymbol: AssetSymbol
  amount: Amount
  sender: DfnsAssetAccount
  receiver: PaymentInstrument
  dateInitiated: IsoDatetime

  /**
   * In case payment initiation is rejected by the system, this field will contain information about it.
   *
   */
  rejectionReason?: string
}

export type BlockchainWalletAddress = {
  kind: PaymentInstrumentKind.BlockchainWalletAddress
  address: string
}

export type DfnsAssetAccount = {
  kind: PaymentInstrumentKind.DfnsAssetAccount
  id: EntityId
}

export type AssetAccount = {
  /**
   * Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).
   *
   * Multiple tags can be attached to same entity.
   */
  tags?: Tag[]

  /**
   * Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
   */
  externalId?: string

  /**
   * Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
   */
  orgId: EntityId

  id: EntityId

  /**
   * Indicates whether account is ready to be used.
   */
  status: AssetAccountStatus

  /**
   * Blockchain address for a chosen Blockchain network.
   */
  address?: string

  /**
   * `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.
   *
   * Alternatively can be used to verify signatures produced by the platform.
   */
  publicKey?: string

  publicKeyId?: EntityId

  /**
   * # [ENUM]
   *
   * Asset symbol indicating which asset this account is managing. BTC or ETH are obvious examples, but there are thousands of possible symbols. In case of coins (ERC20 and alike) use `COIN.BLOCKCHAIN` syntax, such as USDC.ETH or USDC.SOL to indicate that USDC on Ethereum or USDC on Solana is required. To get a list of all allowed values, send a `CreateAssetAccount` request with the `assetSymbol` field empty.
   */
  assetSymbol: AssetSymbol

  /**
   * Custom name that can be added for an account.
   */
  name: string

  dateCreated: IsoDatetime
  dateUpdate: IsoDatetime
  authorizations?: AssetAccountAuthorization[]
}

export type Payment = {
  /**
   * Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).
   *
   * Multiple tags can be attached to same entity.
   */
  tags?: Tag[]

  /**
   * Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
   */
  externalId?: string

  /**
   * Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
   */
  orgId: EntityId

  id: EntityId
  status: PaymentStatus
  initiator: Initiator
  assetAccountId: EntityId
  assetSymbol: AssetSymbol
  amount: Amount
  sender: PaymentInstrument
  receiver: PaymentInstrument

  /**
   * SWIFT (MT, ISO15022) field. Represents additional information about payment.
   *
   */
  narrative?: string

  note?: string
  receiverAddress: string
  policyCertificate?: DfnsCertificate
  dateCreated: IsoDatetime
  dateUpdated: IsoDatetime
  dateExecuted?: IsoDatetime
  dateBroadcasted?: IsoDatetime
  dateFirstConfirmed?: IsoDatetime
  dateConfirmed?: IsoDatetime
  dateSettled?: IsoDatetime
  txHash?: string
  blockHeight?: number
  direction: PaymentDirection
  fee?: Amount
}

export type AssetAccountAuthorization = {
  kind: AssetAccountAuthorizationKind
  entityId: EntityId
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

  maxUnitBalance: Amount
}

export type UpdateAssetAccountPayload = {
  /**
   * Indicates whether account is ready to be used.
   */
  status: AssetAccountStatus

  /**
   * Blockchain address for a chosen Blockchain network.
   */
  address?: string

  /**
   * `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.
   *
   * Alternatively can be used to verify signatures produced by the platform.
   */
  publicKey?: string

  /**
   * Custom name that can be added for an account.
   */
  name?: string
}

export type CreateAssetAccountInput = {
  /**
   * # [ENUM]
   *
   * Asset symbol indicating which asset this account is managing. BTC or ETH are obvious examples, but there are thousands of possible symbols. In case of coins (ERC20 and alike) use `COIN.BLOCKCHAIN` syntax, such as USDC.ETH or USDC.SOL to indicate that USDC on Ethereum or USDC on Solana is required. To get a list of all allowed values, send a `CreateAssetAccount` request with the `assetSymbol` field empty.
   */
  assetSymbol: AssetSymbol

  groupSize?: IntegerPositiveStrict
  groupThreshold?: IntegerPositiveStrict

  /**
   * `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.
   *
   * Alternatively can be used to verify signatures produced by the platform.
   */
  publicKey?: PublicKey

  externalId?: string
  tags?: Tag[]

  /**
   * Custom name that can be added for an account.
   */
  name?: string
}

export type CreatePaymentInput = {
  externalId?: string
  assetSymbol: AssetSymbol
  amount: Amount
  receiver: PaymentInstrument
  note?: string
  narrative?: string
}

export type PaymentInstrument = BlockchainWalletAddress | DfnsAssetAccount

export enum PaymentInstrumentKind {
  DfnsAssetAccount = 'DfnsAssetAccount',
  BlockchainWalletAddress = 'BlockchainWalletAddress',
}

export enum PaymentInitiationStatus {
  Initiated = 'Initiated',
  Canceled = 'Canceled',
  Rejected = 'Rejected',
}

export enum AssetAccountStatus {
  //Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
  Creating = 'Creating',
  Enabled = 'Enabled',
  Failed = 'Failed',
}

export enum PaymentStatus {
  //Payment order is received and initiated. It will execute later.
  Initiated = 'Initiated',
  //Some Policy blocked the payment, it is not approved.
  Rejected = 'Rejected',
  //Payment passed Policies, it is approved.
  Approved = 'Approved',
  //Payment is successfully Executed and Broadcasted on the blockchain.
  Executed = 'Executed',
  //Payment tried to execute, but failed doing so.
  Failed = 'Failed',
  //Payment transaction is confirmed on the blockchain.
  Confirmed = 'Confirmed',
}

export enum AssetAccountAuthorizationKind {
  Employee = 'Employee',
  Group = 'Group',
  ApiKey = 'ApiKey',
}

export enum AssetAccountPermissions {
  InitiatePayments = 'InitiatePayments',
  ReadBalance = 'ReadBalance',
  ReadPublicKey = 'ReadPublicKey',
}

export enum PaymentDirection {
  Incoming = 'Incoming',
  Outgoing = 'Outgoing',
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
