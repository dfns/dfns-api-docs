
## CreateSignature
`RESTful Endpoint: POST /public-keys/{publicKeyId}/signatures`

Scopes:
 * as API Key: Signatures:CreateSignature
 * as Employee Auth: Signatures:CreateSignature

Accepts a message, and uses Dfns MPC network to create signature against it.
### Input Query Parameters
* Path parameter `publicKeyId`: undefined
### Input Body Parameters
* hash: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
* r: `String`. 
* s: `String`. 
* recid: `Integer`.
### Error Responses
#### `404` **NotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `402` **PaymentRequired** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


