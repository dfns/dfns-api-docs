# Get Policy Rule By ID

`GET /policies/policy-rules/{policyRuleId}`

Retrieves a `PolicyRule` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PolicyRules:Read`             | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyRuleId</code></td><td>Unique identifier of the policy rule like:<br><br><code>pr-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "id": "pr-tennessee-artist-f2078ea085",
   "version": "f1b1me4kd",
   "kind": "PaymentAmountLimit",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "description": "Test Rule 1 PaymentAmountLimit",
   "name": "Test Rule 1",
   "configuration": {
       "kind": "PaymentAmountLimit",
       "limit": "0.5",
       "assetSymbol": "ETH"
   },
   "tags": [],
   "dateCreated": "2022-07-14T21:22:54.829Z",
   "status": "Enabled"
}
```
