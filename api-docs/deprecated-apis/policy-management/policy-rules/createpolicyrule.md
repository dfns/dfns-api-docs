# Create Policy Rule

`POST /policies/policy-rules`

Policy Rules determine when Policy Executions are created. The type of policy rule applied is determined by the `kind` field in the nested `configuration` object. These are the supported kinds:

* `AlwaysActivated`: Always trigger the policy.
* `TransferAmountLimit`: Trigger the policy if the transfer is over a given limit. (Wallets only.)
* `PaymentAmountLimit`: Trigger the policy if the payment is over a given limit. (Asset accounts only. Deprecated)

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                 | Conditions      |
| -------------------- | --------------- |
| `PolicyRules:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Rules:

<table><thead><tr><th width="217">Request body fields</th><th width="158.786301369863">Required/Optional</th><th width="134">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the rule</td><td>String</td></tr><tr><td><code>description</code></td><td>Required</td><td>A description for the rule</td><td>String</td></tr><tr><td><code>configuration</code></td><td>Required</td><td>A nested object specifying details of the Policy Rule</td><td>Object</td></tr></tbody></table>

### Amount Limit Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if the Transfer amount is over the specified amount:

<table><thead><tr><th width="238">Request body fields</th><th width="113">Required/Optional</th><th width="240">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "TransferAmountLimit"</td><td>Enumerated Type</td></tr><tr><td><code>limit</code></td><td>Required</td><td>The amount over which the policy should trigger - specified as a string</td><td>String</td></tr><tr><td><code>currency</code></td><td>Required</td><td>The currency used to denominate the limit field - one of "USD", "EUR"</td><td>String</td></tr></tbody></table>

Example Body:

```json
{
    "description": "TransferAmountLimit", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "TransferAmountLimit",
        "limit": "10",
        "currency": "USD",
    }
}
```



### Always Activated Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which always triggers:

<table><thead><tr><th width="220">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "AlwaysActivated"</td><td>Enumerated Type</td></tr></tbody></table>

Example Body:

```json
{
    "description": "AlwaysActivated", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "AlwaysActivated"
    }
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "id": "pr-tennessee-artist-f2078ea085",
   "version": "f1b1me4kd",
   "kind": "TransferAmountLimit",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "description": "Test Rule 1 PaymentAmountLimit",
   "name": "Test Rule 1",
   "configuration": {
       "kind": "TransferAmountLimit",
       "limit": "10",
       "currency": "USD"
   },
   "tags": [],
   "dateCreated": "2022-07-14T21:22:54.829Z",
   "status": "Enabled"
}
```
