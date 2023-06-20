# Create Policy Rule

`POST /policies/policy-rules`

Policy Rules determine when Policy Executions are created.   The type of policy rule applied is determined by the `kind` field in the nested `configuration` object.  These are the supported kinds:

* `PaymentAmountLimit`: Trigger the policy if the payment is over a given limit.
* `PaymentAmountOutgoingVelocity`: Trigger the policy if more than a given limit of funds have been transferred within a given time window.
* `Siphoning`: Trigger the policy if more than a given limit of transactions have been initiated within a given time window.
* `AlwaysActivatedRule`: Always trigger the policy.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `PolicyRules:Create`           | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Rules:

<table><thead><tr><th width="217">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the rule</td><td>String</td></tr><tr><td><code>description</code></td><td>Required</td><td>A description for the rule</td><td>String</td></tr><tr><td><code>configuration</code></td><td>Required</td><td>A nested object specifying details of the Policy Rule</td><td>Object</td></tr></tbody></table>

### Amount Limit Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if the Payment amount is over the specified amount:

<table><thead><tr><th width="238">Request body fields</th><th width="113">Required/Optional</th><th width="240">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "PaymentAmountLimit"</td><td>Enumerated Type</td></tr><tr><td><code>limit</code></td><td>Required</td><td>The amount over which the policy should trigger - specified as a string</td><td>String</td></tr><tr><td><code>assetSymbol</code></td><td>Required</td><td>The currency used to denominate the limit field - one of "USD", "EUR", "ETH"</td><td>String</td></tr></tbody></table>

Example Body:

```json
{
    "description": "PaymentAmountLimit", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "PaymentAmountLimit",
        "limit": "0.0005",
        "assetSymbol": "ETH",
    }
}
```

### Amount Velocity Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if more than a given limit of funds have been transferred within a given time window:

<table><thead><tr><th width="220">Request body fields</th><th width="113">Required/Optional</th><th width="235">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "PaymentAmountOutgoingVelocity"</td><td>Enumerated Type</td></tr><tr><td><code>velocity</code></td><td>Required</td><td>The amount over which the policy should trigger - specified as a string</td><td>String</td></tr><tr><td><code>assetSymbol</code></td><td>Required</td><td>The currency used to denominate the limit field - one of "USD", "EUR", "ETH"</td><td>String</td></tr><tr><td><code>intervalInMinutes</code></td><td>Required</td><td>The time window in minutes in which to watch for outgoing payments</td><td>Integer</td></tr></tbody></table>

Example Body:

```json
{
    "description": "OutgoingPaymentVelocity testing", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "PaymentAmountOutgoingVelocity",
        "velocity": "1",
        "assetSymbol": "ETH",
        "intervalInMinutes": 60
    }
}   
```

### Siphoning Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if more than a given limit of transactions have been initiated within a given time window:

<table><thead><tr><th width="220">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "Siphoning"</td><td>Enumerated Type </td></tr><tr><td><code>maxTxCount</code></td><td>Required</td><td>The amount of transactions over which the policy should trigger </td><td>Integer</td></tr><tr><td><code>intervalInMinutes</code></td><td>Required</td><td>The time window in minutes in which to watch for outgoing payments</td><td>Integer</td></tr></tbody></table>

Example Body:

```json
{
    "description": "Siphoning", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "Siphoning",
        "maxTxCount": 10,
        "intervalInMinutes": 60
    }
}
```

### Always Activated Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which always triggers:

<table><thead><tr><th width="220">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "AlwaysActivatedRule"</td><td>Enumerated Type</td></tr></tbody></table>

Example Body:

```json
{
    "description": "AlwaysActivatedRule", 
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
