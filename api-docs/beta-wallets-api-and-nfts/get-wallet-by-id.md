# Get Wallet by ID

`GET /wallets/{walletId}`

Retrieves a Wallet by its ID.

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:Read

### Parameters <a href="#request-example.1" id="request-example.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln"
```

### Response <a href="#response" id="response"></a>

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "status": "Active",
  "network": "ETH_SEPOLIA",
  "address": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47",
  "name": "my-wallet",
  "tags": [],
  "dateCreated": "2023-04-14T20:41:28.715Z"
}
```
