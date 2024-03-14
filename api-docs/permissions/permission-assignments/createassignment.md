# Create Assignment

`POST /permissions/{permissionId}/assignments`

Creates a permission assignment, effectively granting a permission to a specific Identity. Response confirms the assignment (success) or gives the reason why it's not possible (failure).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PermissionAssignments:Create` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Request body <a href="#request-body" id="request-body"></a>

In the **request body** specify the **identity ID.**

| Request body fields | Required/Optional | Description                                                 | Type   |
| ------------------- | ----------------- | ----------------------------------------------------------- | ------ |
| `identityId`        | Required          | The ID of the identity the permission is being assigned to. | String |

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "identityId": "some-identity-id",
}
```

## Response <a href="#response" id="response"></a>

### Response example 200 - no approval required <a href="#response-example" id="response-example"></a>

If successful, the response will contain an assignment object similar to the one below:

```json
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
{
   "id":"cr-...",
   "orgId":"or-...",
   "requester":{
      "appId":"ap-...",
      "userId":"us-...",
      "tokenId":"to-..."
   },
   "kind":"Assignment",
   "operationKind":"Create",
   "status":"Pending",
   "entityId":"as-...",
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

## Notes <a href="#notes" id="notes"></a>

Assignment IDs look like this: `as-stream-pizza-08edcfff93`. They follow this format: `as-<random-words>-<random-alphanumeric-string>`
