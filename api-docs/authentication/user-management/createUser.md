# Create User

`POST /auth/users`

Create a new user in the caller's org. This will also send an registration email to the created User's email, with a registration code, and pointing him to complete his registration on Dfns Dashboard. The user is created without any permissions.

{% hint style="warning" %}
If you want the created User to not know about about Dfns, and don't want him to receive the registration email from Dfns, you should rather use the [Delegated Registration](../delegated-auth/delegatedregistration.md) endpoint.
{% endhint %}

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Users:Create`   | Always Required                   |
| `Auth:Types:Employee` | When `kind` is `CustomerEmployee` |

## Request Body

<table><thead><tr><th width="296.3333333333333"></th><th width="121"></th><th></th></tr></thead><tbody><tr><td><code>email</code> <mark style="color:red;">*</mark></td><td>String</td><td>the email address of the new user</td></tr><tr><td><code>kind</code> <mark style="color:red;">*</mark></td><td>Enumerated Type (String)</td><td>the kind of user being created. For now, in this endpoint it can only be<br>"<code>CustomerEmployee".</code> (creating an "<code>EndUser"</code> is done through the <a href="../delegated-auth/delegatedregistration.md">Delegated Registration</a> endpoint)</td></tr><tr><td><code>externalId</code></td><td>String</td><td><code>Optional</code> a user defined value that can be used to correlate the entity with an external system</td></tr></tbody></table>

### Example:

```json
{
  "email": "jdoe@example.co",
  "kind": "CustomerEmployee"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Management Errors](../../../getting-started/errors.md#user-management-errors) for user management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The created user

```json
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
