# CreatePermission

`POST /permissions`

Creates a permission that allows certain specified operations to be executed. Response is either the permission object itself (success) or a reason why it was not possible to create the permission (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `Permissions:Create`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

N/A

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

N/A

### Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **permisison name**, as well as a list of **operations** that this permission will allow.

| Request body fields | Required/Optional | Description                 | Type          |
| ------------------- | ----------------- | --------------------------- | ------------- |
| `name`              | Required          | Name of the permission.     | String        |
| `operations`        | Required          | List of allowed operations. | List (String) |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/permissions" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{"name": "US Perms", "operations": ["AssetAccounts:Read", "AssetAccounts:Create"]}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, a reponse object similar to the following will be returned:

```json
{
    "id": "pm-orange-apple-2b17a80613",
    "orgId": "organization-id",
    "name": "US Perms",
    "operations": [
        "AssetAccounts:Read",
        "AssetAccounts:Create"
    ],
    "status": "Active",
    "predicateIds": [],
    "isImmutable": false,
    "dateCreated": "2022-10-26T08:30:25.348Z",
    "dateUpdated": "2022-10-26T08:30:25.348Z",
    "isArchived": false
}
```

### Notes <a href="#notes" id="notes"></a>

A permission name cannot be an empty string and a permission must have at least one operation specified. The list of supported operations can be found [here](https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#permission-operations).

A permission name is the unique identifier of a permission created in your organization. Therefore, multiple permissions with the same name cannot exist. If a permission has been archived, its name is still considered as taken.
