# CreatePermission

`RESTful Endpoint: POST /permissions`

Scopes:

* as API Key: Permissions:CreatePermission
* as Employee Auth: Permissions:CreatePermission

Creates new permission. The permissionName needs to be unique for each organization. Returns error if the user is not authorized to create permissions for the organization or a permission with the same name exists.

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

### `409` **duplicatePermission**

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
