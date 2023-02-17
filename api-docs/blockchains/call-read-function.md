# Call Read Function

`POST /blockchains/{network}/call-read-function`

Calls a read-only function on a smart contract.  In Solidity, these use the `view` keyword.

### Required Permissions <a href="#scopes" id="scopes"></a>

Blockchains:CallRead

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `network`      | Enumerated type representing the Blockchain network from the list found [here](https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network).  Currently EVM chains are supported: ETH, MATIC, BNB, AVAX-C, sFUEL, FTM, OP, AMB |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                                                                                                                                                                                                                                                                            | Type   |
| ------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `data`              | Required          | Encoded hex string indicating which function in the smart contract to call with which parameters. Can also be an entire encoded contract in the case of contract deployment. For more information, see the [encodeFunctionCall web3.js documentation](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall).  | String |
| `contract`          | Required          | Address of the contract to call                                                                                                                                                                                                                                                                                                        | String |

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

Note responses are hex encoded.&#x20;

```json
{
    "data": "0x000000000000000000000000000000000000000000000000000000000000000f"
}
```
