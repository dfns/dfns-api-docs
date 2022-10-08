
## GetAssetAccountBalanceById
`RESTful Endpoint: GET /assets/asset-accounts/{assetAccountId}/balance`

Scopes:
 * as API Key: AssetAccounts:GetBalance
 * as Employee Auth: AssetAccounts:GetBalance

Retrieves the balance of the `AssetAccount` by its `id`. Returns an instance of `AssetAccountBalance`.

<!--  -->
### Input Query Parameters
* Path parameter `assetAccountId`: undefined

### Successful Response
* id: `EntityId`. Id of the AssetAccount.
* assetSymbol: `AssetSymbol`. Asset Symbol of the account.
* balance: `Amount`. Balance of the account.



