# Create Client-Side Application

`POST /auth/apps`

Create a new Client-Side application in the caller's org

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                     | Conditions      |
| ------------------------ | --------------- |
| `Auth:Apps:Create`       | Always Required |
| `Auth:Types:Application` | Always Required |

## Request Body

|                                                     |        |                                                                                                                                                                             |
| --------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` <mark style="color:red;">\*</mark>           | String | the name of the application, must be unique within the caller's org                                                                                                         |
| `relyingPartyId` <mark style="color:red;">\*</mark> | String | the top level domain where the application will be hosted, for example: `dfns.io`                                                                                           |
| `origin` <mark style="color:red;">\*</mark>         | String | the url of the application, for example: `https://api.dfns.io`                                                                                                              |
| `kind` <mark style="color:red;">\*</mark>           | String | the kind of application being created, must be `ClientSideApplication`                                                                                                      |
| `permissionId`                                      | String | `Optional` ID of the permission that will be assigned to the application. If no permission ID is given, the application will be assigned the same permissions as the caller |
| `externalId`                                        | String | `Optional` user defined value that can be used to correlate the entity with an external system                                                                              |

Example:

```JSON
{
  "name": "MyApp Production",
  "relyingPartyId": "https://myapp.example.co",
  "origin": "example.co",
  "kind": "ClientSideApplication",
  "permissionId": "pm-delaw-avoca-v16r37fpp8koqebc"
}
```

## Responses

{% tabs %}
{% tab title="200" %}
**Success: The newly created application**

```JSON
{
  "appId": "ap-24vwa-92s32-8tvqi1dg0a95megt",
  "kind": "ClientSideApplication",
  "orgId": "or-yanke-mars-6ulofamogg8fs87v",
  "expectedRpId": "localhost",
  "expectedOrigin": "http://localhost:5500/",
  "name": "LocalClient",
  "isActive": true,
  "permissionAssignments": [
    {
      "permissionId": "pm-paris-lithi-17bf4ef01h3aj6h4",
      "permissionName": "AppManager",
      "assignmentId": "",
      "operations": [
        "Auth:Apps:Create",
        "Auth:Apps:Read",
        "Auth:Apps:Update",
      ]
    }
  ],
  "accessTokens": []
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
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/apps)"
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
{% code title="createClientSideApplication.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'
import { AppInfoWithPublicKey, ApplicationKind, CreateApplicationInput } from './types'

const authToken = process.env['DFNS_API_KEY'] || ''
const appId = process.env['DFNS_APP_ID'] ||  ''
const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
const resourcePath = '/auth/apps'
const body : CreateApplicationInput = {
  name: 'My New Application Name',
  kind: ApplicationKind.ClientSideApplication,
  relyingPartyId: 'localhost',
  origin: 'http://localhost:3000',
}
generateUserActionSignature(
  authToken,
  appId,
  'POST',
  resourcePath,
  JSON.stringify(body),
  privateKey,
).then((signature) => {
  httpClient.post<AppInfoWithPublicKey>(
    appId,
    authToken,
    resourcePath,
    JSON.stringify(body),
    signature
  ).then((newApplication) => {
    console.log(`New Application in ${newApplication.orgId}:`)
    console.log(`${newApplication.isActive ? '' : '(DEACTIVATED) '}${newApplication.name}`)
    console.log(`  Kind: ${newApplication.kind}`)
    console.log(`  Relying Party ID: ${newApplication.expectedRpId}`)
    console.log(`  Origin: ${newApplication.expectedOrigin}`)
  }).catch((error) => {
    console.error(`Failed to create application: ${error.message}`)
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
import { CredentialKind, UserActionChallenge, UserActionSignature } from './types'

export const generateUserActionSignature = async (
  authToken: string,
  appId: string,
  method: string,
  resource: string,
  request: string,
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
    '/auth/action/init',
    JSON.stringify(challengeRequest)
  )

  const clientData = Buffer.from(JSON.stringify({
    type: 'key.get',
    challenge: userActionChallenge.challenge,
    origin: 'http://localhost:3000',
    crossOrigin: false,
  }))

  const signature = crypto.sign(
    signingAlgorithm,
    clientData,
    signingPrivateKey
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
    '/auth/action',
    JSON.stringify(signatureRequest)
  )
  return userActionSignature.userAction
}
```
{% endcode %}

{% code title="dfnsHttpClient.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { IncomingMessage } from 'http'
import * as https from 'https'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

// The nonce (required for all requests) helps to ensure a request can only be run once.
const generateNonce = (): string => {
  return Buffer.from(
    JSON.stringify({
      date: new Date().toISOString(),
      uuid: crypto.randomUUID(),
    })
  ).toString('base64url')
}

// HTTP wrapper that adds the required headers.
const makeDfnsHttpRequest = async <ResponseType>(
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  appId: string,
  authToken: string,
  resource: string,
  body: string,
  userActionSignature = ''
): Promise<ResponseType> => {
  // Replace this with api.dfns.io, if targeting the production environment.
  const target = 'api.dfns.ninja'

  const options: WithRequired<https.RequestOptions, 'headers'> = {
    hostname: target,
    port: 443,
    path: resource,
    method: method,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + authToken,
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
      Host: target,
      'User-Agent': 'My test Application',
      'X-DFNS-APPID': appId,
      'X-DFNS-NONCE': generateNonce(),
      'X-DFNS-USERACTION': userActionSignature,
    },
  }

  return new Promise((resolve, reject) => {
    let result = ''

    const handleRequest = (response: IncomingMessage) => {
      const { statusCode } = response

      response.setEncoding('utf-8')
      response.on('data', (chunk) => {
        result += chunk
      })

      const isStatus2xx = statusCode && statusCode >= 200 && statusCode < 300

      response.on('end', () => {
        if (!isStatus2xx) {
          let errorMessage = response.statusMessage
          if (!errorMessage && result) {
            try {
              errorMessage = JSON.parse(result).error.message
            } catch {
              errorMessage = 'Unknown error'
            }
          }
          reject({
            statusCode: response.statusCode,
            message: errorMessage,
          })
        } else {
          try {
            if (result === '') {
              resolve({} as ResponseType)
            } else {
              resolve(JSON.parse(result) as ResponseType)
            }
          } catch (error) {
            reject(error)
          }
        }
      })
    }

    const request = https.request(options, handleRequest)

    request.on('error', (e) => {
      reject(e)
    })

    if (body !== '') {
      request.write(body)
    }

    request.end()
  })
}

export class HttpClient {
  async get<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('GET', appId, authToken, resource, '', userActionSignature)
  }
  async post<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    body: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('POST', appId, authToken, resource, body, userActionSignature)
  }
  async put<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    body: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('PUT', appId, authToken, resource, body, userActionSignature)
  }
  async delete<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('DELETE', appId, authToken, resource, '', userActionSignature)
  }
}

export const httpClient = new HttpClient()
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

export type CreateApplicationInput = {
  name: string
  relyingPartyId: string
  origin: string
  permissionId?: string
  kind: ApplicationKind
  daysValid?: number
  publicKey?: string
  externalId?: string
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

export enum ApplicationKind {
  ServerSideApplication = "ServerSideApplication",
  ClientSideApplication = "ClientSideApplication"
}

export type AppInfoWithPublicKey = {
  appId: string
  kind: ApplicationKind
  orgId: string
  expectedRpId: string
  name: string
  isActive: boolean
  expectedOrigin: string
  permissionAssignments: PermissionAssignmentInfo[]
  accessTokens: AccessTokenInfoWithPublicKey[]
}
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code title="createClientSideApplication.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'
import { generateUserActionSignature } from './generateUserActionSignature'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const privateKey = process.env['DFNS_SIGN_KEY'].replace(/\\n/g, '\n')
const resourcePath = '/auth/apps'
const body = {
  name: 'My New Application Name',
  kind: 'ClientSideApplication',
  relyingPartyId: 'localhost',
  origin: 'http://localhost:3000',
}

generateUserActionSignature(
  authToken,
  appId,
  'POST',
  resourcePath,
  JSON.stringify(body),
  privateKey,
).then((signature) => {
  httpClient.post(
    appId,
    authToken,
    resourcePath,
    JSON.stringify(body),
    signature
  ).then((newApplication) => {
    console.log(`New Application in ${newApplication.orgId}:`)
    console.log(`${newApplication.isActive ? '' : '(DEACTIVATED) '}${newApplication.name}`)
    console.log(`  Kind: ${newApplication.kind}`)
    console.log(`  Relying Party ID: ${newApplication.expectedRpId}`)
    console.log(`  Origin: ${newApplication.expectedOrigin}`)
  }).catch((error) => {
    console.error(`Failed to create application: ${error.message}`)
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

export const generateUserActionSignature = async (
  authToken,
  appId,
  method,
  resource,
  request,
  signingPrivateKey,
  signingAlgorithm = ''
) => {
  const challengeRequest = {
    userActionHttpMethod: method,
    userActionHttpPath: resource,
    userActionPayload: request
  }
  const userActionChallenge = await httpClient.post(
    appId,
    authToken,
    '/auth/action/init',
    JSON.stringify(challengeRequest)
  )

  const clientData = Buffer.from(JSON.stringify({
    type: 'key.get',
    challenge: userActionChallenge.challenge,
    origin: 'http://localhost:3000',
    crossOrigin: false,
  }))

  const signature = crypto.sign(
    signingAlgorithm,
    clientData,
    signingPrivateKey
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
    '/auth/action',
    JSON.stringify(signatureRequest)
  )
  return userActionSignature.userAction
}
```
{% endcode %}

{% code title="dfnsHttpClient.js" overflow="wrap" lineNumbers="true" %}
```javascript
import * as https from 'https'

// The nonce (required for all requests) helps to ensure a request can only be run once.
const generateNonce = () => {
  return Buffer.from(
    JSON.stringify({
      date: new Date().toISOString(),
      uuid: crypto.randomUUID(),
    })
  ).toString('base64url')
}

// HTTP wrapper that adds the required headers.
const makeDfnsHttpRequest = async (
  method,
  appId,
  authToken,
  resource,
  body,
  userActionSignature = ''
) => {
  // Replace this with api.dfns.io, if targeting the production environment.
  const target = 'api.dfns.ninja'

  const options = {
    hostname: target,
    port: 443,
    path: resource,
    method: method,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + authToken,
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
      Host: target,
      'User-Agent': 'My test Application',
      'X-DFNS-APPID': appId,
      'X-DFNS-NONCE': generateNonce(),
      'X-DFNS-USERACTION': userActionSignature,
    },
  }

  return new Promise((resolve, reject) => {
    let result = ''

    const handleRequest = (response) => {
      const { statusCode } = response

      response.setEncoding('utf-8')
      response.on('data', (chunk) => {
        result += chunk
      })

      const isStatus2xx = statusCode && statusCode >= 200 && statusCode < 300

      response.on('end', () => {
        if (!isStatus2xx) {
          let errorMessage = response.statusMessage
          if (!errorMessage && result) {
            try {
              errorMessage = JSON.parse(result).error.message
            } catch {
              errorMessage = 'Unknown error'
            }
          }
          reject({
            statusCode: response.statusCode,
            message: errorMessage,
          })
        } else {
          try {
            if (result === '') {
              resolve({})
            } else {
              resolve(JSON.parse(result))
            }
          } catch (error) {
            reject(error)
          }
        }
      })
    }

    const request = https.request(options, handleRequest)

    request.on('error', (e) => {
      reject(e)
    })

    if (body !== '') {
      request.write(body)
    }

    request.end()
  })
}

export class HttpClient {
  async get(
    appId,
    authToken,
    resource,
    userActionSignature = '',
  ){
    return makeDfnsHttpRequest('GET', appId, authToken, resource, '', userActionSignature)
  }
  async post(
    appId,
    authToken,
    resource,
    body,
    userActionSignature = '',
  ) {
    return makeDfnsHttpRequest('POST', appId, authToken, resource, body, userActionSignature)
  }
  async put(
    appId,
    authToken,
    resource,
    body,
    userActionSignature = '',
  ) {
    return makeDfnsHttpRequest('PUT', appId, authToken, resource, body, userActionSignature)
  }
  async delete(
    appId,
    authToken,
    resource,
    userActionSignature = '',
  ) {
    return makeDfnsHttpRequest('DELETE', appId, authToken, resource, '', userActionSignature)
  }
}

export const httpClient = new HttpClient()
```
{% endcode %}
{% endtab %}

{% tab title="Curl" %}
{% code title="createClientSideApplication.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

appName='My New Application Name'
kind='ClientSideApplication'
relyingPartyId='localhost'
origin='http://localhost:3000'
curl -X POST "/auth/manage/apps" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $DFNS_APP_ID" \
-H "Authoriztion: Bearer $DFNS_API_KEY" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d "{\"name\":\"$appName\", \"kind\":\"$kind\", \"relyingPartyId\":\"$relyingPartyId\", \"origin\":\"$origin\"}"
```
{% endcode %}
{% endtab %}
{% endtabs %}
