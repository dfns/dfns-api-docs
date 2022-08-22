
## CreateAssetAccount
`RESTful Endpoint: post /assets/asset-accounts`

Creates new `AssetAccount` entity associated with a specific `assetSymbol` (such as `ETH`). Returns new asset ID.

## Notes

1.  If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup).    
    
2.  Error `groupThreshold/groupSize cannot be empty` happens if the default values of `3/7` for `groupThreshold` or `groupSize` respectively didn't get applied server-side. In the rare case that this happens, add those values to the request body in production (and `3/5` on testnets).  
    
3.  Error `parties is larger than the available number of peers` happens whenever you set `groupSize` or `groupThreshold` higher than the number of nodes provisioned by the system (`7/3` on production, `5/3` on testnets).        
    
4.  This operation is asynchronous. We create a record in the database with a `Creating` status and return a response with an asset account ID (starting with `aa-`). In the background, we generate a new public key. When this is done, the record in database is updated with additional information and the status is set to `Enabled`.  
    If it were synchronous, then the response would have to contain all the information about the created asset account, such as public key. This would mean a significant delay on the initial response, up to the key generation time (10, 15, even 30+ seconds).

<!--  -->


### Input Body Parameters
* assetSymbol: `AssetSymbol` 
* groupSize: `Integer` [_Optional_] 
* groupThreshold: `Integer` [_Optional_] 
* publicKey: `PublicKey` [_Optional_] If public key is present, the asset account will be added to an existing signing group.
* externalId: `String` [_Optional_] 
* tags: `Tag[]` [_Optional_] 
* name: `String` [_Optional_] Name chosen for the Asset Account

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
