# ListPolicyRules

`GET /policies/policy-rules/`

Lists all `PolicyRules` belonging to an Org.

### Required Permissions

PolicyRules:ListPolicyRule

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/policies/policy-rules/" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of policy rules:

```json
{
   "items": [
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
      }, 
...
   ]
}
```



