# ListUsers

`GET /auth/manage/users`

Lists all users in the organization.&#x20;

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

```shell
curl "/auth/manage/users" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json

{
    "items": [
        {
            "userId": "e78e2512-d9f3-438c-bd51-ba31fea7c0e1",
            "type": "EndUser",
            "credentialUuid": "",
            "orgId": "1db4502f-d18c-48c5-b5d7-afb22d8e1b3b",
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

