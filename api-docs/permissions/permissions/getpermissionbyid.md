# Get Permission By ID

`GET /permissions/{permissionId}`

Retrieves a specific permission (success) or gives a reason why it's not possible (failure).

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Permissions:Read` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="424">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>permissionId</code></td><td>Unique identifier of the permission.<br><br>Permission IDs look like this:<br><code>pm-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>pb-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains the permission object:

```json
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
```
