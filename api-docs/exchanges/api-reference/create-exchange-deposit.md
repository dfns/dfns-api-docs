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
| `Wallets:TransferAsset`    | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `exchangeID`   | Unique identifier of the `Exchange`. ex. ex`-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |
| `accountID`    | Unique ENUM identified for the account like "spot"                         |

## Body <a href="#request-body" id="request-body"></a>

<table>
   <thead>
      <tr>
         <th width="80">Property</th>
         <th width="80">Required/Optional</th>
         <th>Description</th>
         <th width="80">Type</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td><code>walletId</code><mark style="color:red;">*</mark></td>
         <td>Required</td>
         <td>Id of the Dfns wallet making the deposit.</td>
         <td>String</td>
      </tr>
      <tr>
         <td><code>kind</code><mark style="color:red;">*</mark></td>
         <td>Required</td>
         <td>Enum for the type of asset.  Eg "Native" or "ERC20".</td>
         <td>String</td>
      </tr>
      <tr>
         <td><code>amount</code><mark style="color:red;">*</mark></td>
         <td>Required</td>
         <td>Transaction amount denominated in min units</td>
         <td>String</td>
      </tr>
      <tr>
         <td><code>otp</code></td>
         <td>Optional</td>
         <td>OTP code if configured</td>
         <td>String</td>
      </tr>
   </tbody>
</table>

Depending on the asset kind, the body must be completed with some extra parameter identical to the [Transfer Asset from Wallet](../../wallets/transfer-asset-from-wallet.md)

**Example**

```json
{
    "walletId": "wa-19lns-o74qn-xxxxxxxxxxxxxx",
    "kind": "Erc20",
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
