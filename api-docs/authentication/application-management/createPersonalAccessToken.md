# Create Personal Access Token

`POST /auth/manage/apps`

Creates a personal access token used to automate calling the Dfns API as the creating user

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### User Action Signature Request Body (Personal Access Token) <a href="#user-action-signature" id="user-action-signature"></a>

```json
{
  "userActionPayload": "{\"appName\":\"<NAME>\",\"scopes\":[<SCOPES>],\"permissions\":[<PERMISSIONS>],\"kind\":\"Pat\",\"publicKey\":\"<PEM_ENCODED_PUBLIC_KEY>\"}",
  "userActionHttpPath": "/auth/manage/apps",
  "userActionHttpMethod": "POST"
},
```

#### Signing Request example <a href="#signing-request-example" id="signing-request-example"></a>

```json
{
  "userActionPayload": "{\"appName\":\"ExampleAccessToken\",\"scopes\":[\"auth\"],\"permissions\":[],\"kind\":\"Pat\",\"publicKey\":\"-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA1Sp68YV5huutMKOIYmCczWL0rVvvYITO9sYUtkixSZJLLz0eLInN\n5JJkNbYrpSffwc56826g6geBtTYbsCe+eIPTkx2xZNTTSN3JdQthi7qi7CxgsnWe\nGPZUWwjhj4RHfvJ2ZcFOuIjgNV09gkebM6wYoNPgBMWEJI9UzzjtJ8c/5ogbAd52\nNHy02LAUMUFiIpud0SqXJekr8sl9+N6dhZqi/Fts/yK5TU2aOPjKYVKawEXrAce5\nKYs/tqXEtXLRGN7pQZFSPC4sKkn8BPQqLyq7GwHjYWBeE0YLY4muMMgRlMhLEK3D\nrZwgdabn77gCRmhNbiLxj+Ocxys41r3a6QIDAQAB\n-----END RSA PUBLIC KEY-----\n\"}",
  "userActionHttpPath": "/auth/manage/apps",
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
| Authorization | Required | `token` returned from the [Create User Login](../login/completeLogin.md) call, in Bearer format. |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description | Type |
| ------------------- | ----------------- | ----------- | ---- |
| `name` | Required | The user provided name that is used to easily identify the application | String |
| `kind` | Required | The kind of application being created. Can be `Application` for a client-side or server-side application, or `ServiceAccount` for an automation account not tied to a user, or `Pat` for a personal access token used to automate calling the Dfns API as a specific user | String |
| `publicKey` | Optional | The public key, in PEM format, that can be used to verify data signed by the application's private key. Required for server-side applications, service accounts, and PATs | String |
| `scopes` | Required | A list of scopes to assign to the application | String |
| `permissions` | Required | A list of permissions to assign to the application | String |
| `appKind` | Required |  | String |
| `expectedRpId` | Required |  | String |
| `expectedOrigin` | Required |  | String |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
appName='ExampleCoUserManagement'
publicKey="-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA1Sp68YV5huutMKOIYmCczWL0rVvvYITO9sYUtkixSZJLLz0eLInN\n5JJkNbYrpSffwc56826g6geBtTYbsCe+eIPTkx2xZNTTSN3JdQthi7qi7CxgsnWe\nGPZUWwjhj4RHfvJ2ZcFOuIjgNV09gkebM6wYoNPgBMWEJI9UzzjtJ8c/5ogbAd52\nNHy02LAUMUFiIpud0SqXJekr8sl9+N6dhZqi/Fts/yK5TU2aOPjKYVKawEXrAce5\nKYs/tqXEtXLRGN7pQZFSPC4sKkn8BPQqLyq7GwHjYWBeE0YLY4muMMgRlMhLEK3D\nrZwgdabn77gCRmhNbiLxj+Ocxys41r3a6QIDAQAB\n-----END RSA PUBLIC KEY-----\n"
kind='ServiceAccount'
scopes='["auth"]'
permissions='[]'
curl -X POST "/auth/manage/apps" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d "{\"name\":\"$appName\", \"kind\":\"$kind\", \"publicKey\":\"$publicKey\", \"scopes\":$scopes, \"permissions\":$permissions }"
```

### Response <a href="#response" id="response"></a>

* `appId` is the globally unique ID that indentifies the applicaiton in the Dfns API. When kind was set to `Application`, this will be passed in the X-DFNS-APPID header to Dfns API calls
* `appToken` is the application secret that will be used to authenticate as the application. When kind was set to `Application`, this will be passed in the X-DFNS-APPSECRET header to Dfns API calls. When kind was set to `ServiceAccount` or `PAT`, this will be passed in the Authorization header in place of a user's authentication token. For client-side applications this field will not be set

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "appId": "a6a47c9c-6f84-4af5-8e7a-30118cccdda4",
    "appToken": "ey30caB...10cdQf"
}
```

### Notes <a href="#notes" id="notes"></a>

