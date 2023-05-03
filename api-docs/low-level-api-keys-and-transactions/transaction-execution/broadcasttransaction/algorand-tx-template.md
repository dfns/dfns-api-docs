# AlgorandTx Template

Use this template to broadcast to Algorand chain.  For more on these fields, see the [official documentation](https://developer.algorand.org/docs) and [whitepaper](https://algorandcom.cdn.prismic.io/algorandcom%2Fece77f38-75b3-44de-bc7f-805f0e53a8d9_theoretical.pdf).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `to`                   | Optional                     | Representation of Algorand address of recipient.                                                                                                                                                                                                                                                                                                  | String                                    |
| `value`                   | Required if making a payment or send assets                     | Amount of the native currency to transfer denominated in WEI. Please see [here](https://developer.algorand.org/docs/get-started/basics/why_algorand/#the-native-currency).                                                                                                                                                                                                                                                                                                  | String                                    |
| `type`                   | Required                     | Type of transaction.                                                                                                                                                                                                                                                                                                  | String(Type: Payment='pay', KeyRegistration='keyreg', AssetCreate='ac', AssetDestroy='ad', AssetConfig='acfg', AssetFreeze='afrz', AssetTransfer='axfer', ApplicationCall='appl', ApplicationCallCreate='applc', ApplicationCallUpdate='applu', ApplicationCallDelete='appld', ApplicationCallOptIn='appoi', ApplicationCallCloseOut='appco', ApplicationCallClearState='appcs', ApplicationCallNoOp='appno')                                    |
| `note`                   | Optional                     | Encoded hex string of arbitrary data for sender to store. Data up to 1000 bytes                                                                                                                                                                                                                                                                                                  | String                                    |
| `rekeyTo`                   | Optional                     | Specifies the authorized address. This address will be used to authorize all future transactions. .                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteKey`                   | Required for online                     | The root participation public key. For key deregistration, leave empty or not send. See Generate a Participation Key [here](https://developer.algorand.org/docs/run-a-node/participate/generate_keys/).                                                                                                                                                                                                                                                                                                  | String                                    |
| `selectionKey`                   | Required for online                     | The VRF public key. For key deregistration, leave empty or not send.                                                                                                                                                                                                                                                                                                  | String                                    |
| `stateProofKey`                   | Required for online                     | The 64 byte state proof public key commitment. For key deregistration, leave empty or not send.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteFirst`                   | Required for online                     | The first round that the participation key is valid. Not to be confused with the FirstValid round of the keyreg transaction..                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteLast`                   | Required for online                     | The last round that the participation key is valid. Not to be confused with the LastValid round of the keyreg transaction.                                                                                                                                                                                                                                                                                                  | String                                    |
| `voteKeyDilution`                   | Required for online                     | This is the dilution for the 2-level participation key. It determines the interval (number of rounds) for generating new ephemeral keys.                                                                                                                                                                                                                                                                                                  | String                                    |
| `nonParticipation`                   | Optional                     | All new Algorand accounts are participating by default. This means that they earn rewards. Mark an account nonparticipating by setting this value to true and this account will no longer earn rewards. It is unlikely that you will ever need to do this and exists mainly for economic-related functions on the network.                                                                                                                                                                                                                                                                                                  | Boolean                                    |
| `total`                   | Required on creation                     | The total number of base units of the asset to create. This number cannot be changed.                                                                                                                                                                                                                                                                                                  | String                                    |
| `decimals`                   | Required on creation                     | The number of digits to use after the decimal point when displaying the asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, if 3, the base unit of the asset is in thousandths, and so on up to 19 decimal places.                                                                                                                                                                                                                                                                                                  | String                                    |
| `defaultFrozen`                   | Required on creation                     | True to freeze holdings for this asset by default.                                                                                                                                                                                                                                                                                                  | Boolean                                    |
| `manager`                   | Optional                     | The address of the account that can manage the configuration of the asset and destroy it.                                                                                                                                                                                                                                                                                                  | String                                    |
| `reserve`                   | Optional                     | The address of the account that holds the reserve (non-minted) units of the asset. This address has no specific authority in the protocol itself. It is used in the case where you want to signal to holders of your asset that the non-minted units of the asset reside in an account that is different from the default creator account (the sender).                                                                                                                                                                                                                                                                                                  | String                                    |
| `freeze`                   | Optional                     | The address of the account used to freeze holdings of this asset. If empty, freezing is not permitted.                                                                                                                                                                                                                                                                                                  | String                                    |
| `clawback`                   | Optional                     | The address of the account that can clawback holdings of this asset. If empty, clawback is not permitted.                                                                                                                                                                                                                                                                                                  | String                                    |
| `unitName`                   | Optional                     | The name of a unit of this asset. Supplied on creation. Max size is 8 bytes. Example: USDT.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetName`                   | Optional                     | The name of the asset. Supplied on creation. Max size is 32 bytes. Example: Tether.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetURL`                   | Optional                     | Specifies a URL where more information about the asset can be retrieved. Max size is 96 bytes.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetMetadataHash`                   | Optional                     | 	This field is intended to be a 32-byte hash of some metadata that is relevant to your asset and/or asset holders. The format of this metadata is up to the application. This field can only be specified upon creation. An example might be the hash of some certificate that acknowledges the digitized asset as the official representation of a particular real-world asset.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetIndex`                   | Required for modification asset                     | The unique ID of the asset to be transferred..                                                                                                                                                                                                                                                                                                  | String                                    |
| `freezeTarget`                   | Optional                     | The address of the account whose asset is being frozen or unfrozen.                                                                                                                                                                                                                                                                                                  | String                                    |
| `freezeState`                   | Optional                     | true if freezeTarget should be frozen, false if freezeTarget should be allowed to transact.                                                                                                                                                                                                                                                                                                  | Boolean                                    |
| `closeRemainderTo`                   | Optional                     | When set, it indicates that the transaction is requesting that the Sender account should be closed, and all remaining funds, after the fee and amount are paid, be transferred to this address..                                                                                                                                                                                                                                                                                                  | String                                    |
| `revocationTarget`                   | Optional                     | Representation of Algorand address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `onComplete`                   | Required fpr application call                     | Defines what additional actions occur with the transaction. See the OnComplete section of the TEAL spec for details.                                                                                                                                                                                                                                                                                                  | String                                    |
| `approvalProgram`                   | Optional                     | Encoded hex string of TEAL program. Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.                                                                                                                                                                                                                                                                                                  | String                                    |
| `clearProgram`                   | Optional                     | Encoded hex string of TEAL program.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numLocalInts`                   | Required for the create application call.                     | Restricts number of ints in per-user local state. Maximum number of integer values that may be stored in the [global || local] application key/value store. Immutable.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numLocalByteSlices`                   | Required for the create application call.                     | Blockchain address.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numGlobalInts`                   | Optional                     | Restricts number of ints in global state.                                                                                                                                                                                                                                                                                                  | String                                    |
| `numGlobalByteSlices`                   | Optional                     | Restricts number of ints in global state.                                                                                                                                                                                                                                                                                                  | String                                    |
| `appArgs`                   | Optional                     | Transaction specific arguments accessed from the application's approval-program and clear-state-program..                                                                                                                                                                                                                                                                                                  | Array(String)                                    |
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
