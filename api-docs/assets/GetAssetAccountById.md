
## GetAssetAccountById
`RESTful Endpoint: GET /assets/asset-accounts/{assetAccountId}`

Scopes:
 * as API Key: asset_accounts:read
 * as Employee Auth: asset_accounts:read

Retrieves a particular instance of `AssetAccount` by its `id`. If not found, returns `EntityNotFoundError` with a message indicating which table from which it's missing.

> **Notes**  
>   
>   
> `address` is derived from the `publicKey` via a blockchain-specific function.

<!--  -->

### Input Query Parameters
* Path parameter `assetAccountId`: undefined  
  

### Successful Response
* tags: `Tag[]`. Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).

Multiple tags can be attached to same entity.
* externalId: `String`. Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
* orgId: `EntityId`. Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
* id: `EntityId`. 
* status: `AssetAccountStatus`. Indicates whether account is ready to be used.
* address: `String`. Blockchain address for a chosen Blockchain network.
* publicKey: `String`. `PublicKey` which is used by `AssetAccount`. Usually this is used to derive addresses on a given blockchain network.

Alternatively can be used to verify signatures produced by the platform.
* publicKeyId: `EntityId`. 
* assetSymbol: `AssetSymbol`. Asset symbol indicating which asset this account is managing. Such as BTC or ETH. In case of coins (ERC20 and alike) use `COIN.BLOCKCHAIN` syntax, such as USDC.ETH or USDC.SOL to indicate that USDC on Ethereum or USDC on Solana is required.
* name: `String`. Custom name that can be added for an account.
* dateCreated: `IsoDatetime`. 
* dateUpdate: `IsoDatetime`. 
* groupSize: `Decimal`. 
* groupThreshold: `Decimal`. 
* authorizations: `AssetAccountAuthorization[]`. 

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{assetAccountId}" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
