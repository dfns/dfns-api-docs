# Archive Policy

`DELETE /policies/{policyId}`

Archives a `Policy` by its `id`.  Archived policies will no longer be enforced.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `Policies:Archive`             | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyId</code></td><td>Unique identifier of the policy like:<br><br><code>pl-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

Note the status is now set to `Archived`:

```json
{
    "activityKind": "CreatingSignature",
    "archivedDate": "2022-10-18T20:05:55.270Z",
    "author": "oe-nine-artist-9de60fef6963",
    "controlIds": [
        "pc-ohio-queen-ae133b2477"
    ],
    "dateCreated": "2022-10-18T20:05:26.858Z",
    "description": "Test AlwaysActive",
    "id": "pl-seven-nuts-66fda0f94a",
    "name": "Anti Theft Policy",
    "orgId": "cu-purple-pip-1b417b958500",
    "ruleIds": [
        "pr-jig-timing-09c7892d48"
    ],
    "status": "Archived",
    "version": "f36b0dnb2",
    "versionedId": "pl-seven-nuts-66fda0f94a@f36b0dnb2"
}
```



