# Create Exchange Deposit

`POST /exchanges/{exchangeId}/accounts/{accountId}/deposits`

Creates a new exchange deposit transaction.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                       | Conditions      |
| -------------------------- | --------------- |
| `Exchanges:Deposit:Create` | Always Required |

## Body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="252">Property</th><th width="165">Type / Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>network</code><mark style="color:red;">*</mark></td><td>String</td><td>Enum for the target Chain.</td></tr><tr><td><code>kind</code><mark style="color:red;">*</mark></td><td>String</td><td>Enum for the type of asset.  Eg "Native" or "ERC20".</td></tr><tr><td><code>from</code></td><td>String</td><td>Address of the Dfns wallet</td></tr><tr><td><code>amount</code><mark style="color:red;">*</mark></td><td>String</td><td>Transaction amount denominated in min units</td></tr></tbody></table>

**Example**

```json
{
    "network": "Polygon",
    "kind": "Erc20",
    "from": "0x0239baf37ae69ab3f25b65677b482a5e9a040198",
    "amount": "2000000",
    "contract": "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    "otp": "258988"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "extx-1fl2k-ouck8-xxxxxxxxxxxxxx",
  "exchangeId": "ex-1anvr-65s5k-xxxxxxxxxxxxxx",
  "accountId": "spot",
  "transferId": "xfr-1o99a-7ua8a-xxxxxxxxxxxxxx",
  "kind": "Deposit",
  "walletId": "wa-30md5-13q6n-xxxxxxxxxxxxxx",
  "requester": {
    "appId": "ap-2cpsu-jl2ua-xxxxxxxxxxxxxx",
    "userId": "us-kcrq8-hcrl9-xxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Erc20",
    "amount": "5000000",
    "contract": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    "walletId": "wa-30md5-13q6n-xxxxxxxxxxxxxx"
  },
  "dateCreated": "2024-09-09T16:11:13.579Z"
}
```
