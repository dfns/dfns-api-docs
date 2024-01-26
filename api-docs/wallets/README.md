# Wallets

The Dfns Wallets API enables you to create wallets across a wide variety of chains using 3 different underlying signature schemes and curves (ECDSA, ECDSAStark, and EdDSA).  APIs are exposed at a high level to view and transfer native cryptocurrencies, ERC20 tokens and ERC721 NFTs.  Additionally we've exposed low-level transaction broadcast and raw signing APIs enabling integrations with hundreds of chains and ecosystems.  All the Tier-1 chains listed below are fully indexed to provide accurate asset reporting and transaction history.&#x20;

Wallets also support [Delegated Signing](../../advanced-topics/delegated-signing.md), enabling a non-custodial configuration and an "Apple Pay for Crypto" UX via our WebAuthn/Passkeys integrations.   If you have feedback on the Wallets API, please send it to [docs@dfns.co](mailto:docs@dfns.co).&#x20;

### Supported networks <a href="#supported-networks" id="supported-networks"></a>

You can use any of the follow enumerated types in the `network` field of [Create Wallet](https://docs.dfns.co/dfns-docs/api-docs/wallets/create-wallet#request-body):

<table><thead><tr><th width="198">Mainnets</th><th width="211" align="center">Testnets</th><th width="82" align="center">Tier-1</th><th width="90" align="center">Tier-2</th><th>Block Finality* </th></tr></thead><tbody><tr><td>ArbitrumOne</td><td align="center">ArbitrumSepolia</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>AvalancheC</td><td align="center">AvalancheCFuji</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Base</td><td align="center">BaseSepolia</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Bitcoin</td><td align="center">BitcoinTestnet3</td><td align="center"></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td>2</td></tr><tr><td>Bsc</td><td align="center">BscTestnet</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Ethereum</td><td align="center">EthereumSepolia</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>12</td></tr><tr><td>FantomOpera</td><td align="center">FantomTestnet</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Optimism</td><td align="center">OptimismSepolia</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Polygon</td><td align="center">PolygonMumbai</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"></td><td>50</td></tr><tr><td>Ripple</td><td align="center">RippleTestnet</td><td align="center"></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td>N/A</td></tr><tr><td>Solana</td><td align="center">SolanaDevnet</td><td align="center"></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td>N/A</td></tr><tr><td>Tezos</td><td align="center">TezosGhostnet</td><td align="center"></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td>N/A</td></tr><tr><td>Tron</td><td align="center">TronNile</td><td align="center"></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td>19</td></tr></tbody></table>

{% hint style="info" %}
\* Block Finality refers to the number of blocks that must be validated or mined after a transaction has been included in a block for that transaction to be considered irreversible.   Tier-2 chains are not indexed so finality doesn't apply.  Tier-1 testnets report transactions immediately upon indexing.&#x20;
{% endhint %}

### Tier-1 vs Tier-2 support

We plan to add support for more blockchain networks over time. The supported features will vary depending on popularity and market demand.

Tier 1 blockchain networks will support all wallet features, including automatic detection of wallet [asset](get-wallet-assets.md) and [NFT](get-wallet-nfts.md) balances if applicable, and on-chain asset transfer [history](get-wallet-history.md). Tier-1 support also include [transfer asset](transfer-asset-from-wallet.md), [broadcast transaction](broadcast-transaction-from-wallet.md) and [generate signature](generate-signature-from-wallet/).

Tier 2 blockchain networks do not track tokens or on-chain history. Only the [balance](get-wallet-assets.md) of the native token, which is used to pay transaction fees, is returned. Tier-2 support includes [Broadcast Transaction](broadcast-transaction-from-wallet.md), [Generate Signature](generate-signature-from-wallet/),  and Transfer Asset for native chain cryptocurrency only.

### Pseudo Networks <a href="#pseudo-networks" id="pseudo-networks"></a>

We also support wallets not tied to a blockchain network.  You can create an unbound wallet by setting the `network` field to one of the supported signature schemes, currently `KeyECDSA, KeyECDSAStark, or` `KeyEdDSA`. You can use these wallets for more advanced use cases, for example:

* Use Dfns wallets with blockchains Dfns doesn't natively support, as long as they use either `ECDSA, ECDSAStark` or `EdDSA`.
* Use Dfns wallets with private blockchains that Dfns have access to, such as Polygon Supernets or Avalanche Subnets.
* Use the same Dfns wallets across multiple blockchain networks.

The unbound wallets only support [Generate Signature](generate-signature-from-wallet/). To help improve the developer experience with generate signature, our [TypeScript SDK](https://github.com/dfnsext/typescript-sdk) includes integrations with different blockchain SDKs, like [ethers.js 5](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-ethersjs5) and [6](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-ethersjs6) or [Solana web3.js](https://github.com/dfnsext/typescript-sdk/tree/m/packages/lib-solana). Browse through the [included examples](https://github.com/dfnsext/typescript-sdk/tree/m/examples) to see how to develop Dapps with Dfns wallets.
