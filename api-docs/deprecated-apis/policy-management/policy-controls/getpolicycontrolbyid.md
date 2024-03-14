# Get Policy Control By ID

`GET /policies/policy-controls/{policyControlId}`

Retrieves a `PolicyControl` by its `id`.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                  | Conditions      |
| --------------------- | --------------- |
| `PolicyControls:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyControlId</code></td><td>Unique identifier of the policy control like:<br><br><code>pc-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the control has been enabled:

```json
{
   "configuration": {
       "timeoutInMinutes": 10,
       "approverUsernames": ["bob@example.com", "seth@example.com"],
       "numApprovals": 1,
       "kind": "RequestApproval"
   },
   "kind": "RequestApproval",
   "author": "oe-nine-artist-9de60fef6963",
   "description": "Test policy control",
   "version": "f1b2121lm",
   "orgId": "cu-purple-pip-1b417b958500",
   "tags": [],
   "dateCreated": "2022-07-14T21:36:42.574Z",
   "name": "Test",
   "id": "pc-foxtrot-harry-ae42882af3",
   "status": "Enabled"
}

```
