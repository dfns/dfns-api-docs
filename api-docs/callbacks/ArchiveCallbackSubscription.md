
## ArchiveCallbackSubscription
`RESTful Endpoint: DELETE /callback-subscriptions/{callbackSubscriptionId}`

Scopes:
 * as Employee Auth: callbacks:archive
 * as API Key: callbacks:archive



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


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-subscriptions/{callbackSubscriptionId}" method="delete" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
