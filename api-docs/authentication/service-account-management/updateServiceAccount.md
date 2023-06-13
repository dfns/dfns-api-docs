# Update Service Account

`PUT /auth/service-accounts/{serviceAccountId}`

Update a specific service account

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                        | Conditions      |
| --------------------------- | --------------- |
| `Auth:Apps:Update`          | Always Required |
| `Auth:Types:ServiceAccount` | Always Required |

## Parameters

### Path

|                                                       |                                         |
| ----------------------------------------------------- | --------------------------------------- |
| `serviceAccountId` <mark style="color:red;">\*</mark> | the ID of the service account to update |

Example:

`/auth/service-accounts/us-em7bu-m6c48-hdqoobj7dj25pko`

## Request Body

|              |        |                                                                                                     |
| ------------ | ------ | --------------------------------------------------------------------------------------------------- |
| `name`       | String | `Optional` new name of the application, must be unique within the caller's org                      |
| `externalId` | String | `Optional` new user defined value, that can be used to correlate the entity with an external system |

Example:

```JSON
{
  "name": "My new Service Account name",
  "externalId": "my_internal_id",
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Service Account Management Errors](../../../getting-started/errors.md#service-account-management-errors) for service account management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The service account that was updated

```JSON
{
  "userInfo": {
    "username": "My New Name",
    "userId": "us-2q55i-g68v6-9etoie66crbdsh7k",
    "kind": "CustomerEmployee",
    "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
    "orgId": "or-yanke-mars-6ulofamogg84s87v",
    "permissions": [],
    "scopes": [],
    "isActive": true,
    "isServiceAccount": true,
    "isRegistered": true,
    "permissionAssignments": [
      {
        "permissionId": "pm-paris-lithi-17bf4kf01h8ajph4",
        "permissionName": "DfnsFullAdminAccess",
        "assignmentId": "",
        "operations": [
          "ApiKeys:Create",
          "ApiKeys:Read",
          "ApiKeys:Revoke",
          "AssetAccounts:Archive",
          "AssetAccounts:Create",
          "AssetAccounts:Read",
          "Auth:Action:Sign",
          "Auth:Apps:Create",
          "Auth:Apps:Read",
          "Auth:Apps:Update",
          "Auth:Creds:Create",
          "Auth:Creds:Read",
          "Auth:Creds:Update",
          "Auth:Types:Application",
          "Auth:Types:Employee",
          "Auth:Types:EndUser",
          "Auth:Types:Pat",
          "Auth:Types:ServiceAccount",
          "Auth:Users:Create",
          "Auth:Users:Delegate",
          "Auth:Users:Read",
          "Auth:Users:Update",
          "Balances:Read",
          "CallbackEvents:Read",
          "CallbackSubscriptions:Archive",
          "CallbackSubscriptions:Create",
          "CallbackSubscriptions:Read",
          "Employees:Read",
          "Payments:Create",
          "Payments:Read",
          "PermissionAssignments:Create",
          "PermissionAssignments:Read",
          "PermissionAssignments:Revoke",
          "PermissionPredicates:Archive",
          "PermissionPredicates:Create",
          "PermissionPredicates:Read",
          "PermissionPredicates:Update",
          "Permissions:Archive",
          "Permissions:Create",
          "Permissions:Read",
          "Permissions:Update",
          "Policies:Archive",
          "Policies:Create",
          "Policies:Read",
          "Policies:Update",
          "PolicyControlExecutions:Read",
          "PolicyControlExecutions:Update",
          "PolicyControls:Archive",
          "PolicyControls:Create",
          "PolicyControls:Read",
          "PolicyControls:Update",
          "PolicyRules:Archive",
          "PolicyRules:Create",
          "PolicyRules:Read",
          "PolicyRules:Update",
          "PublicKeyAddresses:Read",
          "PublicKeys:Create",
          "PublicKeys:Read",
          "Signatures:Create",
          "Signatures:Read",
          "Transactions:Create",
          "Transactions:Read",
          "Wallets:Create",
          "Wallets:Read",
          "Wallets:Update"
        ]
      }
    ]
  },
  "accessTokens": [
    {
      "dateCreated": "2023-04-12T23:49:33.767Z",
      "credId": "",
      "isActive": true,
      "kind": "CustomerEmployee",
      "linkedUserId": "us-2q55i-g68v6-9etoie66crbdsh7k",
      "linkedAppId": "",
      "name": "My new service account",
      "orgId": "or-yanke-mars-6ulofamogg84s87v",
      "permissionAssignments": [
        {
          "permissionId": "pm-paris-lithi-17bf4kf01h8ajph4",
          "permissionName": "DfnsFullAdminAccess",
          "assignmentId": "",
          "operations": [
            "ApiKeys:Create",
            "ApiKeys:Read",
            "ApiKeys:Revoke",
            "AssetAccounts:Archive",
            "AssetAccounts:Create",
            "AssetAccounts:Read",
            "Auth:Action:Sign",
            "Auth:Apps:Create",
            "Auth:Apps:Read",
            "Auth:Apps:Update",
            "Auth:Creds:Create",
            "Auth:Creds:Read",
            "Auth:Creds:Update",
            "Auth:Types:Application",
            "Auth:Types:Employee",
            "Auth:Types:EndUser",
            "Auth:Types:Pat",
            "Auth:Types:ServiceAccount",
            "Auth:Users:Create",
            "Auth:Users:Delegate",
            "Auth:Users:Read",
            "Auth:Users:Update",
            "Balances:Read",
            "CallbackEvents:Read",
            "CallbackSubscriptions:Archive",
            "CallbackSubscriptions:Create",
            "CallbackSubscriptions:Read",
            "Employees:Read",
            "Payments:Create",
            "Payments:Read",
            "PermissionAssignments:Create",
            "PermissionAssignments:Read",
            "PermissionAssignments:Revoke",
            "PermissionPredicates:Archive",
            "PermissionPredicates:Create",
            "PermissionPredicates:Read",
            "PermissionPredicates:Update",
            "Permissions:Archive",
            "Permissions:Create",
            "Permissions:Read",
            "Permissions:Update",
            "Policies:Archive",
            "Policies:Create",
            "Policies:Read",
            "Policies:Update",
            "PolicyControlExecutions:Read",
            "PolicyControlExecutions:Update",
            "PolicyControls:Archive",
            "PolicyControls:Create",
            "PolicyControls:Read",
            "PolicyControls:Update",
            "PolicyRules:Archive",
            "PolicyRules:Create",
            "PolicyRules:Read",
            "PolicyRules:Update",
            "PublicKeyAddresses:Read",
            "PublicKeys:Create",
            "PublicKeys:Read",
            "Signatures:Create",
            "Signatures:Read",
            "Transactions:Create",
            "Transactions:Read",
            "Wallets:Create",
            "Wallets:Read",
            "Wallets:Update"
          ]
        }
      ],
      "publicKey": "",
      "tokenId": "to-79hoo-ohdi6-9rnomnmhiavfb335"
    }
  ]
}
```
{% endtab %}
{% endtabs %}

## Examples <a href="#examples" id="examples"></a>

{% tabs %}
{% tab title="TypeScript" %}
{% code title="updateServiceAccount.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'
import { AccessTokenInfoWithPublicKey } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k'
const body = {
  name: 'My New Name',
}
generateUserActionSignature(
  authToken,
  appId,
  JSON.stringify(body),
  resourcePath,
  'PUT',
  privateKey,
).then((signature) => {
  httpClient.put<UserAccessTokenInformation>(
    appId,
    authToken,
    resourcePath,
    signature
  ).then((serviceAccount) => {
    console.log(`Service Accounts for ${serviceAccount.userInfo.orgId}:`)
    console.log(`${serviceAccount.userInfo.isActive ? '' : '(DEACTIVATED) '}${serviceAccount.userInfo.username}`)
    console.log(`  User ID: ${serviceAccount.userInfo.userId}`)
    console.log(`  Kind: ${serviceAccount.userInfo.kind}`)
    console.log(`  Access Tokens:`)
    for (const token of serviceAccount.accessTokens) {
      console.log(`  ${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
      console.log(`    Kind: ${token.kind}`)
      console.log(`    Public Key: ${token.publicKey}`)
      console.log(`    Cred ID: ${token.credId}`)
    }
  }).catch((error) => {
    console.error(`Failed to update service account: ${error.message}`)
  })
}).catch((error) => {
  console.error(`Failed to authorize request: ${error.message}`)
})
```
{% endcode %}

{% code title="generateUserActionSignature.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import crypto from 'crypto'

import { httpClient } from './dfnsHttpClient'
import { UserActionChallenge, UserActionSignature } from './types'

const generateUserActionSignature = async (
  authToken: string,
  appId: string,
  request: string,
  resource: string,
  method: string,
  signingPrivateKey: string,
  signingAlgorithm?: string
) : Promise<string> => {
  const challengeRequest = {
    userActionHttpMethod: method,
    userActionHttpPath: resource,
    userActionPayload: request
  }
  const userActionChallenge = await httpClient.post<UserActionChallenge>(
    appId,
    authToken,
    false,
    '/auth/action/init'
    JSON.stringify(challengeRequest)
  )

  const clientData = Buffer.from(JSON.stringify({
    type: 'key.get',
    challenge: challenge.challenge,
    origin: 'http://localhost:3000',
    crossOrigin: false,
  }))

  const signature = crypto.sign(
    signingAlgorithm,
    clientData,
    signingKey
  )

  const signatureRequest = {
    challengeIdentifier: userActionChallenge.challengeIdentifier,
    firstFactor: {
      kind: CredentialKind.Key,
      credentialAssertion: {
        clientData: clientData.toString('base64url'),
        credId: userActionChallenge.allowCredentials.key[0],
        signature: signature.toString('base64url'),
      },
    },
  }

  const userActionSignature = await httpClient.post<UserActionSignature>(
    appId,
    authToken,
    false,
    '/auth/action',
    JSON.stringify(signatureRequest)
  )
  return userActionSignature.userAction
}
```
{% endcode %}

{% code title="types.ts" overflow="wrap" lineNumbers="true" %}
```typescript
export enum FidoCredentialsTransportKind {
  usb = "usb",
  nfc = "nfc",
  ble = "ble",
  internal = "internal",
  hybrid = "hybrid"
}

export enum CredentialKind {
  Fido2 = "Fido2",
  Key = "Key",
  Password = "Password",
  Totp = "Totp",
  RecoveryKey = "RecoveryKey"
}

export type AllowCredential = {
  type: 'public-key'
  id: string
  transports?: FidoCredentialsTransportKind
}

export type AllowCredentials = {
  webauthn: AllowCredential[]
  key: AllowCredential[]
}

export enum CredentialFactor {
  first = "first",
  second = "second",
  either = "either"
}

export type SupportedCredentials = {
  kind: CredentialKind
  factor: CredentialFactor
  requiresSecondFactor: boolean
}

export type UserActionChallenge = {
  supportedCredentialKinds: SupportedCredentials[]
  challenge: string
  challengeIdentifier: string
  externalAuthenticationUrl: string
  allowCredentials: AllowCredentials
}

export type UserActionSignature = {
  userAction: string
}

export type PermissionAssignmentInfo = {
  permissionName: string
  permissionId: string
  assignmentId: string
  operations?: string[]
}

export enum AccessTokenKind {
  ServiceAccount = "ServiceAccount",
  Pat = "Pat",
  Application = "Application"
}

export type AccessTokenInfoWithPublicKey = {
  accessToken?: string
  dateCreated: string
  credId: string
  isActive: boolean
  kind: AccessTokenKind
  linkedUserId: string
  linkedAppId: string
  name: string
  orgId: string
  permissionAssignments: PermissionAssignmentInfo[]
  publicKey: string
  tokenId: string
}

export enum UserAuthKind {
  EndUser = "EndUser",
  CustomerEmployee = "CustomerEmployee",
  DfnsStaff = "DfnsStaff"
}

export type UserInfo = {
  username: string
  userId: string
  kind: UserAuthKind
  credentialUuid: string
  orgId: string
  permissions?: string[]
  scopes?: string[]
  isActive: boolean
  isServiceAccount: boolean
  isRegistered: boolean
  permissionAssignments: PermissionAssignmentInfo[]
}

export type UserAccessTokenInformation = {
  userInfo: UserInfo
  accessTokens: AccessTokenInfoWithPublicKey[]
}
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code title="updateServiceAccount.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k'
const body = {
  name: 'My New Name',
}
generateUserActionSignature(
  authToken,
  appId,
  JSON.stringify(body),
  resourcePath,
  'PUT',
  privateKey,
).then((signature) => {
  httpClient.put(
    appId,
    authToken,
    resourcePath,
    signature
  ).then((serviceAccount) => {
    console.log(`Service Accounts for ${serviceAccount.userInfo.orgId}:`)
    console.log(`${serviceAccount.userInfo.isActive ? '' : '(DEACTIVATED) '}${serviceAccount.userInfo.username}`)
    console.log(`  User ID: ${serviceAccount.userInfo.userId}`)
    console.log(`  Kind: ${serviceAccount.userInfo.kind}`)
    console.log(`  Access Tokens:`)
    for (const token of serviceAccount.accessTokens) {
      console.log(`  ${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
      console.log(`    Kind: ${token.kind}`)
      console.log(`    Public Key: ${token.publicKey}`)
      console.log(`    Cred ID: ${token.credId}`)
    }
  }).catch((error) => {
    console.error(`Failed to update service account: ${error.message}`)
  })
}).catch((error) => {
  console.error(`Failed to authorize request: ${error.message}`)
})
```
{% endcode %}

{% code title="generateUserActionSignature.js" overflow="wrap" lineNumbers="true" %}
```typescript
import crypto from 'crypto'

import { httpClient } from './dfnsHttpClient'

const generateUserActionSignature = async (
  authToken,
  appId,
  request,
  resource,
  method,
  signingPrivateKey,
  signingAlgorithm?
) => {
  const challengeRequest = {
    userActionHttpMethod: method,
    userActionHttpPath: resource,
    userActionPayload: request
  }
  const userActionChallenge = await httpClient.post(
    appId,
    authToken,
    false,
    '/auth/action/init'
    JSON.stringify(challengeRequest)
  )

  const clientData = Buffer.from(JSON.stringify({
    type: 'key.get',
    challenge: challenge.challenge,
    origin: 'http://localhost:3000',
    crossOrigin: false,
  }))

  const signature = crypto.sign(
    signingAlgorithm,
    clientData,
    signingKey
  )

  const signatureRequest = {
    challengeIdentifier: userActionChallenge.challengeIdentifier,
    firstFactor: {
      kind: CredentialKind.Key,
      credentialAssertion: {
        clientData: clientData.toString('base64url'),
        credId: userActionChallenge.allowCredentials.key[0],
        signature: signature.toString('base64url'),
      },
    },
  }

  const userActionSignature = await httpClient.post(
    appId,
    authToken,
    false,
    '/auth/action',
    JSON.stringify(signatureRequest)
  )
  return userActionSignature.userAction
}
```
{% endcode %}
{% endtab %}

{% tab title="Curl" %}
{% code title="updateServiceAccount.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

appName='My New Name'
curl -X PUT "/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $DFNS_APP_ID" \
-H "Authoriztion: Bearer $DFNS_API_KEY" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d "{\"name\":\"$appName\"}"
```
{% endcode %}
{% endtab %}
{% endtabs %}
