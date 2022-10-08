
## GetSignatureById
`RESTful Endpoint: GET /public-keys/{publicKeyId}/signatures/{signatureId}`

Scopes:
 * as API Key: Signatures:GetSignature
 * as Employee Auth: Signatures:GetSignature


### Input Query Parameters
* Path parameter `publicKeyId`: undefined ,* Path parameter `signatureId`: undefined

### Successful Response
* id: `EntityId`. 
* orgId: `EntityId`. 
* publicKeyId: `String`. 
* hash: `String`. 
* r: `String`. 
* s: `String`. 
* recid: `Integer`. 
* status: `SignatureStatus`. 
* initiator: `Initiator`.
### Error Responses
#### `404` **NotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


