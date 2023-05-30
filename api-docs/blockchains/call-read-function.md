# Call Read Function

`POST /blockchains/{network}/call-read-function`

Calls a read-only function on a smart contract.  In Solidity, these use the `view` keyword.

### Required Permissions <a href="#scopes" id="scopes"></a>

Blockchains:CallRead

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>network</code></td><td>Enumerated type representing the Blockchain network from the list found <a href="https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network">here</a>.  Currently EVM chains are supported: ETH, MATIC, BNB, AVAX-C, sFUEL, FTM, OP, ARB, AMB</td></tr></tbody></table>

### Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>data</code></td><td>Required</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters.  For more information, see the <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall">encodeFunctionCall web3.js documentation</a>. </td><td>String</td></tr><tr><td><code>contract</code></td><td>Required</td><td>Address of the contract to call</td><td>String</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/blockchains/ETH/call-read-function" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "data": "0x6d4ce63caa65600744ac797760560da39ebd16e8240936b51f53368ef9e0e01f",
    "contract": "0x77f5aDB925c14768a0f7e338eB721e181F85b1f6"
    }'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the `data` field in the response is hex encoded.&#x20;

```json
{
    "data": "0x000000000000000000000000000000000000000000000000000000000000000f"
}
```
