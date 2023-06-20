# Create a Wallet <a href="#create-wallet-example" id="create-wallet-example"></a>
This example uses the dfnsHttpClient to create a wallet.

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
{% tab title="createWallet.ts" %}
{% code title="createWallet.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import crypto from 'crypto'

import { ClientSideHttpClient } from './dfnsHttpClient'
import { WalletsClient } from './WalletsClient'
import { NewUserCredentials, SignMessage } from './utils'
import { BlockchainNetwork } from './Foundations'

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

export const createWallet = async () : Promise<boolean> => {
  const clientSideClient = new ClientSideHttpClient(
    appId,
    baseUrl,
    origin,
    rpId,
  )

  if (!await clientSideClient.authAsApiKey(
    token,
    signMessage,
    createUserCredentials
  )) {
    console.log('Authentication failed.')
    return false
  }

  const walletsClient = new WalletsClient(clientSideClient)

  const wallet = await walletsClient.createWallet({
    network: BlockchainNetwork.MATIC_MUMBAI,
    name: 'Test Wallet: ' + (new Date()).toISOString(),
  })
  console.log(JSON.stringify(wallet, null, 2))

  return true
}
```
{% endcode %}
{% endtab %}
{% tab title="WalletsClient.ts" %}
{% code title="WalletsClient.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import * as Foundations from './Foundations'
import * as Wallets from './Wallets'
import { HttpClient } from './dfnsHttpClient'
import { RiskKind } from './utils'

class WalletsClient {
  private _httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
  }

  get httpClient(): HttpClient {
    // TODO: throw if not initialized
    return this._httpClient
  }

  /**
   *
   *
   * @param body {CreateWalletRequest}
   * @returns {Promise<Wallets.Wallet>}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async createWallet(
    body: Wallets.CreateWalletRequest
  ): Promise<Wallets.Wallet> {
    const resourcePath = '/wallets'
    return this.httpClient
      .post<Wallets.Wallet>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.Wallet>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getWallet(walletId: Foundations.EntityId): Promise<Wallets.Wallet> {
    const resourcePath = '/wallets/' + encodeURIComponent(walletId) + ''
    return this.httpClient
      .get<Wallets.Wallet>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.WalletAssets>}
   * @throws {EntityNotFoundError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getWalletAssets(
    walletId: Foundations.EntityId
  ): Promise<Wallets.WalletAssets> {
    const resourcePath = '/wallets/' + encodeURIComponent(walletId) + '/assets'
    return this.httpClient
      .get<Wallets.WalletAssets>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.WalletNfts>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getWalletNfts(
    walletId: Foundations.EntityId
  ): Promise<Wallets.WalletNfts> {
    const resourcePath = '/wallets/' + encodeURIComponent(walletId) + '/nfts'
    return this.httpClient
      .get<Wallets.WalletNfts>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.PaginatedWalletList>}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listWallets(
    limit?: Foundations.IntegerPositiveStrict,
    paginationToken?: string
  ): Promise<Wallets.PaginatedWalletList> {
    const resourcePath =
      '/wallets?' +
      (limit ? 'limit=' + encodeURIComponent(limit) : '') +
      (paginationToken
        ? 'paginationToken=' + encodeURIComponent(paginationToken)
        : '')
    return this.httpClient
      .get<Wallets.PaginatedWalletList>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.PaginatedEventHistory>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   */
  async getWalletHistory(
    walletId: Foundations.EntityId,
    limit?: Foundations.IntegerPositiveStrict,
    paginationToken?: Foundations.IsoDatetime
  ): Promise<Wallets.PaginatedEventHistory> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/history?' +
      (limit ? 'limit=' + encodeURIComponent(limit) : '') +
      (paginationToken
        ? 'paginationToken=' + encodeURIComponent(paginationToken)
        : '')
    return this.httpClient
      .get<Wallets.PaginatedEventHistory>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
          }
          case 'Unauthorized': {
            const errorMessage = `` || error.message
            throw new Foundations.UnauthorizedError(errorMessage, serviceName)
          }
          default:
            throw new Error('Unexpected Error')
        }
      })
  }

  /**
   *
   *
   * @param body {TransferAssetRequest}
   * @returns {Promise<Wallets.TransferRequest>}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async transferAsset(
    body: Wallets.TransferAssetRequest,
    walletId: Foundations.EntityId
  ): Promise<Wallets.TransferRequest> {
    const resourcePath =
      '/wallets/' + encodeURIComponent(walletId) + '/transfers'
    return this.httpClient
      .post<Wallets.TransferRequest>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.TransferRequest>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getTransfer(
    walletId: Foundations.EntityId,
    transferId: Foundations.EntityId
  ): Promise<Wallets.TransferRequest> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/transfers/' +
      encodeURIComponent(transferId) +
      ''
    return this.httpClient
      .get<Wallets.TransferRequest>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.PaginatedTransferList>}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listTransfers(
    walletId: Foundations.EntityId,
    limit?: Foundations.IntegerPositiveStrict,
    paginationToken?: string
  ): Promise<Wallets.PaginatedTransferList> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/transfers?' +
      (limit ? 'limit=' + encodeURIComponent(limit) : '') +
      (paginationToken
        ? 'paginationToken=' + encodeURIComponent(paginationToken)
        : '')
    return this.httpClient
      .get<Wallets.PaginatedTransferList>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   * # Broadcast Transaction
   *
   * Depending on the payload sent via request body, this operation can perform the following tasks:
   * * Create a contract.
   * * Call a function in a contract that needs signing.
   * * Send ETH to another account.
   *
   * ## Notes
   *
   * Our current `BroadcastTransaction` endpoint is only meant for state-changing transactions which require signing (eg. making requests to a contract which needs to be signed). This endpoint is not made to read the blockchain with a read-only contract call (which does not require signing). At the moment we offer no support for the read-only use case.
   *
   * @param body {BroadcastTransactionRequest}
   * @returns {Promise<Wallets.TransactionRequest>}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async broadcastTransaction(
    body: Wallets.BroadcastTransactionRequest,
    walletId: Foundations.EntityId
  ): Promise<Wallets.TransactionRequest> {
    const resourcePath =
      '/wallets/' + encodeURIComponent(walletId) + '/transactions'
    return this.httpClient
      .post<Wallets.TransactionRequest>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.TransactionRequest>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getTransaction(
    walletId: Foundations.EntityId,
    transactionId: Foundations.EntityId
  ): Promise<Wallets.TransactionRequest> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/transactions/' +
      encodeURIComponent(transactionId) +
      ''
    return this.httpClient
      .get<Wallets.TransactionRequest>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   * Not implemented.
   *
   * @returns {Promise<Wallets.PaginatedTransactionList>}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listTransactions(
    walletId: Foundations.EntityId,
    limit?: Foundations.IntegerPositiveStrict,
    paginationToken?: string
  ): Promise<Wallets.PaginatedTransactionList> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/transactions?' +
      (limit ? 'limit=' + encodeURIComponent(limit) : '') +
      (paginationToken
        ? 'paginationToken=' + encodeURIComponent(paginationToken)
        : '')
    return this.httpClient
      .get<Wallets.PaginatedTransactionList>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @param body {GenerateSignatureRequest}
   * @returns {Promise<Wallets.SignatureRequest>}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async generateSignature(
    body: Wallets.GenerateSignatureRequest,
    walletId: Foundations.EntityId
  ): Promise<Wallets.SignatureRequest> {
    const resourcePath =
      '/wallets/' + encodeURIComponent(walletId) + '/signatures'
    return this.httpClient
      .post<Wallets.SignatureRequest>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.SignatureRequest>}
   * @throws {EntityNotFoundError}
   * @throws {BadRequestError}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async getSignature(
    walletId: Foundations.EntityId,
    signatureId: Foundations.EntityId
  ): Promise<Wallets.SignatureRequest> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/signatures/' +
      encodeURIComponent(signatureId) +
      ''
    return this.httpClient
      .get<Wallets.SignatureRequest>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'notFound': {
            const errorMessage = `` || error.message
            throw new Foundations.EntityNotFoundError(errorMessage, serviceName)
          }
          case 'badRequest': {
            const errorMessage = `` || error.message
            throw new Foundations.BadRequestError(errorMessage, serviceName)
          }
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
   *
   * @returns {Promise<Wallets.PaginatedSignatureList>}
   * @throws {ForbiddenError}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async listSignatures(
    walletId: Foundations.EntityId,
    limit?: Foundations.IntegerPositiveStrict,
    paginationToken?: string
  ): Promise<Wallets.PaginatedSignatureList> {
    const resourcePath =
      '/wallets/' +
      encodeURIComponent(walletId) +
      '/signatures?' +
      (limit ? 'limit=' + encodeURIComponent(limit) : '') +
      (paginationToken
        ? 'paginationToken=' + encodeURIComponent(paginationToken)
        : '')
    return this.httpClient
      .get<Wallets.PaginatedSignatureList>(resourcePath, undefined, {
        risk: RiskKind.AuthRequired,
      })
      .then((response) => response)
      .catch((error: Error) => {
        const serviceName = 'DfnsCustomerApi'
        switch (error.name) {
          case 'forbidden': {
            const errorMessage = `` || error.message
            throw new Foundations.ForbiddenError(errorMessage, serviceName)
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
}

export { WalletsClient }
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

export type IsoDatetime = string
export type Amount = string
export type EntityId = string
export type Tag = string
export type PublicKey = string
export type DfnsCertificate = string
export type IntegerPositiveStrict = number

export type BlockchainAddress = string

export enum BlockchainNetwork {
  //Cardano native currency
  ADA = 'ADA',
  //Algorand native currency
  ALGO = 'ALGO',
  //Arbitrum
  ARB = 'ARB',
  //Cosmos.
  ATOM = 'ATOM',
  //Avalanche
  AVAX = 'AVAX',
  //Binance Coin
  BNB = 'BNB',
  //BSC testnet
  BNB_TESTNET = 'BNB_TESTNET',
  //Bitcoin. The first and the only.
  BTC = 'BTC',
  //BTC testnet
  BTC_TESTNET = 'BTC_TESTNET',
  //Centrifuge native currency
  CFG = 'CFG',
  //Constellation native currency
  DAG = 'Dag',
  //Elon’s favorite Dog.
  DOGE = 'DOGE',
  //Polkadot native currency
  DOT = 'DOT',
  //Ethereum
  ETH = 'ETH',
  //Ethereum Goerli testnet
  ETH_GOERLI = 'ETH_GOERLI',
  //Ethereum Sepolia testnet
  ETH_SEPOLIA = 'ETH_SEPOLIA',
  //Fantom
  FTM = 'FTM',
  //Kusama – Polkadot’s Canary network
  KSM = 'KSM',
  //Lite Coin native currency
  LTC = 'LTC',
  //Polygon
  MATIC = 'MATIC',
  //Polygon Mumbai testnet
  MATIC_MUMBAI = 'MATIC_MUMBAI',
  //Near native currency
  NEAR = 'NEAR',
  //Optimism
  OP = 'OP',
  //Polymesh
  POLYX = 'POLYX',
  //Solana
  SOL = 'SOL',
  //Solana devnet
  SOL_DEVNET = 'SOL_DEVNET',
  //Tron Coin
  TRX = 'TRX',
  //Tron testnet
  TRX_SHASTA = 'TRX_SHASTA',
  //Stellar native coin
  XLM = 'XLM',
  //Ripple
  XRP = 'XRP',
  //Ripple testnet
  XRP_TESTNET = 'XRP_TESTNET',
  //Tezos native currency
  XTZ = 'XTZ',
  //Skale
  sFUEL = 'sFUEL',
  //Elrond
  EGLD = 'EGLD',
  //AirDAO
  AMB = 'AMB',
  //Caduceus
  CMP = 'CMP',
}
```
{% endcode %}
{% endtab %}
{% tab title="Wallets.ts" %}
{% code title="Wallets.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import {
  BlockchainNetwork,
  Amount,
  BlockchainAddress,
  EntityId,
  IsoDatetime,
  Tag,
} from './Foundations'

export enum IdentityKind {
  Application = 'Application',
  CustomerEmployee = 'CustomerEmployee',
  DfnsStaff = 'DfnsStaff',
  EndUser = 'EndUser',
}

export type TransferNativeRequest = {
  kind: TransferKind.Native
  to: BlockchainAddress
  amount: Amount
}

export type TransferErc20Request = {
  kind: TransferKind.Erc20
  contract: BlockchainAddress
  to: BlockchainAddress
  amount: Amount
}

export type TransferErc721Request = {
  kind: TransferKind.Erc721
  contract: BlockchainAddress
  to: BlockchainAddress
  tokenId: string
}

export type BroadcastEvmTransactionRequest = {
  kind: TransactionKind.Evm
  to?: BlockchainAddress
  value?: Amount
  data?: string
  nonce?: number
  gasLimit?: Amount
  gasPrice?: Amount
  maxPriorityFeePerGas?: Amount
  maxFeePerGas?: Amount
}

export type SignHashRequest = {
  kind: SignatureKind.Hash
  hash: string
}

export type Eip712Domain = {
  name?: string
  version?: string
  chainId?: number
  verifyingContract?: BlockchainAddress
  salt?: string
}

export type SignEip712TypedDataRequest = {
  kind: SignatureKind.Eip712
  types: Record<string, unknown>
  domain: Eip712Domain
  message: Record<string, unknown>
}

export type Wallet = {
  id: EntityId
  network: BlockchainNetwork
  status: WalletStatus
  address?: string
  name?: string
  externalId?: string
  tags: Tag[]
  dateCreated: IsoDatetime
}

export type WalletAssets = {
  walletId: EntityId
  network: BlockchainNetwork
  assets: WalletAsset[]
}

export type WalletAsset = {
  contract?: string
  name?: string
  symbol?: string
  decimals: number
  balance: Amount
}

export type WalletNfts = {
  walletId: EntityId
  network: BlockchainNetwork
  nfts: WalletNft[]
}

export type WalletNft = {
  contract: string
  name?: string
  symbol?: string
  tokenIds: string[]
  count: number
}

export type PaginatedWalletList = {
  items: Wallet[]
  nextPageToken?: string
}

export type NativeTransferEvent = {
  kind: EventKind.NativeTransfer
  walletId: EntityId
  network: BlockchainNetwork
  blockNumber: number
  txHash: string
  index?: string
  timestamp: IsoDatetime
  fee?: Amount
  direction: TransferDirection
  symbol: string
  decimals: number
  from: BlockchainAddress
  to: BlockchainAddress
  value: Amount
}

export type Erc20TransferEvent = {
  kind: EventKind.Erc20Transfer
  walletId: EntityId
  network: BlockchainNetwork
  blockNumber: number
  txHash: string
  index?: string
  timestamp: IsoDatetime
  fee?: Amount
  direction: TransferDirection
  contract: BlockchainAddress
  name?: string
  symbol?: string
  decimals: number
  from: BlockchainAddress
  to: BlockchainAddress
  value: Amount
}

export type Erc721TransferEvent = {
  kind: EventKind.Erc721Transfer
  walletId: EntityId
  network: BlockchainNetwork
  blockNumber: number
  txHash: string
  index?: string
  timestamp: IsoDatetime
  fee?: Amount
  direction: TransferDirection
  contract: BlockchainAddress
  name?: string
  symbol?: string
  from: BlockchainAddress
  to: BlockchainAddress
  tokenId: string
}

export type PaginatedEventHistory = {
  walletId: EntityId
  network: BlockchainNetwork
  items: BlockchainEvent[]
  nextPageToken?: string
}

export type TransferRequest = {
  id: EntityId
  walletId: EntityId
  network: BlockchainNetwork
  txHash?: string
  requester: RequesterIdentity
  requestBody: TransferAssetRequest
  status: TransferStatus
  fee?: Amount
  error?: string
  dateRequested: IsoDatetime
  dateBroadcasted?: IsoDatetime
  dateConfirmed?: IsoDatetime
}

export type PaginatedTransferList = {
  walletId: EntityId
  items: TransferRequest[]
  nextPageToken?: string
}

export type TransactionRequest = {
  id: EntityId
  walletId: EntityId
  network: BlockchainNetwork
  txHash?: string
  requester: RequesterIdentity
  requestBody: BroadcastTransactionRequest
  status: TransactionStatus
  error?: string
  fee?: Amount
  dateRequested: IsoDatetime
  dateBroadcasted?: IsoDatetime
  dateConfirmed?: IsoDatetime
}

export type PaginatedTransactionList = {
  walletId: EntityId
  items: TransactionRequest[]
  nextPageToken?: string
}

export type Signature = {
  r: string
  s: string
  recid?: number
}

export type SignatureRequest = {
  id: EntityId
  walletId: EntityId
  requester: RequesterIdentity
  requestBody: GenerateSignatureRequest
  signature?: Signature
  status: SignatureStatus
  error?: string
  dateRequested: IsoDatetime
  datePolicyResolved?: IsoDatetime
  dateSigned?: IsoDatetime
}

export type PaginatedSignatureList = {
  walletId: EntityId
  items: SignatureRequest[]
  nextPageToken?: string
}

export type RequesterIdentity = {
  kind: IdentityKind
  userId: EntityId
  tokenId?: EntityId
  appId?: EntityId
}

export type CreateWalletRequest = {
  network: BlockchainNetwork
  externalId?: string
  tags?: Tag[]
  name?: string
}

export type TransferAssetRequest =
  | TransferNativeRequest
  | TransferErc20Request
  | TransferErc721Request

export type BroadcastTransactionRequest = BroadcastEvmTransactionRequest

export type GenerateSignatureRequest =
  | SignHashRequest
  | SignEip712TypedDataRequest

export type BlockchainEvent =
  | NativeTransferEvent
  | Erc20TransferEvent
  | Erc721TransferEvent

export enum TransferKind {
  Native = 'Native',
  Erc20 = 'Erc20',
  Erc721 = 'Erc721',
}

export enum TransactionKind {
  Evm = 'Evm',
}

export enum SignatureKind {
  Hash = 'Hash',
  Eip712 = 'Eip712',
}

export enum WalletStatus {
  Active = 'Active',
  //Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
  Creating = 'Creating',
  Failed = 'Failed',
}

export enum EventKind {
  NativeTransfer = 'NativeTransfer',
  Erc20Transfer = 'Erc20Transfer',
  Erc721Transfer = 'Erc721Transfer',
}

export enum TransferDirection {
  In = 'In',
  Out = 'Out',
}

export enum TransferStatus {
  Pending = 'Pending',
  Broadcasted = 'Broadcasted',
  Confirmed = 'Confirmed',
  Failed = 'Failed',
}

export enum TransactionStatus {
  Pending = 'Pending',
  Broadcasted = 'Broadcasted',
  Confirmed = 'Confirmed',
  Failed = 'Failed',
}

export enum SignatureStatus {
  Pending = 'Pending',
  Signed = 'Signed',
  Failed = 'Failed',
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
