# List Permissions

`GET /permissions`

Retrieves a list of permissions (success) or gives a reason why it's not possible (failure).

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../advanced-topics/authentication/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../advanced-topics/authentication/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Permissions:Read` | Always Required |

## Triggers <a href="#triggers.1" id="triggers.1"></a>

`PermissionManagement`

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains a list of permission objects:

<pre class="language-json"><code class="lang-json"><strong>{    
</strong><strong>    items: [
</strong>        {
            "id": "pm-orange-apple-2b17a80613",
            "orgId": "organization-id",
            "name": "US",
            "operations": [
                "AssetAccounts:Read"
            ],
            "status": "Active",
            "predicateIds": [],
            "isImmutable": false,
            "dateCreated": "2022-10-26T08:30:25.348Z",
            "dateUpdated": "2022-10-26T08:30:25.348Z",
            "isArchived": false
        }
    ]
}
</code></pre>
