# Untag Wallet

`DELETE /wallets/{walletId}/tags`

Removes the specified tags from a wallet.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions      |
| --------------------- | --------------- |
| `Wallets:Tags:Delete` | Always Required |

## Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

<table><thead><tr><th width="143.33333333333331">Property</th><th width="194">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>tags</code><mark style="color:red;">*</mark></td><td>List of String</td><td>The tags to remove from the wallet</td></tr></tbody></table>

```shell
{
  "tags": ["DepositWallet"]
}
```

### 200 Response <a href="#native-currency-response-example" id="native-currency-response-example"></a>

```json
{}
```
