# DelegatedLogin

`POST /auth/login/delegated`

Logs a user into an organization without the user's credentials.

For customers that want to use their own authentication system, while still taking advantage of Dfns' User Action Signing, customers can use `Delegated Authentication` to authenticate a user without needing the user's credentials. This call is only callable by a `Service Account` registered in the organization, and the action needs to be signed by the `Service Account`. On successful login, the user's authentication token will be returned.

The user authentication token can be used for read operations within the Dfns API, however, write operations will still require the user to sign the action

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### User Action Signature Request Body <a href="#user-action-signature" id="user-action-signature"></a>

* `USER_ID` is the ID of the user being logged in

```json
{
  "userActionPayload": "{\"userId\":\"<USER_ID>\"}",
  "userActionHttpPath": "/auth/login/delegated",
  "userActionHttpMethod": "POST"
}
```

#### Signing Request example <a href="#signing-requsst-example" id="signing-requsst-example"></a>

```json
{
  "userActionPayload": "{\"userId\":\"e78e2512-d9f3-438c-bd51-ba31fea7c0e1\"}",
  "userActionHttpPath": "/auth/login/delegated",
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
| `userId` | Required | The globally unique ID that identifies the user in the Dfns API | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X POST "/auth/login/delegated" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-d '{ "userId": "e78e2512-d9f3-438c-bd51-ba31fea7c0e1" }'
```

### Response <a href="#response" id="response"></a>

* `token` the user's authentication token

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "token": "eyJ0eX...bzrQakA"
}
```

### Notes <a href="#notes" id="notes"></a>

