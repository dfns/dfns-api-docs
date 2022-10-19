# UpdatePolicy

`PUT /policies/policies/{policyId}`

Updates a `Policy` by its `id`.  See [CreatePolicy](createpolicy.md) for a full description of body fields to pass.&#x20;

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X PUT "/policies/policy-controls/pl-orange-magnesium-a0606d08b2" \
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
   "isImmutable": false,
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

