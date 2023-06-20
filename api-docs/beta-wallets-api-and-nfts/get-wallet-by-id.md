# Get Wallet by ID

`GET /wallets/{walletId}`

Retrieves a Wallet by its ID.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name           | Conditions      |
| -------------- | --------------- |
| `Wallets:Read` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "status": "Active",
  "network": "ETH_SEPOLIA",
  "address": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
  "name": "my-wallet",
  "tags": [],
  "dateCreated": "2023-04-14T20:41:28.715Z"
}
```
