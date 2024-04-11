# Update Permission

`PUT /permissions/{permissionId}`

Updates an existing permission. Response either returns the updated permission (success) or the reason why it was not possible to update (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `Permissions:Update` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="185.03785488958988">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>permissionId</code></td><td>Unique identifier of the permission. Permission IDs look like this: <code>pm-orange-apple-2b17a80613</code></td></tr></tbody></table>

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **permisison name** and/or a list of **operations** that this permission will allow.

<table><thead><tr><th width="177">propery</th><th width="204">Required/Optional</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>String - Optional</td><td>Name of the permission.</td></tr><tr><td><code>operations</code></td><td>String Array - Optional</td><td>List of allowed operations. <br>This <a href="../permissions-overview.md#list-of-operations">this list</a> for all the available operations.</td></tr></tbody></table>

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "name": "US Perms",
  "operations": ["Wallets:Read", "Wallets:Create"]
}
```

## Response <a href="#response" id="response"></a>

### Response example 200 - no approval required <a href="#response-example" id="response-example"></a>

If successful, a response object of the updated permission will be returned:

```json
// permission
{
    "id": "pm-orange-apple-2b17a80613",
    "name": "US",
    "operations": ["Wallets:Read", "Wallets:Create"],
    "status": "Active",
    "isImmutable": false,
    "dateCreated": "2022-10-26T08:30:25.348Z",
    "dateUpdated": "2022-10-26T08:30:25.348Z",
    "isArchived": false
}
```

### Response example 202 - approval required <a href="#response-example" id="response-example"></a>

```json
// change request
{
   "id":"cr-...",
   "kind":"Permission",
   "operationKind":"Update",
   "status":"Pending",
   "entityId":"pm-...",
   "dateCreated":"2023-12-22T20:57:55.814Z",
   "dateResolved":"2023-12-22T20:57:55.814Z",
   "requester":{
     "appId":"ap-...",
     "userId":"us-...",
     "tokenId":"to-..."
   },
   "body":{
      "id":"pm-orange-apple-2b17a80613",
      "name":"US",
      "operations":["Wallets:Read", "Wallets:Create"],
      "status":"Active",
      "isImmutable":false,
      "dateCreated":"2022-10-26T08:30:25.348Z",
      "dateUpdated":"2022-10-26T08:30:25.348Z",
      "isArchived":false
   },
}
```

## Notes <a href="#notes" id="notes"></a>

A permission name cannot be an empty string and a permission must have at least one operation specified.

A permission name is the unique identifier of a permission created in your organization. Therefore, multiple permissions with the same name cannot exist. If a permission has been archived, its name is still considered as taken.
