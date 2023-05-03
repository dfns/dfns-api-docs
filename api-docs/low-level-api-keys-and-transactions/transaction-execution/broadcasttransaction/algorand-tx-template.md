# AlgorandTx Template

Use this template to broadcast to Algorand chain.  For more on these fields, see the [official documentation](https://developer.algorand.org/docs) and [whitepaper](https://algorandcom.cdn.prismic.io/algorandcom%2Fece77f38-75b3-44de-bc7f-805f0e53a8d9_theoretical.pdf).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `to`                   | Optional                     | Representation of Algorand address of recipient.                                                                                                                                                                                                                                                                                                  | String                                    |
| `value`                   | Required if making a payment or send assets                     | Amount of the native currency to transfer denominated in WEI. Please see [here](https://developer.algorand.org/docs/get-started/basics/why_algorand/#the-native-currency).                                                                                                                                                                                                                                                                                                  | String                                    |
| `type`                   | Required                     | Type of transaction.                                                                                                                                                                                                                                                                                                  | String(Type: Payment='pay', KeyRegistration='keyreg', AssetCreate='ac', AssetDestroy='ad', AssetConfig='acfg', AssetFreeze='afrz', AssetTransfer='axfer', ApplicationCall='appl', ApplicationCallCreate='applc', ApplicationCallUpdate='applu', ApplicationCallDelete='appld', ApplicationCallOptIn='appoi', ApplicationCallCloseOut='appco', ApplicationCallClearState='appcs', ApplicationCallNoOp='appno')                                    |
| `note`                   | Optional                     | Encoded hex string of arbitrary data for sender to store.                                                                                                                                                                                                                                                                                                  | String                                    |
| `rekeyTo`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteKey`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `selectionKey`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `stateProofKey`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteFirst`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteLast`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteKeyDilution`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `nonParticipation`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `total`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `decimals`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `defaultFrozen`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `manager`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `reserve`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `freeze`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `clawback`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `unitName`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetName`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetURL`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetMetadataHash`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetIndex`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `freezeTarget`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `freezeState`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `closeRemainderTo`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `revocationTarget`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `onComplete`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `approvalProgram`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `clearProgram`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numLocalInts`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numLocalByteSlices`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numGlobalInts`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numGlobalByteSlices`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `appArgs`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `accounts`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `foreignApps`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `foreignAssets`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `boxes`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `lease`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `extraPages`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `appIndex`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `strictEmptyAddressChecking`                   | Optional                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |


#### BoxReference fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `appIndex`                   | Required                     | Public keys to include in this transaction Boolean represents whether this pubkey needs to sign the transaction.                                                                                                                                                                                                                                                                                                  | Array(AccountMeta)                                    |
| `name`                   | Required                     | Program Id to execute.                                                                                                                                                                                                                                                                                                    | String(Programs: System = '11111111111111111111111111111111', Config = 'Config1111111111111111111111111111111111111', Stake = 'Stake11111111111111111111111111111111111111', Vote = 'Vote111111111111111111111111111111111111111', Ed25519 = 'Ed25519SigVerify111111111111111111111111111', Secp256k1 = 'KeccakSecp256k11111111111111111111111111111')                                    |




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
