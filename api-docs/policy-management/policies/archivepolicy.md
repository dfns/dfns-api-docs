# ArchivePolicy

`DELETE /policies/{policyId}`

Archives a `Policy` by its `id`.  Archived policies will no longer be enforced.

### Required Permissions

Policies:Archive

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| `policyId`     | <p>Unique identifier of the policy like:<br><br><code>pl-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X DELETE "/policies/policies/pl-orange-magnesium-a0606d08b2" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Note the status is now set to `Archived`:

```json
{
    "activityKind": "CreatingSignature",
    "archivedDate": "2022-10-18T20:05:55.270Z",
    "author": "oe-nine-artist-9de60fef6963",
    "controlIds": [
        "pc-ohio-queen-ae133b2477"
    ],
    "dateCreated": "2022-10-18T20:05:26.858Z",
    "description": "Test AlwaysActive",
    "id": "pl-seven-nuts-66fda0f94a",
    "name": "Anti Theft Policy",
    "orgId": "cu-purple-pip-1b417b958500",
    "ruleIds": [
        "pr-jig-timing-09c7892d48"
    ],
    "status": "Archived",
    "version": "f36b0dnb2",
    "versionedId": "pl-seven-nuts-66fda0f94a@f36b0dnb2"
}
```



