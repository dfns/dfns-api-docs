# Revoke Assignment

`DELETE /permissions/{permissionId}/assignments/{assignmentId}`

Revokes a permission assignment (success) or gives reason why it’s not possible (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
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

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response will be a 204 status code.

This is a hard deletion, not an archival. However, the deletion will be registered in the audit logs.
