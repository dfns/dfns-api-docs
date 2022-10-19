# ListPolicyControlExecutions

`GET /policies/policy-control-executions/`

Lists all `PolicyControlExecutions` belonging to an Org.

### Required Permissions

PolicyControlExecutions:ListPolicyControlExecutions

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/policies/policy-control-executions/" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of policy controls:

```json
{
   "items": [
    {
      "policyExecutionId": "pole-maryland-uranus-5aabe7932c",
      "author": "ce-early-violet-703a68145bca",
      "versionedId": "pce-oven-arizona-40f0948dc9@f1d694k08",
      "controlId": "pc-ack-king-84df80db48",
      "documentedActivity": "{\"receiver\":{\"kind\":\"BlockchainWalletAddress\",\"address\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\"},\"assetSymbol\":\"SOL\",\"amount\":\"0.1\",\"note\":\"TEST-amount-3-1658251350817\",\"assetAccountId\":\"aa-muppet-crazy-b2fa6ab7a8\",\"initiator\":{\"kind\":\"Employee\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"employeeId\":\"ce-early-violet-703a68145bca\"},\"status\":\"Initiated\",\"dateCreated\":\"2022-07-19T17:22:30.962Z\",\"orgId\":\"cu-purple-pip-1b417b958500\",\"receiverAddress\":\"5GZVcXPsJhJtJyQf3qVLw4kYi9KUV2SjNQS6PhyhjgV7\",\"id\":\"pa-black-island-56a129c84f\"}",
      "version": "f1d694k08",
      "dateExecuted": "2022-07-19T17:22:31.304Z",
      "controlKind": "RequestApproval",
      "orgId": "cu-purple-pip-1b417b958500",
      "approverUsernames": ["bob@example.com"],
      "dateFullfiled": null,
      "id": "pce-oven-arizona-40f0948dc9",
      "status": "Awaiting"
    }
, 
...
   ]
}
```

