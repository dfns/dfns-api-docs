# CreateAssignment

`POST /permissions/assignments`

Creates a permission assignment, effectively granting a permission to a specific Identity. Response confirms the assignment (success) or gives the reason why it's not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `PermissionAssignments:Create`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

N/A

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

N/A

### Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **permission ID** and **identity ID.**

| Request body fields | Required/Optional | Description                                                 | Type             |
| ------------------- | ----------------- | ----------------------------------------------------------- | ---------------- |
| `permissionId`      | Required          | The ID of the permission to be assigned.                    | String           |
| `identityId`        | Required          | The ID of the identity the permission is being assigned to. | String           |
| `identityKind`      | Required          | Either CustomerEmployee, Application or EndUser.            | Enumerated Type  |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/permissions/assignments" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"permissionId": "pm-orange-apple-2b17a80613", "identityId": "some-identity-id"}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response will contain an assignment object similar to the one below:

```json
{
    "id": "as-stream-pizza-08edcfff93",
    "permissionId": "pm-orange-apple-2b17a80613",
    "identityId": "oe-louisiana-one-6cf5e80c205c",
    "identityKind": "Employee",
    "isImmutable": false,
    "dateCreated": "2022-10-26T09:48:31.247Z",
    "dateUpdated": "2022-10-26T09:48:31.247Z"
}
```

### Notes <a href="#notes" id="notes"></a>

Assignment IDs look like this: `as-stream-pizza-08edcfff93`. They follow this format: `as-<random-words>-<random-alphanumeric-string>`
