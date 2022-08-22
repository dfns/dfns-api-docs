
## GetAssetAccountById
`RESTful Endpoint: get /assets/asset-accounts/{assetAccountId}`

Retrieves a particular instance of `AssetAccount` by its `id`. If not found, returns `EntityNotFoundError` with a message indicating which table from which it's missing.

> **Notes**  
>   
>   
> `address` is derived from the `publicKey` via a blockchain-specific function.

<!--  -->

### Input Query Parameters
* Path parameter `assetAccountId`: `String`.  
  


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{assetAccountId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
