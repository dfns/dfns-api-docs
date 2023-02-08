# Dfns Change Log

The Dfns change log documents changes to our product functionality made by our releases.  This includes new features, breaking changes, bug fixes to known issues, deprecations, etc. Please bookmark this page and refresh frequently for the latest updates.&#x20;



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

* Fixed a bug in [BroadcastTransaction](low-level-api-keys-and-transactions/transaction-execution/broadcasttransaction.md) where the `value` parameter was being interpreted in ETH instead of WEI.&#x20;
* Last push of the year!&#x20;

### Dec 15, 2022

* Launched new `direction` and `status` query parameters on [ListPayments](high-level-api-asset-accounts-and-payments/payments/listpayments.md)
* Fixed a bug in the `timeoutInMinutes` implementation in [PolicyControls](policy-management/policy-controls/createpolicycontrol.md)

### Dec 7, 2022

* Launched upgraded key storage persistence layer for wallet scalability
* Launched indexing for ERC20s including USDT, USDC, MATIC, BNB so they are exposed in incoming transactions.&#x20;
* Internal bug fixes for Binance Smart Chain.

### Nov 30, 2022

* Launched our new blockchain indexing microservice for Ethereum mainnet exposed via the new `direction` field on [payments](high-level-api-asset-accounts-and-payments/payments/listpayments.md) and the new `PaymentReceived and PaymentConfirmed` [callback eventKinds](callbacks/CreateCallbackSubscription.md).&#x20;
* Enabled [Permissions](permissions/permissions/) on [callbacks](<callbacks/README (1).md>) and [pubic keys](low-level-api-keys-and-transactions/public-keys-1/)
* Internal bug fixes wrt database pagination

### Nov 22, 2022

* Continuing the roll out of our new authorization framework called Permissions.  The rollout is intended to be silent and should have no customer facing impact.  Stay tuned for further announcements on the features & functionality.&#x20;
* Deprecated `AllowedProducts` internal restriction on API endpoint usage.  Now public keys created with the high level API can be used with the low level API and vice versa.&#x20;

### Nov 16, 2022

* Rolled out a new authorization framework called Permissions.  This is the first of two deployments and should have no customer-facing impact.&#x20;
* Deployed changes to our internal gateways for routing internal API calls.&#x20;

### Nov 8, 2022

* Added a `maxUnitBalance` property to the response from the [GetBalance endpoint](high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbalancebyid.md) representing the largest possible unit for the given asset.&#x20;
* IP Whitelisting fixes: API Gateway redirect aliases, extra NAT Gateway IPs whitelisted
* Integrated Fantom, Optimism, and SKALE blockchains

### Oct 27, 2022

* Added `PolicyActivated` and `WalletCreated` [callback subscription topics](callbacks/CreateCallbackSubscription.md)
* Integrated TRON blockchain

### Oct 16, 2022

* Deployed IP whitelisting framework
* Fixed a bug impacting payment initiation and market data collection&#x20;

### Sep 27, 2022

* Added [GetAddressForNetwork endpoint](low-level-api-keys-and-transactions/public-keys-1/getaddressfornetwork.md)
* Deployed internal changes around zero trust service to service communication&#x20;
* Fixed testnet erc20 tokens with Goerli addresses
* Bug fix adding asset symbol to chain validation&#x20;

### Aug 30, 2022

* Deployed filtering [policies](policy-management/policies/createpolicy.md) by public keys of wallets
* Bug fix for Policy Control Execution bad activity types



