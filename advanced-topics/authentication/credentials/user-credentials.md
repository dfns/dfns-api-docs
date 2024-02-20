# User Credentials

Users can register with a WebAuthn Credential (aka "Passkey") or with a raw Public/Private Key

## Private Key Credentials

When registering a user with a private key, you need to:

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

#### Client Data

The user needs to format the challenge into a [Client Data object](../api-objects.md#key-credential).

#### Attestation Data

The client data object is then used to build the [Attestation Data object](../api-objects.md#key-credential-1).

#### Signing Example: First factor and Recovery credentials:

```typescript
recoveryClientData = {
  type: 'key.get',
  challenge: base64url(JSON.stringify({
    "firstFactorCredential":{
      "credentialKind":"Key",
      "credentialInfo":{
        "credId":"6Ca6tAOFTx2odyJBnCoRO-gPvfpfy0EOoOcEaxfxIOk",
        "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
        "attestationData":"eyJwdWJsaWNLZXkiOiAiLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cbk1Ga3dFd1lIS29aSXpqMENBUVlJS29aSXpqMERBUWNEUWdBRTljRzJtRTREV0hid3dsTFJTS0JMWjltNitRc0NcbmVPcVdKaDF4NVZ2UkhaTWFQTFFsUnJoaGdiSG04dW5hNGg4UytMNW84c1Y4SHZ1amJsM01yQVRqM1E9PVxuLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tXG4iLCJzaWduYXR1cmUiOiIzMDQ2MDIyMTAwOGUwMTA5ODQ4YzZmYzgzMDA0ZDBlNmM3ZmRhYzcxZGFlODUyNGZjNWEyOTA4MWQwMTJmODY1NDE2OTg2Y2UyOTAyMjEwMGY0N2UxYmVlNmM1MTc1YzQ0ODhiMTQzYzkzNmM2OGZhYzFhZTdlNzkzMWU3NmM2NzdkNDYzMzFlZDE0OWQxN2QifQ"
      }
    },
    "recoveryCredential":{
      "credentialKind":"RecoveryKey",
      "credentialInfo":{
        "credId":"GMkW0zlmcoMxI1OX0Z96LL_Mz7dgeu6vOH5_TOeGyNk",
        "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
        "attestationData":"eyJwdWJsaWNLZXkiOiItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFOWNHMm1FNERXSGJ3d2xMUlNLQkxaOW02K1FzQ1xuZU9xV0poMXg1VnZSSFpNYVBMUWxScmhoZ2JIbTh1bmE0aDhTK0w1bzhzVjhIdnVqYmwzTXJBVGozUT09XG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1cbiIsInNpZ25hdHVyZSI6IjMwNDYwMjIxMDBiZjBjZGU3ZGIyODQ0ZDhmOTIyZWQyOTNmN2E4NTVjM2U1Y2YzMjUxZjFhY2Q3M2I4MjNiNWZiOTIzZDNiY2FiMDIyMTAwY2YxM2U2ZDliY2ZiMjc3M2Q5ZDkyMDU4M2YwMWE0ODAyYmI4OTg5Y2NmZjMzNjJkYzJmN2U1ZjRmMTQzZjA2ZiJ9"
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
