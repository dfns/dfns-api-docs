
## GetAssetAccountBalanceById
`RESTful Endpoint: GET /assets/asset-accounts/{assetAccountId}/balance`

Retrieves the balance of the `AssetAccount` by its `id`. Returns an instance of `AssetAccountBalance`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md "mention") for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

### Required Permissions

| Name                       | Conditions      |
| -------------------------- | --------------- |
| `AssetAccounts:GetBalance` | Always Required |

<!--  -->
### Input Query Parameters
* Path parameter `assetAccountId`: undefined

### Successful Response
* id: `EntityId`. Id of the AssetAccount.
* assetSymbol: `AssetSymbol`. Asset Symbol of the account.
* balance: `Amount`. Balance of the account.



