# Update Permission

`PUT /permissions/{permissionId}`

Updates an existing permission. Response either returns the updated permission (success) or the reason why it was not possible to update (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `Permissions:Update` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="434">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>permissionId</code></td><td>Unique identifier of the permission.<br><br>Permission IDs look like this:<br><code>pm-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>pb-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr></tbody></table>

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **permisison name** and/or a list of **operations** that this permission will allow.

| Request body fields | Required/Optional | Description                 | Type          |
| ------------------- | ----------------- | --------------------------- | ------------- |
| `name`              | Optional          | Name of the permission.     | String        |
| `operations`        | Optional          | List of allowed operations. | String (List) |

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "name": "US Perms",
  "operations": ["AssetAccounts:Read", "AssetAccounts:Create"]
}
```

## Response <a href="#response" id="response"></a>

### Response example 200 - no approval required <a href="#response-example" id="response-example"></a>

If successful, a response object of the updated permission will be returned:

```json
{
    "id": "pm-orange-apple-2b17a80613",
    "orgId": "organization-id",
    "name": "US",
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

### Response example 202 - approval required <a href="#response-example" id="response-example"></a>

```json
{
   "id":"cr-...",
   "orgId":"or-...",
   "requester":{
      "appId":"ap-...",
      "userId":"us-...",
      "tokenId":"to-..."
   },
   "kind":"Permission",
   "operationKind":"Update",
   "status":"Pending",
   "entityId":"pm-...",
   "body":{
      "id":"pm-orange-apple-2b17a80613",
      "orgId":"organization-id",
      "name":"US",
      "operations":[
         "AssetAccounts:Read",
         "AssetAccounts:Create"
      ],
      "status":"Active",
      "predicateIds":[],
      "isImmutable":false,
      "dateCreated":"2022-10-26T08:30:25.348Z",
      "dateUpdated":"2022-10-26T08:30:25.348Z",
      "isArchived":false
   },
   "dateCreated":"2023-12-22T20:57:55.814Z",
   "dateResolved":"2023-12-22T20:57:55.814Z"
}
```

## Notes <a href="#notes" id="notes"></a>

A permission name cannot be an empty string and a permission must have at least one operation specified. The list of supported operations can be found in XXYYZZ.

A permission name is the unique identifier of a permission created in your organization. Therefore, multiple permissions with the same name cannot exist. If a permission has been archived, its name is still considered as taken.
