# Create Signature

`POST /public-keys/{PublicKeyId}/signatures`

Signs the message in the `hash` field corresponding to the specified `PublicKey`. Note the request may be asynchronous - call [GetSignatureById](getsignaturebyid.md) to check status and get the associated signature components once complete.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                | Conditions      |
| ------------------- | --------------- |
| `Signatures:Create` | Always Required |

## Triggers <a href="#request-body" id="request-body"></a>

Policy Engine for [Policies](../../policy-management/policies/createpolicy.md) with a `CreatingSignature` `activityKind`.

## Parameters

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th width="266">Path parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>PublicKeyId</code></td><td>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></td></tr></tbody></table>

## Request body <a href="#request-example.1" id="request-example.1"></a>

<table><thead><tr><th width="173">Request body fields</th><th width="111">Required/Optional</th><th width="268">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>hash</code></td><td>Required</td><td>Any message to sign. Usually a transaction hash.</td><td>String</td></tr></tbody></table>

Note: Any size message can be signed. For ECDSA signatures, first hash the message with SHA256 and then pass the result in the `hash` body parameter (exactly 32 bytes are required as input). For EdDSA signatures, the original message is sent in the `hash` parameter and accepted regardless of length.

## Request example <a href="#request-example.1" id="request-example.1"></a>

```JSON
{
  "hash": "0x561b555fac475c204fff5d709823f0ab4fcc826bd00900e4e8db26e7e5e328b2"
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

Requests will normally return status Pending. Call [GetSignatureById](getsignaturebyid.md) to check status and get the associated signature components (`r` and `s`) once `Executed` (for a mathematical explanation of the signature components, see [Wikipedia](https://en.wikipedia.org/wiki/Elliptic\_Curve\_Digital\_Signature\_Algorithm)). The `v` component of the signature is returned in the `recid`.

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
