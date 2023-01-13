# Dfns API Enumerated Types

Dfns uses a number of enumerated types throughout our API. Here is a comprehensive list of all valid values for our enumerated types.&#x20;

<details>

<summary>Asset Symbol</summary>

Dfns supports over 9000 cryptocurrencies and ERC20 fungible asset types - far too many to list here! Please refer to [this Github link](../AssetTickers.csv) for an up-to-date list of supported values.  Use the strings under the `Routing` column header when sending requests to APIs that require an asset symbol in the following format:&#x20;

&#x20;\<SYMBOL>\[.\<NETWORK>]

</details>

<details>

<summary>Permission Operations</summary>

The Dfns Permissions model relies on the following operation enums:

* ApiKeys:Create
* ApiKeys:Read
* ApiKeys:Revoke
* AssetAccounts:Archive
* AssetAccounts:Create
* AssetAccounts:Read
* Balances:Read
* CallbackEvents:Read
* CallbackSubscriptions:Archive
* CallbackSubscriptions:Create
* CallbackSubscriptions:Read
* Employees:Read
* Payments:Create
* Payments:Read
* PermissionAssignments:Create
* PermissionAssignments:Read
* PermissionAssignments:Revoke
* PermissionPredicates:Archive
* PermissionPredicates:Create
* PermissionPredicates:Read
* PermissionPredicates:Update
* Permissions:Archive
* Permissions:Create
* Permissions:Read
* Permissions:Update
* Policies:Archive
* Policies:Create
* Policies:Read
* Policies:Update
* PolicyControlExecutions:Read
* PolicyControlExecutions:Update
* PolicyControls:Archive
* PolicyControls:Create
* PolicyControls:Read
* PolicyControls:Update
* PolicyRules:Archive
* PolicyRules:Create
* PolicyRules:Read
* PolicyRules:Update
* PublicKeyAddresses:Read
* PublicKeys:Create
* PublicKeys:Read
* Signatures:Create
* Signatures:Read
* Transactions:Create
* Transactions:Read

</details>

<details>

<summary>Payment Status</summary>

* `Initiated` - Payment just got created, policies are being executed
* `Approved` - Payment is approved to be executed, it will soon be broadcasted
* `Rejected` - Payment was rejected by policy engine
* `Executed` - Payment is executed and fed to a blockchain node
* `Confirmed` - Payment is considered Confirmed when it's part of a given block and contains block information

</details>

## Network

Dfns supports 24 Blockchains today and we are adding more constantly. Here is the valid list of values for `network` parameters:&#x20;

| Network Symbol | Network Name                                | Testnet RPC                                                                                            |
| -------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ADA            | Cardano (Currently undergoing maintenance)  | [https://cardano-testnet.blockfrost.io/api/v0](https://cardano-testnet.blockfrost.io/api/v0)           |
| ALGO           | Algorand (Currently undergoing maintenance) | [https://testnet-algorand.api.purestake.io/ps2](https://testnet-algorand.api.purestake.io/ps2)         |
| ARB            | Arbitrum (Currently undergoing maintenance) | (only mainnet) [https://rpc.ankr.com/arbitrum](https://rpc.ankr.com/arbitrum)                          |
| ATOM           | Cosmos (Currently undergoing maintenance)   | [https://rpc.testnet.cosmos.network:443](https://rpc.testnet.cosmos.network)                           |
| AVAX-C         | Avalanche                                   | [https://api.avax-test.network/ext/bc/C/rpc](https://api.avax-test.network/ext/bc/C/rpc)               |
| BNB            | Binance Smart Chain                         | [https://data-seed-prebsc-1-s1.binance.org:8545](https://data-seed-prebsc-1-s1.binance.org:8545)       |
| BTC            | Bitcoin                                     | [https://api.blockcypher.com/v1/btc/test3](https://api.blockcypher.com/v1/btc/test3)                   |
| CFG            | Centrifuge                                  | (only mainnet) wss://fullnode.parachain.centrifuge.io                                                  |
| DOGE           | Dogecoin                                    | (only mainnet) [https://api.blockcypher.com/v1/doge/main](https://api.blockcypher.com/v1/doge/main)    |
| DOT            | Polkadot (Currently undergoing maintenance) | [https://dot.getblock.io/testnet](https://dot.getblock.io/testnet)                                     |
| EGLD           | Elrond                                      | [https://testnet-api.elrond.com/](https://testnet-api.elrond.com/)                                     |
| ETH            | Ethereum                                    | [https://rpc.ankr.com/eth\_goerli](https://rpc.ankr.com/eth\_goerli)                                   |
| FTM            | Fantom                                      | [https://rpc.ankr.com/fantom\_testnet](https://rpc.ankr.com/fantom\_testnet)                           |
| KSM            | Kusama (Currently undergoing maintenance)   | (only mainnet) [https://ksm.getblock.io/mainnet](https://ksm.getblock.io/mainnet)                      |
| LTC            | Litecoin                                    | (only mainnet) [https://api.blockcypher.com/v1/ltc/main](https://api.blockcypher.com/v1/ltc/main)      |
| MATIC          | Polygon                                     | [https://rpc.ankr.com/polygon\_mumbai](https://rpc.ankr.com/polygon\_mumbai)                           |
| NEAR           | Near (Currently undergoing maintenance)     | [https://rpc.testnet.near.org](https://rpc.testnet.near.org)                                           |
| OP             | Optimism                                    | [https://rpc.ankr.com/optimism\_testnet](https://rpc.ankr.com/optimism\_testnet)                       |
| POLYX          | Polymesh                                    | wss://testnet-rpc.polymesh.live                                                                        |
| sFUEL          | SKALE (note lower case "s")                 | [https://staging-v2.skalenodes.com/v1/fit-graffias](https://staging-v2.skalenodes.com/v1/fit-graffias) |
| SOL            | Solana                                      | [https://rpc.ankr.com/solana\_devnet](https://rpc.ankr.com/solana\_devnet)                             |
| TRX            | Tron                                        | [https://api.shasta.trongrid.io](https://api.shasta.trongrid.io)                                       |
| XLM            | Stellar (Currently undergoing maintenance)  | [https://horizon-testnet.stellar.org](https://horizon-testnet.stellar.org)                             |
| XRP            | Ripple                                      | [s.altnet.rippletest.net:51233](http://s.altnet.rippletest.net:51233)                                  |
| XTZ            | Tezos                                       | [https://ghostnet.tezos.marigold.dev](https://ghostnet.tezos.marigold.dev)                             |

