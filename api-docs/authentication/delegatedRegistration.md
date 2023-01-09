# DelegatedRegistration

`POST /auth/registration/delegated`

Creates and registers a user in the caller's organization.

For customers that want to use their own authentication system, while still taking advantage of Dfns' User Action Signing, customers can use `Delegated Registration` to register a user in the Dfns API without the user needing to receive an email from Dfns. This call is only callable by a `Service Account` registered in the organization, and the action needs to be signed by the `Service Account`. On successful creation, the user's registartion challenge will be returned.

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### User Action Signature Request Body <a href="#user-action-signature" id="user-action-signature"></a>

* `USER_KIND` is the kind of user being created. Can be `EndUser` for an application user or `CustomerEmployee` for an employee of Dfns customer that owns the caller's organization
* `EMAIL` is the email address of the user being created. This is not required to be a valid email address, it just needs to be a unique value for the organization
* `SCOPES` is the list of scopes that will be assigned to the user
* `PERMISSIONS` is the list of permissions that will be assigned to the user

```json
{
  "userActionPayload": "{\"email\":\"<EMAIL>\",\"kind\":\"<USER_KIND>\",\"scopes\":[<SCOPES>],\"permissions\":[<PERMISSIONS>]}",
  "userActionHttpPath": "/auth/registration/delegated",
  "userActionHttpMethod": "POST"
}
```

#### Signing Request example <a href="#signing-requsst-example" id="signing-requsst-example"></a>

```json
{
  "userActionPayload": "{\"email\":\"jane@example.co\",\"kind\":\"CustomerEmployee\",\"scopes\":[\"auth:users:read\"],\"permissions\":[]}",
  "userActionHttpPath": "/auth/registration/delegated",
  "userActionHttpMethod": "POST"
}
```

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name | Required | Description |
| ---- | -------- | ----------- |
| X-DFNS-NONCE | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID | Required | ID of the application that was created in the Dfns dashboard |
| X-DFNS-APPSECRET | Optional | Secret associated with the application. Required for server-side application configurations. |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations. |
| X-DFNS-USERACTION | Required | The user action signing token returned by the previous call to [CompleteUserActionSigning](../user-action-signing/completeUserActionSigning.md) |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description | Type |
| ------------------- | ----------------- | ----------- | ---- |
| `email` | Required | The email of the user being created | String |
| `kind` | Required | The kind of user being created. Can be `EndUser` for an application user or `CustomerEmployee` for an employee of Dfns customer that owns the caller's organization | String |
| `publicKey` | Optional | The user's GPG public key used to encrypt the registration email | String |
| `scopes` | Required | A list of scopes to assign to the user | String |
| `permissions` | Required | A list of permissions to assign to the user | String |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
userEmail='jane@example.co'
kind='CustomerEmployee'
scopes='["auth:users:read"]'
permissions='[]'
curl -X POST "/auth/manage/users" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <SERVICE_ACCOUNT_API_KEY>" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d "{\"email\":\"$userEmail\", \"kind\":\"$kind\", \"scopes\":$scopes, \"permissions\":$permissions }"
```

### Response <a href="#response" id="response"></a>

* `rp` is a [RelyingParty](#relying-party) object that identifies the application to the user
* `user` is a [UserIdentifier](#user-identifier) object that identifies the user that is being logged into the Dfns API
* `temporaryAuthenticationToken` is a temporary authentication token that is used to identify the registration session with the matching call to [Create User Registration](./completeUserRegistration.md)
* `supportedCredentialKinds` is a [SupportedCredentialKinds](#supported-credential-kinds) object that contains the list of the kinds of credentials that the user can use when registering
* `challenge` is a random value used to uniquely identify the request. For Fido2 and Key, this value will be included in the data that is signed and sent to the matching [Create User Registration](./completeUserRegistration.md) call
* `pubKeyCredParam` is a list of [PublicKeyCredParam](#public-key-params) objects that identify the signing algorithms that are supported
* `attestation` one of the [attestation](#attestation) types that identifies the information needed to verify the user's signing certificate
* Additional fields when `kind` is `Fido2`
* `excludeCredentials` is a list of [PublicKeyCred](#public-key-cred) objects that identify credentials that the user's WebAuthn client should not use
* `authenticatorSelection` is a [AuthenticatorSelection](#authenticator-selection) object that identifies the criteria that the user's WebAuthn client should use when creating the credential
* `otpUrl` is the authenticator URL that contains the information needed to setup an authenticator for providing TOTP codes for a second factor authentication

#### RelyingParty <a href="#relying-party" id="relying-party"></a>

* `id` is the domain of the server that is requesting the credential. This must match the effective domain of the application communicating with the user's WebAuthn client
* `name` is a user friendly name to help identify the server requesting the credential

#### UserIdentifier <a href="#user-identifier" id="user-identifier"></a>

* `id` is an id that ties the user to the credential created in the user's WebAuthn client 
* `displayName` is the name that will be displayed to the user on the WebAuthn client's display
* `name` is an additional value that will be displayed to the user on the WebAuthn client's display

#### SupportedCredentialKinds <a href="#supported-credential-kinds" id="supported-credential-kinds"></a>
* `firstFactor` a list of the credential kinds that are supported as a first factor credential
* `secondFactor` a list of the credential kinds that are supported as a second factor credential

#### PublicKeyCredParam <a href="#public-key-params" id="public-key-params"></a>

* `type` will always be `public-key`
* `alg` is an integer that identifies a signing algorithm. Can be either `-7` for ES256 or `-257` for RS256 

#### Attestation <a href="#attestation" id="attestation"></a>

* `none` indicates no attestation data is required
* `indirect` indicates the attestation data should be given, but that it can be generated using an Anonymization CA
* `direct` indicates the attestation data must be given and should be generated by the authenticator
* `enterprise` indicates the attestation data should include information to uniquely identify the user's device

#### PublicKeyCred <a href="#public-key-cred" id="public-key-cred"></a>

* `type` will always be `public-key`
* `id` is the ID that can identify the credential on the authenticator
* `transports` indicates the types of transports that are allowed/not allowed. Can be one of the following:
  * `usb` for usb support
  * `nfc` for near field communication (NFC) support
  * `ble` for bluetooth support
  * `internal` for non-removable authenticators

#### AuthenticatorSelection <a href="#authenticator-selection" id="authenticator-selection"></a>

* `authenticatorAttachment` is an optional value indicating the type of authenticators that are supported. If not set then the authenticator type is not restricted. Can be one of the following
  * `platform` for requiring the authenticator be tied to the users device (like a TPM)
  * `cross-platform` for the authenticator to be an external device (like a Yubikey)
* `residentKey` is a value indicating whether or not the authenticator should use resident keys. Can be one of the following:
  * `discouraged` to indicate the authenticator should not use a resident key unless its the only option
  * `preferred` to indicate the authenticator should try to use a resident key if supported
  * `required` to indicate the authenticator must use a resident key
* `requireResidentKey` a boolean value indicating if the authenticator needs to support resident keys
* `userVerification` is a value indicating if the user should be prompted for a second factor. Can be one of the following values:
  * `required` to indicate the user must be prompted for their pin, biometrics, or another second factor option
  * `preferred` to indicate the user should be prompted for a second factor if it is supported.
  * `discouraged` to indicate the user should not be prompted for their second factor unless the device requires it

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "rp": {
    "id": "dfns.io",
    "name": "Dfns",
  },
  "user": {
    "id": "4ace3f62-aa38-4583-a622-253cecddb347",
    "name": "jane@example.co",
    "displayName": "jane@example.co"
  },
  "temporaryAuthenticationToken": "eyJ0eXAiOiJKV1Q...X1bwCg35kbzsjA",
  "supportedCredentialKinds": {
    "firstFactor": ["Fido2", "Key", "Password"],
    "secondFactor": ["Fido2", "Key", "Totp"]
  },
  "challenge": "38af6e3e-5d91-4e84-953e-e6dc672f2b5e",
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
  },
  "otpUrl": "otpauth://totp/dfns:jane@example.co?secret=JBSWY3DPEHPK3PXP&issuer=Dfns",
}
```
```

### Notes <a href="#notes" id="notes"></a>

