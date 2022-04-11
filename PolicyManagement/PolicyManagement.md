
  PolicyManagement

  
## CreatePolicy
`policies/policies`

Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies" method="post" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## UpdatePolicy
`policies/policies/{policyId}`

Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies/{policyId}" method="put" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ReadyPolicyById
`policies/policies/{policyId}`

Retrieves single `Policy` item by it’s `id`.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies/{policyId}" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ListPolicies
`policies/policies`

Lists all available `Policy` items. List can be further filtered using using additional parameters below.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ArchivePolicy
`policies/policies/{policyId}`



{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policies/{policyId}" method="delete" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## CreatePolicyControl
`policies/policy-controls`

Creates new `PolicyControl` item. 

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-controls" method="post" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## UpdatePolicyControl
`policies/policy-controls/{policyControlId}`

Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="put" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ReadyPolicyControlById
`policies/policy-controls/{policyControlId}`

Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ListPolicyControls
`policies/policy-controls`

Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-controls" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ArchivePolicyControl
`policies/policy-controls/{policyControlId}`



{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-controls/{policyControlId}" method="delete" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## CreatePolicyRule
`policies/policy-rules`

Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-rules" method="post" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## UpdatePolicyRule
`policies/policy-rules/{policyRuleId}`

Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="put" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ReadyPolicyRuleById
`policies/policy-rules/{policyRuleId}`

Retrieves single `Policy` item by it’s `id`.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ListPolicyRules
`policies/policy-rules`

Lists all available `Policy` items. List can be further filtered using using additional parameters below.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-rules" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}


## ArchivePolicyRule
`policies/policy-rules/{policyRuleId}`



{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="/policies/policy-rules/{policyRuleId}" method="delete" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

  