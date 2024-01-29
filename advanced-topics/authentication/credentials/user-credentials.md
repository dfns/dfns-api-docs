# User Credentials

Users can register with a WebAuthn Credential (aka "Passkey") or with a raw Public/Private Key

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

| field                          | description                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| `challenge`                    | A string that will be signed with the new credential                                   |
| `temporaryAuthenticationToken` | A JWT that is passed to the registration endpoint to identify the registration session |
| `supportedCredentialKinds`     | The list of credential types that are supported, should always contain "Key"           |

### How to Sign the Challenge with the Private Key

The user signs the challenge to prove they are in possession of the key being registered. The user will also sign the public key to ensure the key is not replaced when transmitted to Dfns.

#### Client Data Format

Before signing the challenge, the user will format the challenge into an object which includes additional properties. This object contains the following fields:

| Field         | Type    | Description                                                                                         |
| ------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `type`        | string  | Will always be `key.create` when creating a new credential, which includes registering a user       |
| `challenge`   | string  | A base64url encoded version of the challenge                                                        |
| `origin`      | string  | The origin in which the app is being executed                                                       |
| `crossOrigin` | boolean | A flag indicating if the current call is running cross origin; in most cases this should be `false` |

After creating this object, the user will convert the object to a JSON string, hash the string, and create another structure with the following fields:

| Field            | Type   | Description                                                                       |
| ---------------- | ------ | --------------------------------------------------------------------------------- |
| `clientDataHash` | string | The hex encoded SHA-256 hash of the clientData object                             |
| `publicKey`      | string | The PEM formatted public key that corresponds to the private key being registered |

This object is then converted to a JSON string, and signed with the user's private key.

#### Signing Example

```typescript
keyOrPasswordClientData: {
  type: 'key.create',
  challenge: challenge,
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

When returning the credential to the server the `public key`, `signature`, and the `signing algorithm` will be returned to the server. This object contains the following fields:

| Field       | Type   | Description                                                                                                                                                                                                                                                                              |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `publicKey` | string | PEM encoded public key that can be used to verify the signature for the credential                                                                                                                                                                                                       |
| `signature` | string | The signature produced by signing clientData with the credentials private key, using the algorithm specified in `algorithm`. Needs to be encoded as a hex string                                                                                                                         |
| `algorithm` | string | <p><code>Optional</code> The algorithm/digest that the credential will use to sign data. If the algoritm is not specified the algorithm will be determined by the key. Can be one of the following choices:<br><code>RSA-SHA256</code><br><code>SHA256</code><br><code>SHA512</code></p> |

#### Recovery Client Data Format

Before signing the recovery challenge, the user will format the challenge into an object which includes additional properties. This object contains the following fields:

| Field         | Type    | Description                                                                                         |
| ------------- | ------- | --------------------------------------------------------------------------------------------------- |
| `type`        | string  | Will always be `key.get` when creating a new credential, which includes registering a user          |
| `challenge`   | string  | A base64url encoded JSON object containing the user new credentials                                 |
| `origin`      | string  | The origin in which the app is being executed                                                       |
| `crossOrigin` | boolean | A flag indicating if the current call is running cross origin; in most cases this should be `false` |

This object is then converted to a JSON string, and signed with the user's private key.

#### Recovery Signing Example

```typescript
recoveryClientData = {
  type: 'key.get',
  challenge: base64url(JSON.stringify({
    "firstFactorCredential":{
      "credentialKind":"Key",
      "credentialInfo":{
        "credId":"6Ca6tAOFTx2odyJBnCoRO-gPvfpfy0EOoOcEaxfxIOk",
        "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
        "attestationData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA"
      }
    },
    "recoveryCredential":{
      "credentialKind":"RecoveryKey",
      "credentialInfo":{
        "credId":"GMkW0zlmcoMxI1OX0Z96LL_Mz7dgeu6vOH5_TOeGyNk",
        "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
        "attestationData":"Wsdz5810zjVJEyEtx9jYU0dizfhIkdu9AOGl2kYtcBusAPsfjdncE6zKW8ms_VkhJ6Hw4HDfcYj5FHcdM-C4CA"
      },
      "encryptedPrivateKey":"LsXVskHYqqrKKxBC9KvqStLEmxak5Y7NaboDDlRSIW7evUJpQTT1AYvx0EsFskmriaVb3AjTCGEv7gqUKokml1USL7+dVmrUVhV+cNWtS5AorvRuZr1FMGVKFkW1pKJhFNH2e2O661UhpyXsRXzcmksA7ZN/V37ZK7ITue0gs6I="
    }
  })),
  origin: this.appOrigin,
  crossOrigin: false,
}

const clientData = Buffer.from(JSON.stringify(recoveryClientData))
const signature = crypto.sign(undefined, clientData, newKey.privateKey)
```
