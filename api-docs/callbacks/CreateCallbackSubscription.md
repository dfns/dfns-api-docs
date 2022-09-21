
## CreateCallbackSubscription
`RESTful Endpoint: POST /callback-subscriptions`

Scopes:
 * as Employee Auth: callbacks:write
 * as API Key: callbacks:write




### Input Body Parameters
* externalId: 
* eventKind: 
* url: 
* eventSelector: 

_Please consult OpenAPI file full breakdown and including nested properties._

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
#### `400` **invalidCallbackSubscriptionPayload** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-subscriptions" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
