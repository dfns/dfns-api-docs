# Archive Service Account

`DELETE /auth/service-accounts/{serviceAccountId}`

Archive a specific service account

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
    "isActive": false,
    "isServiceAccount": true,
    "isRegistered": true,
    "permissionAssignments": []
  },
  "accessTokens": []
}
```
{% endtab %}
{% endtabs %}

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/service-account-management/archive-service-account.ts" %} Typescript Example {% endembed %}
