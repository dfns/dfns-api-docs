# Create Credential With Code

`POST /auth/credentials/code/verify`

Part of the flow [Create Credential With Code](../../../../advanced-topics/authentication/credentials/#create-credential-with-code-flow).&#x20;

Adds a new credential to a user's account.  This endpoint is similar to the [Create Credential](createusercredential-1.md) endpoint, except:

* it does not need the user to be authenticated
* it does not need user action signing
* it will only work with the challenge gotten from the [Create Credential Challenge With Code](createusercredentialchallenge-1.md) endpoint

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
The permissions apply to the application only.
{% endhint %}

<table><thead><tr><th width="289">Name</th><th>Conditions</th></tr></thead><tbody><tr><td><code>Auth:Creds:Create</code></td><td>Always Required (on the Application)</td></tr><tr><td><code>Auth:Creds:Code:Create</code></td><td>Always Required (on the Application)</td></tr></tbody></table>

## Request body

Similar to the [Create Credential](createusercredential-1.md) endpoint

## Response body

Similar to the [Create Credential](createusercredential-1.md) endpoint
