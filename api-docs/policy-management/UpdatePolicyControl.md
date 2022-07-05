
## UpdatePolicyControl
`/policies/policy-controls/{policyControlId}`

Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="//policies/policy-controls/{policyControlId}" method="put" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
