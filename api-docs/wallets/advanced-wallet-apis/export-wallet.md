# Export Wallet

`POST /wallets/{walletId}/export`

{% hint style="info" %}
* This endpoint is not enabled by default. Contact Dfns to have it activated.
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

Dfns secures private keys by generating them as MPC key shares in our decentralized key management network.  Our goal is to eliminate all single points of failure (SPOFs) associated with blockchain private keys.

In certain circumstances, however, customers require Dfns to export a wallet (export its private key) . In this case, Dfns exposes the following endpoint which can be used in conjunction with our [export SDK](https://github.com/dfns/dfns-sdk-ts/tree/m/examples/sdk/export-wallet).

{% hint style="danger" %}
Dfns can not guarantee the security of exported keys as we have no way to control blockchain transactions once the single point of failure has been reconstituted.  For this reason, this feature is restricted to customers who have signed a contractual addendum limiting our liability for exported keys.  Additionally, exported keys can no longer be used to sign within the Dfns platform. Please contact your sales representative for more information.&#x20;
{% endhint %}

## Required Permissions

| Name             | Conditions      |
| ---------------- | --------------- |
| `Wallets:Export` | Always Required |

## Wallet Export Flow <a href="#request-body" id="request-body"></a>

The wallet private key which you need to export, will never be transmitted through Dfns system in one piece, or in clear (un-encrypted). The process follows this flow:

1. On your side (client-side), with the help of our [export SDK library](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/sdk-keyexport-utils), you create an "export context" locally. This will generate an encryption/decryption key pair to perform the export in a secure way. This step corresponds to [this line](https://github.com/dfns/dfns-sdk-ts/blob/m/examples/sdk/export-wallet/index.ts#L26) in our SDK wallet export example.
2. You then call the Wallet Export endpoint, providing the API with the previous encryption key for secure export. This step corresponds to [this line](https://github.com/dfns/dfns-sdk-ts/blob/m/examples/sdk/export-wallet/index.ts#L29) in our SDK wallet export example.
3. On Dfns side, the export encryption key gets transmitted to each node of your Signing Cluster (Your Signing Cluster is the network of nodes, also referred as "signers", where your wallet private key shares are securely stored). Each signer node will encrypt the corresponding key share to be exported. All encrypted key shares are then transmitted back to you.
4. On your side (client-side), with the help of our [export SDK library](https://github.com/dfns/dfns-sdk-ts/tree/m/packages/sdk-keyexport-utils), you will then decrypt each encrypted key share, and re-compose the key shares into a single private key (the wallet private key). This step corresponds to [this line](https://github.com/dfns/dfns-sdk-ts/blob/m/examples/sdk/export-wallet/index.ts#L35) in our SDK wallet export example.



## Request body <a href="#request-body" id="request-body"></a>



<table data-full-width="false"><thead><tr><th width="196">Property</th><th width="223">Type - Required/Optional</th><th>Description</th></tr></thead><tbody><tr><td>encryptionKey</td><td>String - Required</td><td>The public key of an asymmetric key pair used to encrypt the key shares prior to transmission.</td></tr><tr><td>supportedSchemes</td><td>Object Array - Required</td><td>An object with the format shown below. </td></tr></tbody></table>

#### supportedSchemes

<table data-full-width="false"><thead><tr><th width="128">Property</th><th width="169">Type - Required/Optional</th><th>Description</th></tr></thead><tbody><tr><td>protocol</td><td>String - Required</td><td>Always "CGGMP21" for now.  Additional signature schemes will be added in the future. </td></tr><tr><td>curve</td><td>String - Required</td><td>Always "secp256k1" per above.</td></tr></tbody></table>

#### Example JSON

```json
{
    "encryptionKey": "AQNiFCgqtXFvRdNVciLzZ0hjZxumwtP0hfCrUDsymzWU5A==",
    "supportedSchemes": [
        {
            "protocol": "CGGMP21",
            "curve": "secp256k1"
        }
    ]
}
```

## 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
    "publicKey": "0363fd944987c22382c2f34f8ffc53e1fc1e2def96baacd9cbaa5ff51bfb308e2b",
    "minSigners": 3,
    "curve": "secp256k1",
    "protocol": "CGGMP21",
    "encryptedKeyShares": [
        {
            "signerId": "9R4OQb12f8PrEQwFmwZ58ZsNHs6EcGQPWF3fSzhXbVk=",
            "encryptedKeyShare": "Op1j4tQYry0GA5rCgqNXoP+feWxdCNLwkx0rS6GKPD/JtfuXAIwEhurlo60ckAo2L/w5KLoq8RH41GR2TlNJgcvtqa2a+hCgeM/X86hjeqhqWaKq50PkNS1RxrIgrzuL3UkxyvStYyiZMcdWalSYCSrE5rJ61dSD+EpflX34VjAC2GnNa+T3TNam9455tCp56HqNaqDsEXTg+rvEkYs8VxSBm9enRbRepZvQ0YU+vvJotn5rkef7R8aR++Y1sfcKWMG8b4ivdDth1jdFXDmogq94nwloRlohmRaaoSRU6A7HwbDcgwreV/MDcOMK7n8QgSGDw17o/JID4OUtkL7V5P5Jm9ENVp5d1I/UdoRONTk9zlGMcb4Qje8="
        },
        {
            "signerId": "lGcHWQmdLtJ+4S+RIBFq704/Nox2bugUctVeLL0wPW8=",
            "encryptedKeyShare": "617Qp7YyF+tlbNzsGF1dmnLlm2F6CFBVpwSg/o2RWAyUmCQAULPn0yXXFmYqCJuJ93wPhXeA2GMXjbZDTMRtSpI1BRxBAtDaQSgQeO2z59/VxXoFvCQMCl+QsrwzoisAnS3qG7HnpltT53Bf5B8h5k/Ezb0zMWFrz2y6X9Oodh/yIQDtCUIUgImkKtfTApOLOZgR+o0xcljLR5w2uqDNS1ED16ZXLocLqt3gqhxfApHNT5WsT6q3P02svUn9uztts8LZliAyBZxted1rqVPaoTjrmGoOCjJdTk4PP7EuYGa7o9C69jmdJycPXjyuWQFp8fo+nNwm5qEC+oPG7aeoC8A2r1x1b/O8HjGxSl+pjY+Z/shaIg+5Xzw="
        },
        {
            "signerId": "EX5PdJFcutVTJCgAcSGGGy264JwnrOLLyrZIqMHG67I=",
            "encryptedKeyShare": "YvUd5t8yNxilhZujk3QUaTDy/ZL4smL3s9Av82dQTpoV6BnWq3EZfPVjiYSB64o5Louq7PCmqzuP/30A35RSPFEYexIRlS6koIcod3J/mmVeV/Huw1D+J9xBfanCN1FgsnO4zlLRSpNmysuBRgkHV7KHf0rbMVQkDa6daZa8CMahMW15ASLx8Tmfg7xA22VgFI9emXMwi55RDsn4xFL238lrGKjfKUcf6awxNX62/9o6A2FehoFIOVDX/4nRXysa4mqRNhNF2PIOZYr5UtraTeyO+xvASMgvr4UH49YFFbKkf3YrEp9u/FPmeahD4kRal56tXYjRQ2kCAl2H2Qy5SOi0G3knL7e3rAcIHArimmd4bqujVLT2igI="
        },
        {
            "signerId": "ZokM6nUhGXHYhtQYE/NTeBEz5udvx13Ympcd1raQ4Fc=",
            "encryptedKeyShare": "W8pFNu7hpLBHCk4xnR7sIxZKfEEiRNTG5oWyemDGoaZ+qqJ7rzLVbpK0MdkNNVU9NSRMr3pIpDKvo2VkwZq+PDhfNaHHOOHexlzPIcu5pfRS/RlJWZAue5Ems1zNkM13qKLjkarvwNVCfoUUTtUGnzfFw34W/JvkMA3yOTFs0B8EyCfrtiEixrzPgvmM9/D3Nej3nzZRkLCImralwMxOUFj/xo9DG4y7KiAICiMk1v36tgXHj7jo5sC+Z2JVzNHRsg/zNshUeuTlb7vy5cgkXXuz4EO6nivJOvCNuOPPMIQlx8AA/ATxWt1ZS2+IgWwr/BjEqXW9xEMCLpXQwOoO+7SKR4C7d3goG5OZweGYKHwQDc6f47HQmo4="
        },
        {
            "signerId": "KaGnB8iWVpRKBRh+/sAJ0gz1cAZtjhHPufGRgkOXENo=",
            "encryptedKeyShare": "7ZZMXgm31nIA3Dhaq45GzAbis67Eq7IQoy3orM/xm0x8xOmM/EXj1vWiC0PXx/vnFvdHg/jQSfBEBeQV0lV/lvVUEJD3D4rD+7GffEkNLIz71gKlJ4pZYyPnDcXSzsrcapREWa4j6ZGVNEYrjcXroVbLqa8xhStww5E0XTdQ0RMLKcmzEyDeF5BQuZKik2Q8JRqJmGhwtwxdCkG2SR4m28BbIHGJzKkQDCW92dq6Wls2rpf1Y0aaVzOYEJkbib8g0ulZS4EdR7FF/mp4cAAuZPWhoxA9RB6Z3WQUvuH7fIOZ1t43XF+nQ1WYgXKqnv48r4gsuLjy+9oD7xDydjqrbIF0c6gqYRdcR8z/CjYaGrHxAEdbauioNwo="
        }
    ]
}
```
