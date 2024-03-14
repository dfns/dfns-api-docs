# Archive User

`DELETE /auth/users/{userId}`

Archive a specific user in the caller's org

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions <a href="#permissions" id="permissions"></a>

| Name                  | Conditions                                    |
| --------------------- | --------------------------------------------- |
| `Auth:Users:Update`   | Always Required                               |
| `Auth:Types:Employee` | When target user's kind is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When target user's kind is `EndUser`          |

## Parameters

|                                             |                               |
| ------------------------------------------- | ----------------------------- |
| `userId` <mark style="color:red;">\*</mark> | the ID of the user to archive |

### Example

```
/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [User Management Errors](../../errors.md#user-management-errors) for user management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The user that was updated

```json
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
