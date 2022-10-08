
## ArchivePermission
`RESTful Endpoint: PUT /permissions/{permissionId}/archive`

Scopes:
 * as API Key: Permissions:ArchivePermission
 * as Employee Auth: Permissions:ArchivePermission

Archives or unarchives a permission, along with all associated predicates. Returns error if the user is not authorized to archive the permission or the permission does not exist.
### Input Query Parameters
* Path parameter `permissionId`: undefined
### Input Body Parameters
* isArchived: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
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
### Error Responses
#### `404` **permissionNotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `401` **notPermitted** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


