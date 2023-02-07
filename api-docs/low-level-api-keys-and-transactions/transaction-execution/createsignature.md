# CreateSignature

`POST /public-keys/{PublicKeyId}/signatures`

Signs the message in the `hash` field corresponding to the specified `PublicKey`.  Note the request may be asynchronous - call [GetSignatureById](getsignaturebyid.md) to check status and get the associated signature components once complete.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Signatures:Create

### Triggers <a href="#request-body" id="request-body"></a>

Policy Engine for [Policies](../../policy-management/policies/createpolicy.md) with a `CreatingSignature` `activityKind`.&#x20;

### Parameters

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `PublicKeyId`  | <p>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></p> |

### Request body <a href="#request-example.1" id="request-example.1"></a>

| Request body fields | Required/Optional | Description                                       | Type   |
| ------------------- | ----------------- | ------------------------------------------------- | ------ |
| `hash`              | Required          | Any message to sign.  Usually a transaction hash. | String |

Note: Any size message can be signed.  For ECDSA signatures, first hash the message with SHA256 and then pass the result in the `hash` body parameter as exactly 32 bytes are required as input.  For EdDSA signatures, the original message is sent in the `hash` parameter regardless of length.&#x20;

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/pk-orange-magnesium-a0606d08b2/signatures" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{"hash": "0x561b555fac475c204fff5d709823f0ab4fcc826bd00900e4e8db26e7e5e328b2"}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Requests will normally return status Pending.  Call [GetSignatureById](getsignaturebyid.md) to check status and get the associated signature components (`r` and `s`) once `Executed` (for a mathematical explanation of the signature components, see [Wikipedia](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm)).  The `v` component of the signature is returned in the `recid`.&#x20;

```json
{
   "id": "si-colorado-ten-45249ad166",
   "orgId": "cu-purple-pip-1b417b958500",
   "publicKeyId": "pk-orange-magnesium-a0606d08b2",
   "hash": "0x561b555fac475c204fff5d709823f0ab4fcc826bd00900e4e8db26e7e5e328b2",
   "status": "Pending",
   "r": "",
   "s": "",
   "recid": 0,
   "initiator": {
       "kind": "Employee",
       "orgId": "cu-purple-pip-1b417b958500",
       "employeeId": "oe-nine-artist-9de60fef6963"
   },
   "dateCreated": "2022-07-19T21:41:32.530Z"
}
```
