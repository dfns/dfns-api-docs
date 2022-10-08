
## CreatePublicKey
`RESTful Endpoint: POST /public-keys`

Scopes:
 * as API Key: PublicKeys:CreatePublicKey
 * as Employee Auth: PublicKeys:CreatePublicKey

Creates a public key invoking key shares to create signatures and sign any arbitrary message.

## Notes
  
1. To create a public key, you have to specify only the following:

   *   Group size for the number of key shares
   *   Group threshold for the minimum number of key shares required to execute the MPC/TSS ceremony    
   *   Signature algorithm used to generate the key (currently [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) or [EdDSA](https://en.wikipedia.org/wiki/EdDSA))


2. Our MPC threshold signature protocol requires computationally heavy setup for [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) key generation. With our current deployment, this process takes on average half a minute. If you anticipate a higher key generation throughput, please reach out to us.

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



