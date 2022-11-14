# Dfns API Enumerated Types

Dfns uses a number of enumerated types throughout our API. Here is a comprehensive list of all valid values for our enumerated types.&#x20;

## AssetSymbol

Dfns supports over 9000 cryptocurrencies and ERC20 fungible asset types - far too many to list here! Please refer to [this Github link](../AssetTickers.csv) for an up-to-date list of supported values.  Use the strings under the `Routing` column header when sending requests to APIs that require an asset symbol in the following format:&#x20;

&#x20;\<SYMBOL>\[.\<NETWORK>]

## Network

Dfns supports 24 Blockchains today and we are adding more constantly. Here is the valid list of values for `network` parameters:&#x20;

* `ADA` for Cardano&#x20;
* `ALGO` for Algorand&#x20;
* `ARB` for Arbitrum&#x20;
* `ATOM` for Cosmos&#x20;
* `BNB` for Binance Smart Chain&#x20;
* `BTC` for Bitcoin&#x20;
* `CFG` for Centrifuge&#x20;
* `DOGE` for Dogecoin&#x20;
* `DOT` for Polkadot&#x20;
* `ETH` for Ethereum&#x20;
* `FTM` for Fantom&#x20;
* `IMX` for ImmutableX&#x20;
* `KSM` for Kusama&#x20;
* `LTC` for Litecoin&#x20;
* `MATIC` for Polygon&#x20;
* `NEAR` for Near&#x20;
* `OP` for Optimism&#x20;
* `POLYX` for Polymesh&#x20;
* `sFUEL` for SKALE (note lower case "s")
* `SOL` for Solana&#x20;
* `TRX` for Tron&#x20;
* `XLM` for Stellar&#x20;
* `XRP` for Ripple&#x20;
* `XTZ` for Tezos



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
