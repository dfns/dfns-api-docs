# Archive Service Account

`DELETE /auth/service-accounts/{serviceAccountId}`

Archive a specific service account

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                        | Conditions      |
| --------------------------- | --------------- |
| `Auth:Apps:Update`          | Always Required |
| `Auth:Types:ServiceAccount` | Always Required |

## Parameters

|                                                       |                                         |
| ----------------------------------------------------- | --------------------------------------- |
| `serviceAccountId` <mark style="color:red;">\*</mark> | the ID of the service account to update |

### Example

```
/auth/service-accounts/us-em7bu-m6c48-hdqoobj7dj25pko
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [Service Account Management Errors](../../errors.md#service-account-management-errors) for service account management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The service account that was updated

```json
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
