# ArchivePolicyControl

`DELETE /policies/policy-controls/{policyControlId}`

Archives a `PolicyControl` its `id`.  Archived policy controls will no longer be enforced.

### Required Permissions

PolicyControls:Archive

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter    | Description                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| `policyControlId` | <p>Unique identifier of the policy control like:<br><br><code>pc-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X DELETE "/policies/policy-controls/pc-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the status is now set to `Archived`:

```json
{
   "configuration": {
       "timeoutInMinutes": 10,
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
   "name": "Test",
   "id": "pc-foxtrot-harry-ae42882af3",
   "status": "Archived"
}
```



