# List Wallet Signature Requests

`GET /wallets/{walletId}/signatures?paginationToken={token}`

List signature requests of a wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                    | Conditions      |
| ----------------------- | --------------- |
| `Wallets:ReadSignature` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `walletId`     | Unique identifier of the `Wallet`. ex.`wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

### Query parameters <a href="#query-parameters" id="query-parameters"></a>

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "items": [
    {
      "id": "sg-2ouaj-f4nq6-97q8m0736h09bhhv",
      "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
      "network": "EthereumSepolia",
      "requester": {
        "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
        "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
        "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
      },
      "requestBody": {
        "kind": "Hash",
        "hash": "031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
      },
      "status": "Confirmed",
      "signature": {
        "r": "0xb23c2cfb6d409f5a55ced08f89ae70f3fe89403a5ba907c367545499874f1c7f",
        "s": "0x49992f242a21ae0692c24b43393336744ddc08459d936b6a70542d79df4f66f0",
        "recid": 1,
        "encoded": "0xb23c2cfb6d409f5a55ced08f89ae70f3fe89403a5ba907c367545499874f1c7f49992f242a21ae0692c24b43393336744ddc08459d936b6a70542d79df4f66f01c"
      },
      "txHash": "0xf2e2ff61460ec26b0355c0186f17d9263c616d045e7ec3d2b13c18af80c856df",
      "dateRequested": "2023-05-15T20:21:11.576Z",
      "dateSigned": "2023-05-15T20:21:16.564Z",
      "dateConfirmed": "2023-05-15T20:28:36.000Z"
    },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
