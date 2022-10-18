# ArchivePolicy

`DELETE /policies/{policyId}`

Archives a `Policy` by its `id`.  Archived policies will no longer be enforced.

### Required Permissions

Policies:ArchivePolicy

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

```json
TODO
```



