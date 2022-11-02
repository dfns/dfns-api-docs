# DeleteAssignment

`DELETE /permissions/assignments/{assignmentId}`

Deletes a permission assignment (success) or gives reason why it’s not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

The caller either needs to be an OrgOwner or they need to have a permission assigned to them that allows them to execute the operation `PermissionAssignments:Delete`.

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assignmentId` | <p>Unique identifier of the permission assignment.<br><br>Permission Assignment IDs look like this:<br><code>as-stream-pizza-08edcfff93</code><br><br>They follow this format:<br><code>as-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></p> |

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

### Request body <a href="#request-body" id="request-body"></a>

N/A

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X DELETE "/permissions/assignments/as-stream-pizza-08edcfff93" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response will contain the ID of the deleted permission assignment:

```json
{
    "id": "as-stream-pizza-08edcfff93"
}
```

### Notes <a href="#notes" id="notes"></a>

This is a hard deletion, not an archival. However, the deletion will be registered in the audit logs.