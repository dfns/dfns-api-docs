# ResendRegistrationEmail

`PUT /auth/manage/users/send-registration-email`

Sends the user a new registration code. The previous registration code will be marked invalid. If the user has already completed their registration no action will be taken

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
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

| | | |
| - | - | - |
| `username` <mark style="color:red;">\*</mark> | `String` | email of the user |
| `orgId` <mark style="color:red;">\*</mark> | `String` | globally unique ID of the organization of the user |

Example:
```JSON
{
  "username": "jdoe@example.co",
  "orgId": "or-34513-nip9c-8bppvgqgj28dbodrc"
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
