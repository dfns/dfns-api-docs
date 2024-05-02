# Delete Wallet Tags

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

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                        | Type             |
| ------------------- | ----------------- | ---------------------------------- | ---------------- |
| `tags`              | Required          | The tags to remove from the wallet | Array of Strings |

### Sample request body <a href="#sample-native-currency-request" id="sample-native-currency-request"></a>

```shell
{
  "tags": ["DepositWallet"]
}
```

### 200 response example <a href="#native-currency-response-example" id="native-currency-response-example"></a>

The response should be an empty JSON object:

```json
{}
```
