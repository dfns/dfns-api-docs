# Update Personal Access Token

`PUT /auth/pats/{tokenId}`

Update a specific personal access token

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `Auth:Users:Update` | Always Required |
| `Auth:Types:Pat`    | Always Required |

## Parameters

### Path

|                                              |                                               |
| -------------------------------------------- | --------------------------------------------- |
| `tokenId` <mark style="color:red;">\*</mark> | the ID of the personal access token to update |

Example:

`/auth/pats/to-em7bu-m6c48-hdqoobj7dj24pko`

## Request Body

|              |        |                                                                                                     |
| ------------ | ------ | --------------------------------------------------------------------------------------------------- |
| `name`       | String | `Optional` new name of the application, must be unique for the caller                               |
| `externalId` | String | `Optional` new user defined value, that can be used to correlate the entity with an external system |

Example:

```JSON
{
  "name": "My new PAT name",
  "externalId": "my_internal_id",
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Personal Access Token Management Errors](../../../getting-started/errors.md#personal-access-token-management-errors) for personal access token management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - The personal access token that was updated

```JSON
{
  "dateCreated": "2023-04-12T03:38:05.595Z",
  "credId": "",
  "isActive": true,
  "kind": "CustomerEmployee",
  "linkedUserId": "us-24vwa-92s33-8tvqi1dg0a95megt",
  "linkedAppId": "",
  "name": "My new personal access token name",
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
  "publicKey": "",
  "tokenId": "to-5kwgq-oegi0-879o3v4uh9ghhq72"
}
```
{% endtab %}
{% endtabs %}

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/personal-access-token-management/update-personal-access-token.ts" %}
Typescript Example
{% endembed %}
