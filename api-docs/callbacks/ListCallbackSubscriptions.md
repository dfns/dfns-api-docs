
## ListCallbackSubscriptions
`RESTful Endpoint: GET /callback-subscriptions`

Scopes:
 * as Employee Auth: Callbacks:ListCallbackSubscriptions
 * as API Key: Callbacks:ListCallbackSubscriptions




### Successful Response
* id: `EntityId`. 
* orgId: `EntityId`. 
* externalId: `String`. 
* eventKind: `CallbackEventKind`. 
* eventSelector: `EventSelector`. 
* url: `String`. 
* status: `CallbackSubscriptionStatus`. 
* dateCreated: `IsoDatetime`.



