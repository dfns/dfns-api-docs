
## GetPublicKeyById
`RESTful Endpoint: GET /public-keys/{publicKey}`

Scopes:
 * as Employee Auth: public_keys:read
 * as API Key: public_keys:read

## Description

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

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/public-keys/{publicKey}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
