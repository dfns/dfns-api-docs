# List Personal Access Tokens

`GET /auth/pats`

Returns a list of personal access tokens

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Auth:Apps:Read` | Always Required |
| `Auth:Types:Pat` | Always Required |

## Responses

{% tabs %}
{% tab title="200" %}
**Success**

```JSON
{
  "items": [
    {
      "dateCreated": "2023-03-16T20:17:35.291Z",
      "credId": "Y2ktMWYxcTWtN3ZzbSAtODVhcZ5kY2lwZTY3ZTgwMg",
      "isActive": true,
      "kind": "Pat",
      "linkedUserId": "us-24vwa-92s33-8tvqi1dg0a95megt",
      "linkedAppId": "",
      "name": "My PAT",
      "orgId": "or-yanke-mars-6ulofamogg8fs87v",
      "permissionAssignments": [
        {
          "permissionId": "pm-mars-lithi-17bf4kf0548ajph4",
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
      "publicKey": "SHA256:lH6mAX/74SbZzSjwNAFApwJsUdccVQzA8yj7K8/R5el",
      "tokenId": "to-7vwr2-h2f29-9m6a0fmkk7rr2hj7"
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
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/apps)"
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
{% code title="listPersonalAccessTokens.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { AccessTokenInfoWithPublicKey } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
httpClient.get<{items: AccessTokenInfoWithPublicKey[]}>(
  appId,
  authToken,
  '/auth/pats'
).then((tokens) => {
  if (tokens.length === 0) {
    console.log('No Access Tokens')
    return
  }
  console.log(`Access Tokens for ${tokens[0].linkedUserId}:`)
  for (const token of tokens) {
    console.log(`${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
    console.log(`  Kind: ${token.kind}`)
    console.log(`  Public Key: ${token.publicKey}`)
    console.log(`  Cred ID: ${token.credId}`)
  }
}).catch((error) => {
  console.error(`Failed to list personal access tokens: ${error.message}`)
})
```
{% endcode %}

{% code title="types.ts" overflow="wrap" lineNumbers="true" %}
```typescript
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
{% code title="listPersonalAccessTokens.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
httpClient.get(
  appId,
  authToken,
  '/auth/pats'
).then((tokens) => {
  if (tokens.length === 0) {
    console.log('No Access Tokens')
    return
  }
  console.log(`Access Tokens for ${tokens[0].linkedUserId}:`)
  for (const token of tokens) {
    console.log(`${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
    console.log(`  Kind: ${token.kind}`)
    console.log(`  Public Key: ${token.publicKey}`)
    console.log(`  Cred ID: ${token.credId}`)
  }
}).catch((error) => {
  console.error(`Failed to list personal access tokens: ${error.message}`)
})
```
{% endcode %}
{% endtab %}

{% tab title="Curl" %}
{% code title="listPersonalAccessTokens.sh" overflow="wrap" lineNumbers="true" %}
```shell
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"date\":\"$currentTime\",\"uuid\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )

curl "/auth/pats" \
 -H "Content-Type: application/json" \
 -H "X-DFNS-NONCE: $nonce" \
 -H "X-DFNS-APPID: $DFNS_APP_ID" \
 -H "Authoriztion: Bearer $DFNS_API_KEY"
```
{% endcode %}
{% endtab %}
{% endtabs %}
