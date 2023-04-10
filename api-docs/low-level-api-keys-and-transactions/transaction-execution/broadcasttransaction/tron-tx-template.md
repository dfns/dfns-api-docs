# TronTx Template

Use this template to broadcast to the Tron chain, and you can generate values for these parameters by executing the tronWeb javascript SDK method.

# For example

```shell

const unsignedTxn = await tronWeb.transactionBuilder.sendTrx("TVDGpn4hCSzJ5nkHPLetk8KQBtwaTppnkr", 100, "TNPeeaaFB7K9cmo4uQpcU32zGK8G1NYqeL");
 >{
    "visible": false,
    "txID": "9f62a65d0616c749643c4e2620b7877efd0f04dd5b2b4cd14004570d39858d7e",
    "raw_data": {
        "contract": [
            {
                "parameter": {
                    "value": {
                        "amount": 100,
                        "owner_address": "418840e6c55b9ada326d211d818c34a994aeced808",
                        "to_address": "41d3136787e667d1e055d2cd5db4b5f6c880563049"
                    },
                    "type_url": "type.googleapis.com/protocol.TransferContract"
                },
                "type": "TransferContract"
            }
        ],
        "ref_block_bytes": "0add",
        "ref_block_hash": "6c2763abadf9ed29",
        "expiration": 1581308685000,
        "timestamp": 1581308626092
    },
    "raw_data_hex": "0a020add86470ac89dbea822e"
}
```

For more on these transactions parameters and values, see the [official documentation](https://developers.tron.network/v3.7/reference/walletcreatetransaction)..&#x20;

#### Base Fields <a href="#request-example.1" id="request-example.1"></a>

| Request body fields | Required/Optional | Description                                                | Type    |
| ------------------- | ----------------- | ---------------------------------------------------------- | ------- |
| `visible`           | Required          | Whehter the address is in base58 format.                   | Boolean |
| `txID`              | Required          | 64 bit transaction hash.                                   | string  |
| `contract_address`  | Optional          | contract address and it is applicable to deployee contract | string  |
| `raw_data`          | Required          | raw_data will contain sub parameters.                      | Object  |
| `raw_data_hex`      | Required          | Payload Hash.                                              | String  |

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "publicKeyId": "pk-orange-magnesium-a0606d08b2",
    "network": "TRX",
    "templateKind": "TronTx",

    "instructions": "[
            {
                "keys": [
                    {
                        "pubkey": "GWJSC8g5tK7UtfarC5TFaaRTKMvChMJMGYFdu6iGZxfY",
                        "isSigner": true,
                        "isWritable": true
                    },
                    {
                        "pubkey": "4oWsG7HrnS7LcdHZSUYCyk5hfMyX57N9E5T3hSR4zrBy",
                        "isSigner": true,
                        "isWritable": true
                    }
                ],
                "programId": "11111111111111111111111111111111",
                "data": "00000000001716000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000"
            }
        ]",
    "recentBlockhash": "",
    "lastValidBlockHeight": "",
    "minNonceContextSlot": "",
    "nonceInfo": "{}",
}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Status begins as `Initiated` and changes to `Executed` once broadcast to the mempool. Use [GetTransactionById](../gettransactionbyid.md) to query for updated status and to retrieve a blockchain transaction hash.

```json
{
  "transaction": {
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "TRX",
    "templateKind": "TronTx",
    "instructions": [
      {
        "keys": [
          {
            "pubkey": "GWJSC8g5tK7UtfarC5TFaaRTKMvChMJMGYFdu6iGZxfY",
            "isSigner": true,
            "isWritable": true
          },
          {
            "pubkey": "4oWsG7HrnS7LcdHZSUYCyk5hfMyX57N9E5T3hSR4zrBy",
            "isSigner": true,
            "isWritable": true
          }
        ],
        "programId": "11111111111111111111111111111111",
        "data": "00000000001716000000000050000000000000000000000000000000000000000000000000000000000000000000000000000000"
      }
    ],
    "recentBlockhash": "",
    "lastValidBlockHeight": "",
    "minNonceContextSlot": "",
    "nonceInfo": {}
  },
  "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"TRX\",\"templateKind\":\"TronTx\",\"instructions\":\"[]\",\"recentBlockhash\":\"\",\"lastValidBlockHeight\":\"\",\"minNonceContextSlot\":\"\",\"nonceInfo\":\"{}\"\"}",
  "dateUpdated": "2022-10-31T19:10:02.228Z",
  "initiator": {
    "kind": "Employee",
    "employeeId": "oe-nine-artist-9de60fef6963",
    "orgId": "cu-purple-pip-1b417b958500"
  },
  "orgId": "cu-purple-pip-1b417b958500",
  "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
  "network": "TRX",
  "status": "Initiated",
  "id": "tx-sierra-lima-272e2ce093",
  "dateCreated": "2022-10-31T19:10:02.229Z"
}
```
