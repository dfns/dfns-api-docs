
## CreateAssetAccount
`RESTful Endpoint: post /assets/asset-accounts`

Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). 



### Input Body Parameters
* assetSymbol: `AssetSymbol` 
* groupSize: `Integer` [_Optional_] 
* groupThreshold: `Integer` [_Optional_] 
* publicKey: `PublicKey` [_Optional_] If public key is present, the asset account will be added to an existing signing group.
* externalId: `String` [_Optional_] 
* tags: `Tag[]` [_Optional_] 
* name: `String` [_Optional_] Name chosen for the Asset Account

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/${ProductionOpenApiFileName}" path="/assets/asset-accounts" method="post" %}
[${ProductionOpenApiFileName}](../../.gitbook/assets/${ProductionOpenApiFileName})
{% endswagger %}
