# Low Level API Overview

The Dfns low-level endpoints expose direct interfaces to our wallet infrastructure for **advanced** use cases not supported by our [`AssetAccount`](../high-level-api-asset-accounts-and-payments/asset-accounts/) and [`Payments`](../high-level-api-asset-accounts-and-payments/payments/) endpoints. You can use these endpoints any time you want to work with public keys without using the [Asset Accounts](broken-reference) abstraction.

A single public-key created with eg. [ECDSA](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm) can be used to transact across all blockchains supporting this encryption scheme including [Bitcoin, Ethereum, XRP, and many others](http://ethanfast.com/top-crypto.html) (note Dfns doesn't maintain this page - it's an independent reference table that maps cryptographic schemes to specific chains).

Once you [Create a Public Key](public-keys-1/createpublickey.md), you can sign any arbitrary message (generally a transaction hash) via the [CreateSignature](transaction-execution/createsignature.md) endpoint. One level higher up the stack, you can construct a Blockchain transaction and we will hash, sign, and broadcast it on your behalf using the [Transaction Broadcast ](transaction-execution/broadcasttransaction/)API. &#x20;

These APIs enable crypto-native developers to access any function on any smart contract using Dfns wallets.  What will you build?&#x20;
