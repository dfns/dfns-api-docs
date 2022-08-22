
## ArchivePolicyControl
`RESTful Endpoint: delete /policies/policy-controls/{policyControlId}`

Deactivates a specific `PolicyControl` entity by its `PolicyControlId` and marks its `status` as `Archived`.

### Input Query Parameters
* Path parameter `policyControlId`: `String`.  
  


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="delete" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
