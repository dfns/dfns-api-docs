# ListAssignments

`GET /permissions/assignments`

Retrieves a list of permission assignments (success) or gives a reason why it's not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `PermissionAssignments:Read`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

N/A

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

| Query string parameter | Required/Optional | Description                                               | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------- | ------ |
| permissionId           | Optional          | The ID of the permission that has been assigned.          | String |
| identityId             | Optional          | The ID of the identity to whom a permission was assigned. | String |

### Request body <a href="#request-body" id="request-body"></a>

N/A

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X GET "/permissions/assignments?permissionId=pm-orange-apple-2b17a80613&identityId=oe-louisiana-one-6cf5e80c205c" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response will contain a list of assignment objects similar to the ones below:

```json
[
    {
        "id": "as-stream-pizza-08edcfff93",
        "permissionId": "pm-orange-apple-2b17a80613",
        "identityId": "oe-louisiana-one-6cf5e80c205c",
        "identityKind": "Employee",
        "isImmutable": false,
        "dateCreated": "2022-10-26T09:48:31.247Z",
        "dateUpdated": "2022-10-26T09:48:31.247Z"
    }
]
```

### Notes <a href="#notes" id="notes"></a>

N/A
