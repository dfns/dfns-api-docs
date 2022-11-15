# ArchivePolicyRule

`DELETE /policies/policy-rules/{policyRuleId}`

Archives a `PolicyRule` its `id`.  Archived policy rules will no longer be enforced.

### Required Permissions

PolicyRules:Archive

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| `policyRuleId` | <p>Unique identifier of the policy rule like:<br><br><code>pr-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X DELETE "/policies/policy-rules/pc-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the status is now set to `Archived`:

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
   "status": "Archived"
}
```



