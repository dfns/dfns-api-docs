# 🆕 Beta: Wallets & NFTs API

Welcome to the new Wallets API! We've received feedback that our original notion of [Asset Accounts](../deprecated-apis/high-level-api-asset-accounts-and-payments/asset-accounts/) is too granular. Any given Asset Account represents at most one contract on one chain. With Wallets, we're expanding this to any number of assets on a single chain, which we believe is more consistent with the standard mental model of wallets in web3.

In addition to tracking multiple assets, the new Wallets API also natively supports ERC-721 based NFTs. You can list which NFTs are in your wallet and transfer NFTs just like ERC-20 tokens. We are indexing the supported chains below, so we know what's in your wallet at any given time. Also note that the wallets API brings together elements of our high and low level APIs such that with a single wallet you can now transfer a token, broadcast a transaction, or create a signature.

Finally, Wallets will support Delegated Signing, enabling you to require your customers to sign API requests into Dfns using our new Authentication system which is also now in Beta. Please contact us for additional resources related to Delegated Signing.

### Caveats

While we expect Wallets to eventually fully deprecate Asset Accounts, for the time being, the following chains are supported:

* Ethereum
* Polygon
* Binance Smart Chain

We plan to add support for more chains over time. Note we will not have full support for all chains as standards vary significantly between alternative L1s.

Additionally, **the Wallets API does not yet support Policy Engine**. We expect to add this support soon.

Thanks in advance for testing the new Wallets API and please send any feedback to docs@dfns.co.
