# Deactivate User Credential

`PUT /auth/credentials/deactivate`

Deactivates a credential that was previously active. If the credential is already deactivated no action is taken

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Creds:Update`   | Always Required                   |

## Request body

| | | |
| - | - | - |
| `credentialUuid` <mark style="color:red;">\*</mark> | `String` | The UUID of the credential that is being deactivated |

Example:
```JSON
{
  "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr"
}
```

## Responses

{% tabs %}
{% tab title="200" %}
**Success: generic success message**

```json
{
    "message": "success"
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

## Examples
