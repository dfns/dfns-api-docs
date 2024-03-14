# Update User

`PUT /auth/users/{userId}`

Update a specific userId in the caller's org

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

|                                             |                              |
| ------------------------------------------- | ---------------------------- |
| `userId` <mark style="color:red;">\*</mark> | the ID of the user to update |

### Example

```
/auth/users/us-em7bu-m6c48-hdqoobj7dj24pko
```

## Request Body

<table><thead><tr><th width="247.33333333333331"></th><th></th><th></th></tr></thead><tbody><tr><td><code>publicKey</code></td><td>String</td><td><code>Optional</code> a PGP public key that is used to encrypt emails going to the new user</td></tr><tr><td><code>externalId</code></td><td>String</td><td><code>Optional</code> a user defined value that can be used to correlate the entity with an external system</td></tr></tbody></table>

### Example

```json
{
  "external": "my_internal_id"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [User Management Errors](../../errors.md#user-management-errors) for user management specific errors.
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
  "isActive": true,
  "isServiceAccount": false,
  "isRegistered": false,
  "permissionAssignments": []
}
```
{% endtab %}
{% endtabs %}
