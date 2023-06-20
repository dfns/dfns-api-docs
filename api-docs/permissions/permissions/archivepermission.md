# Archive Permission

`PUT /permissions/{permissionId}/archive`

Archives or unarchives a permission, depending on the body of the request. Response either returns the updated permission (success) or the reason why it was not possible to execute the operation (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `Permissions:Archive`          | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionEngine`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="434">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>permissionId</code></td><td>Unique identifier of the permission.<br><br>Permission IDs look like this:<br><code>pm-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>pb-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr></tbody></table>

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify wheter the permission is to be **archived** or **unarchived**.

| Request body fields | Required/Optional | Description                                         | Type    |
| ------------------- | ----------------- | --------------------------------------------------- | ------- |
| `isArchived`        | Required          | Specify whether to archive or unarchive permission. | Boolean |

### Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "isArchived": true
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, a response object of the update permission will be returned:

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
    "isArchived": true
}
```

## Notes <a href="#notes" id="notes"></a>

When a permission is archived, it remains in the database and its permission name cannot be reused.
