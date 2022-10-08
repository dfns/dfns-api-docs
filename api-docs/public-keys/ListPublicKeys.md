
## ListPublicKeys
`RESTful Endpoint: GET /public-keys`

Scopes:
 * as API Key: PublicKeys:ListPublicKeys
 * as Employee Auth: PublicKeys:ListPublicKeys




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
#### `404` **NotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


