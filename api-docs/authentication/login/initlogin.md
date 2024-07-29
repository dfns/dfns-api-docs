# Create User Login Challenge

`POST /auth/login/init`

Starts a user login session, returning a challenge that will be used to verify the user's identity.

If the user has a credential of kind `PasswordProtectedKey` a temporary one time code needs to be passed in the `loginCode` field. &#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authenticated, the permissions apply to the application only.
{% endhint %}

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Users:Read` | Always Required |

## Request body

|                                               |          |                                                                                       |
| --------------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| `username` <mark style="color:red;">\*</mark> | `String` | Email address of the user                                                             |
| `orgId` <mark style="color:red;">\*</mark>    | `String` | ID of the target Org                                                                  |
| `loginCode`                                   | `String` | `Optional` OTP that the user received following [Send Login Code](send-login-code.md) |

### Example

```json
{
  "username": "jdoe@example.co",
  "orgId": "or-34513-nip9c-8bppvgqgj28dbodrc",
  // Optional
  // Without it the credentials with Password Protected Key credentials won't be returned
  "loginCode": "1234-1234-1234-1234"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Login Errors](../../../getting-started/errors.md#user-login-errors) for user login errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - an object containing the user's authentication options

Format:

```json
{
  // identifies the kind of credentials that can be used to sign the login challenge
  "supportedCredentialKinds": [
    {
      // the kind of credental; can be `Fido2` or `Key`
      "kind": "string",
      // indicates if the credential can be used as a first factor, second factor, or either; can be `first`, `second`, or `either`
      "factor": "string",
      // when true indicates a second factor credential is required if the credential is used as a first factor
      "requiresSecondFactor": "boolean"
    }
  ],
  // random value used to uniquely identify the request. This value will be included in the data that is signed and sent to the matching /signing call
  "challenge": "string",
  // temporary authentication token that is used to identify this signing session with the matching call to CreateUserLoginChallenge
  "challengeIdentifier": "string",
  // optional url containing a secret value that can be used to enable cross device/origin signing
  "externalAuthenticationUrl": "string",
  // list of credentials that the user can use to sign the login challenge
  "allowCredentials": {
    // list of keys that the user can use to sign the login challenge
    "key":[
      {
        // is always `public-key`
        "type": "string",
        // ID that identifies the credential
        "id": "string",
      }
    ],
    // list of password protected keys that the user can use to sign the login challenge.
    // this field is returned only if the loginCode is passed to the request
    "passwordProtectedKey":[
      {
        // is always `public-key`
        "type": "string",
        // ID that identifies the credential
        "id": "string",
        // Encrypted Private Key. Only the user knows the password to decrypt it and have access to the private key
        "encryptedPrivateKey": "string"
      }
    ],
    // list of WebAuthn credentials that the user can use to sign the login challenge
    "webauthn": [
      {
        // is always `public-key`
        "type": "string",
        // ID that identifies the credential
        "id": "string",
        // optional list of transports that are supported by the credential (used only for WebAuthn)
        "transports": "string"
      }
    ]
  }
}
```
{% endtab %}
{% endtabs %}

### Example

```json
{
  "supportedCredentialKinds": [
    {
      "kind": "Fido2",
      "factor": "first",
      "requiresSecondFactor": true
    }
  ],
  "challenge": "MWM0MmY5YTQ0MDRiNzdhNTFhNzY5ODQwNWI5ZTQ4Y2RhODZiNDk3ZTYzOTE5OGYyMDcxZjBjYzk4MmQ5YzY1MA",
  "challengeIdentifier": "eyJ0e...fQNA",
  "allowCredentials": {
    "key":[],
    "webauthn": [
      {
        "type": "public-key",
        "id": "c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8"
      }
    ],
    "passwordProtectedKey": [
      {
        "type": "public-key",
        "id": "hIjkx5PqVxz8wbtuvOh2UYHEY1QXS8mMfKeEDGt-0Fo=",
        "encryptedPrivateKey": "LsXVskHYqqrKKxBC9KvqStLEmxak5Y7NaboDDlRSIW7evUJpQTT1AYvx0EsFskmriaVb3AjTCGEv7gqUKokml1USL7+dVmrUVhV+cNWtS5AorvRuZr1FMGVKFkW1pKJhFNH2e2O661UhpyXsRXzcmksA7ZN/V37ZK7ITue0gs6I="
      }
    ]
  }
}
```
