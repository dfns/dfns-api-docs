# Delegated Login

`POST /auth/login/delegated`

Logs a user into an organization without the user's credentials.

If you want to use your own authentication system, while still using `Delegated Signing`, you can use this endpoint to authenticate a user without needing the user's credentials.

The user authentication token can be used for read operations within the Dfns API, however, write operations will still require the user to sign the action.

{% hint style="info" %}
* Service account required. See [Service Accounts](../service-account-management/) for more information.
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Users:Read`     | Always Required                   |
| `Auth:Users:Delegate` | Always Required                   |
| `Auth:Types:Employee` | When `kind` is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When `kind` is `EndUser`          |

## Request body

| | | |
| - | - | - |
| `username` <mark style="color:red;">\*</mark> | `String` | The username that identifies the user in the org |

Example:
```JSON
{
  "username": "jdoe@example.co"
}
```

## Responses

{% tabs %}
{% tab title="200" %}
**Success: the user's authentication token**

```JSON
{
  "token": "eyJ0eX...bzrQakA"
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
