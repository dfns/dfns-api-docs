# CreatePolicyRule

`POST /policies/policy-rules`

Policy Rules determine when Policy Executions are created.   The type of policy rule applied is determined by the `kind` field in the nested `configuration` object.  These are the supported kinds:

* `PaymentAmountLimit`: Trigger the policy if the payment is over a given limit.
* `PaymentAmountOutgoingVelocity`: Trigger the policy if more than a given limit of funds have been transferred within a given time window.
* `Siphoning`: Trigger the policy if more than a given limit of transactions have been initiated within a given time window.
* `AlwaysActivatedRule`: Always trigger the policy.

### Required Permissions <a href="#scopes" id="scopes"></a>

PolicyRules:CreatePolicyRule

### Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Rules:

| Request body fields | Required/Optional | Description                                           | Type   |
| ------------------- | ----------------- | ----------------------------------------------------- | ------ |
| `name`              | Required          | A name for the rule                                   | String |
| `description`       | Required          | A description for the rule                            | String |
| `configuration`     | Required          | A nested object specifying details of the Policy Rule | Object |

#### Amount Limit Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if the Payment amount is over the specified amount:

| Request body fields | Required/Optional | Description                                                                  | Type                     |
| ------------------- | ----------------- | ---------------------------------------------------------------------------- | ------------------------ |
| `kind`              | Required          | Specify: "PaymentAmountLimit"                                                | Enumerated Type (String) |
| `limit`             | Required          | The amount over which the policy should trigger - specified as a string      | String                   |
| `assetSymbol`       | Required          | The currency used to denominate the limit field - one of "USD", "EUR", "ETH" | String                   |



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

| Request body fields | Required/Optional | Description                                                                  | Type                     |
| ------------------- | ----------------- | ---------------------------------------------------------------------------- | ------------------------ |
| `kind`              | Required          | Specify: "PaymentAmountOutgoingVelocity"                                     | Enumerated Type (String) |
| `velocity`          | Required          | The amount over which the policy should trigger - specified as a string      | String                   |
| `assetSymbol`       | Required          | The currency used to denominate the limit field - one of "USD", "EUR", "ETH" | String                   |
| `intervalInMinutes` | Required          | The time window in minutes in which to watch for outgoing payments           | Integer                  |

Example Body:

```json
{
    "description": "OutgoingPaymentVelocity testing", 
    "name": "poliy rule no.1",
    "configuration": {
        "kind": "PaymentAmountOutgoingVelocity",
        "velocity": "1",
        "assetSymbol": "ETH",
        "intervalInMinutes": 60,
    
```

#### Siphoning Rule

Use the following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if more than a given limit of transactions have been initiated within a given time window:

| Request body fields | Required/Optional | Description                                                        | Type                     |
| ------------------- | ----------------- | ------------------------------------------------------------------ | ------------------------ |
| `kind`              | Required          | Specify: "Siphoning"                                               | Enumerated Type (String) |
| `maxTxCount`        | Required          | The amount of transactions over which the policy should trigger    | Integer                  |
| `intervalInMinutes` | Required          | The time window in minutes in which to watch for outgoing payments | Integer                  |

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

| Request body fields | Required/Optional | Description                    | Type                     |
| ------------------- | ----------------- | ------------------------------ | ------------------------ |
| `kind`              | Required          | Specify: "AlwaysActivatedRule" | Enumerated Type (String) |

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
curl -X POST "/assets/asset-accounts/{assetAccountId}/payments"

```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a **date stamp** and a **new payment ID**, confirming that a new payment of the correct **amount** and **type** is being **initiated**:

```json
// Some codeo
```

### Notes <a href="#notes" id="notes"></a>

When the payment is in the process of being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the `GetPaymentById` method.

``

`RESTful Endpoint: POST /policies/policy-rules`

Scopes:

* as API Key:&#x20;
* as Employee Auth: PolicyRules:CreatePolicyRule

Creates new `PolicyRule` entity.

## Input Body Parameters

* activityKind:
* isImmutable:
* description:
* name:
* controlIds:
* ruleIds:
* status:
* filter:

_Please consult OpenAPI file full breakdown and including nested properties._

## Successful Response

* id: `EntityId`.
* version: `String`.
* activityKind: `PolicyActivityKind`.
* tags: `Tag[]`.
* dateCreated: `IsoDatetime`.
* isImmutable: `Bool`.
* orgId: `EntityId`.
* description: `String`.
* author: `Username`.
* name: `String`.
* status: `PolicyStatus`.
* controlIds: `EntityId[]`.
* ruleIds: `EntityId[]`.
* filter: `PolicyObjectFilter`.

## Error Responses

### `400` **invalidPolicyPayload**

Payload is invalid. Please see `causes` field to see details and reasons.

* serviceName: `String`.
* message: `String`.
* causes: `String[]`.
* shouldTriggerInvestigaton: `Bool`.
* isDfnsError: `Bool`.
* httpStatus: `Integer`.
* errorName: `String`.
