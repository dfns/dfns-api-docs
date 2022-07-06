
## ListPolicyRules
`RESTful Endpoint: get /policies/policy-rules`

Lists all available `Policy` items. List can be further filtered using using additional parameters below.


### Input Query Parameters
* Query parameter `dateCreated`: `String`. ,* Query parameter `dateUpdated`: `String`. ,* Query parameter `activityKind`: `Enumeration`: [`PaymentInitiation`, `AddingEmployee`, `UpdatingEmployeeDetails`, `RemovingEmployee`, `CreatingSignature`]. ,* Query parameter `isEnabled`: `Bool`. ,* Query parameter `isDisabled`: `Bool`. ,* Query parameter `isArchived`: `Bool`.  
  


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/policies/policy-rules" method="get" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
