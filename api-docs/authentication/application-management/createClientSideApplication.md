# Create Application

`POST /auth/apps`

Create a new application in the caller's org.  This is the default application type and should be used for most customer applications.&#x20;

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                     | Conditions      |
| ------------------------ | --------------- |
| `Auth:Apps:Create`       | Always Required |
| `Auth:Types:Application` | Always Required |

## Request Body

|                                                     |        |                                                                                                                                                                             |
| --------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` <mark style="color:red;">\*</mark>           | String | the name of the application, must be unique within the caller's org                                                                                                         |
| `relyingPartyId` <mark style="color:red;">\*</mark> | String | the top level domain where the application will be hosted, for example: `dfns.io`                                                                                           |
| `origin` <mark style="color:red;">\*</mark>         | String | the url of the application, for example: `https://api.dfns.io`                                                                                                              |
| `kind` <mark style="color:red;">\*</mark>           | String | the kind of application being created, must be `ClientSideApplication` (Note: This can be used client or server side so disregard naming)                                   |
| `permissionId`                                      | String | `Optional` ID of the permission that will be assigned to the application. If no permission ID is given, the application will be assigned the same permissions as the caller |
| `externalId`                                        | String | `Optional` user defined value that can be used to correlate the entity with an external system                                                                              |

Example:

```JSON
{
  "name": "MyApp Production",
  "relyingPartyId": "https://myapp.example.co",
  "origin": "example.co",
  "kind": "ClientSideApplication",
  "permissionId": "pm-delaw-avoca-v16r37fpp8koqebc"
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../errors.md#common-errors) for common errors.
* See [Application Management Errors](../../errors.md#application-management-errors) for application management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The newly created application

```json
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
}
```
{% endtab %}
{% endtabs %}
