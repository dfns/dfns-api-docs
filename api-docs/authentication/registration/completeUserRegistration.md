# Create User Registration

`POST /auth/registration`

Completes the registration process.

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name | Required | Description |
| ---- | -------- | ----------- |
| X-DFNS-NONCE | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID | Required | ID of the application that was created in the Dfns dashboard |
| X-DFNS-APPSECRET | Optional | Secret associated with the application. Required for server-side application configurations. |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations. |
| Authorization | Required | `temporaryAuthenticationToken` returned from the [InitRegistration](initRegistration) call in Bearer format. |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description | Type |
| ------------------- | ----------------- | ----------- | ---- |
| `firstFactorCredential` | Required | An object that describes the first factor credential that the user is registering | [RegistrationFirstFactor](#registration-first-factor) |
| `secondFactorCredential` | Optional | An object that describes the second factor credential that the user is registering | [RegistrationSecondFactor](#registration-second-factor) |

#### RegistrationFirstFactor <a href="#registration-first-factor" id="registration-first-factor"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `credentialKind` | Required | The kind of credential being registered | String |
| `credentialInfo` | Required | An object containing information about the credential being registered | <p> `credentialKind === Password`: [PasswordCredentialInformation](#password-credential-information)<br /><br />`credentialKind === Key or Fido2`: [CredentialAssertion](#credential-assertion)</p> |

#### RegistrationSecondFactor <a href="#registration-second-factor" id="registration-second-factor"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `credentialKind` | Required | The kind of credential being registered | String |
| `credentialInfo` | Required | An object containing information about the credential being registered | <p> `credentialKind === Totp`: [TotpCredentialInformation](#totp-credential-information)<br /><br />`credentialKind === Key or Fido2`: [CredentialAssertion](#credential-assertion)</p> |

#### CredentialAssertion <a href="#credential-assertion" id="credential-assertion"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `credId` | Required | The base64url encoded id of the credential | String |
| `clientData` | Required | The base64url encoded client data object. The underlying object is either the clientData object returned by the user's WebAuthn client, or a [KeyClientData](#key-client-data) JSON string object | String |
| `attestationData` | Optional | The base64url encoded attestation data object. The underlying object is either the attestationData object returned by the user's WebAuthn client, or a [KeyAttestationData](#key-attestation-data) JSON string object | String |

#### KeyClientData <a href="#key-client-data" id="key-client-data"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `type` | Required | A string identifying the kind of client data this object represents. For registration, this must be set to `key.create` | String |
| `challenge` | Required | The challenge returned by the [InitRegistration](./initUserRegistration.md) call | String |
| `origin` | Required | The origin in which the request was signed. This should match the origin you configured for your Dfns Application. For example, Dfns Dashboard logins would set this to `https://dashboard.dfns.io` | String |
| `crossOrigin` | Optional | A flag indicating if the request was signed for a cross-origin request | Boolean |

### KeyAttestationData <a href="key-attestation-data" id="key-attestation-data"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `publicKey` | Required | A PEM encoded public key that can be used to verify the signature for the credential | String |
| `signature` | Required | The signature produced by signing clientData with the credentials private key, using the algorithm specified in `algorithm`. Needs to be encoded as a hex string | String |
| `algorithm` | Optional | <p>The algorithm/digest that the credential will use to sign data. If the algoritm is not specified the algorithm will be determined by the key. Can be one of the following choices:<br />`RSA-SHA256`<br />`SHA256`<br />`SHA512`</p> | String |

### PasswordCredentialInformation <a href="password-credential-information" id="password-credential-information"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `password` | Required | The user's provided password | String |

### TotpCredentialInformation <a href="totp-credential-information" id="totp-credential-information"></a>

| Fields | Required/Optional | Description | Type |
| ------ | ----------------- | ----------- | ---- |
| `otpCode` | Required | The 6 digit code generated by the user's Authenticator device. | String |


##### Typescript example using a browser's builtin WebAuthn client to request user registration and generate the CompleteRegistration RequestBody

```typescript
const credential: PublicKeyCredential = await navigator.credentials.create({
  publicKey: {
    challenge: Buffer.from(authOptions.challenge),
    rp: {
      id: authOptions.rp.id,
      name: authOptions.rp.name
    },
    user: {
      id: Buffer.from(authOptions.user.id),
      name: authOptions.user.name,
      displayName: authOptions.user.displayName
    },
    pubKeyCredParams: authOptions.pubKeyCredParams,
    timeout: 60000,
    excludeCredentials: [],
    authenticatorSelection: {
      requireResidentKey: authOptions.authenticatorSelection.requireResidentKey,
      userVerification: authOptions.authenticatorSelection.userVerification as UserVerificationRequirement
    },
    attestation: authOptions.attestation,
  }
}) as PublicKeyCredential

const response = credential.response as AuthenticatorAttestationResponse
const completeRegistrationRequestBody = {
  credentialType: CredentialType.Fido2,
  credentialInfo: {
    attestationData: arrayBufferToBase64UrlString(response.attestationObject),
    credId: credential.id,
    clientData: arrayBufferToBase64UrlString(response.clientDataJSON),
  },
}
```

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X POST "/auth/registration" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authorization: Bearer e3Vd12...9bW3a10" \
-d '{
  "kind": "Fido2",
  "credentialInfo": {
    "credId": "dV9U2F...DO3dTlr",
    "clientData": "eyJ0eXBlIjoid2ViY...OfeSY",
    "attestationData": "ZTVmM2...WVlMmE0"
  }
}'
```

### Response <a href="#response" id="response"></a>

* `credential` is an object containing the following fields
  * `uuid` is a globally unique ID that identifies the user's credential in the Dfns APIs
  * `kind` is the kind of credential the user registered
  * `name` is the name the user provided for this credential
* `user` is an object containing the following fields
  * `id` is the globally unique ID that identifies the user in the Dfns APIs
  * `username` is the registered user's email address
  * `orgId` is the globally unique ID of the org in which the user was registered

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "credential": {
        "uuid": "9db396af-47a8-4466-ae89-6ef47626b361",
        "kind": "Fido2",
        "name": ""
    },
    "user": {
        "id": "1eb4abc9-11ad-46fa-b591-a7f094df6f07",
        "username": "bob@example.com",
        "orgId": "82003306-583d-46e0-adfc-3d144b8971fd"
    }
}
```

### Notes <a href="#notes" id="notes"></a>

