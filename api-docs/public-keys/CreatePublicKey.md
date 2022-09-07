
## CreatePublicKey
`RESTful Endpoint: POST /public-keys`

Scopes:
 * as API Key: public_keys:write
 * as Employee Auth: public_keys:write

Creates a public key invoking key shares to create signatures and sign any arbitrary message.

To create a public key, you have to specify only the following:

*   Signature algorithm used to generate the key (currently [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) or [EdDSA](https://en.wikipedia.org/wiki/EdDSA))
*   Group size for the number of key shares
*   Group threshold for the minimum number of key shares required to execute the MPC/TSS ceremony
  
## Notes

Some keys do not exist on the blockchain until transactions are actually sent. In those cases, trying to get the balance right after creation might result in the `404: Address not found on blockchain` error.


### Input Body Parameters
* externalId: 
* assetAccountId: 
* groupThreshold: 
* groupSize: 
* isEddsa: 
* tags: 

_Please consult OpenAPI file full breakdown and including nested properties._

### Successful Response
* id: `EntityId`. 
* externalId: `String`. 
* orgId: `EntityId`. 
* publicKey: `PublicKey`. 
* signerIds: `String[]`. 
* groupThreshold: `Integer`. 
* groupSize: `Integer`. 
* tags: `Tag[]`. 
* isEddsa: `Bool`. 
* allowedProducts: `ProductKind`. 

### Error Responses


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/public-keys" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
