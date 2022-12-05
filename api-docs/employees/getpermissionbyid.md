# GetEmployeeById

`GET /employees/{employeeId}`

Retrieves a specific employee (success) or gives a reason why it's not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `Employees:Read`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `employeeId`   | <p>Unique identifier of the employee.<br><br>Employee IDs look like this:<br><code>oe-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>oe-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></p> |

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

N/A

### Request body <a href="#request-body" id="request-body"></a>

N/A

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X GET "/employees/oe-orange-apple-2b17a80613" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" 
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains the permission object:

```json
{
    "id": "oe-orange-apple-2b17a80613",
    "username": "john@dfns.co",
    "email": "john@dfns.co",
    "fullName": "John Smith",
    "issuer": "Dfns",
    "dateOfBirth": null,
    "status": "Enabled",
    "dateCreated": "2022-11-22T20:58:29.681Z",
    "dateUpdated": "2022-11-22T20:59:07.178Z",
    "orgId": "organization-id",
    "isOrgOwner": false
}
```

### Notes <a href="#notes" id="notes"></a>

N/A
