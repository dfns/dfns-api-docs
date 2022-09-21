
## GetCallbackEventById
`RESTful Endpoint: GET /callback-events/{callbackEventId}`

Scopes:
 * as Employee Auth: callback_events:read
 * as API Key: callback_events:read



### Input Query Parameters
* Path parameter `callbackEventId`: undefined  
  

### Successful Response
* id: `EntityId`. 
* orgId: `EntityId`. 
* externalId: `String`. 
* callbackSubscriptionId: `EntityId`. 
* kind: `CallbackEventKind`. 
* documentSnapshot: `DocumentSnapshot`. 
* dateCreated: `IsoDatetime`. 
* status: `CallbackEventStatus`. 

### Error Responses
#### `404` **callbackEventNotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-events/{callbackEventId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
