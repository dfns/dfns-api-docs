
## CreateApiKey
`RESTful Endpoint: POST /api-keys`

Scopes:
 * as Employee Auth: ApiKeys:CreateApiKey
 * as API Key: ApiKeys:CreateApiKey

## CreateApiKey

Instantiates a JWT token for a machine/service account, which must be securely persisted and passed in the request headers as a bearer token. The token is subject to policy engine controls, and you must provide scopes for it.


❗ **Caution**: Dfns does not keep the actual token you receive in the `token` field, so you must save it securely on your side. You will not be able to get this token again from the Dfns API.

### Input Body Parameters
* scopes: 
* externalId: 
* name: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
* id: `EntityId`. 
* status: `ApiKeyStatus`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* dateCreated: `IsoDatetime`. 
* name: `String`. 
* authorId: `EntityId`. 
* scopes: `String[]`. 
* token: `ApiKeyValue`.
### Error Responses
#### `403` **NotAllowed** 

* httpStatus: `Integer`. 
* errorName: `String`.


