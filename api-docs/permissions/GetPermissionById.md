# GetPermissionById

`RESTful Endpoint: GET /permissions/{permissionId}`

Scopes:

* as API Key: Permissions:GetPermission
* as Employee Auth: Permissions:GetPermission

Retrieves a specific permission given a permission id for the caller's organization. Returns error if the user is not authorized to retrieve the permission or the permission does not exist.

## Input Query Parameters

* Path parameter `permissionId`: undefined

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
