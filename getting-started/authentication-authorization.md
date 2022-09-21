# Auth

Dfns uses industry standard [JWT tokens](https://www.rfc-editor.org/rfc/rfc7519) to control API access.

JWT tokens are created both for human users and for [API Keys](../api-docs/api-keys/) (machine or service accounts):

* Users can retrieve their JWT token from Settings in the [Dfns Dashboard](https://dashboard.dfns.io)
* API Key JWT tokens are returned from the [Create API Key endpoint](../api-docs/api-keys/CreateApiKey.md) and should be securely persisted

To call any API endpoint, simply pass the JWT as a Bearer token in your request header:

```shell
curl https://api.dfns.io/{endpoint}
   -H "Accept: application/json"
   -H "Authorization: Bearer {JWT}"
```
