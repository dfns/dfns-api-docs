# Assign Permission

`POST /permissions/{permissionId}/assignments`

Creates a permission assignment, effectively granting a permission to a specific Identity. Response confirms the assignment (success) or gives the reason why it's not possible (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PermissionAssignments:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **identity ID.**

<table><thead><tr><th>Request body fields</th><th width="168.33333333333331">Type - Required</th><th>Description</th></tr></thead><tbody><tr><td><code>identityId</code></td><td>String - Required</td><td>The ID of the identity the permission is being assigned to.</td></tr></tbody></table>

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "identityId": "some-identity-id",
}
```

## Response <a href="#response" id="response"></a>

### Response example 200 - no approval required <a href="#response-example" id="response-example"></a>

```json
// permission assignment
{
    "id": "as-stream-pizza-08edcfff93",
    "permissionId": "pm-orange-apple-2b17a80613",
    "identityId": "oe-louisiana-one-6cf5e80c205c",
    "isImmutable": false,
    "dateCreated": "2022-10-26T09:48:31.247Z",
    "dateUpdated": "2022-10-26T09:48:31.247Z"
}
```

### Response example 202 - approval required <a href="#response-example" id="response-example"></a>

```json
// permission assignment change request
{
   "id":"cr-...",
   "kind":"Assignment",
   "operationKind":"Create",
   "status":"Pending",
   "entityId":"as-...",
   "dateCreated":"2023-12-22T20:57:55.814Z",
   "dateResolved":"2023-12-22T20:57:55.814Z",
   "requester":{
      "appId":"ap-...",
      "userId":"us-...",
      "tokenId":"to-..."
   },
   "body":{
      "id":"as-stream-pizza-08edcfff93",
      "permissionId":"pm-orange-apple-2b17a80613",
      "identityId":"oe-louisiana-one-6cf5e80c205c",
      "isImmutable":false,
      "dateCreated":"2022-10-26T09:48:31.247Z",
      "dateUpdated":"2022-10-26T09:48:31.247Z"
   },
}
```

## Notes <a href="#notes" id="notes"></a>

Assignment IDs look like this: `as-stream-pizza-08edcfff93`. They follow this format: `as-<random-words>-<random-alphanumeric-string>`
