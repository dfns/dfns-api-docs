# Broadcast Transaction from Wallet

`POST /wallets/{WalletID}/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request.   It can be used to make native payments, call smart contract functions, and even deploy new smart contracts.  Note for reading from a "view" function on EVM chains, please use [Call Read Function](../blockchains/call-read-function.md).&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:BroadcastTransaction

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>WalletID</code></td><td>Unique identifier of the <code>Wallet</code> like:<br><br><code>wa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### EVM Template <a href="#native-currency-request-body" id="native-currency-request-body"></a>

For the body fields, please reference the [EVM Generic Transaction Template here](../low-level-api-keys-and-transactions/transaction-execution/broadcasttransaction/evmgenerictx-template.md).&#x20;

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -XPOST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/transfers" -d
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
'{
    "kind": "Evm",
    "to": "0x00fb58432ef9d418bf6688bcf0a226d2fcaa18e2",
    "data": "0x40d097c3000000000000000000000000d2f77f85a50cdd650ca562f3a180284e1d5b4934"
}'
```

#### 200 response example <a href="#response-example" id="response-example"></a>

```json
{
    "id": "tx-hpq5n-4p9s9-1hbv15iah5bb6cn",
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
    "dateRequested": "2023-05-08T19:27:04.680Z",
    "status": "Pending"
}
```





