
## InitiatePayment
`/assets/asset-accounts/{accountId}/payments`

Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{accountId}/payments" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
