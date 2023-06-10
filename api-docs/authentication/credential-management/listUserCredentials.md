# List User Credentials

`GET /auth/credentials`

Lists all credentials for a user.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Required Permissions

{% hint style="info" %}
The permissions apply to the application only.
{% endhint %}

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Creds:Read`     | Always Required                   |

## Responses

{% tabs %}
{% tab title="200" %}
**Success: a list of the user's credentials**

```JSON
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
