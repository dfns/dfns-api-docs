# Pseudo Networks (All other chains): Generate Signature

Dfns is compatible with any blockchain that supports our underlying MPC cryptographic schemes and elliptical curves:&#x20;

* ECDSA over secp256k1
* ECDSA over Stark curve
* EdDSA over Ed25519

You can use Generate Signature to interact with any chain supporting these schemes by using [Pseudo Network enumerated types](https://docs.dfns.co/d/api-docs/wallets#pseudo-networks) when you create a wallet. &#x20;

## Hash Signing Support - All Schemes <a href="#eip712-signature-request-body" id="eip712-signature-request-body"></a>

All cryptographic scheme support hash signing.  Note ECDSA with secp256k1 or Stark curve only support this kind.  Use the target chain's native SDK to hash your message before sending to Dfns.&#x20;

### Request body <a href="#hash-signature-request-body" id="hash-signature-request-body"></a>

<table><thead><tr><th width="298">Request body fields</th><th>Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td><code>Hash</code></td><td>String</td></tr><tr><td><code>hash</code></td><td>Required</td><td>The hash digest in hex.</td><td>String</td></tr></tbody></table>

### Sample request body <a href="#sample-hash-request" id="sample-hash-request"></a>

```shell
{
  "kind": "Hash",
  "hash": "0x031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
}
```

### 200 response example <a href="#hash-response-example" id="hash-response-example"></a>

```json
{
  "id": "sig-2ouaj-f4nq6-xxxxxxxxxxxxxxxx",
  "walletId": "wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx",
  "network": "KeyECDSA",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-24vva-92s32-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Hash",
    "hash": "0x031edd7d41651593c5fe5c006fa5752b37fddff7bc4e843aa6af0c950f4b9406"
  },
  "status": "Signed",
    "signature": {
        "r": "0x05e365d4304eaa78516eb309bff91f8c12e5445a431e3f2428239678d0150c6c",
        "s": "0x47e0765c439fb42d57767910865d240964b7b09f2b2f74d8f14a63da7ce5a1fe",
        "recid": 0,
    },
  "dateRequested": "2023-05-15T20:21:11.576Z",
  "dateSigned": "2024-01-10T19:07:40.533Z",
  "approvalId": "ap-...", // defined only if an approval process was triggered as the result of a policy ("status" will be "Pending" then)
}
```

## EdDSA Message Signing <a href="#message-signature-request-body" id="message-signature-request-body"></a>

In addition to the `Hash` method shown above, EdDSA also supports signing `Messages` as shown below.  For message encoding standards, see the documentation of the chain you are targeting.&#x20;

### Request body <a href="#message-signature-request-body" id="message-signature-request-body"></a>

| Request body fields | Required/Optional | Description                       | Type   |
| ------------------- | ----------------- | --------------------------------- | ------ |
| `kind`              | Required          | `Message`                         | String |
| `message`           | Required          | The original message hex encoded. | String |

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
  "status": "Signed",
    "signature": {
        "r": "0x05e365d4304eaa78516eb309bff91f8c12e5445a431e3f2428239678d0150c6c",
        "s": "0x47e0765c439fb42d57767910865d240964b7b09f2b2f74d8f14a63da7ce5a1fe"
    },
  "dateRequested": "2023-05-15T20:21:11.576Z",
  "dateSigned": "2024-01-10T19:07:40.533Z"
}
```



## &#x20;<a href="#eip712-signature-request-body" id="eip712-signature-request-body"></a>
