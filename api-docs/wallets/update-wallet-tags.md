# Update Wallet Tags

`PUT /wallets/{walletId}/tags`

Tags are a way to add arbitrary metadata to wallets which can be used to [filter them in policy engine](https://docs.dfns.co/d/api-docs/policy-engine/policies#filters-for-wallets-sign-activity).  For example, you may want to create deposit wallets which are whitelisted to only send to an omnibus account.  In this case, you could add a "DepositWallet" tag to each new wallet and then filter a whitelisting policy to just those wallets.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Wallets:Tags:Add` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

### Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

| Request body fields | Required/Optional | Description                     | Type             |
| ------------------- | ----------------- | ------------------------------- | ---------------- |
| `tags`              | Required          | The tags to apply to the wallet | Array of Strings |

### Sample request body <a href="#sample-native-currency-request" id="sample-native-currency-request"></a>

```shell
{
  "tags": ["DepositWallet", "CustomerXYZ"]
}
```

### 200 response example <a href="#native-currency-response-example" id="native-currency-response-example"></a>

The response should be an empty JSON object:

```json
{}
```
