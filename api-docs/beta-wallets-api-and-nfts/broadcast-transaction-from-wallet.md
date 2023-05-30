# Broadcast Transaction from Wallet

`POST /wallets/{WalletID}/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request.   It can be used to make native payments, call smart contract functions, and even deploy new smart contracts.  Note for reading from a "view" function on EVM chains, please use [Call Read Function](../blockchains/call-read-function.md).&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:BroadcastTransaction

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>WalletID</code></td><td>Unique identifier of the <code>Wallet</code> like:<br><br><code>wa-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### EVM Template <a href="#native-currency-request-body" id="native-currency-request-body"></a>



<table><thead><tr><th width="255">Request body fields</th><th width="118">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>to</code></td><td>Required</td><td>Blockchain address of target contract or payee.</td><td>String</td></tr><tr><td><code>data</code></td><td>Required</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall">encodeFunctionCall web3.js documentation</a>. </td><td>String</td></tr><tr><td><code>gasLimit</code></td><td>Optional</td><td>The maximum amount of gas that can be spent for executing the transaction. If omitted, it will be calculated automatically. </td><td>String (of an Integer)</td></tr><tr><td><code>nonce</code></td><td>Optional</td><td>The transaction number to guarantee idempotency. If omitted, it will be provided automatically. Note the same nonce can be submitted multiple times with a higher <code>gasPrice</code> to "overwrite" existing transactions in the mempool. </td><td>Integer</td></tr><tr><td><code>value</code></td><td>Required if making a payment</td><td>Amount of the native currency to transfer denominated in WEI.  Please see <a href="https://www.gemini.com/cryptopedia/satoshi-value-gwei-to-ether-to-wei-converter-eth-gwei#section-ethereum-denominations-ether-to-wei-gwei-to-ether-more">here</a> for a description of Ether units.  Also see: <a href="https://eth-converter.com/">https://eth-converter.com/</a> </td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>maxPriorityFeePerGas</code></td><td>Optional</td><td>The maximum amount of gas to be included as a tip to the validator. If omitted, it will be calculated automatically. </td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>maxFeePerGas</code></td><td>Optional</td><td>The maximum amount for gas willing to be paid for the transaction.  If omitted, it will be calculated automatically. </td><td>String (of an Integer like "1000000" WEI)</td></tr><tr><td><code>gasPrice</code></td><td>Optional</td><td>If specified, this will revert back to a Type 0 transaction (pre-EIP1559 on Ethereum).  This can be used eg. to zero out an account.   Can not be used in conjunction with the gas fields above. </td><td>String (of an Integer like "1000000" WEI)</td></tr></tbody></table>



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





