# CreatePolicyRule

`POST /policies/policy-rules`

Policy Rules determine when Policy Executions are created.   The type of policy rule applied is determined by the `kind` field in the nested `configuration` object.  See all possible options below.&#x20;

### Required Operations <a href="#scopes" id="scopes"></a>

PolicyRules:CreatePolicyRule



### Request body <a href="#request-body" id="request-body"></a>

The following fields are common to all kinds of Policy Rules:

| Request body fields | Required/Optional | Description                                           | Type   |
| ------------------- | ----------------- | ----------------------------------------------------- | ------ |
| name                | Required          | A name for the rule                                   | String |
| `description`       | Required          | A description for the rule                            | String |
| `configuration`     | Required          | A nested object specifying details of the Policy Rule | Object |

#### Amount Limit Rule

Use following fields in the nested `configuration` object to create a Policy Rule which triggers a Policy Execution if the Payment amount is over the specified amount:

| Request body fields | Required/Optional | Description                                                                  | Type                     |
| ------------------- | ----------------- | ---------------------------------------------------------------------------- | ------------------------ |
| `kind`              | Required          | "PaymentAmountLimit"                                                         | Enumerated Type (String) |
| `limit`             | Required          | The amount over which the policy should trigger - specified as a string      | String                   |
| `assetSymbol`       | Required          | The currency used to denominate the limit field - one of "USD", "EUR", "ETH" | String                   |

### &#x20;<a href="#request-example.1" id="request-example.1"></a>

### Request example <a href="#request-example.1" id="request-example.1"></a>

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
