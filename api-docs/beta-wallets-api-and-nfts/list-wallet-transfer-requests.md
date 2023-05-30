# List Wallet Transfer Requests

`GET /wallets/{WalletID}/transfers?paginationToken={token}`

Retrieves a list of historical transactions for the specified wallet.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:ReadTransfer

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>WalletID</code></td><td>Unique identifier of the <code>Wallet</code> like:<br><br><code>wa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

#### Query parameters <a href="#request-example.1" id="request-example.1"></a>

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/wallets/wa-kentucky-speaker-d80f55f2a4/transfers" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
    "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
    "items": [
        {
            "id": "tf-61bai-v6lao-9199i01reeo6s36n",
            "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
            "network": "ETH_SEPOLIA",
            "requester": {
                "kind": "CustomerEmployee",
                "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
                "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
                "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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
            "id": "tf-4n0dm-fqju5-8eu9pmv98jpma821",
            "walletId": "wa-39abb-e9kpk-87p9t6l2pbbdjb8o",
            "network": "ETH_SEPOLIA",
            "requester": {
                "kind": "CustomerEmployee",
                "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
                "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
                "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
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

