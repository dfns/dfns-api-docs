---
description: Change log detailing feature releases
---

# Dfns Change Log

The Dfns change log documents changes to our product functionality made by our releases. This includes new features, breaking changes, bug fixes to known issues, deprecations, etc. Please bookmark this page and refresh frequently for the latest updates.



### July 11, 2023

* Updated enumerated types for Wallets API network value

### July 5, 2023

* Relaxed CORS policy preventing API calls from the browser&#x20;

### June 29, 2023

* [Typescript SDK](../getting-started/typescript-sdk.md) released
* Latency optimizations for Auth service
* Fixes for Windows Hello usage with Webauthn&#x20;

### June 7, 2023

* Released CMP asset in the dashboard

### June 1, 2023

* Released the new Wallets and NFTs API Beta
* Fixed bugs related to trailing slashes in URL paths

### May 11, 2023

* Added key-based recovery support to the Dfns Dashboard
* Fixed bug in WalletConnect deployment

### April 26, 2023

* Added MVP signer multi-tenancy for ninja sandbox orgs
* Updates to blockchain indexing pipeline

### April 20, 2023

* Added Ethereum Sepolia testnet to blockchain indexing
* Add Tezos & Solana support to BroadcastTransaction

### April 5, 2023

* Allow users to add permissions to API keys in the dashboard
* Optimized API response latency via server-side changes
* Additional dashboard security enahncements

### Mar 23, 2023

* Deployed new authentication service to production (non-customer impacting)
* Removed `isImmutable` field from policy creation
* Fixed bug where rejected transactions are not reflecting the correct state
* Changed payment note to write to XRP destination tag

### Mar 14, 2023

* Added blockchain indexing for SOL and XRP
* Added `activityId` query string param to [List policy control executions](policy-management/policyexecution/listpolicycontrolexecutions.md)

### Mar 8, 2023

* Added `nonce` to BroadcastTransaction API responses
* Payment note broadcasted as memo in XRP transactions

### Feb 28, 2023

* Added new [ListTransactions endpoint](deprecated-apis/low-level-api-keys-and-transactions/transaction-execution/list-transactions.md)
* Throughput enhancements to our indexing pipeline

### Feb 17, 2023

* Added a [new endpoint](https://dfns.gitbook.io/dfns-docs/api-docs/blockchains/call-read-function) to call `view` (aka read-only) contract methods
* Deployed chain indexing on BTC and LTC
* Deployed support for Constellation network (DAG) and Ambrosus network (AirDAO)

### Feb 8, 2023

* Added support for agEUR token on Polygon (AGEUR.MATIC `assetSymbol`)
* Updated testnet for SKALE blockchain

### Jan 30, 2023

* Added support for Solana tokens
* Deprecated `groupSize` and `groupThreshold` body paramters for key generation
* Polygon payments fix for "transaction underpriced" error

### Jan 13, 2023

* Released support for Elrond chain
* Added indexing support for Polygon and Binance Smart Chain
* Misc bug fixes

### Dec 19, 2022

* Fixed a bug in [BroadcastTransaction](deprecated-apis/low-level-api-keys-and-transactions/transaction-execution/broadcasttransaction/) where the `value` parameter was being interpreted in ETH instead of WEI.
* Last push of the year!

### Dec 15, 2022

* Launched new `direction` and `status` query parameters on [ListPayments](deprecated-apis/high-level-api-asset-accounts-and-payments/payments/listpayments.md)
* Fixed a bug in the `timeoutInMinutes` implementation in [PolicyControls](policy-management/policy-controls/createpolicycontrol.md)

### Dec 7, 2022

* Launched upgraded key storage persistence layer for wallet scalability
* Launched indexing for ERC20s including USDT, USDC, MATIC, BNB so they are exposed in incoming transactions.
* Internal bug fixes for Binance Smart Chain.

### Nov 30, 2022

* Launched our new blockchain indexing microservice for Ethereum mainnet exposed via the new `direction` field on [payments](deprecated-apis/high-level-api-asset-accounts-and-payments/payments/listpayments.md) and the new `PaymentReceived and PaymentConfirmed` [callback eventKinds](callbacks/CreateCallbackSubscription.md).
* Enabled [Permissions](permissions/) on [callbacks](<callbacks/README (1).md>) and [pubic keys](deprecated-apis/low-level-api-keys-and-transactions/public-keys-1/)
* Internal bug fixes wrt database pagination

### Nov 22, 2022

* Continuing the roll out of our new authorization framework called Permissions. The rollout is intended to be silent and should have no customer facing impact. Stay tuned for further announcements on the features & functionality.
* Deprecated `AllowedProducts` internal restriction on API endpoint usage. Now public keys created with the high level API can be used with the low level API and vice versa.

### Nov 16, 2022

* Rolled out a new authorization framework called Permissions. This is the first of two deployments and should have no customer-facing impact.
* Deployed changes to our internal gateways for routing internal API calls.

### Nov 8, 2022

* Added a `maxUnitBalance` property to the response from the [GetBalance endpoint](deprecated-apis/high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbalancebyid.md) representing the largest possible unit for the given asset.
* IP Whitelisting fixes: API Gateway redirect aliases, extra NAT Gateway IPs whitelisted
* Integrated Fantom, Optimism, and SKALE blockchains

### Oct 27, 2022

* Added `PolicyActivated` and `WalletCreated` [callback subscription topics](callbacks/CreateCallbackSubscription.md)
* Integrated TRON blockchain

### Oct 16, 2022

* Deployed IP whitelisting framework
* Fixed a bug impacting payment initiation and market data collection

### Sep 27, 2022

* Added [GetAddressForNetwork endpoint](deprecated-apis/low-level-api-keys-and-transactions/public-keys-1/getaddressfornetwork.md)
* Deployed internal changes around zero trust service to service communication
* Fixed testnet erc20 tokens with Goerli addresses
* Bug fix adding asset symbol to chain validation

### Aug 30, 2022

* Deployed filtering [policies](policy-management/policies/createpolicy.md) by public keys of wallets
* Bug fix for Policy Control Execution bad activity types
