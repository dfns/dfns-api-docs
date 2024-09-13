# Get Exchange

`GET /exchanges/{exchangeID}`

Gets the specified exchange integration.&#x20;

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Exchanges:Read` | Always Required |

## Path parameters <a href="#response" id="response"></a>

| Path parameter | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `exchangeID`   | Unique identifier of the `Exchange`. ex. ex`-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Response <a href="#native-currency-request-body" id="native-currency-request-body"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "ex-lna4c-h5hr8-xxxxxxxxxxxxxxx",
  "name": "kraken",
  "kind": "Kraken",
  "dateCreated": "2024-09-12T15:14:14.107Z"
}
```
