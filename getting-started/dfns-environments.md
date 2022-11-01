# Dfns Environments

Dfns supports a production environment (api.dfns.io) and a staging environment (api.dfns.ninja).  Production always interacts with mainnet chains, while staging always interacts with testnet chains.  _Staging is for use only with test funds_ - the environment does not have the same availability guarantees as production. &#x20;

This constraint exists to prevent customers from accidentally moving real funds into the staging environment.  Note Dfns can not prevent customers from using [CreateSignature](../api-docs/low-level-api-keys-and-transactions/transaction-execution/createsignature.md) in a staging environment and sending funds to a mainnet chain.   This is however against our terms of use, so please don't do it - thanks! &#x20;

Throughout our documentation, assume that you should prepend the environment you want to interact with in front of the API paths given.  For example:&#x20;

`POST /assets/asset-accounts/{AssetAccountId}/payments`

For the production environment should be interpreted as a post to:&#x20;

`https://api.dfns.io/assets/asset-accounts/{AssetAccountId}/payments`

If you have any questions or concerns about our environments, don't hesitate to reach out to us: [docs@dfns.co](https://email:docs@dfns.co).&#x20;
