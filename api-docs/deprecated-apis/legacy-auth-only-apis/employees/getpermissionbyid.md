# Get Employee By ID

{% hint style="danger" %}
Warning: This API has been deprecated.  Please contact us to move to the latest Authentication system and transition to using [GET Users](../../../authentication/user-management/).&#x20;
{% endhint %}

`GET /employees/{employeeId}`

Retrieves a specific employee (success) or gives a reason why it's not possible (failure).

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Employees:Read` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`OrgsManagement`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="424">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>employeeId</code></td><td>Unique identifier of the employee.<br><br>Employee IDs look like this:<br><code>oe-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>oe-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

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
