# Activate User

`PUT /auth/users/{userId}/activate`

Activate a specific user in the caller's org

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions <a href="#permissions" id="permissions"></a>

<table><thead><tr><th width="192">Permission Name</th><th>Condition</th></tr></thead><tbody><tr><td><code>Auth:Users:Update</code></td><td>Always Required</td></tr><tr><td><code>Auth:Types:Employee</code></td><td>When target user's kind is `CustomerEmployee`</td></tr><tr><td><code>Auth:Types:EndUser</code></td><td>When target user's kind is `EndUser`</td></tr></tbody></table>

## Parameters

### Path

<table><thead><tr><th width="192"></th><th></th></tr></thead><tbody><tr><td><code>userId</code> <mark style="color:red;">*</mark></td><td>the ID of the user to activate</td></tr></tbody></table>

Example:

`/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko/activate`

## Responses

{% tabs %}
{% tab title="200" %}
**Success**

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

{% tab title="400" %}
**`X-DFNS-NONCE` header is missing or invalid**

```JSON
{
  "error": {
    "message": "request nonce is missing or invalid",
  }
}
```

**`X-DFNS-NONCE` already used**

```JSON
{
  "error": {
    "message": "request nonce has already been used"
  }
}
```

**`X-DFNS-USERACTION` already used**

```JSON
{
  "error": {
    "message": "user action has already been used"
  }
}
```
{% endtab %}

{% tab title="401" %}
**Caller not authenticated**

```JSON
{
  "error": {
    "message": "Not Authorized."
  }
}
```
{% endtab %}

{% tab title="403" %}
**Caller does not have access to the resource or endpoint**

```JSON
{
  "error": {
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv)"
  }
}
```

**`X-DFNS-USERACTION` is missing or invalid**

```JSON
{
  "error": {
    "message": "user action signature is missing or invalid"
  }
}
```
{% endtab %}

{% tab title="500" %}
**An error occurred on the server**

```JSON
{
  "error": {
    "message": "Internal Server Error"
  }
}
```
{% endtab %}
{% endtabs %}

## Examples <a href="#examples" id="examples"></a>

{% tabs %}
{% tab title="TypeScript" %}
{% code title="activateUser.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'
import { UserInfo } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv/activate'
generateUserActionSignature(
  authToken,
  appId,
  '',
  resourcePath,
  'PUT',
  privateKey,
).then((signature) => {
  httpClient.put<UserInfo>(
    authToken,
    appId,
    resourcePath,
    signature
  ).then((user) => {
    console.log(`Users for ${user.orgId}:`)
    console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
    console.log(`  Kind: ${user.kind}`)
    console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
  }).catch((error) => {
    console.error(`Failed to activate user: ${error.message}`)
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

export enum UserAuthKind {
  EndUser = "EndUser",
  CustomerEmployee = "CustomerEmployee",
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
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code title="activateUser.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv/activate'
generateUserActionSignature(
  authToken,
  appId,
  '',
  resourcePath,
  'PUT',
  privateKey,
).then((signature) => {
  httpClient.put(
    authToken,
    appId,
    resourcePath,
    signature
  ).then((user) => {
    console.log(`Users for ${user.orgId}:`)
    console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
    console.log(`  Kind: ${user.kind}`)
    console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
  }).catch((error) => {
    console.error(`Failed to activate user: ${error.message}`)
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
{% code title="activateUser.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

curl -X PUT "/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv/activate" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $DFNS_APP_ID" \
-H "Authoriztion: Bearer $DFNS_API_KEY" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
```
{% endcode %}
{% endtab %}
{% endtabs %}
