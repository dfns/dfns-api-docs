# List Applications

`GET /auth/apps`

Returns a list of applications in the caller's organization.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                     | Conditions      |
| ------------------------ | --------------- |
| `Auth:Apps:Read`         | Always Required |
| `Auth:Types:Application` | Always Required |

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [Application Management Errors](../../errors.md#application-management-errors) for application management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - A list of the applications in the caller's org

```json
{
  "items": [
    {
      "appId": "ap-24vwa-92s32-8tvqi1dg0a95megt",
      "kind": "ClientSideApplication",
      "orgId": "or-yanke-mars-6ulofamogg8fs87v",
      "expectedRpId": "localhost",
      "expectedOrigin": "http://localhost:5500/",
      "name": "LocalClient",
      "isActive": true,
      "permissionAssignments": [
        {
          "permissionId": "pm-paris-lithi-17bf4ef01h3aj6h4",
          "permissionName": "AppManager",
          "assignmentId": "",
          "operations": [
            "Auth:Apps:Create",
            "Auth:Apps:Read",
            "Auth:Apps:Update",
          ]
        }
      ],
      "accessTokens": []
    },
    {
      "appId": "ap-4s6se-e2t7n-89gfg50iaos73pm6",
      "kind": "ServerSideApplication",
      "orgId": "or-yanke-mars-6ulofamogg8fs87v",
      "expectedRpId": "localhost",
      "expectedOrigin": "http://localhost:3000/",
      "name": "LocalServer",
      "isActive": false,
      "permissionAssignments": [
        {
          "permissionId": "pm-mars-lithi-17bf4kf0548ajph4",
          "permissionName": "WalletAdmin",
          "assignmentId": "",
          "operations": [
            "Auth:Action:Sign",
            "Auth:Apps:Read",
            "Auth:Types:Application",
            "Auth:Types:Employee",
            "Auth:Types:EndUser",
            "Auth:Types:Pat",
            "Auth:Types:ServiceAccount",
            "Auth:Users:Read",
            "Balances:Read",
            "Payments:Create",
            "Payments:Read",
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
      "accessTokens": [
        {
          "dateCreated": "2023-04-11T16:38:55.098Z",
          "credId": "Y2ktMmNkcXMscDl5cjktOXBvYnB1bWo4anZnY2h2bA",
          "isActive": true,
          "kind": "Application",
          "linkedAppId": "ap-4s6se-e2t7n-89gfg50iaos73pm6",
          "linkedUserId": "",
          "name": "LocalServer",
          "orgId": "or-yanke-mars-6ulofamogg8fs87v",
          "permissionAssignments": [
            {
              "permissionId": "pm-lit-yanke-46bfekf1548aeph4",
              "permissionName": "WalletAdmin",
              "assignmentId": "",
              "operations": [
                "Auth:Action:Sign",
                "Auth:Apps:Read",
                "Auth:Types:Application",
                "Auth:Types:Employee",
                "Auth:Types:EndUser",
                "Auth:Types:Pat",
                "Auth:Types:ServiceAccount",
                "Auth:Users:Read",
                "Balances:Read",
                "Payments:Create",
                "Payments:Read",
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
          "publicKey": "SHA256:lH6mAX/74SbWzSjwNBFapwJsUdccVQzA8yj7K8/R5eo",
          "tokenId": "to-3oona-vc575-9ueb17f2t4uq0m9b"
        }
      ]
    }
  ]
}
```
{% endtab %}
{% endtabs %}
