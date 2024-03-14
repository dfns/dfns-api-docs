# Get Wallet Transfer Request by ID

`GET /wallets/{walletId}/transfers/{transferId}`

Retrieves a Wallet Transfer Request by its ID.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                   | Conditions      |
| ---------------------- | --------------- |
| `Wallets:ReadTransfer` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-39abb-e9kpk-xxxxxxxxxxxxxxxx`         |
| `transferId`   | Unique identifier of the transfer request. ex. `tf-2mq6c-iu1es-xxxxxxxxxxxxxxxx` |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "xfr-2mq6c-iu1es-xxxxxxxxxxxxxxxx",
  "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Erc20",
    "contract": "0x779877a7b0d9e8603169ddbd7836e478b4624789",
    "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
    "amount": "1000000000"
  },
  "status": "Confirmed",
  "txHash": "0x177bdb7ac9e417a45b0b5c68317d1723bb4f2b0acc57f87e3e3fdc0e50d32a0f",
  "fee": "77433000412976",
  "dateRequested": "2023-05-08T17:30:52.882Z",
  "dateBroadcasted": "2023-05-08T17:30:59.815Z",
  "dateConfirmed": "2023-05-08T17:31:12.000Z"
}
```
