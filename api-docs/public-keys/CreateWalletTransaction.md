
## CreateWalletTransaction
`RESTful Endpoint: post /mpc/networks/{network}/wallets/{walletId}/transactions`


## CreateWalletTransaction
`/mpc/networks/{network}/wallets/{walletId}/transactions`



{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/mpc/networks/{network}/wallets/{walletId}/transactions" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}


### Input Query Parameters
* Path parameter `network`: `String`. ,* Path parameter `walletId`: `String`.  
  

### Input Body Parameters
* to: `BlockchainAddress` 
* amount: `Amount` 
* asset: `String` 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/mpc/networks/{network}/wallets/{walletId}/transactions" method="post" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
