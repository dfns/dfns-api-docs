# List Policies

`GET /policies`

Lists all `Policies` belonging to an Org.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name            | Conditions      |
| --------------- | --------------- |
| `Policies:Read` | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of policies:

```json
{
   "items": [
      {
           "controlIds": [
               "pc-table-pennsylvania-269c9cfee9"
           ],
           "author": "oe-nine-artist-9de60fef6963",
           "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
           "description": "Test AlwaysActive",
           "version": "f1d7d94gm",
           "orgId": "cu-purple-pip-1b417b958500",
           "activityKind": "WalletsGenerateSignature",
           "ruleIds": [
               "pr-nebraska-november-finch-4e10e32a0d"
           ],
           "dateCreated": "2022-07-19T19:58:21.334Z",
           "name": "Anti Theft Policy",
           "id": "pl-mockingbird-seventeen-c14e223d70",
           "status": "Enabled"
        }, 
...
   ]
}
```
