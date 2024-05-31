# Complete End User Registration with Wallets

`POST /auth/registration/enduser`

Completes the end user registration process and creates the user's initial credentials along with delegated wallets for the new end user.

The type of credentials being registered is determined by the `credentialKind` field in the nested objects (`firstFactorCredential` and `secondFactorCredential`). Supported credential kinds are:

* `Fido2`: User action is signed by a user's signing device using `WebAuthn`.
* `Key`: User action is signed by a user's, or token's, private key.

The number of delegated wallets created and the wallet types are determined by the `wallets` specifications. The end user is automatically assigned `DfnsDefaultEndUserAccess` managed permission that grants the end user full access to the wallets.

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
| `Auth:Types:EndUser`  | Always Required                   |
| `Wallets:Create`      | Always Required                   |
| `Wallets:Delegate`    | Always Required                   |

## Request body

|                                                            |          |                                                                               |
| ---------------------------------------------------------- | -------- | ----------------------------------------------------------------------------- |
| `firstFactorCredential` <mark style="color:red;">\*</mark> | `Object` | first factor credential that the end user is registering                          |
| `secondFactorCredential`                                   | `Object` | `Optional` second factor credential that the end user is registering              |
| `recoveryCredential`                                       | `Object` | `Optional` recovery credential that can be used to recover the end user's account |
| `wallets`                                                  | `Array` | delegated wallets that the end user should have

### Fido2 Credential

|                                                                     |          |                                                                                                                                       |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `Fido2`                                                                                                                |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                       |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | base64url encoded client data object. The underlying object is the clientData object returned by the user's WebAuthn client           |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded attestation data object. The underlying object is the attestationData object returned by the user's WebAuthn client |


### Key Credential

|                                                                     |          |                                                                                                                                                                          |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `Key`                                                                                                                                                     |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                          |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                   |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/api-objects.md#key-credential) JSON object, stringified and base64url-encoded                                      |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Attestation Data ](../../../advanced-topics/authentication/api-objects.md#key-credential-1)JSON string object with the users signature and public key |


### Recovery Credential

|                                                                     |          |                                                                                                                                                                           |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `credentialKind` <mark style="color:red;">\*</mark>                 | `String` | will always be `RecoveryKey`                                                                                                                                              |
| `credentialInfo` <mark style="color:red;">\*</mark>                 | `Object` |                                                                                                                                                                           |
| `credentialInfo.credId` <mark style="color:red;">\*</mark>          | `String` | base64url encoded id of the credential                                                                                                                                    |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark>      | `String` | [Client Data](../../../advanced-topics/authentication/api-objects.md#key-credential) JSON object, stringified and base64url-encoded                                       |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Attestation Data](../../../advanced-topics/authentication/api-objects.md#key-credential-1) JSON string object with the user's signature and public key |
| `encryptedPrivateKey`                                               | `String` | `Optional` encrypted private key. The user should hold the secret to decrypting this value, and that secret should never be transmitted to Dfns                           |

### Wallets

|                                                                     |          |                                                                                                                                                                          |
| ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `network`                                                           | `String` | Network used for the wallet (See [Supported Networks](../../wallets/#supported-networks) +  [Pseudo Network](../../wallets/#pseudo-networks) for possible values) |
| `name`                                                              |`Object`  | Optional name given to the wallet |

### Example

```json
{
  "firstFactorCredential":{
    "credentialKind":"Key",
    "credentialInfo":{
      "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
      "attestationData":"o2NmbXRkbm9uZWdhdHRTdG10oGhhdXRoRGF0YViUSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NdAAAAALraVWanqkAfvZZFYZpVEg0AENGocd_aHX0iV5ELDC7NR-WlAQIDJiABIVggoA_knPCNl5eHS7pfoPRyhu3KpIBQNHEakwrMwgmIA7ciWCD86j0CwKUFTNez8ysoZFqZpl786wp-BKG2v_MaLQmo1w"
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
  },
  "wallets": [
    {
      "network": "Ethereum"
    }
  ]
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Registration Errors](../../../getting-started/errors.md#user-registration-errors) for user registration specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - an object describing the end user and the delegated wallets

```json
{
  "credential": {
    "uuid": "cr-34514-nip9c-xxxxxxxxxxxxxxxx",
    "credentialKind": "Fido2",
    "name": "Default Credential"
  },
  "user": {
    "id": "us-2ba0h-lvp2q-xxxxxxxxxxxxxxxx",
    "username": "jdoe@example.co",
    "orgId": "or-5ls29-8kduj-xxxxxxxxxxxxxxxx"
  },
  "authentication": {
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOixxxxxxxx"
  },
  "wallets": [
    {
      "id": "wa-72qpd-et2jo-xxxxxxxxxxxxxxxx",
      "network": "EthereumSepolia",
      "signingKey": {
        "scheme": "ECDSA",
        "curve": "secp256k1",
        "publicKey": "03e60f8b708b197c66b411e1671624ea09228f1ab560483bbe8043852217d982c1"
      },
      "address": "0xbe6ec3fd37034ff44c84cf3453a2cac538787d75",
      "dateCreated": "2024-04-18T12:27:57.947Z",
      "custodial": false,
      "status": "Active"
    }
  ]
}
```
{% endtab %}
{% endtabs %}
