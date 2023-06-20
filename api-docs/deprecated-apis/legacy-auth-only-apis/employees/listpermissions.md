# List Employees

{% hint style="danger" %}
Warning: This API has been deprecated.  Please contact us to move to the latest Authentication system and transition to using [GET Users](../../../authentication/user-management/).&#x20;
{% endhint %}

`GET /employees`

Retrieves a list of employees (success) or gives a reason why it's not possible (failure).

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Employees:Read` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`OrgsManagement`

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of permission objects:

```json
[
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
]
```
