# Create Permission

`POST /permissions`

Creates a permission that allows certain specified operations to be executed. Response is either the permission object itself (success) or a reason why it was not possible to create the permission (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `Permissions:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **permisison name**, as well as a list of **operations** that this permission will allow.

<table><thead><tr><th width="183">property</th><th width="219">Type - Required</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>String -Required</td><td>Name of the permission.</td></tr><tr><td><code>operations</code></td><td>String Array - Required</td><td>List of allowed operations.<br>This <a href="../permissions-overview.md#list-of-operations">this list</a> for all the available operations.</td></tr></tbody></table>

### Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "name": "US Perms",
  "operations": ["AssetAccounts:Read", "AssetAccounts:Create"]
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

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

## Notes <a href="#notes" id="notes"></a>

A permission name cannot be an empty string and a permission must have at least one operation specified.

A permission name is the unique identifier of a permission created in your organization. Therefore, multiple permissions with the same name cannot exist. If a permission has been archived, its name is still considered as taken.
