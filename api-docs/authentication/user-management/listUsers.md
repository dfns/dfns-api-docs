# ListUsers

`GET /auth/manage/users`

Lists all users in the caller's organization.

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name                | Required | Description                                                                                                                                                                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| X-DFNS-NONCE        | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID        | Required | ID of the application that was created in the Dfns dashboard                                                                                                                                                                                                                   |
| X-DFNS-APPSECRET    | Optional | Secret associated with the application. Required for server-side application configurations.                                                                                                                                                                                   |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations.                                                                                                                                                                                            |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
curl "/auth/manage/users" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>"
```

### Response <a href="#response" id="response"></a>

A list of users in the caller's organization. Each item in the list has the following fields:

* `userId` is the globally unique ID that identifies the user in the DFNS API
* `kind` is the kind of the user. Can be one of the following values:
  * `EndUser` indicates the user is a standard user in the application
  * `CustomerEmployee` indicates the user is a employee of the Dfns customer that owns the caller's organization
  * `DfnsStaff` indicates the user is a employee of Dfns
* `credentialUuid` is the globally unique ID that identifies the credential registered to the user in the DFNS API
* `orgId` is a globally unique ID that identifies the user's organization in the DFNS API
* `permissions` is a list of permissions that are assigned to the user
* `scopes` is a list of scopes that are assigned to the user
* `isServiceAccount` a boolean value indicating if the user is a service account (non-human entity)
* `isActive` is a boolean value indicating if the user is active

#### Response example <a href="#response-example" id="response-example"></a>

```json

{
    "items": [
        {
            "userId": "e78e2512-d9f3-438c-bd51-ba31fea7c0e1",
            "kind": "EndUser",
            "credentialUuid": "",
            "orgId": "example-org-id",
            "permissions": [
                ""
            ],
            "scopes": [
                ""
            ],
            "isServiceAccount": false,
            "isActive": true
        },
        ...
    ]
}
```

### Notes <a href="#notes" id="notes"></a>

