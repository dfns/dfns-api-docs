# List User Credentials

`GET /auth/credentials`

Lists all credentials for a user.

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name | Required | Description |
| ---- | -------- | ----------- |
| X-DFNS-NONCE | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID | Required | ID of the application that was created in the Dfns dashboard |
| X-DFNS-APPSECRET | Optional | Secret associated with the application. Required for server-side application configurations. |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations. |
| Authorization | Required | `token` returned from the [Create User Login](../login/completeLogin.md) call, in Bearer format. |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl "/auth/credentials" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>"
```

### Response <a href="#response" id="response"></a>

A list of credentials that are registered for the user. Each item in the list has the following fields:
* `credentialId` is a device unique ID that identifies the new credential to the authenticator device
* `credentialUuid` is a globally unique ID that identifies the new credential in the Dfns API
* `dateCreated` the date and time, in ISO format, that the credential was created
* `isActive` a boolean indicating if the credential is active. Will always be true
* `kind` a `CredentialKind` value that identifies the type of credential that was created
* `name` the name the user gave to the credential
* `publicKey` is an optional value containing the SHA-256 fingerprint of the public key associated to the credential
* `relyingPartyId` the relying party for which the credential was registered. For `Fido2` credentials this is the only relying party that can use the credential. It must be a base domain of origin
* `origin` the origin for which the credential was registered. For `Fido2` credentials this is the only origin where the credential can be used

#### Response example <a href="#response-example" id="response-example"></a>

```json

{
    "items": [
        {
          "credentialId": "DmoTYXPDdsrWIL7IgTQ3AahOMe4",
          "credentialUuid": "9db396af-47a8-4466-ae89-6ef47626b361",
          "dateCreated": "2023-01-11T19:05:06.773Z",
          "isActive": true,
          "kind": "Fido2",
          "name": "My Yubikey",
          "publicKey": "SHA256:E2a3ZQEb4...rPqc",
          "relyingPartyId": "dfns.io",
          "origin": "https://dashboard.dfns.io"
        },
        ...
    ]
}
```

### Notes <a href="#notes" id="notes"></a>

