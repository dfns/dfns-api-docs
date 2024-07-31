# List Wallets

`GET /wallets/?ownerId={userId}&paginationToken={token}`

Retrieves a list of wallets.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name           | Conditions      |
| -------------- | --------------- |
| `Wallets:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Query parameters <a href="#path-parameters" id="path-parameters"></a>

<table><thead><tr><th>Query string parameter</th><th width="196">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>ownerId</code></td><td>Optional</td><td>Filters the wallets returned to the  userId of the owner of the wallets.  Can be used to get all wallets belonging to a specific end user. </td><td>String</td></tr><tr><td><code>ownerUsername</code></td><td>Optional</td><td>Filters the wallets returned to the  username of the owner of the wallets.  Can be used to get all wallets belonging to a specific end user.</td><td>String</td></tr><tr><td><code>limit</code></td><td>Optional</td><td>Maximum number of items to return. Default to 50.</td><td>Number</td></tr><tr><td><code>paginationToken</code></td><td>Optional</td><td>Opaque token used to retrieve the next page. Returned as <code>nextPageToken</code> from the previous request.</td><td>String</td></tr></tbody></table>

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
  {
    "id": "pk-september-sad-3...18",
    "network": "EthereumGoerli",
    "status": "Active",
    "signingKey": {
        "scheme": "ECDSA",
        "curve": "secp256k1",
        "publicKey": "03e849e03fa8b962...cc6e3"
     },
     "address": "0xf42d9f717e0223a70ae195d1d31b798dc8a8b1d2",
     "dateCreated": "2021-01-01T00:00:00.000Z",
     "custodial": true,
     "tags": []
   },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
