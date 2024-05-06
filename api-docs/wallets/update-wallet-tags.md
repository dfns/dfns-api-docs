# Tag Wallet

`PUT /wallets/{walletId}/tags`

Tags are a way to add arbitrary metadata to wallets which can be used to [filter them in policy engine](https://docs.dfns.co/d/api-docs/policy-engine/policies#filters-for-wallets-sign-activity).  For example, you may want to create deposit wallets which are whitelisted to only send to an omnibus account.  In this case, you could add a tag "`deposit`" to each new wallet and then filter a whitelisting policy to just those wallets.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Wallets:Tags:Add` | Always Required |

## Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Request body <a href="#native-currency-request-body" id="native-currency-request-body"></a>

<table><thead><tr><th width="133">Property</th><th width="134">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>tags</code><mark style="color:red;">*</mark></td><td>String List</td><td>The tags to apply to the wallet</td></tr></tbody></table>

```shell
{
  "tags": ["deposit", "customer:xyz", "security/critical"]
}
```

### 200 Response <a href="#native-currency-response-example" id="native-currency-response-example"></a>

```json
{}
```
