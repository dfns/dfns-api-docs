# GetAddressForNetwork

`GET /public-keys/{PublicKeyId}/address?network={NetworkEnum}`

Retrieves a blockchain address for a specific public key and network combination.&#x20;

### Required Permissions

PublicKeyAddresses:Read, PublicKeys:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| `PublicKeyId`  | <p>Unique identifier of the <code>PublicKey</code> like:<br><br><code>pk-orange-magnesium-a0606d08b2</code></p> |

#### Query string parameters <a href="#request-example.1" id="request-example.1"></a>

| Path parameter | Description                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NetworkEnum`  | Enumerated type representing the Blockchain network from the list found [here](https://dfns.gitbook.io/dfns-docs/api-docs/dfns-api-enumerated-types#network).  |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/public-keys/pk-orange-magnesium-a0606d08b2/address?network=ETH" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "ETH",
    "address": "0xC6D783CaFB28bc0125cA6CCFab520710b0856A1b"
}
```
