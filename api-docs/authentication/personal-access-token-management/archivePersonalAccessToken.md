# Archive Personal Access Token

`DELETE /auth/pats/{tokenId}`

Archive a specific personal access token

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Auth:Apps:Update` | Always Required |
| `Auth:Types:Pat`   | Always Required |

## Parameters

### Path

|                                              |                                                |
| -------------------------------------------- | ---------------------------------------------- |
| `tokenId` <mark style="color:red;">\*</mark> | the ID of the personal access token to archive |

Example:

`/auth/pats/to-em7bu-m6c48-hdqoobj7dj24pko`

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Personal Access Token Management Errors](../../../getting-started/errors.md#personal-access-token-management-errors) for personal access token management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The personal access token that was updated.

```JSON
{
  "dateCreated": "2023-04-12T03:38:05.595Z",
  "credId": "",
  "isActive": false,
  "kind": "CustomerEmployee",
  "linkedUserId": "us-24vwa-92s33-8tvqi1dg0a95megt",
  "linkedAppId": "",
  "name": "My new personal access token name",
  "orgId": "or-yanke-mars-6ulofamogg8fs87v",
  "permissionAssignments": [
    {
      "permissionId": "pm-lit-yanke-46bfekf1548aeph4",
      "permissionName": "WalletAdmin",
      "assignmentId": "",
      "operations": [
        "Auth:Action:Sign",
        "Auth:Apps:Read",
        "Auth:Types:Application",
        "Auth:Types:Employee",
        "Auth:Types:EndUser",
        "Auth:Types:Pat",
        "Auth:Types:ServiceAccount",
        "Auth:Users:Read",
        "Balances:Read",
        "Payments:Create",
        "Payments:Read",
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
  "tokenId": "to-5kwgq-oegi0-879o3v4uh9ghhq72"
}
```
{% endtab %}
{% endtabs %}

## Examples <a href="#examples" id="examples"></a>

{% tabs %}
{% tab title="TypeScript" %}
{% code title="archivePersonalAccessToken.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'
import { AppInfoWithPublicKey } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/pats/to-7vwr2-h2f29-9m6a0fmkk7rr2hj7'
generateUserActionSignature(
  authToken,
  appId,
  '',
  resourcePath,
  'DELETE',
  privateKey,
).then((signature) => {
  httpClient.delete<AccessTokenInfoWithPublicKey>(
    appId,
    authToken,
    resourcePath,
    signature
  ).then((token) => {
    console.log(`Access Tokens for ${token.linkedUserId}:`)
    console.log(`(ARCHIVED) ${token.name}`)
    console.log(`  Kind: ${token.kind}`)
    console.log(`  Public Key: ${token.publicKey}`)
    console.log(`  Cred ID: ${token.credId}`)
  }).catch((error) => {
    console.error(`Failed to archive personal access token: ${error.message}`)
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
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code title="archivePersonalAccessToken.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/pats/to-7vwr2-h2f29-9m6a0fmkk7rr2hj7'
generateUserActionSignature(
  authToken,
  appId,
  '',
  resourcePath,
  'DELETE',
  privateKey,
).then((signature) => {
  httpClient.delete(
    appId,
    authToken,
    resourcePath,
    signature
  ).then((token) => {
    console.log(`Access Tokens for ${token.linkedUserId}:`)
    console.log(`(ARCHIVED) ${token.name}`)
    console.log(`  Kind: ${token.kind}`)
    console.log(`  Public Key: ${token.publicKey}`)
    console.log(`  Cred ID: ${token.credId}`)
  }).catch((error) => {
    console.error(`Failed to archive personal access token: ${error.message}`)
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
{% code title="archivePersonalAccessToken.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

curl -X DELETE "/auth/pats/to-7vwr2-h2f29-9m6a0fmkk7rr2hj7" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $DFNS_APP_ID" \
-H "Authoriztion: Bearer $DFNS_API_KEY" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
```
{% endcode %}
{% endtab %}
{% endtabs %}
