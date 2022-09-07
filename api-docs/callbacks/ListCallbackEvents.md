
## ListCallbackEvents
`RESTful Endpoint: GET /callback-events`

Scopes:
 * as Employee Auth: callback_events:read
 * as API Key: callback_events:read




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


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/callback-events" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
