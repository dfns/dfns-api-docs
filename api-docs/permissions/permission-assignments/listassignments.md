# ListAssignments

`GET /permissions/assignments`

Retrieves a list of permission assignments (success) or gives a reason why it's not possible (failure).

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PermissionAssignments:Read`   | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Query parameters <a href="#query-parameters" id="query-parameters"></a>

| Query string parameter | Required/Optional | Description                                               | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------- | ------ |
| permissionId           | Optional          | The ID of the permission that has been assigned.          | String |
| identityId             | Optional          | The ID of the identity to whom a permission was assigned. | String |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

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
