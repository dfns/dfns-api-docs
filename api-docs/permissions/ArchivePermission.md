# ArchivePermission

`PUT /permissions/{permissionId}/archive`

Archives or unarchives a permission, depending on the body of the request. Response either returns the updated permission (success) or the reason why it was not possible to execute the operation (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `Permissions:Archive`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionEngine`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `permissionId` | <p>Unique identifier of the permission.<br><br>Permission IDs look like this:<br><code>pm-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>pb-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></p> |

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

N/A

### Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify wheter the permission is to be **archived** or **unarchived**.

| Request body fields | Required/Optional | Description                                         | Type    |
| ------------------- | ----------------- | --------------------------------------------------- | ------- |
| `isArchived`        | Required          | Specify whether to archive or unarchive permission. | Boolean |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X PUT "/permissions/pm-orange-apple-2b17a80613/archive" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{"isArchived": true}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, a response object of the update permission will be returned:

```json
{
    "id": "pm-orange-apple-2b17a80613",
    "orgId": "organization-id",
    "permissionName": "US",
    "operations": [
        "AssetAccounts:Read"
    ],
    "status": "Active",
    "predicateIds": [],
    "isImmutable": false,
    "dateCreated": "2022-10-26T08:30:25.348Z",
    "dateUpdated": "2022-10-26T08:30:25.348Z",
    "isArchived": true
}
```

### Notes <a href="#notes" id="notes"></a>

When a permission is archived, it remains in the database and its permission name cannot be reused.
