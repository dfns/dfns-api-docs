# Get Policy By ID

`GET /policies/{policyId}`

Retrieves a `Policy` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyId</code></td><td>Unique identifier of the policy like:<br><br><code>pl-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the policy has been enabled:

```json
{
   "controlIds": [
       "pc-table-pennsylvania-269c9cfee9"
   ],
   "author": "oe-nine-artist-9de60fef6963",
   "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
   "description": "Test AlwaysActive",
   "version": "f1d7d94gm",
   "orgId": "cu-purple-pip-1b417b958500",
   "activityKind": "WalletsTransferAsset",
   "ruleIds": [
       "pr-nebraska-november-finch-4e10e32a0d"
   ],
   "dateCreated": "2022-07-19T19:58:21.334Z",
   "name": "Anti Theft Policy",
   "id": "pl-mockingbird-seventeen-c14e223d70",
   "status": "Enabled"
}
```
