
## InitiatePayment
`RESTful Endpoint: post /assets/asset-accounts/{accountId}/payments`

Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.

### Input Body Parameters
* externalId: `String` [_Optional_] 
* assetSymbol: `AssetSymbol` 
* amount: `Amount` 
* receiver: `PaymentInstrument` 
* note: `String` [_Optional_] 
* narrative: `String` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{accountId}/payments" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
