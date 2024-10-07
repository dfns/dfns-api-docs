# TON: Generate Signature

## Request body <a href="#transaction-request-body" id="transaction-request-body"></a>

<table><thead><tr><th width="180">Property</th><th width="180">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>kind</code><mark style="color:red;">*</mark></td><td>String</td><td>For Ton, always <code>Transaction</code></td></tr><tr><td><code>transaction</code><mark style="color:red;">*</mark></td><td>Hex String</td><td>The unsigned external-in message encoded as a BoC</td></tr><tr><td><code>externalId</code></td><td>(Optional) String</td><td>A unique ID from your system. It can be leveraged to be used as an idempotency key (read more <a href="../../../advanced-topics/api-idempotency.md">here</a>)</td></tr></tbody></table>

### Sample request body <a href="#sample-transaction-request" id="sample-transaction-request"></a>

```json
{
  "kind": "Transaction",
  "transaction": "b5ee9c724101020100830001618800bec17721846d82efc580cf4f1a16dd2f32aae224be7462079437be6b0ba9a512014d4d18bb37ff027000000598000c01009a62002fb05dc8611b60bbf16033d3c685b74bccaab8892f9d1881e50def9ac2ea6944a1dcd6500000000000000000000000000000000000004578616d706c65207472616e7366657220626f647977310dbd"
}
```

### 200 response example <a href="#transaction-response-example" id="transaction-response-example"></a>

```json
{
  "id": "sig-19u01-g60tf-xxxxxxxxxxxxxxxx",
  "walletId": "wa-174tk-m918i-xxxxxxxxxxxxxxxx",
  "network": "Ton",
  "requester": {
    "userId": "us-3v1ag-v6b36-xxxxxxxxxxxxxxxx",
    "tokenId": "to-7mkkj-c831n-xxxxxxxxxxxxxxxx",
    "appId": "ap-341e6-12nj6-xxxxxxxxxxxxxxxx"
  },
  "requestBody": {
    "kind": "Transaction",
    "transaction": "b5ee9c724101020100830001618800bec17721846d82efc580cf4f1a16dd2f32aae224be7462079437be6b0ba9a512014d4d18bb37ff027000000598000c01009a62002fb05dc8611b60bbf16033d3c685b74bccaab8892f9d1881e50def9ac2ea6944a1dcd6500000000000000000000000000000000000004578616d706c65207472616e7366657220626f647977310dbd"
  },
  "status": "Signed",
  "signature": {
    "r": "0x375A53D683F661152D343227B3E13CB3A90BDC1A182D2338B08607AD051AB764",
    "s": "0x2E6796FDA1E2707A3098739DFBEDB66DCD5B32C0E4B618CCD767178ACB290F0D",
    "encoded": "0x375A53D683F661152D343227B3E13CB3A90BDC1A182D2338B08607AD051AB7642E6796FDA1E2707A3098739DFBEDB66DCD5B32C0E4B618CCD767178ACB290F0D"
  },
  "signedData": "0xb5ee9c724101020100c30001e18800bec17721846d82efc580cf4f1a16dd2f32aae224be7462079437be6b0ba9a51201bad29eb41fb308a969a1913d9f09e59d485ee0d0c16919c584303d6828d5bb21733cb7ed0f1383d184c39cefdf6db36e6ad9960725b0c666bb38bc56594878694d4d18bb37ff044000000598000c01009a62002fb05dc8611b60bbf16033d3c685b74bccaab8892f9d1881e50def9ac2ea6944a1dcd6500000000000000000000000000000000000004578616d706c65207472616e7366657220626f6479b73ce2c9",
  "dateRequested": "2024-01-10T21:13:38.186Z",
  "dateSigned": "2024-01-10T21:13:38.348Z"
}
```

## Typescript Example with ton-core

First install ton-core. You can find the full documentation here:  [https://github.com/ton-org/ton](https://github.com/ton-org/ton)

Ton requires a specific message format when interacting with the network. We need to create an internal message wrapped into an external message (creating an external-in message). Then, we can sign the BoC via [the Dfns TypeScript SDK](https://github.com/dfns/dfns-sdk-ts):

```typescript
const client = new TonClient({ endpoint })

  // instance of your wallet (replace with the right version)
  const tonWallet = WalletContractV4.create({
    workchain: 0,
    publicKey: hexToBuffer(senderWallet.publicKey),
  })

    const opened = client.open(tonWallet)
    const seqno = await opened.getSeqno()

    const signingMessageBuilder = beginCell().storeUint(tonWallet.walletId, 32)
    if (seqno === 0) {
      for (let i = 0; i < 32; i++) {
        signingMessageBuilder.storeBit(1)
      }
    } else {
      signingMessageBuilder.storeUint(Math.floor(Date.now() / 1e3) + 60, 32)
    }

    signingMessageBuilder.storeUint(seqno, 32)
    signingMessageBuilder.storeUint(0, 8) // Simple order

    signingMessageBuilder.storeUint(SendMode.PAY_GAS_SEPARATELY, 8)

    const message = internal({
      value: '1',
      to: 'EQBfYLuQwjbBd-LAZ6eNC26XmVVxEl86MQPKG981hdTSicL_',
      body: 'Example transfer body',
    })

    const body = signingMessageBuilder.storeRef(beginCell().store(storeMessageRelaxed(message))).endCell()

    let init
    if (opened.init && !(await client.isContractDeployed(Address.parse(senderWallet.address)))) {
      init = opened.init
    }

    // Wrap into an external message
    const externalInMessage = external({
      to: senderWallet.address,
      body,
      init,
    })

    const cell = beginCell().store(storeMessage(externalInMessage)).endCell()

 
    const res = await this.dfnsClient.wallets.generateSignature({
      walletId: this.metadata.id,
      body: {
        kind: 'Transaction',
        transaction: `0x${cell.toBoc().toString('hex')}`,
      },
    })

```
