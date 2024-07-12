# Delegated Registration

`POST /auth/registration/delegated`

If you want to use your own authentication system, while still using `Delegated Signing`, you can use this endpoint to register a new User in your organization, without your user needing to receive an email from Dfns.

This endpoint will:

1. Create a new User attached to your organization
2. Initiates a User Registration Challenge and returns the registration challenge.

On successful creation, the user's registration challenge will be returned. You will then need to call [completeUserRegistration.md](../registration/completeUserRegistration.md "mention") to complete the user's registration.

{% hint style="info" %}
* Service account required. See [Service Accounts](../service-account-management/) for more information.
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Users:Create`   | Always Required                   |
| `Auth:Users:Delegate` | Always Required                   |
| `Auth:Types:Employee` | When `kind` is `CustomerEmployee` |
| `Auth:Types:EndUser`  | When `kind` is `EndUser`          |

## Request body

|                                            |          |                                                                                                                          |
| ------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| `email` <mark style="color:red;">\*</mark> | `String` | email of the user being created                                                                                          |
| `kind` <mark style="color:red;">\*</mark>  | `String` | <p>kind of user being created. Can be one of the following:<br><code>EndUser</code><br><code>CustomerEmployee</code></p> |

### Example:

```json
{
  "email": "jdoe@example.co",
  "kind": "EndUser"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Delegated Authentication Errors](../../../getting-started/errors.md#delegated-authentication-errors) for delegated authentication specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - an object containing the user's authentication options

The `"challenge"` is the value that needs to be sent to the user to be signed in order to [completeUserRegistration.md](../registration/completeUserRegistration.md "mention")

Format:

```json
{
  // Relying Party information that identifies the application to the user
  "rp": {
    // the domain of the server that is requesting the credential. This must match the effective domain of the application communicating with the user's WebAuthn client
    "id": "string",
    // a user friendly name to help identify the server requesting the credential
    "name": "string",
  },
  // identifies the user that is being logged into the Dfns API
  "user": {
    // id that ties the user to the credential created in the user's WebAuthn client
    "id": "string",
    // additional value that will be displayed to the user on the WebAuthn client's display
    "name": "string",
    // name that will be displayed to the user on the WebAuthn client's display
    "displayName": "string"
  },
  // temporary authentication token that is used to identify the registration session with the matching call to Complete User Registration
  "temporaryAuthenticationToken": "string",
  // list of the kinds of credentials that the user can use when registering
  "supportedCredentialKinds": {
    // list of the credential kinds that are supported as a first factor credential
    "firstFactor": ["string"],
    // list of the credential kinds that are supported as a second factor credential
    "secondFactor": ["string"]
  },
  // random value used to uniquely identify the request. This value will be included in the data that is signed
  "challenge": "string",
  // list of objects that identify the signing algorithms that are supported
  "pubKeyCredParam": [
    {
      // will always be `public-key`
      "type": "public-key",
      // an integer that identifies a signing algorithm. Can be either `-7` for ES256 or `-257` for RS256
      "alg": "number"
    },
  ],
  // identifies the information needed to verify the user's signing certificate; can be one of the following:
  // * none: indicates no attestation data is required
  // * indirect: indicates the attestation data should be given, but that it can be generated using an Anonymization CA
  // * direct: indicates the attestation data must be given and should be generated by the authenticator
  // * enterprise: indicates the attestation data should include information to uniquely identify the user's device
  "attestation": "string",
  // a list of objects that identify credentials that the user's WebAuthn client should not use
  "excludeCredentials": [
    {
      // will always be `public-key`
      "type": "public-key",
      // ID that can identify the credential on the authenticator
      "id": "string",
      // types of transports that are not allowed. Can be one of the following:
      // * usb for usb support
      // * nfc for near field communication (NFC) support
      // * ble for bluetooth support
      // * internal for non-removable authenticators
      // * hybrid for multiple transport methods
      "transports": "string"
    }
  ],
  // identifies the criteria that the user's WebAuthn client should use when creating the credential
  "authenticatorSelection": {
    // optional value indicating the type of authenticators that are supported. If not set then the authenticator type is not restricted. Can be one of the following:
    // * platform for requiring the authenticator be tied to the users device (like a TPM)
    // * cross-platform for the authenticator to be an external device (like a Yubikey)
    "authenticatorAttachment": "string",
    // value indicating whether or not the authenticator should use resident keys. Can be one of the following:
    // * discouraged to indicate the authenticator should not use a resident key unless its the only option
    // * preferred to indicate the authenticator should try to use a resident key if supported
    // * required to indicate the authenticator must use a resident key
    "residentKey": "required",
    // value indicating if the authenticator needs to support resident keys
    "requireResidentKey": "boolean",
    // value indicating if the user should be prompted for a second factor. Can be one of the following values:
    // * required to indicate the user must be prompted for their pin, biometrics, or another second factor option
    // * preferred to indicate the user should be prompted for a second factor if it is supported
    // * discouraged to indicate the user should not be prompted for their second factor unless the device requires it
    "userVerification": "required"
  }
}
```
{% endtab %}
{% endtabs %}

### Examples

```json
// In this example the challenge "MmE5YzRmMzMwY2NlNGUyMjhjZWYzMzlhZDBhZmIxNzk"
// needs to be sent to the user for signature to complete the registration
{
  "rp": {
    "id": "dfns.io",
    "name": "Dfns",
  },
  "user": {
    "id": "us-2ba0h-lvp2q-8v1860pcj1bh5irf",
    "name": "jane@example.co",
    "displayName": "jane@example.co"
  },
  "temporaryAuthenticationToken": "eyJ0eXAiOiJKV1Q...X1bwCg35kbzsjA",
  "supportedCredentialKinds": {
    "firstFactor": ["Fido2","Key", "PasswordProtectedKey"],
    "secondFactor": ["Fido2","Key", "PasswordProtectedKey"]
  },
  "challenge": "MmE5YzRmMzMwY2NlNGUyMjhjZWYzMzlhZDBhZmIxNzk",
  "pubKeyCredParam": [
    {
      "type": "public-key",
      "alg": -7
    },
    {
      "type": "public-key",
      "alg": -257
    }
  ],
  "attestation": "direct",
  "excludeCredentials": [],
  "authenticatorSelection": {
    "residentKey": "required",
    "requireResidentKey": true,
    "userVerification": "required"
  }
}
```
