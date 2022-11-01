
## CreatePermissionPredicate
`RESTful Endpoint: POST /permissions/{permissionId}/predicates`

Scopes:
 * as API Key: Permissions:CreatePredicate
 * as Employee Auth: Permissions:CreatePredicate

Creates new predicate. The permissionId path variable must correspond to an existing permission. Returns error if the user is not authorized to create predicates for the organization.
### Input Query Parameters
* Path parameter `permissionId`: undefined
### Input Body Parameters
* fieldName: 
* evaluatorKind: 
* parameters: 

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
#### `400` **invalidPredicatePayload** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `409` **duplicatePredicate** 

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


