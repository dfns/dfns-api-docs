# List Personal Access Tokens

`GET /auth/pats`

Returns a list of personal access tokens

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Auth:Apps:Read` | Always Required |
| `Auth:Types:Pat` | Always Required |

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [Personal Access Token Management Errors](../../../getting-started/errors.md#personal-access-token-management-errors) for personal access token management specific errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - A list of personal access tokens registered to the calling user

```JSON
{
  "items": [
    {
      "dateCreated": "2023-03-16T20:17:35.291Z",
      "credId": "Y2ktMWYxcTWtN3ZzbSAtODVhcZ5kY2lwZTY3ZTgwMg",
      "isActive": true,
      "kind": "Pat",
      "linkedUserId": "us-24vwa-92s33-8tvqi1dg0a95megt",
      "linkedAppId": "",
      "name": "My PAT",
      "orgId": "or-yanke-mars-6ulofamogg8fs87v",
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
      "publicKey": "SHA256:lH6mAX/74SbZzSjwNAFApwJsUdccVQzA8yj7K8/R5el",
      "tokenId": "to-7vwr2-h2f29-9m6a0fmkk7rr2hj7"
    }
  ]
}
```
{% endtab %}
{% endtabs %}

## Examples

{% embed url="https://github.com/dfnsext/dfns-api-docs/blob/canary/examples/typescript/src/api/authentication/personal-access-token-management/list-personal-access-tokens.ts" %} Typescript Example {% endembed %}
