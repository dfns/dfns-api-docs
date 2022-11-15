# GetApiKeyById

`GET /api-keys/{APIKeyId}/`

Retrieves an `APIKey` by its `id`.

### Required Permissions

ApiKeys:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| `APIKeyId`     | <p>Unique identifier of the <code>APIKey</code> like:<br><br><code>api-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/api-keys/api-orange-magnesium-a0606d08b2/" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the token is only returned on the initial call to [CreateAPIKey](CreateApiKey.md).&#x20;

```json
{
  "id": "api-cat-freddie-a150fe2ce0",
  "name": "My API Key",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Active",
  "authorId": "ce-finch-march-5b59fcbb571b",
  "dateCreated": "2022-09-01T09:06:32.567Z"
}
```
