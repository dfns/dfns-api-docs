# Authentication/Authorization

Dfns uses industry standard [JWT tokens](https://www.rfc-editor.org/rfc/rfc7519) to control API access.&#x20;

JWT tokens are created both for Users and for [API Keys](../api-docs/apikeys/):&#x20;

* Users can retrieve their JWT token from Settings in the [Dfns Dashboard](https://dashboard.dfns.io)
* API Key JWT tokens are returned from the [Create API Key endpoint](../api-docs/api-keys/CreateApiKey.md) and should be securely persisted

To call API endpoints, simply pass the JWT as a Bearer token in your request header:&#x20;

```shell
curl https://api.dfns.io/{endpoint}
   -H "Accept: application/json"
   -H "Authorization: Bearer {JWT}"
```
