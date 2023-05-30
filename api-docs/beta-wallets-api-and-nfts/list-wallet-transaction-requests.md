# List Wallet Transaction Requests

`GET /wallets/{WalletID}/transactions?paginationToken={token}`

Retrieves a list of transactions for the specified wallet.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:ReadTransactions

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
curl "/wallets/wa-kentucky-speaker-d80f55f2a4/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
    "walletId": "wa-6lbvd-hjdu1-9rtppq7p4c87cns7",
    "items": [
        {
            "id": "tx-214gn-efbru-91s8sunvok3jvt2i",
            "walletId": "wa-6lbvd-hjdu1-9rtppq7p4c87cns7",
            "network": "ETH_SEPOLIA",
            "requester": {
                "kind": "CustomerEmployee",
                "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
                "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
                "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
            },
            "requestBody": {
                "kind": "Evm",
                "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
                "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
            },
            "status": "Confirmed",
            "txHash": "0x192948dae1bb4cd5765f46417fbfbe500c413f9947dab89184ef3ecd16117640",
            "fee": "93636000499392",
            "dateRequested": "2023-05-10T22:23:44.742Z",
            "dateBroadcasted": "2023-05-10T22:23:51.887Z",
            "dateConfirmed": "2023-05-10T22:24:00.000Z"
        },
        ...
    ],
    "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```

