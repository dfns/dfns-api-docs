# CardanoTx Template

Use this template to broadcast to Cardano chain.  For more on these fields, see the [official documentation](https://developers.cardano.org/docs/get-started/) and [here](https://docs.cardano.org/introduction).&#x20;

#### Fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `to`                   | Optional                     | Representation of Cardano address of recipient. Encoded bech32 string. Please see [here](https://docs.cardano.org/learn/cardano-addresses).                                                                                                                                                                                                                                                                                                  | String                                    |
| `value`                   | Required if making a payment                     | Amount of the native currency to transfer denominated in WEI. Please see [here](https://docs.cardano.org/new-to-cardano/what-is-a-cryptocurrency).                                                                                                                                                                                                                                                                                                  | String                                    |
| `type`                   | Required                     | Type of transaction.                                                                                                                                                                                                                                                                                                  | String(Type: Payment='pay', Assets='assets', MintAssets='mintAssets', BurnAssets='burnAsset', RegisterStake='registerStake', DeregisterStake='deregisterStake', DelegateStake='delegateStake', LockAssetsSmartContract='lockAssetsSmartContract', UnlockAssetsSmartContract='unlockAssetsSmartContract', MintAssetsSmartContract='mintAssetsSmartContract', Token='token', RegisterPool='registerPool', RetirePool='retirePool', WithdrawRewards='withdrawRewards')                                    |
| `assets`                   | Optional                     | Representation of Cardano address of recipient.                                                                                                                                                                                                                                                                                                  | Enum(Array<Asset> | Array<MintAsset> | Array<string>)                                    |
| `rewardAddress`                   | Optional                     | Representation of Cardano address of recipient. Encoded bech32 string. Please see [here](https://docs.cardano.org/learn/cardano-addresses).                                                                                                                                                                                                                                                                                                  | String                                    |
| `poolId`                   | Optional                     | Encoded bech32 address. Please see [here](https://docs.cardano.org/new-to-cardano/how-to-delegate) and [here](https://docs.cardano.org/development-guidelines/operating-a-stake-pool/about-stake-pools)                                                                                                                                                                                                                                                                                                  | String                                    |
| `script`                   | Optional                     | Representation programs for operations with assets. Please see [here](https://developers.cardano.org/docs/smart-contracts/).                                                                                                                                                                                                                                                                                                  | Script                                    |
| `redeemer`                   | Optional                     | This is a piece of data attached to the spending input. This is typically used to provide an input to the script from the spender. A piece of information that can be associated with a UTXO and attached to the input transaction to unlock funds from a script. Please see [here](https://plutus.readthedocs.io/en/latest/howtos/exporting-a-script.html).                                                                                                                                                                                                                                                                                                  | Redeemer                                    |
| `superSecret`                   | Optional                     | This is a Datum - piece of data attached to the output that the script is locking. This is typically used to carry state. Please see [here](https://plutus.readthedocs.io/en/latest/howtos/exporting-a-script.html).                                                                                                                                                                                                                                                                                                  | String                                    |
| `pool`                   | Optional                     | A stake pool is a reliable server node that focuses on ledger maintenance and holds the combined resources -the 'stake'- of various stakeholders in a single entity. Please see [here](https://docs.cardano.org/learn/stake-pools)                                                                                                                                                                                                                                                                                                  | Pool                                    |

#### Asset fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `unit`                   | Required                     | The unit of the value
. Hex-encoded asset name.                                                                                                                                                                                                                                                                                                  | String                                    |
| `quantity`                   | Required                     | Current asset quantity.                                                                                                                                                                                                                                                                                                    | String                                    |

#### MintAsset fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `assetName`                   | Required                     | Hex-encoded asset name.                                                                                                                                                                                                                                                                                                  | String                                    |
| `assetQuantity`                   | Required                     | Current asset quantity.                                                                                                                                                                                                                                                                                                    | String                                    |
| `metadata`                   | Required                     | This is a low-level representation of the metadata, following closely the structure of CIP-0025. Please see [here](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0068/#metadata).                                                                                                                                                                                                                                                                                                    | MintAssetMetadata                                    |
| `label`                   | Required                     | Used as marker. Please see [here](https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0068/#labels).                                                                                                                                                                                                                                                                                                    | String                                    |
| `recipient`                   | Required                     | Encrypted bech32 string.                                                                                                                                                                                                                                                                                                    | String                                    |

#### MintAssetMetadata fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `name`                   | Required                     | App ID of box to be accessed.                                                                                                                                                                                                                                                                                                  | String                                    |
| `image`                   | Required                     | Name of box to be accessed.                                                                                                                                                                                                                                                                                                    | String                                    |
| `mediaType`                   | Required                     | Name of box to be accessed.                                                                                                                                                                                                                                                                                                    | String                                    |
| `description`                   | Required                     | Name of box to be accessed.                                                                                                                                                                                                                                                                                                    | String                                    |

#### Script fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `code`                   | Required                     | App ID of box to be accessed.                                                                                                                                                                                                                                                                                                  | String                                    |
| `version`                   | Required                     | Name of box to be accessed.                                                                                                                                                                                                                                                                                                    | String                                    |
| `address`                   | Required                     | Name of box to be accessed.                                                                                                                                                                                                                                                                                                    | String                                    |

#### Redeemer fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `tag`                   | Required                     | App ID of box to be accessed.                                                                                                                                                                                                                                                                                                  | String                                    |

#### Pool fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `address`                   | Required                     | App ID of box to be accessed.                                                                                                                                                                                                                                                                                                  | String                                    |
| `epoch`                   | Required                     | App ID of box to be accessed.                                                                                                                                                                                                                                                                                                  | String                                    |


### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/public-keys/transactions" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>" \
-d '{
    "publicKeyId": "pk-orange-magnesium-a0606d08b2",
    "network": "ADA",
    "templateKind": "CardanoTx",

    "type": "applc",
    "approvalProgram": "",,
    "clearProgram": "",
    "numGlobalByteSlices": "1",
    "numGlobalInts": "1",
    "numLocalByteSlices": "1",
    "numLocalInts": "1",
    "onComplete": "0",
}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

Status begins as `Initiated` and changes to `Executed` once broadcast to the mempool.  Use [GetTransactionById](../gettransactionbyid.md) to query for updated status and to retrieve a blockchain transaction hash.

```json
{
    "transaction": {
        "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
        "network": "ADA",
        "templateKind": "CardanoTx",
        "type": "applc",
        "approvalProgram": "0a23707261676d612076657273696f6e20340a2f2f2048616e646c65206561636820706f737369626c65204f6e436f6d706c6574696f6e20747970652e20576520646f6e2774206861766520746f20776f7272792061626f75740a2f2f2068616e646c696e6720436c65617253746174652c20626563617573652074686520436c656172537461746550726f6772616d2077696c6c206578656375746520696e20746861740a2f2f20636173652c206e6f742074686520417070726f76616c50726f6772616d2e0a74786e204170706c69636174696f6e49440a696e7420300a3d3d0a626e7a2068616e646c655f617070726f76650a0a74786e204f6e436f6d706c6574696f6e0a696e74204e6f4f700a3d3d0a626e7a2068616e646c655f6e6f6f700a0a74786e204f6e436f6d706c6574696f6e0a696e74204f7074496e0a3d3d0a626e7a2068616e646c655f617070726f76650a0a74786e204f6e436f6d706c6574696f6e0a696e7420436c6f73654f75740a3d3d0a626e7a2068616e646c655f636c6f73656f75740a0a74786e204f6e436f6d706c6574696f6e0a696e74205570646174654170706c69636174696f6e0a3d3d0a626e7a2068616e646c655f7570646174656170700a0a74786e204f6e436f6d706c6574696f6e0a696e742044656c6574654170706c69636174696f6e0a3d3d0a626e7a2068616e646c655f64656c6574656170700a0a2f2f20556e6578706563746564204f6e436f6d706c6574696f6e2076616c75652e2053686f756c6420626520756e726561636861626c652e0a6572720a0a68616e646c655f6e6f6f703a0a2f2f2048616e646c65204e6f4f700a0a2f2f207265616420676c6f62616c2073746174650a627974652022636f756e746572220a6475700a6170705f676c6f62616c5f6765740a0a2f2f20696e6372656d656e74207468652076616c75650a696e7420310a2b0a0a2f2f2073746f726520746f20736372617463682073706163650a6475700a73746f726520300a0a2f2f2075706461746520676c6f62616c2073746174650a6170705f676c6f62616c5f7075740a0a2f2f2072656164206c6f63616c20737461746520666f722073656e6465720a696e7420300a627974652022636f756e746572220a6170705f6c6f63616c5f6765740a0a2f2f20696e6372656d656e74207468652076616c75650a696e7420310a2b0a73746f726520310a0a2f2f20757064617465206c6f63616c20737461746520666f722073656e6465720a696e7420300a627974652022636f756e746572220a6c6f616420310a6170705f6c6f63616c5f7075740a0a2f2f206c6f61642072657475726e2076616c756520617320617070726f76616c0a6c6f616420300a72657475726e0a0a0a68616e646c655f636c6f73656f75743a0a2f2f2048616e646c6520436c6f73654f75740a2f2f617070726f76616c0a696e7420310a72657475726e0a0a68616e646c655f64656c6574656170703a0a2f2f20436865636b20666f722063726561746f720a676c6f62616c2043726561746f72416464726573730a74786e2053656e6465720a3d3d0a72657475726e0a0a68616e646c655f7570646174656170703a0a2f2f20436865636b20666f722063726561746f720a676c6f62616c2043726561746f72416464726573730a74786e2053656e6465720a3d3d0a72657475726e0a0a68616e646c655f617070726f76653a0a696e7420310a72657475726e0a",
        "clearProgram": "0a23707261676d612076657273696f6e20340a696e7420310a72657475726e0a",
        "numGlobalByteSlices": "1",
        "numGlobalInts": "1",
        "numLocalByteSlices": "1",
        "numLocalInts": "1",
        "onComplete": "0",
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"ADA\",\"templateKind\":\"CardanoTx\",\"type\":\"applc\",\"approvalProgram\":\"0a23707261676d612076657273696f6e20340a2f2f2048616e646c65206561636820706f737369626c65204f6e436f6d706c6574696f6e20747970652e20576520646f6e2774206861766520746f20776f7272792061626f75740a2f2f2068616e646c696e6720436c65617253746174652c20626563617573652074686520436c656172537461746550726f6772616d2077696c6c206578656375746520696e20746861740a2f2f20636173652c206e6f742074686520417070726f76616c50726f6772616d2e0a74786e204170706c69636174696f6e49440a696e7420300a3d3d0a626e7a2068616e646c655f617070726f76650a0a74786e204f6e436f6d706c6574696f6e0a696e74204e6f4f700a3d3d0a626e7a2068616e646c655f6e6f6f700a0a74786e204f6e436f6d706c6574696f6e0a696e74204f7074496e0a3d3d0a626e7a2068616e646c655f617070726f76650a0a74786e204f6e436f6d706c6574696f6e0a696e7420436c6f73654f75740a3d3d0a626e7a2068616e646c655f636c6f73656f75740a0a74786e204f6e436f6d706c6574696f6e0a696e74205570646174654170706c69636174696f6e0a3d3d0a626e7a2068616e646c655f7570646174656170700a0a74786e204f6e436f6d706c6574696f6e0a696e742044656c6574654170706c69636174696f6e0a3d3d0a626e7a2068616e646c655f64656c6574656170700a0a2f2f20556e6578706563746564204f6e436f6d706c6574696f6e2076616c75652e2053686f756c6420626520756e726561636861626c652e0a6572720a0a68616e646c655f6e6f6f703a0a2f2f2048616e646c65204e6f4f700a0a2f2f207265616420676c6f62616c2073746174650a627974652022636f756e746572220a6475700a6170705f676c6f62616c5f6765740a0a2f2f20696e6372656d656e74207468652076616c75650a696e7420310a2b0a0a2f2f2073746f726520746f20736372617463682073706163650a6475700a73746f726520300a0a2f2f2075706461746520676c6f62616c2073746174650a6170705f676c6f62616c5f7075740a0a2f2f2072656164206c6f63616c20737461746520666f722073656e6465720a696e7420300a627974652022636f756e746572220a6170705f6c6f63616c5f6765740a0a2f2f20696e6372656d656e74207468652076616c75650a696e7420310a2b0a73746f726520310a0a2f2f20757064617465206c6f63616c20737461746520666f722073656e6465720a696e7420300a627974652022636f756e746572220a6c6f616420310a6170705f6c6f63616c5f7075740a0a2f2f206c6f61642072657475726e2076616c756520617320617070726f76616c0a6c6f616420300a72657475726e0a0a0a68616e646c655f636c6f73656f75743a0a2f2f2048616e646c6520436c6f73654f75740a2f2f617070726f76616c0a696e7420310a72657475726e0a0a68616e646c655f64656c6574656170703a0a2f2f20436865636b20666f722063726561746f720a676c6f62616c2043726561746f72416464726573730a74786e2053656e6465720a3d3d0a72657475726e0a0a68616e646c655f7570646174656170703a0a2f2f20436865636b20666f722063726561746f720a676c6f62616c2043726561746f72416464726573730a74786e2053656e6465720a3d3d0a72657475726e0a0a68616e646c655f617070726f76653a0a696e7420310a72657475726e0a\",\"clearProgram\":\"0a23707261676d612076657273696f6e20340a696e7420310a72657475726e0a\",\"numGlobalByteSlices\":\"1\",\"numGlobalInts\":\"1\",\"numLocalByteSlices\":\"1\",\"numLocalInts\":\"1\", \"onComplete\":\"0\"\"}",
    "dateUpdated": "2022-10-31T19:10:02.228Z",
    "initiator": {
        "kind": "Employee",
        "employeeId": "oe-nine-artist-9de60fef6963",
        "orgId": "cu-purple-pip-1b417b958500"
    },
    "orgId": "cu-purple-pip-1b417b958500",
    "publicKeyId": "pk-shade-wisconsin-c28c38b2e8",
    "network": "ADA",
    "status": "Initiated",
    "id": "tx-sierra-lima-272e2ce093",
    "dateCreated": "2022-10-31T19:10:02.229Z"
}
```
