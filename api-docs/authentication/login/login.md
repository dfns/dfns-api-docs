# Login

`POST /auth/login`

Execute the login process and provides the authenticated user with their authentication token.

### Required Permissions <a href="#scopes" id="scopes"></a>

`N/A`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

### Headers  <a href="#request-body" id="request-body"></a>

| Name                | Required | Description                                                                                                                                                                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| X-DFNS-NONCE        | Required | <p>Random value used to prevent replay attacks. Format is base64url encoded JSON string with the following fields: <br>uuid: &#x3C;random value> <br>datetime: &#x3C;The current time of the request in ISO String format, used to expire requests after a period of time></p> |
| X-DFNS-APPID        | Required | ID of the application that was created in the Dfns dashboard                                                                                                                                                                                                                   |
| X-DFNS-APPSECRET    | Optional | Secret associated with the application. Required for server-side application configurations.                                                                                                                                                                                   |
| X-DFNS-APISIGNATURE | Optional | Signature for the API request. Required for server-side application configurations.                                                                                                                                                                                            |

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description               | Type   |
| ------------------- | ----------------- | ------------------------- | ------ |
| `username`          | Required          | Email address of the user | String |
| `orgId`             | Required          | ID of the target Org      | String |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/auth/login/init" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{"username": "bob@example.co",
    "orgId": "1d02f-d18c-48c5-b5d7-a...3b"}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

* `type` identifies the type of credential in use (FIDO2, Key, or Password)
* `challenge` is a random value used to uniquely identify the request&#x20;
* `challengeIdentifier` is a JWT used to authenticate to the login API&#x20;
* `authenticationCode` can be used to enable cross device login
* `allowCredentials` contains a list of credentials that are registered for the user to authenticate

```json
{
    "type": "FIDO2",
    "challenge": "38af6e3e-5d91-4e84-953e-e6dc672f2b5e",
    "challengeIdentifier": "eyJ0eXAiOiJKV1Q...iwiYXVkIjoiZGZuczphdXRoOnVzZXIiLCJzdWIiOiIxZGI0NTAyZi1kMThjLTQ4YzUtYjVkNy1hZmIyMmQ4ZTFiM2IiLCJqdGkiOiIzMjhkOGU0NS03OTU3LTRlY2MtYTE3YS0wMzMwNjBiNTA2NTgiLCJzY29wZSI6IiIsInBlcm1pc3Npb25zIjpbXSwiaHR0cDovL2N1c3RvbS9hcHBfbWV0YWRhdGEiOnsidXNlcklkIjoiZTVmM2YzNDYtODNlNi00NDlhLTliNmYtMmVmYjg1YWVlMmE0Iiwib3JnSWQiOiIxZGI0NTAyZi1kMThjLTQ4YzUtYjVkNy1hZmIyMmQ4ZTFiM2IiLCJ0b2tlblR5cGUiOiJUZW1wIiwiY2hhbGxlbmdlIjoiMzhhZjZlM2UtNWQ5MS00ZTg0LTk1M2UtZTZkYzY3MmYyYjVlIiwiY3JlZGVudGlhbFR5cGUiOiJGSURPMiJ9LCJpYXQiOjE2Njg3MTAwMTUsImV4cCI6MTY2ODcxMDkxNX0.ln_aVP6hldb6-u_hyVD1e5P3gCXBn2GdH_aK_AMxBLmYv5SfV5xSxMc2ZsRw6uVNAIOVrInTFwau5bcblqhyKp_CEtbjYvDNjQUxBwi68YTtxwI2Xn-Noa3nBSP11HSETaVtU67v1D3bnC8cQ3nb0k52n4Xm0n20lh7rPlTrBbFxZFoRQIX0LNJZb9GIuExA-x52xVgh5C8SgD_TOwlScVyb3SlRdzm3hjrLoxwp21s6Cf9W9RPyTHD2X9HnONPPJgvRhhu79yBstO83NIo5ULL8AOEKczNYrFK5-1HmSyAyUJOe5NvLU9li9RkepGFG4iSl5ddaX1bwCg35kbzsjA",
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

