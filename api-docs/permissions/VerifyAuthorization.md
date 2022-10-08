
## VerifyAuthorization
`RESTful Endpoint: POST /permissions/authorizations`

Scopes:
 * as API Key: Permissions:Authorizations
 * as Employee Auth: Permissions:Authorizations

Temporary endpoint. Verifies whether an identity is allowed to perform a certain operation.

### Input Body Parameters
* identityId: 
* identityKind: 
* operation: 
* parameters: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
* isAuthorized: `Bool`.
### Error Responses
#### `400` **invalidVerificationPayload** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


