# Delete Exchange

`DEL /exchanges/{exchangeID}`

Deletes the specified exchange integration.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../../api-docs/authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Exchanges:Delete` | Always Required |

## Path parameters <a href="#response" id="response"></a>

| Path parameter | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| `exchangeID`   | Unique identifier of the `Exchange`. ex. ex`-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Response <a href="#native-currency-request-body" id="native-currency-request-body"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "deleted": true
}
```
