
## ReadAssetAccountBalanceById
`RESTful Endpoint: GET /assets/asset-accounts/{assetAccountId}/balance`

Scopes:
 * as API Key: asset_accounts:get_balance
 * as Employee Auth: asset_accounts:get_balance

Retrieves the balance of the `AssetAccount` by its `id`. Returns an instance of `AssetAccountBalance`.

### Input Query Parameters
* Path parameter `assetAccountId`: undefined  
  

### Successful Response
* id: `EntityId`. Id of the AssetAccount.
* assetSymbol: `AssetSymbol`. Asset Symbol of the account.
* balance: `Amount`. Balance of the account.

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{assetAccountId}/balance" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
