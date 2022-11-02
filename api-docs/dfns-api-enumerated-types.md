# Dfns API Enumerated Types

Dfns uses a number of enumerated types throughout our API. Here is a comprehensive list of all valid values for our enumerated types.&#x20;

## AssetSymbol

Dfns supports over 9000 cryptocurrencies and ERC20 fungible asset types - far too many to list here! Please refer to [this Github link](../AssetTickers.csv) for an up-to-date list of supported values.  Use the strings under the `Routing` column header when sending requests to APIs that require an asset symbol in the following format:&#x20;

&#x20;\<SYMBOL>\[.\<NETWORK>]

## Network

Dfns supports 19 Blockchains today and we are adding more constantly. Here is the valid list of values for `network` parameters:&#x20;

* `ADA` for Cardano
* `ALGO` for Algorand
* `BTC` for Bitcoin
* `DOGE` for Dogecoin
* `DOT` for Polkadot
* `CFG` for Centrifuge
* `NEAR` for Near
* `ETH` for Ethereum
* `ARB` for Arbitrum
* `LTC` for Litecoin
* `KSM` for Kusama
* `XLM` for Stellar
* `XRP` for Ripple
* `ATOM` for Cosmos
* `MATIC` for Polygon
* `XTZ` for Tezos
* `SOL` for Solana
* `POLYX` for Polymesh
* `BNB` for Binance Smart Chain



## Permission Operations

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
* Payments:Create
* Payments:Read
* PermissionAssignments:Create
* PermissionAssignments:Delete
* PermissionAssignments:Read
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
