# Deprecated - Dfns API Enumerated Types

{% hint style="danger" %}
Warning: These ENUMs have been deprecated.  Please use [Wallets](../../wallets/).  Contact your sales representative if you require additional blockchain support. &#x20;
{% endhint %}

<details>

<summary>Asset Symbol</summary>

Dfns supports over 9000 cryptocurrencies and ERC20 fungible asset types - far too many to list here! Please refer to [this Github link](../../../AssetTickers.csv) for an up-to-date list of supported values.  Use the strings under the `Routing` column header when sending requests to APIs that require an asset symbol in the following format:&#x20;

&#x20;\<SYMBOL>\[.\<NETWORK>]

</details>

<details>

<summary>Payment Status</summary>

* `Initiated` - Payment just got created, policies are being executed
* `Approved` - Payment is approved to be executed, it will soon be broadcasted
* `Rejected` - Payment was rejected by policy engine
* `Executed` - Payment is executed and fed to a blockchain node
* `Failed` - There was an error during broadcasting of the payment
* `Confirmed` - Payment is considered Confirmed when it's part of a given block and contains block information

</details>

## Network

{% hint style="danger" %}
Note these network enums are only for Asset Accounts which have been deprecated.  Please see the network values supported by the [Wallets API here](../../wallets/create-wallet.md).
{% endhint %}

<table><thead><tr><th width="130">Network Symbol</th><th width="249.33333333333331">Network Name</th><th>Testnet RPC </th></tr></thead><tbody><tr><td>ADA</td><td>Cardano </td><td><a href="https://cardano-testnet.blockfrost.io/api/v0">https://cardano-testnet.blockfrost.io/api/v0</a></td></tr><tr><td>ALGO</td><td>Algorand </td><td><a href="https://testnet-algorand.api.purestake.io/ps2">https://testnet-algorand.api.purestake.io/ps2</a></td></tr><tr><td>ARB</td><td>Arbitrum </td><td>(only mainnet) <a href="https://rpc.ankr.com/arbitrum">https://rpc.ankr.com/arbitrum</a></td></tr><tr><td>ATOM</td><td>Cosmos </td><td><a href="https://rpc.testnet.cosmos.network">https://rpc.testnet.cosmos.network:443</a></td></tr><tr><td>AVAX-C</td><td>Avalanche</td><td><a href="https://api.avax-test.network/ext/bc/C/rpc">https://api.avax-test.network/ext/bc/C/rpc</a></td></tr><tr><td>BNB</td><td>Binance Smart Chain</td><td><a href="https://data-seed-prebsc-1-s1.binance.org:8545">https://data-seed-prebsc-1-s1.binance.org:8545</a></td></tr><tr><td>BTC</td><td>Bitcoin</td><td><a href="https://api.blockcypher.com/v1/btc/test3">https://api.blockcypher.com/v1/btc/test3</a></td></tr><tr><td>CFG</td><td>Centrifuge</td><td>(only mainnet) wss://fullnode.parachain.centrifuge.io</td></tr><tr><td>DOGE</td><td>Dogecoin</td><td>(only mainnet) <a href="https://api.blockcypher.com/v1/doge/main">https://api.blockcypher.com/v1/doge/main</a></td></tr><tr><td>DOT</td><td>Polkadot </td><td><a href="https://dot.getblock.io/testnet">https://dot.getblock.io/testnet</a></td></tr><tr><td>EGLD</td><td>Elrond</td><td><a href="https://testnet-api.elrond.com/">https://testnet-api.elrond.com/</a></td></tr><tr><td>ETH</td><td>Ethereum</td><td><a href="https://rpc.ankr.com/eth_goerli">https://rpc.ankr.com/eth_goerli</a></td></tr><tr><td>FTM</td><td>Fantom</td><td><a href="https://rpc.ankr.com/fantom_testnet">https://rpc.ankr.com/fantom_testnet</a></td></tr><tr><td>KSM</td><td>Kusama </td><td>(only mainnet) <a href="https://ksm.getblock.io/mainnet">https://ksm.getblock.io/mainnet</a></td></tr><tr><td>LTC</td><td>Litecoin</td><td>(only mainnet) <a href="https://api.blockcypher.com/v1/ltc/main">https://api.blockcypher.com/v1/ltc/main</a></td></tr><tr><td>MATIC</td><td>Polygon</td><td><a href="https://rpc.ankr.com/polygon_mumbai">https://rpc.ankr.com/polygon_mumbai</a></td></tr><tr><td>NEAR</td><td>Near </td><td><a href="https://rpc.testnet.near.org">https://rpc.testnet.near.org</a></td></tr><tr><td>OP</td><td>Optimism</td><td><a href="https://rpc.ankr.com/optimism_testnet">https://rpc.ankr.com/optimism_testnet</a></td></tr><tr><td>POLYX</td><td>Polymesh</td><td>wss://testnet-rpc.polymesh.live</td></tr><tr><td>sFUEL</td><td>SKALE (note lower case "s")</td><td><a href="https://staging-v2.skalenodes.com/v1/fit-graffias">https://staging-v2.skalenodes.com/v1/fit-graffias</a></td></tr><tr><td>SOL</td><td>Solana</td><td><a href="https://rpc.ankr.com/solana_devnet">https://rpc.ankr.com/solana_devnet</a></td></tr><tr><td>TRX</td><td>Tron</td><td><a href="https://api.shasta.trongrid.io">https://api.shasta.trongrid.io</a></td></tr><tr><td>XLM</td><td>Stellar </td><td><a href="https://horizon-testnet.stellar.org">https://horizon-testnet.stellar.org</a></td></tr><tr><td>XRP</td><td>Ripple</td><td><a href="http://s.altnet.rippletest.net:51233">s.altnet.rippletest.net:51233</a></td></tr><tr><td>XTZ</td><td>Tezos</td><td><a href="https://ghostnet.tezos.marigold.dev">https://ghostnet.tezos.marigold.dev</a></td></tr></tbody></table>

