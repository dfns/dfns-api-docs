# Supported Assets

Dfns offers a wide array of chain-specific crypto asset support.  Before reviewing our support matrix, it's important to understand how Dfns exposes APIs for facilitating blockchain interactions:

1. High-level APIs: [Transfer Asset](https://docs.dfns.co/d/api-docs/wallets/transfer-asset-from-wallet) simplifies complex asset transfer operations. It abstracts away the details of blockchain interactions, allowing for easier integration. Dfns asset integrations are implemented in the context of this high-level API and are detailed below.
2. Mid-level APIs: [Sign and Broadcast](https://docs.dfns.co/d/api-docs/wallets/broadcast-transaction-from-wallet) Enables interaction with any arbitrary smart contract but requires developers to integrate with native chain SDKs to format transactions as inputs. It requires more development but provides greater control over the transaction.
3. Low-level APIs: [Generate Signature](https://docs.dfns.co/d/api-docs/wallets/generate-signature-from-wallet) offer granular control by exposing our MPC signing directly to the developer.  This also requires more engineering effort, but makes it possible to execute any interaction with any chain that supports our underlying cryptographic schemes: ECDSA, EdDSA, and Schnorr.

When using the high-level Transfers APIs, Dfns supports various assets across multiple chains, such as native cryptocurrencies, ERC-20 tokens, NFTs, and non-EVM assets. In the Dfns API, the `kind` variable specifies the type of asset being transferred. It determines how the transaction is processed based on the asset's blockchain standard. For example, `kind` can be set to `Native` for base cryptocurrencies (e.g., Bitcoin, Ethereum), `ERC20` for fungible tokens on Ethereum, or `ERC721` for NFTs. Other possible values include standards from non-EVM chains like `SPL` or `ASA`. Correctly setting the kind ensures that the API handles the transaction according to the asset's unique characteristics.&#x20;

Each asset type requires specific parameters, such as contract addresses for ERC-20 and ERC-721 tokens, or asset IDs for non-EVM assets. Transactions involve specifying the asset type, destination address, and amount, with additional fields varying by asset type. &#x20;

Here is a summary of the assets currently supported by the Dfns Transfer API:&#x20;

| **Blockchain Network**    | **Native Cryptocurrency** | **Token Standards**                      |
| ------------------------- | ------------------------- | ---------------------------------------- |
| Algorand                  | ALGO                      | ASA                                      |
| Arbitrum                  | ETH                       | ERC-20, ERC-721                          |
| Avalanche C-Chain         | AVAX                      | ERC-20, ERC-721                          |
| Base                      | ETH                       | ERC-20, ERC-721                          |
| Bitcoin                   | BTC                       | N/A                                      |
| BSC (Binance Smart Chain) | BNB                       | BEP-20, BEP-721                          |
| Cardano                   | ADA                       | N/A                                      |
| Ethereum                  | ETH                       | ERC-20, ERC-721                          |
| Fantom Opera              | FTM                       | ERC-20, ERC-721                          |
| Internet Computer         | ICP                       | ICRC (not generic)                       |
| Kusama                    | KSM                       | N/A                                      |
| Litecoin                  | LTC                       | N/A                                      |
| Optimism                  | ETH                       | ERC-20, ERC-721                          |
| Origyn                    | OGY                       | N/A                                      |
| Polkadot                  | DOT                       | N/A                                      |
| Polygon                   | POL (fka MATIC)           | ERC-20, ERC-721                          |
| Solana                    | SOL                       | SPL, SPL 2022                            |
| Stellar                   | XLM                       | SEP-41 (includes Stellar Classic Assets) |
| Tezos                     | XTZ                       | N/A                                      |
| Ton                       | TON                       | TEP-74 (Jetton)                          |
| Tron                      | TRX                       | TRC-10, TRC-20, TRC-721                  |
| XRP Ledger (Ripple)       | XRP                       | N/A                                      |

\
This table highlights the blockchains, their native cryptocurrencies, and supported token standards (e.g., ERC-20 for Ethereum-based tokens).  For detailed information, refer to the documentation[ here](https://docs.dfns.co/d/api-docs/wallets/transfer-asset-from-wallet).

\
