# ListPermissions

`GET /permissions`

Retrieves a list of permissions (success) or gives a reason why it's not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `Permissions:Read`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

N/A

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

N/A

### Request body <a href="#request-body" id="request-body"></a>

N/A

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X GET "/permissions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" 
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of permission objects:

```json
[
    {
        "id": "pm-orange-apple-2b17a80613",
        "orgId": "organization-id",
        "name": "US",
        "operations": [
            "AssetAccounts:Read"
        ],
        "status": "Active",
        "predicateIds": [],
        "isImmutable": false,
        "dateCreated": "2022-10-26T08:30:25.348Z",
        "dateUpdated": "2022-10-26T08:30:25.348Z",
        "isArchived": false
    }
]
```

### Notes <a href="#notes" id="notes"></a>

N/A
