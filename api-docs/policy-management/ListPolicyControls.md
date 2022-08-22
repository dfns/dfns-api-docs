
## ListPolicyControls
`RESTful Endpoint: get /policies/policy-controls`

Lists all available `PolicyControl` entities. List can be further filtered using using additional parameters below.


### Input Query Parameters
* Query parameter `dateCreated`: `String`. ,* Query parameter `dateUpdated`: `String`. ,* Query parameter `policyControlKind`: `Enumeration`: [`NotifyAndAudit`, `RequestApproval`]. ,* Query parameter `isEnabled`: `Bool`. ,* Query parameter `isDisabled`: `Bool`. ,* Query parameter `isArchived`: `Bool`.  
  


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
