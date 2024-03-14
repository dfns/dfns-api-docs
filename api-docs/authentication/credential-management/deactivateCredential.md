# Deactivate User Credential

`PUT /auth/credentials/deactivate`

Deactivates a credential that was previously active. If the credential is already deactivated no action is taken

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `Auth:Creds:Update` | Always Required |

## Request body

|                                                     |          |                                                      |
| --------------------------------------------------- | -------- | ---------------------------------------------------- |
| `credentialUuid` <mark style="color:red;">\*</mark> | `String` | The UUID of the credential that is being deactivated |

### Example

```json
{
  "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [Credential Management Errors](../../errors.md#credential-management-errors) for credential management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - generic success message

```json
{
    "message": "success"
}
```
{% endtab %}
{% endtabs %}
