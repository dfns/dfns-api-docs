# Get Balance

{% hint style="danger" %}
Warning: This API has been deprecated.  Please use [Wallets](../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}



`GET /assets/asset-accounts/{AssetAccountId}/balance`

Gets the on chain balance of the assets associated with the specified `AssetAccount id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `Balances:Read`   | Always Required |
| `PublicKeys:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>AssetAccountId</code></td><td>Unique identifier of the <code>AssetAccount</code> like:<br><br>aa<code>-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

`balance` is denominated in the smallest unit of the asset type - eg. WEI for ETH, Satoshi for BTC, etc. `maxUnitBalance` is denominated in the largest unit - eg. ETH or BTC.

```json
{
   "id": "aa-network-burger-21cb681b2c",
   "assetSymbol": "ETH",
   "balance": "249979348805298000", 
   "maxUnitBalance": ".2499"
}
```
