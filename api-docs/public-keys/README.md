The Dfns `PublicKey` endpoints expose a low-level interface into our wallet infrastructure for **advanced** use cases not supported by our `AssetAccount` and `Payments` endpoints. You can use these endpoints any time you want to work with public keys without using the [Asset Accounts](<../../use-cases/Asset Accounts/README.md>) abstraction.  

A single public-key created with ECDSA can be used to transact across all blockchains supporting this encryption scheme including [Bitcoin, Ethereum, XRP, and many others](http://ethanfast.com/top-crypto.html).

> **Note**: Dfns doesn't maintain the page above. It is an independent reference table that maps cryptographic schemes to specific chains.

Once you have a public key and authorization rights to key shares (which are protected by the MPC network), then at the lowest level, you can use the public key to invoke the key shares to create a signature and sign any arbitrary message (generally a transaction hash) via our [Signing API](../../api-docs/public-keys/CreateSignature.md).

One level higher up the stack, you can construct a Blockchain transaction and we will broadcast it on your behalf using the [transaction broadcast API](BroadcastTransaction.md).

This is all done without being tied to specific assets or Blockchains.

