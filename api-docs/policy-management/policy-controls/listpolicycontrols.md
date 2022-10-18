# ListPolicyControls

`GET /policies/policy-controls/`

Lists all `PolicyControls` belonging to an Org.

### Required Permissions

PolicyControls:ListPolicyControls

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Query parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description |
| -------------- | ----------- |
| `TODO`         |             |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/policies/policy-controls/" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
   "items": [
      {
       "configuration": {
           "timeoutInMinutes": 10,
           "canInitiatorApprove": true,
           "approverUsernames": ["bob@example.com", "seth@example.com"],
           "numApprovals": 1,
           "kind": "RequestApproval"
       },
       "kind": "RequestApproval",
       "author": "oe-nine-artist-9de60fef6963",
       "description": "Test policy control",
       "version": "f1b2121lm",
       "orgId": "cu-purple-pip-1b417b958500",
       "tags": [],
       "dateCreated": "2022-07-14T21:36:42.574Z",
       "isImmutable": false,
       "shouldMergeWithSameControl": false,
       "name": "Test",
       "id": "pc-foxtrot-harry-ae42882af3",
       "status": "Enabled"
    }
, 
...
   ]
}
```

