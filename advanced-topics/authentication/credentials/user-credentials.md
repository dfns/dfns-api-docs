# User Credentials
Users can register with WebAuthn or with a Private Key

## Private Key Credentials
When reigstering a user with a private key, you need to:
1. Get a registration challenge from the Dfns API
2. Create the key pair locally
3. Sign the registration challenge and public key
4. Return the signed challenge to the Dfns API

### The Registration Challenge
A registration challenge is returned from calls to:
* /auth/registration/init
* /auth/registration/delegated
* /auth/credentials/init

In all cases the challenge format is the same. You will recieve an object with the following properties (additional properties exist for managing credentials with WebAuthn):
| field | description |
| ----- | ----------- |
| `challenge` | A string that will be signed with the new credential |
| `temporaryAuthenticationToken` | A JWT that is passed to the registration endpoint to identify the registration session |
| `supportedCredentialKinds` | The list of credential types that are supported, should always contain "Key" |

### How to Sign the Challenge with the Private Key
The user signs the challenge to prove they are in possession of the key being registered. The user will also sign the public key to ensure the key is not replaced when transmitted to Dfns.

#### Client Data Format
Before signing the challenge, the user will format the challenge into an object which includes additional properties. This object contains the following fields:
| Field | Type | Description |
| - | - | - |
| `type` | string | Will always be `key.create` when creating a new credential, which includes registering a user |
| `challenge` | string | A base64url encoded version of the challenge |
| `origin` | string | The origin in which the app is being executed |
| `crossOrigin` | boolean | A flag indicating if the current call is running cross origin; in most cases this should be `false` |

After creating this object, the user will convert the object to a JSON string, hash the string, and create another structure with the following fields:
| Field | Type | Description |
| - | - | - |
| `clientDataHash` | string | The hex encoded SHA-256 hash of the clientData object |
| `publicKey` | string | The PEM formatted public key that corresponds to the private key being registered |

This object is then converted to a JSON string, and signed with the user's private key.

#### Signing Example
``` typescript
keyOrPasswordClientData: {
  type: 'key.create',
  challenge: base64url(challenge),
  origin: this.appOrigin,
  crossOrigin: false,
}

const clientData = Buffer.from(JSON.stringify(supportedCredentials.credentialData.keyOrPasswordClientData))
const signaturePayload = Buffer.from(JSON.stringify({
  clientDataHash: crypto.createHash('sha256').update(clientData).digest('hex'),
  publicKey: newKey.publicKey,
}))
const signature = crypto.sign(undefined, signaturePayload, newKey.privateKey)
```

#### Credential Assertion
When returning the credential to the server the `public key`, `signature`, and the `signing algorithm` will be returned to the server.  This object contains the following fields:
| Field | Type | Description |
| - | - | - |
| `publicKey` | string | PEM encoded public key that can be used to verify the signature for the credential |
| `signature` | string | The signature produced by signing clientData with the credentials private key, using the algorithm specified in `algorithm`. Needs to be encoded as a hex string |
| `algorithm` | string | `Optional` The algorithm/digest that the credential will use to sign data. If the algoritm is not specified the algorithm will be determined by the key. Can be one of the following choices:<br />`RSA-SHA256`<br />`SHA256`<br />`SHA512` |
