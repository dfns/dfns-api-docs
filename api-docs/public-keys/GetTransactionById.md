
## GetTransactionById
`RESTful Endpoint: GET /public-keys/transactions/{transactionId}`

Scopes:
 * as API Key: transactions:read
 * as Employee Auth: transactions:read



### Input Query Parameters
* Path parameter `transactionId`: undefined  
  

### Successful Response
* id: `EntityId`. 
* transaction: `TransactionPayload`. 
* snapshot: `DocumentSnapshot`. 
* network: `BlockchainNetwork`. 
* dateCreated: `IsoDatetime`. 
* dateUpdated: `IsoDatetime`. 
* status: `TransactionStatus`. 
* txHash: `String`. 
* networkResponse: `String`. 
* dateBroadcasted: `IsoDatetime`. 
* initiator: `Initiator`. 
* publicKeyId: `String`. 
* orgId: `EntityId`. 

### Error Responses
#### `404` **NotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/public-keys/transactions/{transactionId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
