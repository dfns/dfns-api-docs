# RevokeApiKey



`DELETE /api-keys/{APIKeyId}/`

Revokes an `APIKey` by its `id`.

### Required Permissions <a href="#scopes" id="scopes"></a>

ApiKeys:Revoke

### Parameters <a href="#request-body" id="request-body"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| `APIKeyId`     | <p>Unique identifier of the <code>APIKey</code> like:<br><br><code>api-orange-magnesium-a0606d08b2</code></p> |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X DELETE "/api-keys/api-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "api-cat-freddie-a150fe2ce0",
  "name": "My API Key",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Revoked",
  "authorId": "ce-finch-march-5b59fcbb571b",
  "dateCreated": "2022-09-01T09:06:32.567Z",
}
```
