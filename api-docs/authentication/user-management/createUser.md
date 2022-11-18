# CreateUser

`POST /auth/manage/users`

Creates a user in the caller's organization. Once a user is created, they will recive an email so they can complete the registration process

### Required Permissions <a href="#scopes" id="scopes"></a>

TODO

### User Action Signature Request Body <a href="#user-action-signature" id="user-action-signature"></a>

* `USER_KIND` is the kind of user being created. Can be `EndUser` for an application user or `CustomerEmployee` for an employee of Dfns customer that owns the caller's organization
* `EMAIL` is the email address of the user being created
* `ORG_ID` is the globally unique ID of the organization of the caller

```json
{
  "userAction": "Create <USER_KIND> (<EMAIL>) in <ORG_ID>."
}
```

#### Signing Request example <a href="#signing-requsst-example" id="signing-requsst-example"></a>

```json
{
  "userAction": "Create CustomerEmployee (jane@example.co) in example-org-id."
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

| Request body fields | Required/Optional | Description                                                      | Type   |
| ------------------- | ----------------- | ---------------------------------------------------------------- | ------ |
| `email`             | Required          | The email of the user being created                              | String |
| `kind`              | Required          | The kind of user being created. Can be `EndUser` for an application user or `CustomerEmployee` for an employee of Dfns customer that owns the caller's organization | String |
| `credentialKind`    | Required          | The kind of credential the user is required to register. This can be `Password` for password and TOTP authenticator, or `Key` for public/private key, or `FIDO2` for passwordless via WebAuthn compatible authenticators | String |
| `publicKey`         | Optional          | The user's GPG public key used to encrypt the registration email | String |
| `scopes`            | Required          | A list of scopes to assign to the user                           | String |
| `permissions`       | Required          | A list of permissions to assign to the user                      | String |

### Request example <a href="#request-body" id="request-body"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```bash
currentTime=$( date -u +"%Y-%m-%dT%H:%M:%SZ" )
nonce=$( echo "{\"datetime\":\"$currentTime\",\"nonce\":\"$(uuidgen)\"}" | base64 | tr '/+' '_-' | tr -d '=' )
userEmail='jane@example.co'
kind='CustomerEmployee'
credentialKind='FIDO2'
scopes='["auth:users:read"]'
permissions='[]'
curl -X POST "/auth/manage/users" \
-H "Content-Type: application/json" \
-H "X-DFNS-NONCE: $nonce" \
-H "X-DFNS-APPID: 312CE25E-A112-4D45-9965-6175E7C568DD" \
-H "Authoriztion: Bearer <AUTH_TOKEN>" \
-H "X-DFNS-USERACTION: <USER_ACITON_TOKEN>" \
-d "{\"email\":\"$userEmail\", \"kind\":\"$kind\", \"credentialKind\":\"$credentialKind\", \"scopes\":$scopes, \"permissions\":$permissions }"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "message": "success"
}
```

### Notes <a href="#notes" id="notes"></a>

