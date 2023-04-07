# SolanaTx Template

Use this template to broadcast to Solana chain.  For more on these fields, see the [official program documentation](https://docs.rs/solana-program/1.15.2/solana_program), [official token documentation](https://docs.rs/spl-token/latest/spl_token/) and [official solana web3.js documentation](https://solana-labs.github.io/solana-web3.js).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `instructions`                   | Required                     | The smallest contiguous unit of execution logic in a program. An instruction specifies which program it is calling, which accounts it wants to read or modify, and additional data that serves as auxiliary input to the program. A client can include one or multiple instructions in a transaction. An instruction may contain one or more cross-program invocations.                                                                                                                                                                                                                                                                                                  | Array(TransactionInstruction)                                    |
| `recentBlockhash`                   | Optional                     | Recent blockhash. A blockhash contains a 32-byte SHA-256 hash. It is used to indicate when a client last observed the ledger.                                                                                                                                                                                                                                                                                                  | String                                    |
| `lastValidBlockHeight`                   | Optional                     | (u64) - last block height at which the blockhash will be valid. The number of blocks beneath the current block.                                                                                                                                                                                                                                                                                                  | Number                                    |
| `minNonceContextSlot`                   | Optional                     | If this is a nonce transaction this represents the minimum slot from which to evaluate if the nonce has advanced when attempting to confirm the transaction. This protects against a case where the transaction confirmation logic loads the nonce account from an old slot and assumes the mismatch in nonce value implies that the nonce has been advanced.                                                                                                                                                                                                                                                                                                  | Number                                    |
| `nonceInfo`                   | Optional                     | Options to construct a durable nonce transaction.Durable transaction nonces are a mechanism for getting around the typical short lifetime of a transaction's recent_blockhash. They are implemented as a Solana Program, the mechanics of which can be read about in the [proposal](https://docs.solana.com/offline-signing/durable-nonce).                                                                                                                                                                                                                                                                                                  | NonceInformation                                    |

#### TransactionInstruction fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `keys`                   | Required                     | Public keys to include in this transaction Boolean represents whether this pubkey needs to sign the transaction.                                                                                                                                                                                                                                                                                                  | Array(AccountMeta)                                    |
| `programId`                   | Required                     | Program Id to execute.                                                                                                                                                                                                                                                                                                    | String(Programs: System = '11111111111111111111111111111111', Config = 'Config1111111111111111111111111111111111111', Stake = 'Stake11111111111111111111111111111111111111', Vote = 'Vote111111111111111111111111111111111111111', Ed25519 = 'Ed25519SigVerify111111111111111111111111111', Secp256k1 = 'KeccakSecp256k11111111111111111111111111111')                                    |
| `data`                   | Optional                     | Program input. Encoded hex string(the number of bytes). [Official docs](https://solana-labs.github.io/solana-web3.js/) has related methods(instructions) with fields which we can to add to target.                                                                                                                                                                                                                                                                                                  | String                                    |

#### AccountMeta fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `pubkey`                   | Required                     |An account's public key. base-58 encoded string.                                                                                                                                                                                                                                                                                                  | String                                    |
| `isSigner`                   | Required                     | True if an instruction requires a transaction signature matching pubkey.                                                                                                                                                                                                                                                                                                  | Boolean                                    |
| `isWritable`                   | Required                     | True if the pubkey can be loaded as a read-write account..                                                                                                                                                                                                                                                                                                  | Boolean                                    |

#### NonceInformation fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `nonce`                   | Required                     |The current blockhash stored in the nonce. Encoded hex string..                                                                                                                                                                                                                                                                                                  | String                                    |
| `nonceInstruction`                   | Required                     | AdvanceNonceAccount Instruction.                                                                                                                                                                                                                                                                                                  | Array(TransactionInstruction)                                    |




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
        "recentBlockhash": "",
        "lastValidBlockHeight": "",
        "minNonceContextSlot": "",
        "nonceInfo": {},
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"SOL\",\"templateKind\":\"SolanaTx\",\"instructions\":\"[]\",\"recentBlockhash\":\"0x\",\"lastValidBlockHeight\":\"0x\",\"minNonceContextSlot\":\"0x\",\"nonceInfo\":\"{}\"\"}",
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
