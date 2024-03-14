# Update Application

`PUT /auth/apps/{appId}`

Update a specific application

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                     | Conditions      |
| ------------------------ | --------------- |
| `Auth:Apps:Update`       | Always Required |
| `Auth:Types:Application` | Always Required |

## Parameters

|                                            |                                       |
| ------------------------------------------ | ------------------------------------- |
| `appId` <mark style="color:red;">\*</mark> | the ID of the application to activate |

### Example

```
/auth/apps/ap-7pdin-482de-87l94d8909f9lve0
```

## Request Body

|              |        |                                                                                                     |
| ------------ | ------ | --------------------------------------------------------------------------------------------------- |
| `name`       | String | `Optional` new name of the application, must be unique for the caller                               |
| `externalId` | String | `Optional` new user defined value, that can be used to correlate the entity with an external system |

### Example

```json
{
  "name": "My new Application name",
  "externalId": "my_internal_id",
}
```

## Responses

{% tabs %}
{% tab title="200" %}
**Success**

```json
{
  "appId": "ap-4s6se-e2t7n-89gfg50iaos73pm6",
  "kind": "ServerSideApplication",
  "orgId": "or-yanke-mars-6ulofamogg8fs87v",
  "expectedRpId": "localhost",
  "expectedOrigin": "http://localhost:3000",
  "name": "My new App Name",
  "isActive": true,
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
  "accessTokens": [
    {
      "dateCreated": "2023-04-11T16:38:55.098Z",
      "credId": "Y2ktM2J2YnEtdWF1bDctOG8zYmFrY2d2b2xhZTUzYg",
      "isActive": true,
      "kind": "Application",
      "linkedAppId": "ap-4s6se-e2t7n-89gfg50iaos73pm6",
      "linkedUserId": "",
      "name": "Codys Localhost Server-Side App",
      "orgId": "or-yanke-mars-6ulofamogg8fs87v",
      "permissionAssignments": [],
      "publicKey": "SHA256:lH6mAX/74SbWzSjwNBFapwJsUdccVQzA8yj7K8/R5eo",
      "tokenId": "to-3oona-vc575-9ueb17f2t4uq0m9b"
    }
  ]
}
```
{% endtab %}

{% tab title="400" %}
**`X-DFNS-NONCE` header is missing or invalid**

```json
{
  "error": {
    "message": "request nonce is missing or invalid",
  }
}
```

**`X-DFNS-NONCE` already used**

```json
{
  "error": {
    "message": "request nonce has already been used"
  }
}
```

**`X-DFNS-USERACTION` already used**

```json
{
  "error": {
    "message": "user action has already been used"
  }
}
```
{% endtab %}

{% tab title="401" %}
**Caller not authenticated**

```json
{
  "error": {
    "message": "Not Authorized."
  }
}
```
{% endtab %}

{% tab title="403" %}
**Caller does not have access to the resource or endpoint**

```json
{
  "error": {
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/apps)"
  }
}
```

**`X-DFNS-USERACTION` is missing or invalid**

```JSON
{
  "error": {
    "message": "user action signature is missing or invalid"
  }
}
```
{% endtab %}

{% tab title="500" %}
**An error occurred on the server**

```json
{
  "error": {
    "message": "Internal Server Error"
  }
}
```
{% endtab %}
{% endtabs %}
