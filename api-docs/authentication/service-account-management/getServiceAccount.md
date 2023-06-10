# Get Service Account

`GET /auth/service-accounts/{serviceAccountId}`

Activate a specific service account

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                        | Conditions      |
| --------------------------- | --------------- |
| `Auth:Apps:Read`            | Always Required |
| `Auth:Types:ServiceAccount` | Always Required |

## Parameters

### Path

|                                                       |                                         |
| ----------------------------------------------------- | --------------------------------------- |
| `serviceAccountId` <mark style="color:red;">\*</mark> | the ID of the service account to update |

Example:

`/auth/service-accounts/us-em7bu-m6c48-hdqoobj7dj25pko`

## Responses

{% tabs %}
{% tab title="200" %}
**Success**

```JSON
{
  "userInfo": {
    "username": "My new service account@ServiceAccount",
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
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k)"
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
{% code title="getServiceAccount.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { UserAccessTokenInformation } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const resourcePath = '/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k'
httpClient.get<UserAccessTokenInformation>(
  appId,
  authToken,
  resourcePath
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
  console.error(`Failed to get service account: ${error.message}`)
})
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
{% code title="getServiceAccount.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const resourcePath = '/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k'
httpClient.get(
  appId,
  authToken,
  resourcePath
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
  console.error(`Failed to get service account: ${error.message}`)
})
```
{% endcode %}
{% endtab %}

{% tab title="Curl" %}
{% code title="getServiceAccount.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

curl -X GET "/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $DFNS_APP_ID" \
-H "Authoriztion: Bearer $DFNS_API_KEY"
```
{% endcode %}
{% endtab %}
{% endtabs %}
