
## ArchivePermissionPredicate
`RESTful Endpoint: PUT /permissions/{permissionId}/predicates/{predicateId}/archive`

Scopes:
 * as API Key: Permissions:ArchivePredicate
 * as Employee Auth: Permissions:ArchivePredicate

Archives or unarchives a permission predicate. Returns error if the user is not authorized to archive the predicate or the predicate does not exist.
### Input Query Parameters
* Path parameter `permissionId`: undefined ,* Path parameter `predicateId`: undefined
### Input Body Parameters
* isArchived: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
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
### Error Responses
#### `404` **predicateNotFound** 

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


