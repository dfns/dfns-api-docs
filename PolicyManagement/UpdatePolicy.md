
## UpdatePolicy
`policies/policies/{policyId}`

Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies/{policyId}" method="put" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}
