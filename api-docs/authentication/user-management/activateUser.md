# ActivateUser

`PUT /auth/manage/users/activate`

Activates a user that was previously deactivated. If the user is already activated no action is taken

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### User Action Signature Request Body <a href="#user-action-signature" id="user-action-signature"></a>

* `USER_ID` is the ID of the user being activated

```json
{
  "userAction": "Activate user (<USER_ID>)."
}
```

#### Signing Request example <a href="#signing-requsst-example" id="signing-requsst-example"></a>

```json
{
  "userAction": "Activate user (e78e2512-d9f3-438c-bd51-ba31fea7c0e1)."
}
```

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name                | Required | Description                                                                                                                                                                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| X-DFNS-NONCE        | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID        | Required | ID of the application that was created in the Dfns dashboard                                                                                                                                                                                                                   |
| X-DFNS-APPSECRET    | Optional | Secret associated with the application. Required for server-side application configurations.                                                                                                                                                                                   |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations.                                                                                                                                                                                            |
| X-DFNS-USERACTION   | Required | The user action signing token returned by the previous call to [CompleteUserActionSigning](../user-action-signing/completeUserActionSigning.md) |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                  | Type   |
| ------------------- | ----------------- | -------------------------------------------- | ------ |
| `userId`            | Required          | The UUID of the user that is being activated | String |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X PUT "/auth/manage/users/activate" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d '{"userId": "e78e2512-d9f3-438c-bd51-ba31fea7c0e1"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "message": "success"
}
```

### Notes <a href="#notes" id="notes"></a>

