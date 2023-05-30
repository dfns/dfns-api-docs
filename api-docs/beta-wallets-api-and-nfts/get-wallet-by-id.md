# Get Wallet by ID

`GET /wallets/{WalletID}`

Retrieves a Wallet by it's ID.&#x20;

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:Read

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/wallets" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "wa-kentucky-speaker-d80f55f2a4",
  "orgId": "cu-purple-pip-1b417b958500",
  "status": "Creating",
  "assetSymbol": "ETH",
  "name": "My ETH account",
  "address": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
  "dateCreated": "2022-08-04T14:44:21.278Z",
  "dateUpdate": "2022-08-04T14:44:21.278Z"
}
```

