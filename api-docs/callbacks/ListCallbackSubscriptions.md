
## ListCallbackSubscriptions
`RESTful Endpoint: GET /callback-subscriptions`

Scopes:
 * as Employee Auth: callbacks:read
 * as API Key: callbacks:read




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


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-subscriptions" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
