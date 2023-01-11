# Create User Login Challenge

`POST /auth/login/init`

Starts a user login session, returning a challenge that will be used to verify the user's identity.

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name | Required/Optional | Description |
| ---- | ----------------- | ----------- |
| X-DFNS-NONCE | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: A globally unique value. <br>datetime: The current time of the request in ISO String format, used to expire requests after a period of time.</p> |
| X-DFNS-APPID | Required | ID of the application that was created in the Dfns dashboard |
| X-DFNS-APPSECRET | Optional | Secret associated with the application. Required for server-side application configurations. |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations. |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description               | Type   |
| ------------------- | ----------------- | ------------------------- | ------ |
| `username`          | Required          | Email address of the user | String |
| `orgId`             | Required          | ID of the target Org      | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request (Client-Side Application) <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X POST "/auth/login/init" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-d '{"username": "bob@example.co", "orgId": "example-org-id"}'
```

#### Sample request (Server-Side Application) <a href="#sample-request" id="sample-request"></a>

```bash
appSecret="<APP_KEY>"
appId="495C1CF8-673A-499C-A1F7-CFD32B60E726"
payload='{"username": "bob@example.co","orgId": "example-org-id"}'
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
"\"r-path\":\"/auth/login/init\","\
"\"r-scheme\":\"https\""\
"}"
jwtToSign=$( echo -n "$(echo -n $signatureJwtHeader | base64 | tr '/+' '_-' | tr -d '=').$(echo -n $signatureJwtPayload | base64 | tr '/+' '_-' | tr -d '=')" )
signature=$( echo -n $jwtToSign | openssl dgst -sha256 -sign example.pem | base64 | tr '/+' '_-' | tr -d '=')
curl -X POST "/auth/login/init" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: $appId" \
-H "X-DFNS-APPSECRET: $appSecret" \
-H "X-DFNS-APISIGNATURE: $signature" \
-d $payload
```

### Response <a href="#response" id="response"></a>

* `supportedCredentialKinds` identifies the kind of credentials that can be used to authenticate the user
    * `kind` is the kind of credential
    * `factor` is the factor for which the credential can be used
        * `first` if the credential can be used as a first factor
        * `second` if the credential can be used as a second factor
        * `either` if the credential can be used for either first or second factor
    * `requiresSecondFactor` when true indicates a second factor credential is required if the credential is used as a first factor
* `challenge` is a random value used to uniquely identify the request. For Fido2 and Key, this value will be included in the data that is signed and sent to the matching /auth/login call
* `challengeIdentifier` is a temporary authentication token that is used to identify this login session with the matching call to [CreateUserLogin](./completeLogin.md)
* `externalAuthenticationUrl` is a url containing a secret value that can be used to enable cross device/origin login
* `allowCredentials` is a list of credentials that the user can use to authenticate to the Dfns API
    * `key` is the list of keys that the user can use to authenticate to the Dfns API
    * `webauthn` is the list of WebAuthn credentials that can be used to authenticate to the Dfns API

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "supportedCredentialKinds": [
        {
            "kind": "fido2",
            "factor": "either",
            "requiresSecondFactor": false
        },
        {
            "kind": "key",
            "factor": "either",
            "requiresSecondFactor": false
        },
        {
            "kind": "totp",
            "factor": "second",
            "requiresSecondFactor": false
        },
        {
            "kind": "password",
            "factor": "first",
            "requiresSecondFactor": true
        },
    ],
    "challenge": "38af6e3e-5d91-4e84-953e-e6dc672f2b5e",
    "challengeIdentifier": "eyJ0eXAiOiJKV1Q...X1bwCg35kbzsjA",
    "externalAuthenticationUrl": "https://dashboard.dfns.io/login?code=YIbrSkqr3WnWzZ1TeqCoQgIg_qw",
    "allowCredentials": {
        "key": [
            {
                "type": "public-key",
                "id": "rTdE3...M92Dva"
            }
        ],
        "webauthn": [
            {
                "type": "public-key",
                "id": "dV9U2F...DO3dTlr"
            }
        ]
    }
}
```

### Notes <a href="#notes" id="notes"></a>

