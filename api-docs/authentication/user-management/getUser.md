# Get User

`GET /auth/users/{userId}`

Get a specific user from the caller's org

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Users:Read` | Always Required |

## Parameters

### Path

|                                             |                           |
| ------------------------------------------- | ------------------------- |
| `userId` <mark style="color:red;">\*</mark> | the ID of the user to get |

Example:

`/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko`

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Management Errors](../../../getting-started/errors.md#user-management-errors) for user management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The requested user

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
{% code title="getUser.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { httpClient } from './dfnsHttpClient'
import { UserInfo } from './types'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv'
httpClient.get<UserInfo>(
  authToken,
  appId,
  resourcePath
).then((user) => {
  console.log(`Users for ${user.orgId}:`)
  console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
  console.log(`  Kind: ${user.kind}`)
  console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
}).catch((error) => {
  console.error(`Failed to get user: ${error.message}`)
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
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
{% code title="getUser.js" overflow="wrap" lineNumbers="true" %}
```javascript
import { httpClient } from './dfnsHttpClient'

const authToken = process.env['DFNS_API_KEY']
const appId = process.env['DFNS_APP_ID']
const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv'
httpClient.get(
  authToken,
  appId,
  resourcePath
).then((user) => {
  console.log(`Users for ${user.orgId}:`)
  console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
  console.log(`  Kind: ${user.kind}`)
  console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
}).catch((error) => {
  console.error(`Failed to get user: ${error.message}`)
})
```
{% endcode %}
{% endtab %}
{% endtabs %}
