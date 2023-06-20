# Create User with Multiple Key Credentials <a href="#create-user-example" id="create-user-example"></a>
This example uses the dfnsHttpClient to create a user using delegated registration. The user is
created with a key credential, and once the user is created, the user creates a second key
credential.

## Setup
To run the example, you will need to:
1. create a service account (API Key in the dashboard).
1. repalce `<REPLACE_ME>` on line 17 with the Service Account's token.
1. replace `<REPLACE_ME>` on line 18 with the Service Account's private key.
1. replace `<REPLACE_ME>` on line 19 with the app ID for your account.
1. replace `<REPLACE_ME>` on line 23 with the org ID for your account.

### Notes
This example is not meant for production. In production:
* the service account's token and private key should be stored securely, not hard coded into your application.
* the user's credentials should never be propigated to your server.
* printing of user credentials, and other secrets, to console or persistent logs should be avoided.

## Code
{% tabs %}
{% tab title="createUserAndCreds.ts" %}
{% code title="createUserAndCreds.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import crypto from 'crypto'

import { UserAuthKind } from './Auth'
import { AuthClient } from './AuthClient'
import { base64url } from './base64url'
import { ClientSideHttpClient } from './dfnsHttpClient'
import {
  CreateUserCredentialOptions,
  CredentialKind,
  GetUserCredentials,
  NewUserCredentials,
  SignMessage,
  UserCredentialOptions,
  UserCredentials
} from './utils'

const token = '<REPLACE_ME>'
const privateKey = '<REPLACE_ME>'
const appId = '<REPLACE_ME>'
const baseUrl = 'api.dfns.ninja'
const origin = 'https://app.dfns.ninja'
const rpId = 'dfns.ninja'
const orgId = '<REPLACE_ME>'

const jdoeCreds: {
  privateKey: string
  credId: string
}[] = []

const signMessageAsServiceAccount : SignMessage = async (
  message: Buffer,
  humanReadableMessage: string
) : Promise<Buffer> => {
  console.log(`Signing: ${humanReadableMessage}`)
  return crypto.sign(
    undefined,
    message,
    privateKey
  )
}

const signMessageAsJdoe : GetUserCredentials = async (
  supportedCredentials: UserCredentialOptions
) : Promise<UserCredentials> => {
  const cred = jdoeCreds.find(
    (cred) => supportedCredentials.credentialData.allowedKeys.find((key) => key === cred.credId)
  )
  if (!cred) {
    throw new Error(`Credential not found: ${JSON.stringify(supportedCredentials.credentialData.allowedKeys)}`)
  }

  const clientData = Buffer.from(JSON.stringify(supportedCredentials.credentialData.keyOrPasswordClientData))
  const signature = crypto.sign(undefined, clientData, cred.privateKey)
  return {
    firstFactor: {
      credentialId: cred.credId,
      kind: CredentialKind.Key,
      signature: {
        authenticatorData: Buffer.from(''),
        clientDataJson: clientData,
        signature: signature,
        userHandle: Buffer.from(''),
      },
    },
  }
}

const createUserCredentials = async (
  supportedCredentials: CreateUserCredentialOptions
): Promise<NewUserCredentials> => {
  const keySupported = supportedCredentials.supportedCredentialKinds.firstFactor.find(
    (factor) => factor === CredentialKind.Key
  )
  if (!keySupported) {
    throw new Error('Not supported')
  }

  const newKey = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' })
  const privateKey = newKey.privateKey.export({ type: 'pkcs8', format: 'pem' }) as string
  const publicKey = newKey.publicKey.export({ type: 'spki', format: 'pem' }) as string
  const credId = crypto.randomUUID()
  console.log(`New credential private key: ${privateKey}`)
  console.log(`CredId: ${credId}`)

  const clientData = Buffer.from(JSON.stringify(supportedCredentials.credentialData.keyOrPasswordClientData))
  const signature = crypto.sign(undefined, Buffer.from(JSON.stringify({
    clientDataHash: crypto.createHash('sha256').update(clientData).digest('hex'),
    publicKey: publicKey,
  })), newKey.privateKey)

  jdoeCreds.push({
    privateKey,
    credId: base64url(credId)
  })

  return {
    firstFactor: {
      kind: CredentialKind.Key,
      credentialId: base64url(credId),
      signature: {
        attestationData: Buffer.from(JSON.stringify({
          publicKey: publicKey,
          signature: signature.toString('hex'),
          algorithm: 'SHA256',
        })),
        clientData: clientData,
      },
    },
  }
}

export const createUserAndCred = async () : Promise<boolean> => {
  const serviceAccountHttpClient = new ClientSideHttpClient(
    appId,
    baseUrl,
    origin,
    rpId,
  )
  const jdoeHttpClient = new ClientSideHttpClient(
    appId,
    baseUrl,
    origin,
    rpId,
  )

  if (!await serviceAccountHttpClient.authAsApiKey(
    token,
    signMessageAsServiceAccount
  )) {
    console.log('Authentication failed.')
    return false
  }
  const serviceAccountClient = new AuthClient(serviceAccountHttpClient)
  const userRegistrationChallenge = await serviceAccountClient.createDelegatedUserRegistration({
    email: 'jdoe@example.co',
    kind: UserAuthKind.EndUser,
  })

  try {
    console.log('Registering jdoe')
    await jdoeHttpClient.completeDelegatedUserRegistration(
      userRegistrationChallenge,
      createUserCredentials
    )
  
    console.log('Logging in as jdoe')
    await jdoeHttpClient.authAsPesron('jdoe@example.co', orgId, signMessageAsJdoe, createUserCredentials)
  
    console.log('Creating new credential for jdoe')
    const newCred = await jdoeHttpClient.createNewCredential('My new credential', CredentialKind.Key)

    console.log(JSON.stringify(newCred, null, 2))
    return true 
  } catch (e) {
    console.error('Something went wrong: ', e)
    return false
  }
}
```
{% endcode %}
{% endtab %}
{% tab title="AuthClient.ts" %}
{% code title="AuthClient.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import * as Auth from './Auth'
import * as Foundations from './Foundations'
import { HttpClient } from './dfnsHttpClient'
import { RiskKind } from './utils'

class AuthClient {
  private _httpClient: HttpClient

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient
  }

  get httpClient(): HttpClient {
    return this._httpClient
  }

  /**
   *
   *
   * @param body {CreateUserInput}
   * @returns {Promise<Auth.UserRegistrationChallenge>}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async createDelegatedUserRegistration(
    body: Auth.CreateUserInput
  ): Promise<Auth.UserRegistrationChallenge> {
    const resourcePath = '/auth/registration/delegated'
    return this.httpClient
      .post<Auth.UserRegistrationChallenge>(resourcePath, body, {
        risk: RiskKind.UserActionSignatureRequired,
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
   *
   *
   * @returns {Promise<Auth.UserInfo>}
   * @throws {UnauthorizedError}
   * @throws {ForbiddenError}
   * @throws {BadRequestError}
   * @throws {EntityNotFoundError}
   */
  async archiveUser(userId: Foundations.EntityId): Promise<Auth.UserInfo> {
    const resourcePath = '/auth/users/' + encodeURIComponent(userId) + ''
    return this.httpClient
      .delete<Auth.UserInfo>(resourcePath, undefined, {
        risk: RiskKind.UserActionSignatureRequired,
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

export { AuthClient }
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
{% tab title="Auth.ts" %}
{% code title="Auth.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import {
  EntityId,
} from './Foundations'

export enum AuthenticatorRequirementOptions {
  required = 'required',
  preferred = 'preferred',
  discouraged = 'discouraged',
}
export enum CredentialKind {
  Fido2 = 'Fido2',
  Key = 'Key',
  Password = 'Password',
  Totp = 'Totp',
  RecoveryKey = 'RecoveryKey',
}
export type SupportedCredentialKinds = {
  firstFactor: CredentialKind[]
  secondFactor: CredentialKind[]
}
export enum AuthenticatorAttestationOptions {
  none = 'none',
  indirect = 'indirect',
  direct = 'direct',
  enterprise = 'enterprise',
}
export enum UserAuthKind {
  EndUser = 'EndUser',
  CustomerEmployee = 'CustomerEmployee',
  DfnsStaff = 'DfnsStaff',
}
export type PermissionAssignmentInfo = {
  permissionName: string
  permissionId: EntityId
  assignmentId: EntityId
  operations?: string[]
}
export type Jwt = string
export type UserRegistrationChallenge = {
  temporaryAuthenticationToken: Jwt
  rp: RelyingParty
  user: AuthenticationUserInformation
  supportedCredentialKinds: SupportedCredentialKinds
  otpUrl: string
  challenge: string
  authenticatorSelection: AuthenticatorSelection
  attestation: AuthenticatorAttestationOptions
  pubKeyCredParams: PubKeyCredParams[]
  excludeCredentials: AllowCredential[]
}
export type CreateUserInput = {
  email: string
  kind: UserAuthKind
  publicKey?: string
  externalId?: string
}
export type UserInfo = {
  username: string
  userId: EntityId
  kind: UserAuthKind
  credentialUuid: EntityId
  orgId: EntityId
  permissions?: string[]
  scopes?: string[]
  isActive: boolean
  isServiceAccount: boolean
  isRegistered: boolean
  permissionAssignments: PermissionAssignmentInfo[]
}
export type AllowCredential = {
  /**
   * Must be 'public-key'
   */
  type: string
  id: string
  transports?: string
}
export type RelyingParty = {
  id: string
  name: string
}
export type AuthenticationUserInformation = {
  id: EntityId
  displayName: string
  name: string
}
export type PubKeyCredParams = {
  /**
   * Must be 'public-key'
   */
  type: string
  alg: number
}
export type AuthenticatorSelection = {
  /**
   * If not given, any authenticator type can be used.
   *
   * platform: Authenticator must be built into the system. For example, Windows Hello or Apple Touch ID use a TPM that are integrated into the system.
   *
   * cross-platform: Authenticator must be able to move between systems. For example, a yubikey is a USB device that can be plugged into any system.
   */
  authenticatorAttachment?: string
  /**
   * discouraged: This tells the authenticator to not use resident keys.
   *
   * preferred: This tells the authenticator that resident keys should be used if available.
   *
   * required: This tells the authenticator that a resident key is required.
   */
  residentKey: AuthenticatorRequirementOptions
  requireResidentKey: boolean
  /**
   * Required: Tells the authenticator that the user needs to verify they are in possession of the authenticator device. This usually means the user is prompted for a pin, passcode, or to complete a biometric challenge.
   *
   * Preferred: Tells the authenticator that the user should be asked to verify they are in possession of the authenticator device. This usually means the user is prompted for a pin, passcode, or to complete a biometric challenge.
   * If the user has recently verified their possession the device may choose not to ask the user to verify again.
   *
   * Discouraged: Tells the authenticator that the user should not be prompted for possession. This is generally only used when WebAuthn is a second factor.
   */
  userVerification: AuthenticatorRequirementOptions
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
