# ListPermissions

`RESTful Endpoint: GET /permissions`

Scopes:

* as API Key: Permissions:ListPermissions
* as Employee Auth: Permissions:ListPermissions

Returns all permissions of the caller’s organization. Returns error if the user is not authorized to retrieve permissions.

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

### `401` **notPermitted**

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.
