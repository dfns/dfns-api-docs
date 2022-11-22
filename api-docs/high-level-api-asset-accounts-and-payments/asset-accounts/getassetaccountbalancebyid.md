# GetBalance

`GET /assets/asset-accounts/{AssetAccountId}/balance`

Gets the on chain balance of the assets associated with the specified `AssetAccount id`.

### Required Permissions

Balances:Read, PublicKeys:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter   | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `AssetAccountId` | <p>Unique identifier of the <code>AssetAccount</code> like:<br><br>aa<code>-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/assets/asset-accounts/aa-orange-magnesium-a0606d08b2/balance" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

`balance` is denominated in the smallest unit of the asset type - eg. WEI for ETH, Satoshi for BTC, etc.  `maxUnitBalance` is denominated in the largest unit - eg. ETH or BTC.&#x20;

```json
{
   "id": "aa-network-burger-21cb681b2c",
   "assetSymbol": "ETH",
   "balance": "249979348805298000", 
   "maxUnitBalance": ".2499"
}
```
