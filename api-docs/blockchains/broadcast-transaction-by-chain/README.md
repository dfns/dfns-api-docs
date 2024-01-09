# Broadcast Transaction by Chain

[Broadcast Transaction from Wallet](../../wallets/broadcast-transaction-from-wallet.md) is an API that exposes a low level interface to any Tier 1 or Tier 2 supported blockchain.  The endpoint:

* Takes an encoded message you create either using a template or the chain's native SDK
* Hashes the message and signs it in our signing network
* Formats the result into a transaction and broadcasts it to the target chain.

The way you encode the message sent in the body of the API differs from chain to chain.   Go to the specific section below for the blockchain you are targeting to learn more about how to encoded messages for transaction broadcast.&#x20;
