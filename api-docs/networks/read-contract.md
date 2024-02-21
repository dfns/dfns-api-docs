# Read Contract

`POST /networks/read-contract`

Calls a read-only function on a smart contract. In Solidity, these use the `view` keyword.  Note: Currently only works on EVM compatible chains.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

No permissions are required as this only exposes public blockchain data.&#x20;

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify "<code>Evm</code>".  Additional kinds will be added in the future. </td><td>Enum String</td></tr><tr><td><code>network</code></td><td>Required</td><td>Network used for the wallet (See <a href="../wallets/#supported-networks">Supported Networks</a> for possible values)</td><td>Enum String</td></tr><tr><td><code>contract</code></td><td>Required</td><td>Address of the contract to call</td><td>String</td></tr><tr><td><code>data</code></td><td>Required</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. For more information, see the <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html#encodefunctioncall">encodeFunctionCall web3.js documentation</a>.</td><td>String</td></tr></tbody></table>

### Sample request body <a href="#sample-request" id="sample-request"></a>

```json
{
    "kind": "Evm",
    "network": "EthereumSepolia",
    "contract": "0x1c7d4b196cb0c7b01d743fbc6116a902379c7238",
    "data": "0x18160ddd"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

Note the `data` field in the response is hex encoded.

```json
{
    "kind": "Evm",
    "data": "0x000000000000000000000000000000000000000000000000000000000000000f"
}
```
