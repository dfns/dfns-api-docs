# Send Login Code

`POST /auth/login/code`

Sends a temporary one time code to the user that can be used during login flow.

If the user has a credential of kind `PasswordProtectedKey` a temporary one time code needs to be passed in the `loginCode` field.  That's because the [Create User Login Challenge](initlogin.md) is unauthenticated and returns the encrypted private key of the user. So we need a first step to verify the identity of the user to prevent anybody from fetching the encrypted private key and trying to brute force it offline.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authenticated, the permissions apply to the application only.
{% endhint %}

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Users:Read` | Always Required |

## Request body

|                                               |          |                           |
| --------------------------------------------- | -------- | ------------------------- |
| `username` <mark style="color:red;">\*</mark> | `String` | Email address of the user |
| `orgId` <mark style="color:red;">\*</mark>    | `String` | ID of the target Org      |

### Example

```json
{
  "username": "jdoe@example.co",
  "orgId": "or-34513-nip9c-8bppvgqgj28dbodrc"
}
```

## Response

{% tabs %}
{% tab title="200" %}
**Success**

```json
{
    "message": "success"
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Login Errors](../../../getting-started/errors.md#user-login-errors) for user login errors.
{% endhint %}
