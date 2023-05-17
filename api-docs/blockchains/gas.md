# Gas Station

`GET /blockchains/{network}/gas?speed={speed}&historicalBlocks={historicalBlocks}`

Gas Station gives gas estimates for EVM chains for four speed types:
- default
- safeLow
- standard
- fast

The base fee per gas is taken from the latest block.

Estimations for priority fees are calculated by querying the RPC for `eth_feeHistory` and averaging the 10th (`safeLow`), 25th (`standard`), and 50th (`fast`) percentiles of priority fees for transactions in each of a specific number of last blocks.

The `default` speed type gives price by querying the RPC for `eth_maxPriorityFeePerGas` where available and falling back to the EthersJS `getFeeData()` method in other cases.

### Required Permissions <a href="#scopes" id="scopes"></a>

Blockchains:Gas

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                                                                                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `network`      | Enumerated type representing the Blockchain network from the list found [here](https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network).  Currently EVM chains are supported: ETH, MATIC, BNB, AVAX-C, sFUEL, FTM, OP, ARB, AMB |
| `speed`      | Enumerated type representing the Speed Type for which the gas prices should be estimated. Supported Speed Types are: `default`, `safeLow`, `standard`, and `fast`. Defaults to `standard`. |
| `historicalBlocks`      | Number type representing the amount of last blocks to query for fee history. Defaults to `4`. |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/blockchains/ETH/gas?speed=standard&historicalBlocks=4" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the `maxFeePerGas` and `maxPriorityFeePerGas` fields in the response are of [BigNumber](https://docs.ethers.org/v5/api/utils/bignumber/) type.

```json
{
    "maxFeePerGas": "0x15645af72a",
    "maxPriorityFeePerGas": "0x15644bb4ea"
}
```
