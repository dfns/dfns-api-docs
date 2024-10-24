# Complete User Registration

`POST /auth/registration`

Completes the user registration process and creates the user's initial credentials.

The type of credentials being registered is determined by the `credentialKind` field in the nested objects (`firstFactorCredential` , `secondFactorCredential` and `RecoveryCredential`). Supported credential kinds are:

* `Fido2`: User action is signed by a user's signing device using `WebAuthn`.
* `Key`: User action is signed by a user's, or token's, private key.
* `PasswordProtectedKey`: User action is signed by a user's, or token's, private key. The encrypted version of the private key is stored by Dfns and returns during the signing flow for the user to decrypt it.
* `RecoveryKey` : Similar to `PasswordProtectedKey`, but this credential can only be used to recover an account not to sign an action or login. Once this credential is used all the other user's credentials are invalidated.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Temporary authentication token required. See [Registration Headers](../../../getting-started/request-headers.md#registration-headers) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authenticated, the permissions apply to the application only.
{% endhint %}

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Users:Create`   | Always Required                   |
| `Auth:Types:Employee` | When `kind` is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When `kind` is `EndUser`          |

## Request body

|                                                            |          |                                                                               |
| ---------------------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| `firstFactorCredential` <mark style="color:red;">\*</mark> | `Object` | first factor credential that the user is registering                          |
| `secondFactorCredential`                                   | `Object` | `Optional` second factor credential that the user is registering              |
| `recoveryCredential`                                       | `Object` | `Optional` recovery credential that can be used to recover the user's account |

### Fido2 Credential

|                                                                     |          |                                                                                                                                       |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `Fido2`                                                                                                                |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                       |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | base64url encoded client data object. The underlying object is the clientData object returned by the user's WebAuthn client           |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded attestation data object. The underlying object is the attestationData object returned by the user's WebAuthn client |

#### Example

```json
{
  "firstFactorCredential":{
    "credentialKind":"Fido2",
    "credentialInfo":{
      "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
      "attestationData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA"
    }
  }
}
```

### Key Credential

<table><thead><tr><th width="258.3333333333333"></th><th></th><th></th></tr></thead><tbody><tr><td><code>credentialKind</code> <mark style="color:red;">*</mark></td><td><code>String</code></td><td>will always be <code>Key</code></td></tr><tr><td><code>credentialInfo</code> <mark style="color:red;">*</mark></td><td><code>Object</code></td><td></td></tr><tr><td><code>credentialInfo.credId</code> <mark style="color:red;">*</mark></td><td><code>String</code></td><td>base64url encoded id of the credential</td></tr><tr><td><code>credentialInfo.clientData</code> <mark style="color:red;">*</mark></td><td><code>String</code></td><td><a href="../../../advanced-topics/authentication/api-objects.md#key-credential">Client Data</a> JSON object, stringified and base64url-encoded</td></tr><tr><td><code>credentialInfo.attestationData</code> <mark style="color:red;">*</mark></td><td><code>String</code></td><td>base64url encoded <a href="../../../advanced-topics/authentication/api-objects.md#key-credential-1">Attestation Data </a>JSON string object with the users signature and public key</td></tr></tbody></table>

#### Example

```json
{
  "firstFactorCredential":{
    "credentialKind":"Key",
    "credentialInfo":{
      "credId":"b215MVzsyKahdGIvTQm3kQhzxB_sN5sFPLdPBRocxOA=",
      "clientData":"eyJjaGFsbGVuZ2UiOiJZMmd0Tm1Oc2RHTXRiV05sWTNZdE9XRTRPV2QxYnpKd1lqYzBOVEp4Y2ciLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmRmbnMud3RmIiwidHlwZSI6ImtleS5jcmVhdGUifQ==",
      "attestationData":"eyJjaGFsbGVuZ2UiOiJZMmd0Tm1Oc2RHTXRiV05sWTNZdE9XRTRPV2QxYnpKd1lqYzBOVEp4Y2ciLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmRmbnMud3RmIiwidHlwZSI6ImtleS5jcmVhdGUifQ=="
    }
  }
}
```

### Password Protected Key Credential

|                                                                     |          |                                                                                                                                                                           |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `PasswordProtectedKey`                                                                                                                                     |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                           |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                    |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/api-objects.md#key-credential) JSON object, stringified and base64url-encoded                                       |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Attestation Data](../../../advanced-topics/authentication/api-objects.md#key-credential-1) JSON string object with the user's signature and public key |
| `encryptedPrivateKey`                                               | `String` | Encrypted private key. The user should hold the secret to decrypting this value, and that secret should never be transmitted to Dfns                                      |

#### Example

```json
{
  "firstFactorCredential":{
    "credentialKind":"PasswordProtectedKey",
    "credentialInfo":{
      "credId":"b215MVzsyKahdGIvTQm3kQhzxB_sN5sFPLdPBRocxOA=",
      "clientData":"eyJjaGFsbGVuZ2UiOiJZMmd0Tm1Oc2RHTXRiV05sWTNZdE9XRTRPV2QxYnpKd1lqYzBOVEp4Y2ciLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmRmbnMud3RmIiwidHlwZSI6ImtleS5jcmVhdGUifQ==",
      "attestationData":"eyJjaGFsbGVuZ2UiOiJZMmd0Tm1Oc2RHTXRiV05sWTNZdE9XRTRPV2QxYnpKd1lqYzBOVEp4Y2ciLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmRmbnMud3RmIiwidHlwZSI6ImtleS5jcmVhdGUifQ=="
    },
    "encryptedPrivateKey":"LsXVskHYqqrKKxBC9KvqStLEmxak5Y7NaboDDlRSIW7evUJpQTT1AYvx0EsFskmriaVb3AjTCGEv7gqUKokml1USL7+dVmrUVhV+cNWtS5AorvRuZr1FMGVKFkW1pKJhFNH2e2O661UhpyXsRXzcmksA7ZN/V37ZK7ITue0gs6I="
  }
}
```

### Recovery Credential

|                                                                     |          |                                                                                                                                                                           |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `RecoveryKey`                                                                                                                                              |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                           |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                    |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/api-objects.md#key-credential) JSON object, stringified and base64url-encoded                                       |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Attestation Data](../../../advanced-topics/authentication/api-objects.md#key-credential-1) JSON string object with the user's signature and public key |
| `encryptedPrivateKey`                                               | `String` | `Optional` encrypted private key. The user should hold the secret to decrypting this value, and that secret should never be transmitted to Dfns                           |

#### Example

```json
{
  "firstFactorCredential":{
    "credentialKind":"Fido2",
    "credentialInfo":{
      "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
      "attestationData":"eyJjaGFsbGVuZ2UiOiJZMmd0Tm1Oc2RHTXRiV05sWTNZdE9XRTRPV2QxYnpKd1lqYzBOVEp4Y2ciLCJjcm9zc09yaWdpbiI6ZmFsc2UsIm9yaWdpbiI6Imh0dHBzOi8vYXBwLmRmbnMud3RmIiwidHlwZSI6ImtleS5jcmVhdGUifQ"
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
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Registration Errors](../../../getting-started/errors.md#user-registration-errors) for user registration specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - an object describing the user

```json
{
  "credential": {
    "uuid": "cr-34514-nip9c-8bppvgqgj28dbodrc",
    "credentialKind": "Fido2",
    "name": "Default Credential"
  },
  "user": {
    "id": "us-2ba0h-lvp2q-8v1860pcj1bh5irf",
    "username": "jdoe@example.co",
    "orgId": "or-34513-nip9c-8bppvgqgj28dbodrc"
  }
}
```
{% endtab %}
{% endtabs %}

