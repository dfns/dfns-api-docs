# ResendRegistrationEmail

`PUT /auth/manage/users/send-registration-email`

Sends the user a new registration code. The previous registration code will be marked invalid. If the user has already completed their registration no action will be taken

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

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description | Type |
| ------------------- | ----------------- | ----------- | ---- |
| `username` | Required | The email of the user | String |
| `orgId` | Required | The globally unique ID of the organization of the user | String |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl -X PUT "/auth/manage/users/send-registration-email" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d '{"username": "jane@example.co", "orgId": "example-org-id"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "message": "success"
}
```

### Notes <a href="#notes" id="notes"></a>

