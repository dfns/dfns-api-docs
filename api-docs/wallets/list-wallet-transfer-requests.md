# List Wallet Transfer Requests

`GET /wallets/{walletId}/transfers?paginationToken={token}`

Retrieves a list of transfer requests for the specified wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                   | Conditions      |
| ---------------------- | --------------- |
| `Wallets:ReadTransfer` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-39abb-e9kpk-xxxxxxxxxxxxxxxx` |

### Query parameters <a href="#request-example.1" id="request-example.1"></a>

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
  "items": [
    {
      "id": "xfr-61bai-v6lao-xxxxxxxxxxxxxxxx",
      "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
      "network": "EthereumSepolia",
      "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
      },
      "requestBody": {
        "kind": "Native",
        "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
        "amount": "1000000000"
      },
      "status": "Confirmed",
      "txHash": "0x4c94e7335efdb9a708f143b0f50f0130cff07271215042050bdd8ad429fa146f",
      "fee": "31500000147000",
      "dateRequested": "2023-05-09T22:39:33.198Z",
      "dateBroadcasted": "2023-05-09T22:39:38.815Z",
      "dateConfirmed": "2023-05-09T22:39:48.000Z"
    },
    {
      "id": "xfr-4n0dm-fqju5-xxxxxxxxxxxxxxxx",
      "walletId": "wa-39abb-e9kpk-xxxxxxxxxxxxxxxx",
      "network": "EthereumSepolia",
      "requester": {
        "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
        "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
        "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
      },
      "requestBody": {
        "kind": "Erc721",
        "contract": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
        "to": "0xb282dc7cde21717f18337a596e91ded00b79b25f",
        "tokenId": "1"
      },
      "status": "Confirmed",
      "txHash": "0xcddf1167b53fcbe61c5360b50a2a075173049970c4c9dbea1e45db5ff9e41c15",
      "fee": "95866500447377",
      "dateRequested": "2023-05-08T18:10:43.521Z",
      "dateBroadcasted": "2023-05-08T18:10:48.373Z",
      "dateConfirmed": "2023-05-08T18:11:00.000Z"
    },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
