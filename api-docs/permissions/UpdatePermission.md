# UpdatePermission

`RESTful Endpoint: PUT /permissions/{permissionId}`

Scopes:

* as API Key: Permissions:UpdatePermission
* as Employee Auth: Permissions:UpdatePermission

Updates permission. Only fields that are populated will be updated. Returns error if the user is not authorized to update the permission or the permission does not exist.

## Input Query Parameters

* Path parameter `permissionId`: undefined

## Input Body Parameters

* permissionName:
* operations:

_Please consult OpenAPI file full breakdown and including nested properties._

## Successful Response

* id: `EntityId`.
* orgId: `EntityId`.
* permissionName: `String`.
* operations: `String[]`.
* status: `PermissionStatus`.
* isImmutable: `Bool`.
* predicates: `PermissionPredicate[]`.
* dateCreated: `IsoDatetime`.
* dateUpdated: `IsoDatetime`.
* isArchived: `Bool`.

## Error Responses

### `400` **invalidPermissionPayload**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.

### `404` **permissionNotFound**

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

### `409` **duplicatePermission**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.
