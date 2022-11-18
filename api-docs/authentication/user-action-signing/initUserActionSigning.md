# InitUserActionSigning

`POST /auth/action/init`

Starts a user action signing session, returning a challenge that will be used to verify the user's intent to perform an action.

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name                | Required/Optional | Description                                                                                                                                                                                                                                                                   |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X-DFNS-NONCE        | Required          | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: A globally unique value. <br>datetime: The current time of the request in ISO String format, used to expire requests after a period of time.</p> |
| X-DFNS-APPID        | Required          | ID of the application that was created in the Dfns dashboard                                                                                                                                                                                                                  |
| X-DFNS-APPSECRET    | Optional          | Secret associated with the application. Required for server-side application configurations.                                                                                                                                                                                  |
| X-DFNS-APISIGNATURE | Optional          | Signature for the API request. Required for server-side application configurations.                                                                                                                                                                                           |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                            | Type   |
| ------------------- | ----------------- | -------------------------------------- | ------ |
| `userAction`        | Required          | The action that the user is performing | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request (Client-Side Application) <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X POST "/auth/action/init" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authorization: Bearer <UserAuthToken>" \
-d '{"userAction": "Create ServiceAccount (ExampleCoUserManagement)."}'
```

### Response <a href="#response" id="response"></a>

* `kind` identifies the kind of credential in use (FIDO2, Key, or Password)
* `challenge` is a random value used to uniquely identify the request. For FIDO2 and Key, this value will be included in the data that is signed and sent to the matching [CompleteUserActionSigning](./completeUserActionSigning.md) call
* `challengeIdentifier` is a temporary authentication token that is used to identify this signing session with the matching call to [CompleteUserActionSigning](./completeUserActionSigning.md)
* `authenticationCode` is a secret value that can be used to enable cross device signing
* `allowCredentials` is a list of credentials that the user can use to authenticate to the Dfns API. For FIDO2, this list will be passed to the user's WebAuthn client

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "kind": "FIDO2",
    "challenge": "38af6e3e-5d91-4e84-953e-e6dc672f2b5e",
    "challengeIdentifier": "eyJ0eXAiOiJKV1Q...X1bwCg35kbzsjA",
    "authenticationCode": "YIbrSkqr3WnWzZ1TeqCoQgIg_qw",
    "allowCredentials": [
        {
            "type": "public-key",
            "id": "dV9U2F...DO3dTlr",
            "transports": [
                "usb",
                "nfc",
                "ble",
                "internal"
            ]
        }
    ]
}
```

### Notes <a href="#notes" id="notes"></a>

