# Get Wallet Transaction Request by ID

`GET /wallets/{walletId}/transactions/{transactionId}`

Retrieves a Wallet Transaction Request by its ID.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                      | Conditions      |
| ------------------------- | --------------- |
| `Wallets:ReadTransaction` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter  | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| `walletId`      | Unique identifier of the `Wallet`. ex.`wa-6lbvd-hjdu1-xxxxxxxxxxxxxxxx`             |
| `transactionId` | Unique identifier of the transaction request. ex. `tx-1jbko-fmk8d-xxxxxxxxxxxxxxxx` |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "tx-1jbko-fmk8d-xxxxxxxxxxxxxxxx",
  "walletId": "wa-6lbvd-hjdu1-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Evm",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "value": "1000000000"
  },
  "status": "Confirmed",
  "txHash": "0x1e62ce5cf14b026d8fe3b5fa6195857049ec22e55fe932c74598c21866c07f14",
  "fee": "31500000147000",
  "dateRequested": "2023-05-09T19:51:33.628Z",
  "dateBroadcasted": "2023-05-09T19:51:39.983Z",
  "dateConfirmed": "2023-05-09T19:51:48.000Z",
  "approvalId": "ap-...", // defined only if an approval process was triggered as the result of a policy ("status" will be "Pending" then)
}
```
