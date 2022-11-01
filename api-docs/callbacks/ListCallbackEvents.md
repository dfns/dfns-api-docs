# ListCallbackEvents

`RESTful Endpoint: GET /callback-events`

Scopes:

* as Employee Auth: CallbackEvents:ListCallbackEvents
* as API Key: CallbackEvents:ListCallbackEvents

## Successful Response

* id: `EntityId`.
* orgId: `EntityId`.
* externalId: `String`.
* callbackSubscriptionId: `EntityId`.
* kind: `CallbackEventKind`.
* documentSnapshot: `DocumentSnapshot`.
* dateCreated: `IsoDatetime`.
* status: `CallbackEventStatus`.
