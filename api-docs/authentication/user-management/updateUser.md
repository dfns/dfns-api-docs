# Update User

`PUT /auth/users/{userId}`

Update a specific userId in the caller's org

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions <a href="#permissions" id="permissions"></a>

| Name                  | Conditions                                    |
| --------------------- | --------------------------------------------- |
| `Auth:Users:Update`   | Always Required                               |
| `Auth:Types:Employee` | When target user's kind is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When target user's kind is `EndUser`          |

## Parameters

### Path

|                                             |                              |
| ------------------------------------------- | ---------------------------- |
| `userId` <mark style="color:red;">\*</mark> | the ID of the user to update |

Example:

`/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko`

## Request Body

<table><thead><tr><th width="247.33333333333331"></th><th></th><th></th></tr></thead><tbody><tr><td><code>publicKey</code></td><td>String</td><td><code>Optional</code> a PGP public key that is used to encrypt emails going to the new user</td></tr><tr><td><code>externalId</code></td><td>String</td><td><code>Optional</code> a user defined value that can be used to correlate the entity with an external system</td></tr></tbody></table>

Example:

```JSON
{
  "external": "my_internal_id"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Management Errors](../../../getting-started/errors.md#user-management-errors) for user management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The user that was updated

```JSON
{
  "username": "MyNewUser@example.co",
  "userId": "us-2mhcm-9r90a-92ran47bjpl60hmv",
  "kind": "CustomerEmployee",
  "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
  "orgId": "or-yanke-mars-6ulofamogg84s87v",
  "permissions": [],
  "scopes": [],
  "isActive": true,
  "isServiceAccount": false,
  "isRegistered": false,
  "permissionAssignments": []
}
```
{% endtab %}
{% endtabs %}

## Examples <a href="#examples" id="examples"></a>

{% tabs %}
{% tab title="TypeScript" %}
{% code title="updateUser.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'
import { UserInfo } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv'
const body = {
  externalId: 'My new external ID',
}
generateUserActionSignature(
  authToken,
  appId,
  JSON.stringify(body),
  resourcePath,
  'PUT',
  privateKey,
).then((signature) => {
  httpClient.put<UserInfo>(
    authToken,
    appId,
    resourcePath,
    signature,
    JSON.stringify(body),
  ).then((user) => {
    console.log(`Users for ${user.orgId}:`)
    console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
    console.log(`  Kind: ${user.kind}`)
    console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
  }).catch((error) => {
    console.error(`Failed to update user: ${error.message}`)
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
{% code title="updateUser.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv'
const body = {
  externalId: 'My new external ID',
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
    authToken,
    appId,
    resourcePath,
    signature,
    JSON.stringify(body),
  ).then((user) => {
    console.log(`Users for ${user.orgId}:`)
    console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
    console.log(`  Kind: ${user.kind}`)
    console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
  }).catch((error) => {
    console.error(`Failed to update user: ${error.message}`)
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
{% endtabs %}
