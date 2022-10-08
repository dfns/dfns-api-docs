
## GetPublicKeyById
`RESTful Endpoint: GET /public-keys/{publicKey}`

Scopes:
 * as Employee Auth: PublicKeys:GetPublicKey
 * as API Key: PublicKeys:GetPublicKey

Retrieves public key details by its `id`.
### Input Query Parameters
* Path parameter `publicKey`: undefined

### Successful Response
* id: `EntityId`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* publicKey: `PublicKey`. 
* signerIds: `String[]`. 
* groupThreshold: `Integer`. 
* groupSize: `Integer`. 
* tags: `Tag[]`. 
* isEddsa: `Bool`. 
* allowedProducts: `ProductKind`.
### Error Responses
#### `404` **notFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


