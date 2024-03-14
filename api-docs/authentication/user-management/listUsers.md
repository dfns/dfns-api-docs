# List Users

`GET /auth/users`

Returns a list of users

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Users:Read` | Always Required |

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [User Management Errors](../../errors.md#user-management-errors) for user management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - A list of users in the caller's org

```json
{
  "items": [
    {
      "username": "permissioned-user@example.co",
      "userId": "us-C6N4O4-H3N3O6-7g9sb1259f8q8orq2gimrfo59l",
      "kind": "CustomerEmployee",
      "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
      "orgId": "or-yanke-mars-6ulofamogg84s87v",
      "permissions": [],
      "scopes": [],
      "isActive": true,
      "isServiceAccount": false,
      "isRegistered": true,
      "permissionAssignments": [
        {
          "permissionId": "pm-paris-lithi-17bf4kf01h8ajph4",
          "permissionName": "DfnsFullAdminAccess",
          "assignmentId": "",
          "operations": [
            "ApiKeys:Create",
            "ApiKeys:Read",
            "ApiKeys:Revoke",
            "AssetAccounts:Archive",
            "AssetAccounts:Create",
            "AssetAccounts:Read",
            "Auth:Action:Sign",
            "Auth:Apps:Create",
            "Auth:Apps:Read",
            "Auth:Apps:Update",
            "Auth:Creds:Create",
            "Auth:Creds:Read",
            "Auth:Creds:Update",
            "Auth:Types:Application",
            "Auth:Types:Employee",
            "Auth:Types:EndUser",
            "Auth:Types:Pat",
            "Auth:Types:ServiceAccount",
            "Auth:Users:Create",
            "Auth:Users:Delegate",
            "Auth:Users:Read",
            "Auth:Users:Update",
            "Balances:Read",
            "CallbackEvents:Read",
            "CallbackSubscriptions:Archive",
            "CallbackSubscriptions:Create",
            "CallbackSubscriptions:Read",
            "Employees:Read",
            "Payments:Create",
            "Payments:Read",
            "PermissionAssignments:Create",
            "PermissionAssignments:Read",
            "PermissionAssignments:Revoke",
            "PermissionPredicates:Archive",
            "PermissionPredicates:Create",
            "PermissionPredicates:Read",
            "PermissionPredicates:Update",
            "Permissions:Archive",
            "Permissions:Create",
            "Permissions:Read",
            "Permissions:Update",
            "Policies:Archive",
            "Policies:Create",
            "Policies:Read",
            "Policies:Update",
            "PolicyControlExecutions:Read",
            "PolicyControlExecutions:Update",
            "PolicyControls:Archive",
            "PolicyControls:Create",
            "PolicyControls:Read",
            "PolicyControls:Update",
            "PolicyRules:Archive",
            "PolicyRules:Create",
            "PolicyRules:Read",
            "PolicyRules:Update",
            "PublicKeyAddresses:Read",
            "PublicKeys:Create",
            "PublicKeys:Read",
            "Signatures:Create",
            "Signatures:Read",
            "Transactions:Create",
            "Transactions:Read",
            "Wallets:Create",
            "Wallets:Read",
            "Wallets:Update"
          ]
        }
      ]
    },
    {
      "username": "no-permission-user@example.co",
      "userId": "us-4g62b-mvd1k-9do99i72qggnc78l",
      "kind": "CustomerEmployee",
      "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
      "orgId": "or-yanke-mars-6ulofamogg84s87v",
      "permissions": [],
      "scopes": [],
      "isActive": true,
      "isServiceAccount": false,
      "isRegistered": true,
      "permissionAssignments": []
    }
  ]
}
```
{% endtab %}
{% endtabs %}
