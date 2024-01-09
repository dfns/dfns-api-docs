# Complete User Registration

`POST /auth/registration`

Completes the user registration process and creates the user's initial credentials.

The type of credentials being registered is determined by the `credentialKind` field in the nested objects (`firstFactorCredential` and `secondFactorCredential`). Supported credential kinds are:

* `Fido2`: User action is signed by a user's signing device using `WebAuthn`.
* `Key`: User action is signed by a user's, or token's, private key.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Temporary authentication token required. See [Registration Headers](../../../getting-started/request-headers.md#registration-headers) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authentication, the permissions apply to the application only.
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

Example:

```JSON
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

|                                                                     |          |                                                                                                                                                                                                   |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `Key`                                                                                                                                                                              |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                                                   |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                                            |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/request-signing.md#client-data-format) JSON object, stringified and base64url-encoded                                                       |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Credential Assertion](../../../advanced-topics/authentication/credentials/user-credentials.md#credential-assertion) JSON string object with the users signature and public key |

Example:

```JSON
{
  "firstFactorCredential":{
    "credentialKind":"Key",
    "credentialInfo":{
      "credId":"6Ca6tAOFTx2odyJBnCoRO-gPvfpfy0EOoOcEaxfxIOk",
      "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
      "attestationData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA"
    }
  }
}
```

### Recovery Credential

|                                                                     |          |                                                                                                                                                                                                    |
| ------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `RecoveryKey`                                                                                                                                                                       |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                                                    |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                                             |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/request-signing.md#client-data-format) JSON object, stringified and base64url-encoded                                                        |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Credential Assertion](../../../advanced-topics/authentication/credentials/user-credentials.md#credential-assertion) JSON string object with the user's signature and public key |
| `encryptedPrivateKey`                                               | `String` | `Optional` encrypted private key. The user should hold the secret to decrypting this value, and that secret should never be transmitted to Dfns                                                    |

Example:

```JSON
{
  "firstFactorCredential":{
    "credentialKind":"Fido2",
    "credentialInfo":{
      "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
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

```JSON
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

