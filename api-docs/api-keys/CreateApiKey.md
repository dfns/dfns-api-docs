# Create API Key

`POST /api-keys/`

Instantiates a JWT token for a machine/service account, which must be securely persisted and passed in the request headers as a bearer token. The token is subject to policy engine controls, but can not approve policy control executions.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

ApiKeys:Create

### Parameters <a href="#request-body" id="request-body"></a>

### Request body <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the API Key</td><td>String</td></tr><tr><td><code>scopes</code></td><td>Required</td><td>This field will soon be deprecated.  Please pass "{}".</td><td>Pass an empty object: {}</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/api-keys/" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"name": "Server Key 3"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

The response returns a `token`.  Note Dfns does not persist the token you receive, so you must save it securely.  You will not be able to get this token again from the Dfns API.

```json
{
  "id": "api-cat-freddie-a150fe2ce0",
  "name": "My API Key",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Active",
  "authorId": "ce-finch-march-5b59fcbb571b",
  "dateCreated": "2022-09-01T09:06:32.567Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJoL2FwaS5kZm5ZiIsImlzcyI6Imh0dHBzOi8vYXBpa2V5cy5kZm5zLnd0Zi8iLCJzdWIiOiJjdS1wdXJwbGUtcGlwLTFiNDE3Yjk1ODUwMCIsImh0dHBzOi8vY3VzdG9tL29yZ0lkIjoiY3UtcHVycGxlLXBpcC0xYjQxN2I5NTg1MDAiLCJwZXJtaXNzaW9ucyI6WyJmdWxsOmFkbWluIl0sInNjb3BlIjoiZnVsbDphZG1pbiIsImp0aSI6ImFwaS1jYXQtZnJlZGRpZS1hMTUwZmUyY2UwIiwiaWF0IjoxNjYyMDIzMTkyLCJleHAiOjE2NjIxMDk1OTJ9.XXXXXXXXXXXXXXXXXXXXXXXX"
}
```
