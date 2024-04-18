# Create Credential Challenge With Code

`POST /auth/credentials/code/init`

Part of the flow [Create Credential With Code](../../../../advanced-topics/authentication/credentials/#create-credential-with-code-flow).

Creates a credential challenge using a one time code-time-code. This challenge must then be signed by the new credential, before finalizing the flow.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
The permissions apply to the application only.
{% endhint %}

<table><thead><tr><th width="289">Name</th><th>Conditions</th></tr></thead><tbody><tr><td><code>Auth:Creds:Create</code></td><td>Always Required (on the Application)</td></tr><tr><td><code>Auth:Creds:Code:Create</code></td><td>Always Required (on the Application)</td></tr></tbody></table>

## Request body

<table><thead><tr><th width="209">Property</th><th width="101.33333333333331">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>code</code> <mark style="color:red;">*</mark></td><td><code>String</code></td><td>The code gotten from the <a href="createusercredential.md">Create Credential Code</a> endpoint</td></tr><tr><td><code>credentialKind</code><mark style="color:red;">*</mark></td><td><code>String</code></td><td>Kind of credential being registered (see <a href="../#credential-kinds">Credential Kind</a>)</td></tr></tbody></table>

```json
{
  "code": "A7U-KY6-9PT",
  "credentialKind": "Fido2"
}
```

## Response

Same as [Create Credential Challenge](createusercredentialchallenge.md) endpoint
