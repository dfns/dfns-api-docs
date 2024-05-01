# Update Policy

`PUT /v2/policies/{policyId}`

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

<table><thead><tr><th width="232">Name</th><th>Conditions</th></tr></thead><tbody><tr><td><code>Policies:Update</code></td><td>Always Required</td></tr></tbody></table>

## Body

Same as [Create Policy](create-policy.md) body.

## Responses <a href="#response" id="response"></a>

### 200  - no approval required <a href="#response-example" id="response-example"></a>

Same as [Create Policy](create-policy.md) response.

### 202 - approval required <a href="#response-example" id="response-example"></a>

In the case when an approval is first required before the policy can actually be modified, a `202` status code is returned, and the object returned is a "Policy change request", which contains an `approvalId`. You can use the `approvalId` to fetch the right approval to be fulfilled before this change request actually executes.

```json
// policy change request object
{
  "id": "cr-...",
  "kind": "Policy",
  "operationKind": "Update",
  "status": "Pending",
  "requester": { "userId": "us-..." },
  "entityId": "plc-...",
  "approvalId": "ap-...",
  "dateCreated": "2023-12-22T20:57:55.814Z",
  "body": {
    ... // the full body passed in the request
  }
}
```
