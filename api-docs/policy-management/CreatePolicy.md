
## CreatePolicy
`RESTful Endpoint: post /policies/policies`

Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.


### Input Body Parameters
* activityKind: `PolicyActivityKind` 
* isImmutable: `Bool` 
* description: `String` 
* name: `String` [_Optional_] 
* controlIds: `EntityId[]` 
* ruleIds: `EntityId[]` 
* status: `PolicyStatus` 
* filter: `PolicyObjectFilter` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/policies/policies" method="post" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
