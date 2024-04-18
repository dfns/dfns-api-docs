# List Credentials

`GET /auth/credentials`

Lists all credentials for a user.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Required Permissions

{% hint style="info" %}
The permissions apply to the application only.
{% endhint %}

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Creds:Read` | Always Required |

## Responses

{% hint style="info" %}
* See [Common Errors](../../../../getting-started/errors.md#common-errors) for common errors.
* See [Credential Management Errors](../../../../getting-started/errors.md#credential-management-errors) for credential management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - a list of the user's credentials

```json
{
  "items": [
    {
      "credentialId": "c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "credentialUuid": "cr-34514-nip9c-8bppvgqgj28dbodrc",
      "dateCreated": "2023-01-11T19:05:06.773Z",
      "isActive": true,
      "kind": "Fido2",
      "name": "My Yubikey",
      "publicKey": "SHA256:E2a3ZQEb4...rPqc",
      "relyingPartyId": "dfns.ninja",
      "origin": "https://app.dfns.ninja"
    }
  ]
}
```
{% endtab %}
{% endtabs %}
