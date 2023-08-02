# Generate Signature from Wallet

`POST /wallets/{walletId}/signatures`

Request to generate a signature with the wallet key.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                        | Conditions      |
| --------------------------- | --------------- |
| `Wallets:GenerateSignature` | Always Required |

## Parameters <a href="#parameters.1" id="parameters.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Hash Signature <a href="#hash-signature-request-body" id="hash-signature-request-body"></a>

Generates the signature for the hash digest of the original message, applicable for blockchain networks that use `ECDSA` signature scheme.

### Request body <a href="#hash-signature-request-body" id="hash-signature-request-body"></a>

| Request body fields | Required/Optional | Description             | Type   |
| ------------------- | ----------------- | ----------------------- | ------ |
| `kind`              | Required          | `Hash`                  | String |
| `hash`              | Required          | The hash digest in hex. | String |

### Sample request body <a href="#sample-hash-request" id="sample-hash-request"></a>

```shell
{
  "kind": "Hash",
  "hash": "031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
}
```

### 200 response example <a href="#hash-response-example" id="hash-response-example"></a>

```json
{
  "id": "sig-2ouaj-f4nq6-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Hash",
    "hash": "031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
  },
  "status": "Pending",
  "dateRequested": "2023-05-15T20:21:11.576Z"
}
```

## Message Signature <a href="#message-signature-request-body" id="message-signature-request-body"></a>

Generates the signature for the original message, applicable for blockchain networks that use `EdDSA` signature scheme.

### Request body <a href="#message-signature-request-body" id="message-signature-request-body"></a>

| Request body fields | Required/Optional | Description             | Type   |
| ------------------- | ----------------- | ----------------------- | ------ |
| `kind`              | Required          | `Message`                  | String |
| `message`              | Required          | The original message hex encoded. | String |

### Sample request body <a href="#sample-message-request" id="sample-message-request"></a>

```shell
{
  "kind": "Message",
  "message": "0x01000507a824baef8cad745bb58148551728d245d6fc21679d1b8f3bbf6abed957f614719dca9b4fcc2b6a68aab9ef37b4db8dc5e99d2d803b577cc61c042453ddd525a6d215d4421860fc0e4a48255b2a6781a494e7ee3f055eeeda2233b590a07b6a2806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001abbca65c30117367204561151b7660a672b5fc9fe3d2780d130ea30be604eea0103060102050604000402000000"
}
```

### 200 response example <a href="#message-response-example" id="message-response-example"></a>

```json
{
  "id": "sig-2rv2t-u0cmd-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "KeyEdDSA",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Message",
    "message": "0x01000507a824baef8cad745bb58148551728d245d6fc21679d1b8f3bbf6abed957f614719dca9b4fcc2b6a68aab9ef37b4db8dc5e99d2d803b577cc61c042453ddd525a6d215d4421860fc0e4a48255b2a6781a494e7ee3f055eeeda2233b590a07b6a2806a1d8179137542a983437bdfe2a7ab2557f535c8a78722b68a49dc00000000006a1d817a502050b680791e6ce6db88e1e5b7150f61fc6790a4eb4d10000000006a7d51718c774c928566398691d5eb68b5eb8a39b4b6d5c73555b210000000006a7d517193584d0feed9bb3431d13206be544281b57b8566cc5375ff40000001abbca65c30117367204561151b7660a672b5fc9fe3d2780d130ea30be604eea0103060102050604000402000000"
  },
  "status": "Pending",
  "dateRequested": "2023-05-15T20:21:11.576Z"
}
```

## EIP-712 TypedData Signature <a href="#eip712-signature-request-body" id="eip712-signature-request-body"></a>

Generates the signature for typed structured data defined in [EIP-712](https://eips.ethereum.org/EIPS/eip-712), only applicable for EVM compatible blockchain networks.

### Request body <a href="#eip712-signature-request-body" id="eip712-signature-request-body"></a>

| field     | Required/Optional | Description                 | Type                            |
| --------- | ----------------- | --------------------------- | ------------------------------- |
| `kind`    | Required          | `Eip712`                    | String                          |
| `types`   | Required          | Type definitions.           | Map\<String, TypedDataField\[]> |
| `domain`  | Required          | Domain separator.           | Eip712Domain                    |
| `message` | Required          | Structured message to sign. | Object                          |

**TypedDataField**

| field  | Required/Optional | Description | Type   |
| ------ | ----------------- | ----------- | ------ |
| `name` | Required          | Field name. | String |
| `type` | Required          | Field type. | String |

**Eip712Domain**

| field               | Required/Optional | Description                                                 | Type    |
| ------------------- | ----------------- | ----------------------------------------------------------- | ------- |
| `name`              | Optional          | Name of the signing domain.                                 | String  |
| `version`           | Optional          | Current major version of the signing domain.                | String  |
| `chainId`           | Optional          | Chain ID.                                                   | Integer |
| `verifyingContract` | Optional          | The address of the contract that will verify the signature. | String  |
| `salt`              | Optional          | 32-byte value as a last-resort domain separator.            | String  |

#### Sample request body <a href="#sample-eip712-request" id="sample-eip712-request"></a>

```shell
{
  "kind": "Eip712",
  "types": {
    "Person": [
      { "name": "name", "type": "string" },
      { "name": "wallet", "type": "address" }
    ],
    "Mail": [
      { "name": "from", "type": "Person" },
      { "name": "to", "type": "Person" },
      { "name": "contents", "type": "string" }
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
}
```

### Response example <a href="#eip712-response-example" id="eip712-response-example"></a>

```json
{
  "id": "sig-4tcfd-enph7-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "EthereumSepolia",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
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
  "dateRequested": "2023-05-15T19:26:18.145Z"
}
```
