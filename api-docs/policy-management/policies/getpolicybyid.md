# Get Policy By ID

`GET /policies/policies/{policyId}`

Retrieves a `Policy` by its `id`.

### Required Permissions

Policies:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="248">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>policyId</code></td><td>Unique identifier of the policy like:<br><br><code>pl-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/policies/policies/pl-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the policy has been enabled:

```json
{
   "controlIds": [
       "pc-table-pennsylvania-269c9cfee9"
   ],
   "author": "oe-nine-artist-9de60fef6963",
   "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
   "description": "Test AlwaysActive",
   "version": "f1d7d94gm",
   "orgId": "cu-purple-pip-1b417b958500",
   "activityKind": "CreatingSignature",
   "ruleIds": [
       "pr-nebraska-november-finch-4e10e32a0d"
   ],
   "dateCreated": "2022-07-19T19:58:21.334Z",
   "name": "Anti Theft Policy",
   "id": "pl-mockingbird-seventeen-c14e223d70",
   "status": "Enabled"
}
```



