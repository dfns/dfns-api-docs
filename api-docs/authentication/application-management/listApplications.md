# ListApplications

`GET /auth/manage/apps`

Lists all applications in the caller's organization.

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
curl "/auth/manage/apps" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>"
```

### Response <a href="#response" id="response"></a>

A list of applications in the caller's organization. Each item in the list has the following fields:

* `appId` is the globally unique ID that identifies the app in the Dfns API
* `kind` is the kind of the application. Can be one of the following values:
  * `ClientSideApplication` indicates the application is intended to run on an end user system. Client Side Applications will be identified only by an app ID 
  * `ServerSideApplication` indicates the application is intended to run on a secure serever. Server Side Applications will have a API Key (App Secret) and will sign all requests, helping to guarantee the request originated from a trusted location
* `orgId` is a globally unique ID that identifies the application's organization in the Dfns API
* `permissions` is a list of permissions that are assigned to the application
* `scopes` is a list of scopes that are assigned to the application
* `expectedRpId` is the relying party ID from which the application accepts authentication requests
* `expectedOrigin` is the origin from which the application accepts authentication requests
* `name` a user provided name that is used to easily identify the application
* `isActive` is a boolean value indicating if the application is active

#### Response example <a href="#response-example" id="response-example"></a>

```json

{
    "items": [
        {
            "appId": "a6a47c9c-6f84-4af5-8e7a-30118cccdda4",
            "kind": "ClientSideApplication",
            "orgId": "example-org-id",
            "permissions": [
                ""
            ],
            "scopes": [
                "auth"
            ],
            "expectedRpId": "example.io",
            "expectedOrigin": "https://dashboard.example.io",
            "name": "Example Dashboard",
            "isActive": true
        },
        ...
    ]
}
```

### Notes <a href="#notes" id="notes"></a>

