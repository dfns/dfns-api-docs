# CreatePolicyRule

`POST /policies/policy-rules`

Policy Rules determine when Policy Executions are created.   The type of policy rule applied is determined by the `kind` field in the nested `configuration` object.  These are the supported kinds:

* `PaymentAmountLimit`: Trigger the policy if the payment is over a given limit.
* `PaymentAmountOutgoingVelocity`: Trigger the policy if more than a given limit of funds have been transferred within a given time window.
* `Siphoning`: Trigger the policy if more than a given limit of transactions have been initiated within a given time window.
* `AlwaysActivatedRule`: Always trigger the policy.

### Required Permissions <a href="#scopes" id="scopes"></a>

PolicyRules:Create

### Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Rules:

| Request body fields | Required/Optional | Description                                           | Type   |
| ------------------- | ----------------- | ----------------------------------------------------- | ------ |
| `name`              | Required          | A name for the rule                                   | String |
| `description`       | Required          | A description for the rule                            | String |
| `configuration`     | Required          | A nested object specifying details of the Policy Rule | Object |

#### Amount Limit Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if the Payment amount is over the specified amount:

| Request body fields | Required/Optional | Description                                                                  | Type            |
| ------------------- | ----------------- | ---------------------------------------------------------------------------- | --------------- |
| `kind`              | Required          | Specify: "PaymentAmountLimit"                                                | Enumerated Type |
| `limit`             | Required          | The amount over which the policy should trigger - specified as a string      | String          |
| `assetSymbol`       | Required          | The currency used to denominate the limit field - one of "USD", "EUR", "ETH" | String          |



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

#### Amount Velocity Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if more than a given limit of funds have been transferred within a given time window:

| Request body fields | Required/Optional | Description                                                                  | Type            |
| ------------------- | ----------------- | ---------------------------------------------------------------------------- | --------------- |
| `kind`              | Required          | Specify: "PaymentAmountOutgoingVelocity"                                     | Enumerated Type |
| `velocity`          | Required          | The amount over which the policy should trigger - specified as a string      | String          |
| `assetSymbol`       | Required          | The currency used to denominate the limit field - one of "USD", "EUR", "ETH" | String          |
| `intervalInMinutes` | Required          | The time window in minutes in which to watch for outgoing payments           | Integer         |

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

#### Siphoning Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if more than a given limit of transactions have been initiated within a given time window:

| Request body fields | Required/Optional | Description                                                        | Type             |
| ------------------- | ----------------- | ------------------------------------------------------------------ | ---------------- |
| `kind`              | Required          | Specify: "Siphoning"                                               | Enumerated Type  |
| `maxTxCount`        | Required          | The amount of transactions over which the policy should trigger    | Integer          |
| `intervalInMinutes` | Required          | The time window in minutes in which to watch for outgoing payments | Integer          |

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

#### Always Activated Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which always triggers:

| Request body fields | Required/Optional | Description                    | Type            |
| ------------------- | ----------------- | ------------------------------ | --------------- |
| `kind`              | Required          | Specify: "AlwaysActivatedRule" | Enumerated Type |

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

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/policies/policy-rules" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"description": "PaymentAmountLimit", "name": "poliy rule no.1", "configuration": {"kind": "PaymentAmountLimit","limit": "0.0005","assetSymbol": "ETH",}}'

```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

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

