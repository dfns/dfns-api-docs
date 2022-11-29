# ListApiKeys

`GET /api-keys/`

Retrieves all `APIKeys` in the org.

### Required Permissions

ApiKeys:Read

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/api-keys/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the token is only returned on the initial call to [CreateAPIKey](CreateApiKey.md).&#x20;

```json
{
  "items": [
    {
      "id": "api-cat-freddie-a150fe2ce0",
      "name": "My API Key",
      "orgId": "cu-purple-pip-1b417b958500",
      "status": "Active",
      "authorId": "ce-finch-march-5b59fcbb571b",
      "dateCreated": "2022-09-01T09:06:32.567Z"
    },
    ...
  ]
}
```
