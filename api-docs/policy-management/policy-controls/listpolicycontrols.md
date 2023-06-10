# ListPolicyControls

`GET /policies/policy-controls/`

Lists all `PolicyControls` belonging to an Org.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PolicyControls:Read`          | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of policy controls:

```json
{
   "items": [
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
, 
...
   ]
}
```
