# Create User Registration Challenge

`POST /auth/registration/init`

Starts a user registration session, returning a challenge that will be used to verify the user's identity.

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name | Required/Optional | Description |
| ---- | ----------------- | ------------
| X-DFNS-NONCE | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: A globally unique value. <br>datetime: The current time of the request in ISO String format, used to expire requests after a period of time.</p> |
| X-DFNS-APPID | Required | ID of the application that was created in the Dfns dashboard |
| X-DFNS-APPSECRET | Optional | Secret associated with the application. Required for server-side application configurations. |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations. |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description | Type |
| ------------------- | ----------------- | ----------- | ---- |
| `username` | Required | Email address of the user | String |
| `registrationCode` | Required | The secret value that the user received in their registration email | String |
| `orgId` | Required | ID of the target Org | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request (Client-Side Application) <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X POST "/auth/registration/init" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-d '{"username": "bob@example.co", "orgId": "example-org-id", "registrationCode": "a6f...91b3"}'
```

#### Sample request (Server-Side Application) <a href="#sample-request" id="sample-request"></a>

```bash
appSecret="<APP_KEY>"
appId="495C1CF8-673A-499C-A1F7-CFD32B60E726"
payload='{"username": "bob@example.co", "orgId": "example-org-id", "registrationCode": "a6f...91b3"}'
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo -n "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
signatureJwtHeader='{"alg":"RS256","typ":"JWT"}'
signatureJwtPayload="{"\
"\"h-accept\":\"application/json\","\
"\"h-accept-encoding\":\"\","\
"\"h-authorization\":\"\","\
"\"h-connection\":\"\","\
"\"h-content-length\":\"$(echo -n $(echo -n $payload | wc -c))\","\
"\"h-content-type\":\"application/json\","\
"\"h-host\":\"api.dfns.io\","\
"\"h-user-agent\":\"\","\
"\"h-x-dfns-appid\":\"$appId\","\
"\"h-x-dfns-appsecret\":\"$appSecret\","\
"\"h-x-dfns-nonce\":\"$nonce\","\
"\"h-x-dfns-useraction\":\"\","\
"\"r-authority\":\"api.dfns.io\","\
"\"r-body\":\"$( echo -n $payload | base64 | tr '/+' '_-' | tr -d '=')\","\
"\"r-method\":\"post\","\
"\"r-path\":\"/auth/registration/init\","\
"\"r-scheme\":\"https\""\
"}"
jwtToSign=$( echo -n "$(echo -n $signatureJwtHeader | base64 | tr '/+' '_-' | tr -d '=').$(echo -n $signatureJwtPayload | base64 | tr '/+' '_-' | tr -d '=')" )
signature=$( echo -n $jwtToSign | openssl dgst -sha256 -sign example.pem | base64 | tr '/+' '_-' | tr -d '=')
curl -X POST "/auth/registration/init" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $appId" \
-H "X-DFNS-APPSECRET: $appSecret" \
-H "X-DFNS-APISIGNATURE: $signature" \
-d $payload
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
    "name": "bob@example.co",
    "displayName": "bob@example.co"
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
  "otpUrl": "otpauth://totp/dfns:bob@example.co?secret=JBSWY3DPEHPK3PXP&issuer=Dfns",
}
```

### Notes <a href="#notes" id="notes"></a>

