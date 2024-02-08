# Create Policy Control

`POST /policies/policy-controls`

Policy Controls determine how Policy Executions are handled. The type of policy control applied is determined by the `kind` field in the nested `configuration` object. These are the supported kinds:

* `RequestApproval`: Require a specified number of approvals from a list of `Users`.
* More control kinds coming soon...

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                    | Conditions      |
| ----------------------- | --------------- |
| `PolicyControls:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Controls:

<table><thead><tr><th width="217">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the control</td><td>String</td></tr><tr><td><code>description</code></td><td>Required</td><td>A description for the control</td><td>String</td></tr><tr><td><code>configuration</code></td><td>Required</td><td>A nested object specifying details of the Policy Control</td><td>Object</td></tr></tbody></table>

### Approval Control

Use the following fields in the nested `configuration` object to create a Policy Control which requires a specified number of approvals from a list of `Users:`

<table data-header-hidden><thead><tr><th width="254">Request body fields</th><th width="113">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td>Request body fields</td><td>Required/Optional</td><td>Description</td><td>Type</td></tr><tr><td><code>kind</code></td><td>Required</td><td>Specify: "RequestApproval"</td><td>Enumerated Type</td></tr><tr><td><code>approverUsernames</code></td><td>Required</td><td>The user IDs of the designated approvers. See <a href="../../../authentication/user-management/listUsers.md">List Users</a> to get IDs. (See Note below re: legacy authentication)</td><td>Array of Strings</td></tr><tr><td><code>timeoutInMinutes</code></td><td>Required</td><td>The amount of time in minutes after which the policy execution can no longer be approved.</td><td>Integer</td></tr><tr><td><code>numApprovals</code></td><td>Required</td><td>The number of required approvals. Must be less than or equal to the <code>approverUsernames array length.</code></td><td>Integer</td></tr></tbody></table>

{% hint style="warning" %}
Note: For legacy authentication, please specify an array of email addresses in the `approverUsernames` field like \["bob@example.com", "dan@example.com"]
{% endhint %}

### Request Example <a href="#request-example.1" id="request-example.1"></a>

```json
{
    "description": "My policy control",
    "name": "policy-control-back-office-01",
    "configuration": {
        "kind": "RequestApproval",
        "approverUsernames": ["us-4algk-4jfhv-8i4fj49s0ja8t4", "us-4jflw-98fj3-8isgdefs0ja8t4"],
        "timeoutInMinutes": 60,
        "numApprovals": 1
    }
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "id": "pc-foxtrot-harry-ae42882af3",
   "version": "f1b2121lm",
   "kind": "RequestApproval",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "description": "Test policy control",
   "name": "Test 1",
   "configuration": {
       "kind": "RequestApproval",
       "approverUsernames": ["bob@example.com"],
       "timeoutInMinutes": 10,
       "numApprovals": 1
   },
   "dateCreated": "2022-07-14T21:36:42.574Z",
   "tags": [],
   "status": "Enabled"
}
```
