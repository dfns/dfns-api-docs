# List Permission Assignments

`GET /permissions/{permissionId}/assignments`

Retrieves a list of permission assignments (success) or gives a reason why it's not possible (failure).

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                         | Conditions      |
| ---------------------------- | --------------- |
| `PermissionAssignments:Read` | Always Required |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response will contain a list of assignment objects similar to the ones below:

<pre class="language-json"><code class="lang-json"><strong>{
</strong><strong>    items: [
</strong>        {
            "id": "as-stream-pizza-08edcfff93",
            "permissionId": "pm-orange-apple-2b17a80613",
            "identityId": "oe-louisiana-one-6cf5e80c205c",
            "isImmutable": false,
            "dateCreated": "2022-10-26T09:48:31.247Z",
            "dateUpdated": "2022-10-26T09:48:31.247Z"
        }
    ]
}
</code></pre>
