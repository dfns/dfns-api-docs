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
| `name`                   | Required                     | Asset name.                                                                                                                                                                                                                                                                                                  | String                                    |
| `image`                   | Required                     | The image property is required and must be a valid Uniform Resource Identifier (URI) .                                                                                                                                                                                                                                                                                                    | String                                    |
| `mediaType`                   | Optional                     | mediaType is however required inside files. The src property inside files is an URI pointing to a resource of this mime type. If the mime type is image/*, mediaType points to the same image, like the on in the image property, but in an higher resolution.                                                                                                                                                                                                                                                                                                    | String                                    |
| `description`                   | Optional                     | Description of the asset.                                                                                                                                                                                                                                                                                                    | String                                    |

#### Script fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `code`                   | Required                     | Program.                                                                                                                                                                                                                                                                                                  | String                                    |
| `version`                   | Required                     | Version of the program.                                                                                                                                                                                                                                                                                                    | String                                    |
| `address`                   | Required                     | Encoded bech32 adrress.                                                                                                                                                                                                                                                                                                    | String                                    |

#### Redeemer fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `tag`                   | Required                     | Marker. Default: MINT.                                                                                                                                                                                                                                                                                                  | String                                    |

#### Pool fields <a href="#request-example.1" id="request-example.1"></a>



| Request body fields    | Required/Optional            | Description                                                                                                                                                                                                                                                                                                                                      | Type                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| `address`                   | Required                     | Encoded bech32 adrress.                                                                                                                                                                                                                                                                                                  | String                                    |
| `epoch`                   | Required                     | An epoch is an arbitrary period of time during which all staked coins are being used to produce blocks. Please see [here](https://developers.cardano.org/docs/stake-pool-course/introduction-to-cardano/#slots-and-epochs)..                                                                                                                                                                                                                                                                                                  | String                                    |


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

    "type": "burnAsset",
    "assets": "[{
      "unit": "64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e",
      "quantity": "1"
    }]",
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
        "type": "burnAsset",
        "assets": [{
          "unit": "64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e",
          "quantity": "1"
        }]
    },
    "snapshot": "{\"publicKeyId\":\"pk-shade-wisconsin-c28c38b2e8\",\"network\":\"ADA\",\"templateKind\":\"CardanoTx\",\"type\":\"burnAsset\",
    \"assets\":\"[{\"unit\":\"64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e\", \"64af286e2ad0df4de2e7de15f8ff5b3d27faecf4ab2757056d860a424d657368546f6b656e\":\"1\"}]\"}",
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
