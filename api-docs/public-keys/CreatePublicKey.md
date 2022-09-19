
## CreatePublicKey
`RESTful Endpoint: POST /public-keys`

Scopes:
 * as API Key: public_keys:write
 * as Employee Auth: public_keys:write

Creates a public key invoking key shares to create signatures and sign any arbitrary message.

## Notes
  
To create a public key, you have to specify only the following:

*   Group size for the number of key shares
*   Group threshold for the minimum number of key shares required to execute the MPC/TSS ceremony    
*   Signature algorithm used to generate the key (currently [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) or [EdDSA](https://en.wikipedia.org/wiki/EdDSA))

> **Note**: Each ECDSA public key requires the generation of a primes in order to get a Pallier encryption key. On the current deployment, which is Fargate ECS 1024 CPU units and 512 MB, with two threads and 100% CPU utilisation, it takes 17 seconds to generate one Pallier encryption key. If you anticipate a higher key generation throughput, please reach out to us.



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
