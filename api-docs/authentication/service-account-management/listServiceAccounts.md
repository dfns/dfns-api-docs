# List Service Accounts

`GET /auth/service-accounts`

Returns a list of service accounts

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                        | Conditions      |
| --------------------------- | --------------- |
| `Auth:Apps:Read`            | Always Required |
| `Auth:Types:ServiceAccount` | Always Required |

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Service Account Management Errors](../../../getting-started/errors.md#service-account-management-errors) for service account management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - A list of service accounts registered in the organization

```JSON
{
  "items": [
    {
      "userInfo": {
        "username": "My Old Service Account",
        "userId": "us-9d8ii-4lpu8-6v9h98ulfq97poq",
        "kind": "CustomerEmployee",
        "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
        "orgId": "or-yanke-mars-6ulofamogg84s87v",
        "permissions": [],
        "scopes": [],
        "isActive": true,
        "isServiceAccount": true,
        "isRegistered": true,
        "permissionAssignments": []
      },
      "accessTokens": [
        {
          "dateCreated": "2023-03-13T15:53:14.222Z",
          "credId": "Y2ktQzNPNi1INU83LTNyamdwZ3ZuOGY5YzNwZ2pvdThqcW04b2xw",
          "isActive": false,
          "kind": "ServiceAccount",
          "linkedUserId": "us-9d8ii-4lpu8-6v9h98ulfq97poq",
          "linkedAppId": "",
          "name": "My Old Service Account",
          "orgId": "or-yanke-mars-6ulofamogg84s87v",
          "permissionAssignments": [],
          "publicKey": "SHA256:lH7mAR/74SbXzSjfNAFazwJsUdccVQzA8yj7K8/R5eo",
          "tokenId": "to-316hg-qtfc2-8gbo2dtrfvrn4vgj"
        }
      ]
    },
    {
      "userInfo": {
        "username": "My active service account",
        "userId": "us-38clq-4cpoe-8rkofkec5tfpcg9c",
        "kind": "CustomerEmployee",
        "credentialUuid": "cr-4uc9u-12ij1-9s08327e73jqqcnr",
        "orgId": "or-yanke-mars-6ulofamogg84s87v",
        "permissions": [],
        "scopes": [],
        "isActive": true,
        "isServiceAccount": true,
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
      "accessTokens": [
        {
          "dateCreated": "2023-03-24T22:24:20.131Z",
          "credId": "Y2ktNGpidGctOHNlOHMtOWE2cWo0N2ZoY2xvcWJqbA",
          "isActive": true,
          "kind": "ServiceAccount",
          "linkedUserId": "us-38clq-4cpoe-8rkofkec5tfpcg9c",
          "linkedAppId": "",
          "name": "My active service account",
          "orgId": "or-yanke-mars-6ulofamogg84s87v",
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
          ],
          "publicKey": "SHA256:lH6mAX/24VbXzZjwNZFapwZsUdzzVQzA8yj7K8/R5eo",
          "tokenId": "to-4r80o-9cdbs-9lfos6ddbuivuhui"
        }
      ]
    },
  ]
}
```
{% endtab %}
{% endtabs %}

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/service-account-management/list-service-accounts.ts" %} Typescript Example {% endembed %}
