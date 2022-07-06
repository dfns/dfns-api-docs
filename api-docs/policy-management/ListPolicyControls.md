
## ListPolicyControls
`RESTful Endpoint: get /policies/policy-controls`


## ListPolicyControls
`/policies/policy-controls`

Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}


### Input Query Parameters
* Query parameter `dateCreated`: `String`. ,* Query parameter `dateUpdated`: `String`. ,* Query parameter `policyControlKind`: `Enumeration`: [`NotifyAndAudit`, `RequestApproval`]. ,* Query parameter `isEnabled`: `Bool`. ,* Query parameter `isDisabled`: `Bool`. ,* Query parameter `isArchived`: `Bool`.  
  


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/policies/policy-controls" method="get" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
