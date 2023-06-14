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

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/user-management/get-user.ts" %} Typescript Example {% endembed %}
