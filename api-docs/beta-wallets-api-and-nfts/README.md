# 🆕 Wallets & NFTs API

Welcome to the new Wallets API! We've received feedback that our original notion of [Asset Accounts](../deprecated-apis/high-level-api-asset-accounts-and-payments/asset-accounts/) is too granular. Any given Asset Account represents at most one contract on one chain. With Wallets, we're expanding this to any number of assets on a single chain, which we believe is more consistent with the standard mental model of wallets in web3.

In addition to tracking multiple assets, the new Wallets API also natively supports ERC-721 based NFTs. You can list which NFTs are in your wallet and transfer NFTs just like ERC-20 tokens. We are indexing the supported chains below, so we know what's in your wallet at any given time. Also note that the wallets API brings together elements of our high and low level APIs such that with a single wallet you can now transfer a token, broadcast a transaction, or create a signature.

Finally, Wallets will support Delegated Signing, enabling you to require your customers to sign API requests into Dfns using our new Authentication system. Please contact us for additional resources related to Delegated Signing.

### Caveats

While we expect Wallets to eventually fully deprecate Asset Accounts, for the time being, see the table below for the supported blockchain networks.

## Supported networks <a href="#supported-networks" id="supported-networks"></a>

| Network name | Mainnet | Testnet | Tier-1 Support | Tier-2 Support |
| ------------ | :-----: | :-----: | :----: | :----: |
| ArbitrumOne | :heavy_check_mark: | | | :heavy_check_mark: |
| ArbitrumGoerli | | :heavy_check_mark: | | :heavy_check_mark: |
| AvalancheC | :heavy_check_mark: | | | :heavy_check_mark: |
| AvalancheCFuji | | :heavy_check_mark: | | :heavy_check_mark: |
| Bsc | :heavy_check_mark: | | :heavy_check_mark: | |
| BscTestnet | | :heavy_check_mark: | :heavy_check_mark: | |
| Ethereum | :heavy_check_mark: | | :heavy_check_mark: | |
| EthereumGoerli | | :heavy_check_mark: | :heavy_check_mark: | |
| EthereumSepolia | | :heavy_check_mark: | :heavy_check_mark: | |
| FantomOpera | :heavy_check_mark: | | | :heavy_check_mark: |
| FantomTestnet | | :heavy_check_mark: | | :heavy_check_mark: |
| Optimism | :heavy_check_mark: | | | :heavy_check_mark: |
| OptimismGoerli | | :heavy_check_mark: | | :heavy_check_mark: |
| Polygon | :heavy_check_mark: | | :heavy_check_mark: | |
| PolygonMumbai | | :heavy_check_mark: | :heavy_check_mark: | |

## Tier-1 vs Tier-2 support

We plan to add support for more blockchain networks over time. The supported features will vary depending on popularity and market demand.

Tier 1 blockchain networks will support all wallet features, including automatic detection of wallet [asset](./get-wallet-assets.md) and [NFT](./get-wallet-nfts.md) balances if applicable, and on-chain asset transfer [history](./get-wallet-history.md). Tier-1 support also include [transfer asset](./transfer-asset-from-wallet.md), [broadcast transaction](./broadcast-transaction-from-wallet.md) and [generate signature](./generate-signature-from-wallet.md).

Tier 2 blockchain networks do not track tokens or on-chain history. Only the [balance](./get-wallet-assets.md) of the native token, which is used to pay transaction fees, is returned.  Tier-2 support include [broadcast transaction](./broadcast-transaction-from-wallet.md) and [generate signature](./generate-signature-from-wallet.md); transfer asset is not supported.

## Pseudo networks <a href="#pseudo-networks" id="pseudo-networks"></a>

We also support wallets not tied to a blockchain network. You can create an unbound wallet by setting the `network` field to one of the supported signature schemes, currently either `KeyECDSA` or `KeyEdDSA`. You can use these wallets for more advanced use cases, for example

* use Dfns wallets with private blockchains that Dfns can't access, such as Polygon supernets or Avalanche subnets.
* use Dfns wallets with blockchains not on the supported network list, as long as they use either `ECDSA` or `EdDSA`.
* use the same Dfns wallets across multiple blockchain networks.

The unbound wallets only support [generate signature](./generate-signature-from-wallet.md). To help improve the developer experience with generate signature, our [TypeScript SDK](https://github.com/dfnsext/typescript-sdk) includes integrations with different blockchain SDKs, like [ethers.js 5](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-ethersjs5) and [6](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-ethersjs6) or [Solana web3.js](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-solana). Browse through the [included examples](https://github.com/dfnsext/typescript-sdk/tree/m/examples) to see how to develop dapps with Dfns wallets.

## Other features

Additionally, the Wallets API supports Policy Engine.

Thanks in advance for testing the new Wallets API and please send any feedback to docs@dfns.co.
