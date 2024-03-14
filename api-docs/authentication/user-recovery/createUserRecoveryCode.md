# Send User Recovery Verification Email

`PUT /auth/recover/user/code`

Sends the user a recovery verification code. This code is used as a second factor to verify the user initiated the recovery request.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authentication, the permissions apply to the application only.
{% endhint %}

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Users:Create`   | Always Required                   |
| `Auth:Types:Employee` | When `kind` is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When `kind` is `EndUser`          |

## Request body <a href="#request-body" id="request-body"></a>

|                                               |          |                                                    |
| --------------------------------------------- | -------- | -------------------------------------------------- |
| `username` <mark style="color:red;">\*</mark> | `String` | email of the user                                  |
| `orgId` <mark style="color:red;">\*</mark>    | `String` | globally unique ID of the organization of the user |

### Example

```json
{
  "username": "jdoe@example.co",
  "orgId": "or-34513-nip9c-8bppvgqgj28dbodrc"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [User Recovery Errors](../../errors.md#user-recovery-errors) for user recovery specific errors.
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
