# ListPermissionPredicates

`RESTful Endpoint: GET /permissions/{permissionId}/predicates`

Scopes:

* as API Key: Permissions:ListPredicates
* as Employee Auth: Permissions:ListPredicates

Returns all predicates belonging to a specific permission. Returns error if the user is not authorized to retrieve predicates.

## Input Query Parameters

* Path parameter `permissionId`: undefined

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

### `401` **notPermitted**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.
