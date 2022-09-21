
## GetCallbackSubscriptionById
`RESTful Endpoint: GET /callback-subscriptions/{callbackSubscriptionId}`

Scopes:
 * as Employee Auth: callbacks:read
 * as API Key: callbacks:read



### Input Query Parameters
* Path parameter `callbackSubscriptionId`: undefined  
  

### Successful Response
* id: `EntityId`. 
* orgId: `EntityId`. 
* externalId: `String`. 
* eventKind: `CallbackEventKind`. 
* eventSelector: `EventSelector`. 
* url: `String`. 
* status: `CallbackSubscriptionStatus`. 
* dateCreated: `IsoDatetime`. 

### Error Responses
#### `404` **callbackSubscriptionNotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-subscriptions/{callbackSubscriptionId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
