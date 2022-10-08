
## GetAddressForNetwork
`RESTful Endpoint: GET /public-keys/{publicKey}/address`

Scopes:
 * as Employee Auth: PublicKeys:GetAddressForNetwork
 * as API Key: PublicKeys:GetAddressForNetwork

Returns the `publicKey`'s address on a given `network`.
### Input Query Parameters
* Path parameter `publicKey`: undefined ,* Query parameter `network`: undefined

### Successful Response
* publicKeyid: `String`. 
* asset: `String`. 
* network: `String`. 
* address: `BlockchainAddress`.
### Error Responses
#### `404` **notFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `400` **badRequest** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


