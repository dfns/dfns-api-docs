# List Wallets

`GET /wallets/?paginationToken={token}`

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

| Query string parameter | Required/Optional | Description                                                                                         | Type   |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------- | ------ |
| `limit`                | Optional          | Maximum number of items to return. Default to 50.                                                   | Number |
| `paginationToken`      | Optional          | Opaque token used to retrieve the next page. Returned as `nextPageToken` from the previous request. | String |

## Response <a href="#response" id="response"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
      "id": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
      "status": "Active",
      "network": "EthereumSepolia",
      "address": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
      "name": "my-wallet",
      "tags": [],
      "dateCreated": "2023-04-14T20:41:28.715Z"
    },
    ...
  ],
  "nextPageToken": "WszQXoENUIYyoBQjJm4DE6QhCk2sB7WAh9kykUMaTQcD25SToKbuXkgf3td8ZYb2LrtopPLo35u407gwwA1Sug=="
}
```
