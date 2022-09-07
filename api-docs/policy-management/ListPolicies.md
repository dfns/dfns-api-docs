
## ListPolicies
`RESTful Endpoint: GET /policies`

Scopes:
 * as API Key: policies:read
 * as Employee Auth: policies:read

Lists all available `Policy` entities. List can be further filtered using using additional parameters below.


### Input Query Parameters
* Query parameter `dateCreated`: undefined ,* Query parameter `dateUpdated`: undefined ,* Query parameter `activityKind`: undefined ,* Query parameter `isEnabled`: undefined ,* Query parameter `isDisabled`: undefined ,* Query parameter `isArchived`: undefined  
  

### Successful Response
* id: `EntityId`. 
* version: `String`. 
* activityKind: `PolicyActivityKind`. 
* tags: `Tag[]`. 
* dateCreated: `IsoDatetime`. 
* isImmutable: `Bool`. 
* orgId: `EntityId`. 
* description: `String`. 
* author: `Username`. 
* name: `String`. 
* status: `PolicyStatus`. 
* controlIds: `EntityId[]`. 
* ruleIds: `EntityId[]`. 
* filter: `PolicyObjectFilter`. 

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
