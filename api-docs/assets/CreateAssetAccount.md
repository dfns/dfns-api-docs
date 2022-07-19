# CreateAssetAccount

`RESTful Endpoint: post /assets/asset-accounts`

Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup).

## Input Body Parameters

* assetSymbol: `AssetSymbol`
* groupSize: `Integer` \[_Optional_]
* groupThreshold: `Integer` \[_Optional_]
* publicKey: `PublicKey` \[_Optional_] If public key is present, the asset account will be added to an existing signing group.
* externalId: `String` \[_Optional_]
* tags: `Tag[]` \[_Optional_]
* name: `String` \[_Optional_] Name chosen for the Asset Account

_Please consult the OpenAPI file below for a full breakdown including nested properties.  Expand the ">" symbols to drill down._&#x20;

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
