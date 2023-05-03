# AlgorandTx Template

Use this template to broadcast to Algorand chain.  For more on these fields, see the [official documentation](https://developer.algorand.org/docs).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `to`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| ``                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |


#### BoxReference fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `keys`                   | Required                     | Public keys to include in this transaction Boolean represents whether this pubkey needs to sign the transaction.                                                                                                                                                                                                                                                                                                  | Array(AccountMeta)                                    |
| `programId`                   | Required                     | Program Id to execute.                                                                                                                                                                                                                                                                                                    | String(Programs: System = '11111111111111111111111111111111', Config = 'Config1111111111111111111111111111111111111', Stake = 'Stake11111111111111111111111111111111111111', Vote = 'Vote111111111111111111111111111111111111111', Ed25519 = 'Ed25519SigVerify111111111111111111111111111', Secp256k1 = 'KeccakSecp256k11111111111111111111111111111')                                    |




### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "publicKeyId": "pk-orange-magnesium-a0606d08b2",
    "network": "SOL",
    "templateKind": "SolanaTx",

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
    "feePayer": "",
    "signatures": "[]",
    "recentBlockhash": "",
    "lastValidBlockHeight": "",
    "minNonceContextSlot": "",
    "nonceInfo": "{}",
}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Status begins as `Initiated` and changes to `Executed` once broadcast to the mempool.  Use [GetTransactionById](../gettransactionbyid.md) to query for updated status and to retrieve a blockchain transaction hash.

```json
{
    "transaction": {
        "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
        "network": "SOL",
        "templateKind": "SolanaTx",
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
        "feePayer": "",
        "signatures": [],
        "recentBlockhash": "",
        "lastValidBlockHeight": "",
        "minNonceContextSlot": "",
        "nonceInfo": {},
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"SOL\",\"templateKind\":\"SolanaTx\",\"instructions\":\"[]\",\"signatures\":\"[]\",\"feePayer\":\"\",\"recentBlockhash\":\"\",\"lastValidBlockHeight\":\"\",\"minNonceContextSlot\":\"\",\"nonceInfo\":\"{}\"\"}",
    "dateUpdated": "2022-10-31T19:10:02.228Z",
    "initiator": {
        "kind": "Employee",
        "employeeId": "oe-nine-artist-9de60fef6963",
        "orgId": "cu-purple-pip-1b417b958500"
    },
    "orgId": "cu-purple-pip-1b417b958500",
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "SOL",
    "status": "Initiated",
    "id": "tx-sierra-lima-272e2ce093",
    "dateCreated": "2022-10-31T19:10:02.229Z"
}
```
