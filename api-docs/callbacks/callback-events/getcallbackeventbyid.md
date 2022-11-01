
## GetCallbackEventById
`RESTful Endpoint: GET /callback-events/{callbackEventId}`

Scopes:
 * as Employee Auth: CallbackEvents:GetCallbackEvent
 * as API Key: CallbackEvents:GetCallbackEvent


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


