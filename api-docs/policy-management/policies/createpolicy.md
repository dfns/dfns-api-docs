# CreatePolicy

`POST /policies/policies`

Policies join [Policy Rules](../policy-rules/createpolicyrule.md) and [Policy Controls ](../policy-controls/createpolicycontrol.md)with an `activityKind` that determines which actions on the API may trigger a Policy Execution.   These are the supported `activityKinds`:

* `PaymentInitiation`: Examine Policy Rules when the [InitiatePayment](../../high-level-api-asset-accounts-and-payments/payments/initiatepayment.md) API is called.
* `CreatingSignature`: Examine Policy Rules when the [CreateSignature](../../low-level-api-keys-and-transactions/transaction-execution/createsignature.md) API is called.
* More policy kinds coming soon...

### Required Permissions <a href="#scopes" id="scopes"></a>

Policies:CreatePolicy

### Request body <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                                     | Type                     |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------ |
| `name`              | Required          | A name for the rule                                                                             | String                   |
| `description`       | Required          | A description for the rule                                                                      | String                   |
| `activityKind`      | Required          | Determines which actions on the API may trigger a Policy Execution. See supported values above. | Enumerated Type (String) |
| `ruleIds`           | Required          | Array of Policy Rule IDs to evaluate                                                            | Array of Strings         |
| `controlIds`        | Required          | Array of Policy Control IDs to apply                                                            | Array of Strings         |
| `status`            | Required          | "Enabled", "Disabled"                                                                           | Enumerated Type (String) |
| `filter`            | Optional          | Specify a list of entities to scope the policy to (eg. wallets)                                 | Object                   |

#### Filter Object

Use the following fields in the nested `filter` object to scope the policy to a specific entity`:`

| Request body fields | Required/Optional | Description                                              | Type                     |
| ------------------- | ----------------- | -------------------------------------------------------- | ------------------------ |
| `kind`              | Required          | Specify: "PublicKey"                                     | Enumerated Type (String) |
| `publicKeyIds`      | Required          | IDs of public keys (wallets) the policy should apply to. | Array of Strings         |



Example Body:

```json
{
    "activityKind": "PaymentInitiation",
    "description": "Preventing theft",
    "name": "Anti Theft Policy",
    "ruleIds": ["pr-edward-shade-d887751054"],
    "controlIds": ["pc-music-william-failed-54497df60b"],
    "status": "Enabled",
    "filter": {
        "kind": "PublicKey",
        "publicKeyIds": ["pk-...", "pk-..."]
    }
}
```

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/policies/policy-controls" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{  "activityKind": "PaymentInitiation",  "description": "Preventing theft",  "name": "Anti Theft Policy",  "ruleIds": ["pr-edward-shade-d887751054"],  "controlIds": ["pc-music-william-failed-54497df60b"],  "status": "Enabled",  "filter": {  "kind": "PublicKey",  "publicKeyIds": ["pk-...", "pk-..."]  }  }'

```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "activityKind": "CreatingSignature",
   "description": "Test AlwaysActive",
   "name": "Anti Theft Policy",
   "ruleIds": [
       "pr-nebraska-november-finch-4e10e32a0d"
   ],
   "controlIds": [
       "pc-table-pennsylvania-269c9cfee9"
   ],
   "status": "Enabled",
   "id": "pl-mockingbird-seventeen-c14e223d70",
   "version": "f1d7d94gm",
   "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
   "orgId": "cu-purple-pip-1b417b958500",
   "author": "oe-nine-artist-9de60fef6963",
   "dateCreated": "2022-07-19T19:58:21.334Z"
}

```

