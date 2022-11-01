
## ArchiveCallbackSubscription
`RESTful Endpoint: DELETE /callback-subscriptions/{callbackSubscriptionId}`

Scopes:
 * as Employee Auth: Callbacks:ArchiveCallbackSubscription
 * as API Key: Callbacks:ArchiveCallbackSubscription


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



