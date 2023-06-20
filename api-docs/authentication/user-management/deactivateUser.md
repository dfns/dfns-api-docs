# Deactivate User

`PUT /auth/users/{userId}/deactivate`

Dectivate a specific user in the caller's org

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

|                                             |                                  |
| ------------------------------------------- | -------------------------------- |
| `userId` <mark style="color:red;">\*</mark> | the ID of the user to deactivate |

Example:

`/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko/deactivate`

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
  "isActive": false,
  "isServiceAccount": false,
  "isRegistered": false,
  "permissionAssignments": []
}
```
{% endtab %}
{% endtabs %}

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/user-management/deactivate-user.ts" %} Typescript Example {% endembed %}
