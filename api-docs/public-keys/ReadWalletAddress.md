
## ReadWalletAddress
`RESTful Endpoint: get /mpc/networks/{network}/wallets/{walletId}/address`


## ReadWalletAddress
`/mpc/networks/{network}/wallets/{walletId}/address`



{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/mpc/networks/{network}/wallets/{walletId}/address" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}


### Input Query Parameters
* Path parameter `network`: `String`. ,* Query parameter `asset`: `String`. Asset symbol that is being retrieved.

 - If this is a native currency (such as BTC on BTC network) it will be duplicated.
 - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.,* Path parameter `walletId`: `String`.  
  


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/mpc/networks/{network}/wallets/{walletId}/address" method="get" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
