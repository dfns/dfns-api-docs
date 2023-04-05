# SolanaGenericTx Template

Use this template to broadcast to Solana chains.  For more on these fields, see the [official program documentation](https://docs.rs/solana-program/1.15.2/solana_program), [official token documentation](https://docs.rs/spl-token/latest/spl_token/) and [official solana web3.js documentation](https://solana-labs.github.io/solana-web3.js).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `instructions`                   | Required                     | The smallest contiguous unit of execution logic in a program. An instruction specifies which program it is calling, which accounts it wants to read or modify, and additional data that serves as auxiliary input to the program. A client can include one or multiple instructions in a transaction. An instruction may contain one or more cross-program invocations.                                                                                                                                                                                                                                                                                                  | Array(TransactionInstruction)                                    |
| `recentBlockhash`                   | Optional                     | Recent blockhash. A blockhash contains a 32-byte SHA-256 hash. It is used to indicate when a client last observed the ledger.                                                                                                                                                                                                                                                                                                  | String                                    |
| `lastValidBlockHeight`                   | Optional                     | (u64) - last block height at which the blockhash will be valid. The number of blocks beneath the current block.                                                                                                                                                                                                                                                                                                  | Number                                    |
| `minNonceContextSlot`                   | Optional                     | If this is a nonce transaction this represents the minimum slot from which to evaluate if the nonce has advanced when attempting to confirm the transaction. This protects against a case where the transaction confirmation logic loads the nonce account from an old slot and assumes the mismatch in nonce value implies that the nonce has been advanced.                                                                                                                                                                                                                                                                                                  | Number                                    |
| `nonceInfo`                   | Optional                     | Options to construct a durable nonce transaction.Durable transaction nonces are a mechanism for getting around the typical short lifetime of a transaction's recent_blockhash. They are implemented as a Solana Program, the mechanics of which can be read about in the [proposal](https://docs.solana.com/offline-signing/durable-nonce).                                                                                                                                                                                                                                                                                                  | NonceInformation                                    |
| `signatures`                 | Optional                     | Signatures for the transaction. Typically created by invoking the sign() method.Signature - A 64-byte ed25519 signature of R (32-bytes) and S (32-bytes). With the requirement that R is a packed Edwards point not of small order and S is a scalar in the range of 0 <= S < L. This requirement ensures no signature malleability. Each transaction must have at least one signature for [fee account](https://docs.solana.com/terminology#fee-account). Thus, the first signature in transaction can be treated as [transaction id](https://docs.solana.com/terminology#transaction-id).            | Array(SignaturePubkeyPair)                                    |


### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "publicKeyId": "pk-orange-magnesium-a0606d08b2",
    "network": "SOL",
    "templateKind": "SolanaGenericTx",

    "instructions": "[]",
    "recentBlockhash": "0x",
    "lastValidBlockHeight": "0x",
    "minNonceContextSlot": "0x",
    "nonceInfo": "{}",
    "signatures": "[]"
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
        "templateKind": "SolanaGenericTx",
        "instructions": "[]",
        "recentBlockhash": "0x",
        "lastValidBlockHeight": "0x",
        "minNonceContextSlot": "0x",
        "nonceInfo": {},
        "signatures": []
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"SOL\",\"templateKind\":\"SolanaGenericTx\",\"instructions\":\"[]\",\"recentBlockhash\":\"0x\",\"lastValidBlockHeight\":\"0x\",\"minNonceContextSlot\":\"0x\",\"nonceInfo\":\"{}\",\"signatures\":\"[]\"}",
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
