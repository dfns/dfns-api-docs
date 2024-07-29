# Resend Registration Code

`PUT /auth/registration/code`

Sends the user a new registration code. The previous registration code will be marked invalid. If the user has already completed their registration no action will be taken

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authenticated, the permissions apply to the application only.
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
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Registration Errors](../../../getting-started/errors.md#user-registration-errors) for user registration specific errors.
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
