# Read Contract

`POST /networks/read-contract`

Calls a read-only function on a smart contract. In Solidity, these use the `view` keyword.  Note: Currently only works on EVM compatible chains.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

No permissions are required as this only exposes public blockchain data.&#x20;

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify "<code>Evm</code>".  Additional kinds will be added in the future. </td><td>Enum String</td></tr><tr><td><code>network</code></td><td>Required</td><td>Network used for the wallet (See <a href="../wallets/#supported-networks">Supported Networks</a> for possible values)</td><td>Enum String</td></tr><tr><td><code>contract</code></td><td>Required</td><td>Address of the contract to call</td><td>String</td></tr><tr><td><code>data</code></td><td>Required</td><td>Encoded hex string indicating which function in the smart contract to call with which parameters. For more information, see the <a href="https://docs.ethers.org/v6/api/abi/#Interface-encodeFunctionData">encodeFunctionData ethersJS documentation</a>.</td><td>String</td></tr></tbody></table>

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

## EthersJS / Dfns SDK Example

You can use the following code with the Dfns Typescript SDK to execute this call:&#x20;

```typescript
import { Interface } from 'ethers'

  const abi = ['function balanceOf(address owner) view returns (uint256)']

  const iface = new Interface(abi)
  const address = '0xd964d741998edc275f3800eed113378a391951d9'
  const data = iface.encodeFunctionData('balanceOf', [address])

  const { data: res } = await dfnsClient.networks.readContract({
    body: {
      kind: 'Evm',
      network: 'EthereumSepolia',
      contract: '0x6f14c02fc1f78322cfd7d707ab90f18bad3b54f5',
      data,
    },
  })

  const decoded = iface.decodeFunctionResult('balanceOf', res)[0]
  console.log(decoded)
```
