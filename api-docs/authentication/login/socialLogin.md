# Social Login

`POST /auth/login/social`

Completes the login process and provides the authenticated user with their authentication token.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authenticated, the permissions apply to the application only.
{% endhint %}

| Name                  | Conditions      |
| --------------------- | --------------- |
| `Auth:Users:Read`     | Always Required |
| `Auth:Users:Delegate` | Always Required |
| `Auth:Users:EndUser`  | Always Required |


## Request body

|                                                              |          |                                                   |
| ------------------------------------------------------------ | -------- | ------------------------------------------------- |
| `idToken` <mark style="color:red;">\*</mark>                 | `String` | idToken provided by an IDP such as Google         |
| `socialLoginProviderKind` <mark style="color:red;">\*</mark> | `String` | type of the idToken, for now only `Oidc` is valid |


### Example:

```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3MTk2NzgzNTFhNWZhZWRjMmU3MDI3NGJ...",
  "socialLoginProviderKind": "Oidc",
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Login Errors](../../../getting-started/errors.md#user-login-errors) for user login errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - a user authentication token

```json
{
  "token": "eyJ0eX...bzrQakA"
}
```
{% endtab %}
{% endtabs %}
