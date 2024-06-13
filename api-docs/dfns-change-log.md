---
description: Change log detailing feature releases
---

# Dfns Change Log

The Dfns change log documents changes to our product functionality made by our releases. This includes new features, breaking changes, bug fixes to known issues, deprecations, etc. Please bookmark this page and refresh frequently for the latest updates.

### June 14, 2024

* Launched key export for EdDSA keys

### June 7, 2024

* Launched Solana Tier 1&#x20;

### May 31, 2024

* Launched internal indexing for EVM chains
* Launched Algorand NFT indexing

### May 24, 2024

* Launched Android Kotlin SDK

### May 17, 2024

* Launched create credential w/ code in dashboard

### May 10, 2024

* Launched Stellar Tier 1

### May 3, 2024

* Launched [new endpoints](wallets/update-wallet-tags.md) for tagging wallets for Policy Engine filters
* Launched cross platform registration with a one-time code
* Upgraded ZeroDev SDK version

### April 19, 2024

* Laucnhed [iOS Swift SDK](../getting-started/dfns-sdks.md)
* Launched new endpoint to [create user & wallet simultaneously](https://docs.dfns.co/d/api-docs/authentication/registration/completeenduserregistration)
* Upgraded Viem SDK integration to 2.X

### April 12, 2024

* Launched recipient whitelisting in Policy Engine
* Executed Asset Account and Public Key to Wallet migration script
* Retired legacy authentication service

### March 29, 2024

* Launched Cardano Tier2 support and Polygon Amoy Tier1  (retired Mumbai)
* Laucnhed Solana fee estimation API

### March 15, 2024

* Launched [GoLang SDK](../getting-started/dfns-sdks.md)
* Launched Tier2 support for PolkaDot and Kusama

### March 8, 2024

* Launched Tier1 support for Algorand
* Removed legacy dashboard access in production

### Feb 29, 2024

* Added `custodial` field to [ListWallets](wallets/list-wallets.md).  False implies an end user wallet
* Removed Policy Engine v1 create endpoints from dashboard and SDK
* Fixed a bug in which Policy Engine [List Approvals](policy-engine/api-reference/list-approvals-1.md) was filtering by default

### Feb 21, 2024

* Launched new [Read Contract endpoint](https://docs.dfns.co/d/api-docs/networks/read-contract)&#x20;
* Launched Litecoin Tier1&#x20;

### Feb 14, 2024

* New support for WebAuthn across subdomains

### Feb 7, 2024

* [Policy Engine v2](https://docs.dfns.co/d/api-docs/policy-engine) released
* [Tron and Algorand T1 wallets support](https://docs.dfns.co/d/api-docs/wallets#supported-networks)
* [Retries on webhooks](https://docs.dfns.co/d/api-docs/webhooks#webhook-event-deliveries-and-retries) live&#x20;

### Jan 24, 2024

* New [network fees](networks/estimate-fees.md) API released
* Renamed Ripple to XrpLedger

### Jan 17, 2024

* Added send button in dashboard for tier2 chains
* Exposed verified contracts in the API metadata for EVM chains
* Renamed Ripple to XrpLedger for accuracy&#x20;

### Jan 10, 2024

* Launched Bitcoin indexing for Wallets bringing the chain to Tier1 support
* Fixed a bug preventing users from reading end user wallet metadata
* Released AWS KMS Signer in the SDK

### Dec 20, 2023

* Backend changes to cluster load balancing

### Dec 12, 2023

* Added `secondsValid` to PAT expiration config

### Dec 6, 2023

* Launched Solana and Tezos Tier2 wallets support
* Launched support for the Starkware ecosystem with KeyECDSAStark Pseudo Networks

### Nov 29, 2023

* Launched [Wallet webhooks](webhooks/)

### Nov 22, 2023

* Launched Tier2 wallets support for Bitcoin and Tron

### Nov 15, 2023

* Launched SDK support for Viem
* Launched new .env file generation utility in the dashboard

### Nov 8, 2023

* Moved all EVM chains to Tier 1 support in Wallets API.&#x20;
* Added Base L2 support and ArbitrumSepolia testnet

### Nov 1, 2023

* Released new WalletConnect integration in the dashboard using WebAuthn to sign transactions&#x20;

### Oct 18, 2023

* Released first version of wallet export for Enterprise plan customers.

### Oct 10, 2023

* Released first version of wallet import for Enterprise plan customers.

### Oct 1, 2023

* Released CGGMP pre-signatures to accelerate signing request times

### Sep 14, 2023

* Enabled CGGMP signers in production environments

### Aug 29, 2023

* Enabled PaymentVelocity rules on Asset Accounts
* Released permissions and policy engine in the dashboard

### Aug 9, 2023

* Released Policy Engine support for Wallet TransferAmountLimit rules
* Released Wallets in the dashboard

### Aug 1, 2023

* Released Policy Engine support for Wallet AlwaysActivated rules
* Added Generate Signature support for Pseudo Network Wallets

### July 17, 2023

* Updated network names for wallet blockchains
* Returning complete signature encoding from Get Signature calls.&#x20;

### July 11, 2023

* Updated enumerated types for Wallets API network value

### July 5, 2023

* Relaxed CORS policy preventing API calls from the browser&#x20;

### June 29, 2023

* [Typescript SDK](../getting-started/dfns-sdks.md) released
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
* Added `activityId` query string param to [List policy control executions](deprecated-apis/policy-management/policyexecution/listpolicycontrolexecutions.md)

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
* Fixed a bug in the `timeoutInMinutes` implementation in [PolicyControls](deprecated-apis/policy-management/policy-controls/createpolicycontrol.md)

### Dec 7, 2022

* Launched upgraded key storage persistence layer for wallet scalability
* Launched indexing for ERC20s including USDT, USDC, MATIC, BNB so they are exposed in incoming transactions.
* Internal bug fixes for Binance Smart Chain.

### Nov 30, 2022

* Launched our new blockchain indexing microservice for Ethereum mainnet exposed via the new `direction` field on [payments](deprecated-apis/high-level-api-asset-accounts-and-payments/payments/listpayments.md) and the new `PaymentReceived and PaymentConfirmed` [callback eventKinds](deprecated-apis/readme-1/callback-subscriptions/createcallbacksubscription.md).
* Enabled [Permissions](permissions/) on [callbacks](deprecated-apis/readme-1/) and [pubic keys](deprecated-apis/low-level-api-keys-and-transactions/public-keys-1/)
* Internal bug fixes wrt database pagination

### Nov 22, 2022

* Continuing the roll out of our new authorization framework called Permissions. The rollout is intended to be silent and should have no customer facing impact. Stay tuned for further announcements on the features & functionality.
* Deprecated `AllowedProducts` internal restriction on API endpoint usage. Now public keys created with the high level API can be used with the low level API and vice versa.

### Nov 16, 2022

* Rolled out a new authorization framework called Permissions. This is the first of two deployments and should have no customer-facing impact.
* Deployed changes to our internal gateways for routing internal API calls.

### Nov 8, 2022

* Added a `maxUnitBalance` property to the response from the [GetBalance endpoint](high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbalancebyid.md) representing the largest possible unit for the given asset.
* IP Whitelisting fixes: API Gateway redirect aliases, extra NAT Gateway IPs whitelisted
* Integrated Fantom, Optimism, and SKALE blockchains

### Oct 27, 2022

* Added `PolicyActivated` and `WalletCreated` [callback subscription topics](deprecated-apis/readme-1/callback-subscriptions/createcallbacksubscription.md)
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

* Deployed filtering [policies](deprecated-apis/policy-management/policies/createpolicy.md) by public keys of wallets
* Bug fix for Policy Control Execution bad activity types
