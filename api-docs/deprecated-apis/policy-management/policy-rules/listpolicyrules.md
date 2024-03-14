# List Policy Rules

`GET /policies/policy-rules/`

Lists all `PolicyRules` belonging to an Org.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `PolicyRules:Read` | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of policy rules:

```json
{
   "items": [
      {
         "id": "pr-tennessee-artist-f2078ea085",
         "version": "f1b1me4kd",
         "kind": "TransferAmountLimit",
         "orgId": "cu-purple-pip-1b417b958500",
         "author": "oe-nine-artist-9de60fef6963",
         "description": "Test Rule 1 PaymentAmountLimit",
         "name": "Test Rule 1",
         "configuration": {
             "kind": "TransferAmountLimit",
             "limit": "10",
             "currency": "USD"
         },
         "tags": [],
         "dateCreated": "2022-07-14T21:22:54.829Z",
         "status": "Enabled"
      }, 
...
   ]
}
```
