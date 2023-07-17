# Get Wallet Signature Request by ID

`GET /wallets/{walletId}/signatures/{signatureId}`

Get a signature request of a wallet.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                    | Conditions      |
| ----------------------- | --------------- |
| `Wallets:ReadSignature` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-86l9l9n97hcos0ln`          |
| `signatureId`  | Unique identifier of the signature request. ex. `sg-4tcfd-enph7-955qcvbki7vtaepl` |

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "sg-4tcfd-enph7-955qcvbki7vtaepl",
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
    "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
    "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
  },
  "requestBody": {
    "kind": "Eip712",
    "types": {
      "Person": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "wallet",
          "type": "address"
        }
      ],
      "Mail": [
        {
          "name": "from",
          "type": "Person"
        },
        {
          "name": "to",
          "type": "Person"
        },
        {
          "name": "contents",
          "type": "string"
        }
      ]
    },
    "domain": {
      "name": "Ether Mail",
      "version": "1",
      "chainId": 1,
      "verifyingContract": "0x1b352de7a926ebd1bf52194dab487c2cb0793a9b",
      "salt": "0xf2d857f4a3edcb9b78b4d503bfe733db1e3f6cdc2b7971ee739626c97e86a558"
    },
    "message": {
      "from": {
        "name": "Chris",
        "wallet": "0x00e3495cf6af59008f22ffaf32d4c92ac33dac47"
      },
      "to": {
        "name": "Bob",
        "wallet": "0xcc0ee1a1c5e788b61916c8f1c96c960f9a9d3db7"
      },
      "contents": "Hello, Bob!"
    }
  },
  "status": "Signed",
  "signature": {
    "r": "0xb23c2cfb6d409f5a55ced08f89ae70f3fe89403a5ba907c367545499874f1c7f",
    "s": "0x49992f242a21ae0692c24b43393336744ddc08459d936b6a70542d79df4f66f0",
    "recid": 1,
    "encoded": "0xb23c2cfb6d409f5a55ced08f89ae70f3fe89403a5ba907c367545499874f1c7f49992f242a21ae0692c24b43393336744ddc08459d936b6a70542d79df4f66f01c"
  },
  "dateRequested": "2023-05-15T19:26:18.145Z",
  "dateSigned": "2023-05-15T19:26:20.517Z"
}
```
