
## CreatePublicKey
`RESTful Endpoint: post /public-keys`

Creates a public key invoking key shares to create signatures and sign any arbitrary message.

To create a public key, you have to specify only the following:

*   Signature algorithm used to generate the key (currently [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) or [EdDSA](https://en.wikipedia.org/wiki/EdDSA))
*   Group size for the number of key shares
*   Group threshold for the minimum number of key shares required to execute the MPC/TSS ceremony
  



### Input Body Parameters
* externalId: `String` [_Optional_] 
* assetAccountId: `EntityId` 
* groupThreshold: `Integer` 
* groupSize: `Integer` 
* isEddsa: `Bool` 
* tags: `Tag[]` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/public-keys" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
