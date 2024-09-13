# List Exchange Accounts

`GET /exchanges/{exchangeID}/accounts`

Retrieves a list of accounts for the specified exchange.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Exchanges:Read` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `exchangeID`   | Unique identifier of the `Exchange`. ex. ex`-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Response <a href="#native-currency-request-body" id="native-currency-request-body"></a>

### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "items": [
    {
      "id": "spot",
      "name": "spot",
      "exchangeId": "ex-lna4c-h5hr8-xxxxxxxxxxxxxxx",
      "exchangeName": "kraken"
    }
  ]
}
```
