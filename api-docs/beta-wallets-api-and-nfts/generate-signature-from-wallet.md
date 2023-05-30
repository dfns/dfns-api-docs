# Generate Signature from Wallet

`POST /wallets/{walletId}/signatures`

Request to generate a signature with the wallet key.

### Required Permissions <a href="#scopes" id="scopes"></a>

Wallets:GenerateSignature

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Required/Optional | Description                                                        | Type   |
| -------------- | ----------------- | ------------------------------------------------------------------ | ------ |
| `walletId`     | Required          | Unique identifier of the wallet. `wa-1f04s-lqc9q-86l9l9n97hcos0ln` | String |

#### Hash signature request body parameters <a href="#hash-body-parameters" id="hash-body-parameters"></a>

| field  | Required/Optional | Description             | Type   |
| ------ | ----------------- | ----------------------- | ------ |
| `kind` | Required          | `Hash`                  | String |
| `hash` | Required          | The hash digest in hex. | String |

#### EIP-712 TypedData request body parameters <a href="#eip712-body-parameters" id="eip712-body-parameters"></a>

| field     | Required/Optional | Description                 | Type                          |
| --------- | ----------------- | --------------------------- | ----------------------------- |
| `kind`    | Required          | `Eip712`                    | String                        |
| `types`   | Required          | Type definitions.           | Map<String, TypedDataField[]> |
| `domain`  | Required          | Domain separator.           | Eip712Domain                  |
| `message` | Required          | Structured message to sign. | Object                        |

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

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample hash request <a href="#sample-hash-request" id="sample-hash-request"></a>

```shell
curl -X POST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/signatures" \
-H "Content-Type: application/json" \
-d '{
  "kind": "Hash",
  "hash": "031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
}'
```

#### Sample EIP-712 request <a href="#sample-eip712-request" id="sample-eip712-request"></a>

```shell
curl -X POST "/wallets/wa-1f04s-lqc9q-86l9l9n97hcos0ln/signatures" \
-H "Content-Type: application/json" \
-d '{
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
}'
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

```json
{
  "id": "sg-2ouaj-f4nq6-97q8m0736h09bhhv",
  "walletId": "wa-1f04s-lqc9q-86l9l9n97hcos0ln",
  "network": "ETH_SEPOLIA",
  "requester": {
    "kind": "CustomerEmployee",
    "userId": "us-3v1ag-v6b36-9r0pjasaiqt1d3q7",
    "tokenId": "to-7mkkj-c831n-9a7oj3kp8j5i5o9q",
    "appId": "ap-C3H2-H7-3c762njr9t96l9qto6snl5ca4r"
  },
  "requestBody": {
    "kind": "Hash",
    "hash": "031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
  },
  "status": "Pending",
  "dateRequested": "2023-05-15T20:21:11.576Z"
}
```
