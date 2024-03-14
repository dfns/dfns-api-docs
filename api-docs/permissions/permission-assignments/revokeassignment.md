# Revoke Assignment

`DELETE /permissions/{permissionId}/assignments/{assignmentId}`

Revokes a permission assignment (success) or gives reason why it’s not possible (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PermissionAssignments:Revoke` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="424">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>permissionId</code></td><td>Unique identifier of the permission.<br><br>Permission IDs look like this:<br><code>pm-stream-pizza-08edcfff93</code><br><br>They follow this format:<br><code>pm-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr><tr><td><code>assignmentId</code></td><td>Unique identifier of the permission assignment.<br><br>Permission Assignment IDs look like this:<br><code>as-stream-pizza-08edcfff93</code><br><br>They follow this format:<br><code>as-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example 204 - no approval required <a href="#response-example" id="response-example"></a>

If successful, the response will be a 204 status code.

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
   "kind":"Assignment",
   "operationKind":"Delete",
   "status":"Pending",
   "entityId":"plc-...",
   "body":{
      "id":"as-stream-pizza-08edcfff93",
      "permissionId":"pm-orange-apple-2b17a80613",
      "identityId":"oe-louisiana-one-6cf5e80c205c",
      "isImmutable":false,
      "dateCreated":"2022-10-26T09:48:31.247Z",
      "dateUpdated":"2022-10-26T09:48:31.247Z"
   },
   "dateCreated":"2023-12-22T20:57:55.814Z",
   "dateResolved":"2023-12-22T20:57:55.814Z"
}
```

This is a hard deletion, not an archival.
