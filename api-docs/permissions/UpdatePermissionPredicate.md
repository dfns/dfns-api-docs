# UpdatePermissionPredicate

`RESTful Endpoint: PUT /permissions/{permissionId}/predicates/{predicateId}`

Scopes:

* as API Key: Permissions:UpdatePredicate
* as Employee Auth: Permissions:UpdatePredicate

Updates permission predicate. Only fields that are populated will be updated. Returns error if the user is not authorized to update the predicate or the predicate does not exist.

## Input Query Parameters

* Path parameter `permissionId`: undefined ,\* Path parameter `predicateId`: undefined

## Input Body Parameters

* fieldName:
* evaluatorKind:
* parameters:

_Please consult OpenAPI file full breakdown and including nested properties._

## Successful Response

* id: `EntityId`.
* orgId: `EntityId`.
* permissionId: `EntityId`.
* fieldName: `String`.
* evaluatorKind: `FieldEvaluatorKind`.
* parameters: `String[]`.
* isImmutable: `Bool`.
* dateCreated: `IsoDatetime`.
* dateUpdated: `IsoDatetime`.
* isArchived: `Bool`.

## Error Responses

### `400` **invalidPredicatePayload**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.

### `404` **predicateNotFound**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.

### `401` **notPermitted**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.
