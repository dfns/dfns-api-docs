# Broadcast Transaction from Wallet

`POST /wallets/{walletId}/transactions`

Broadcast transaction enables communication with any arbitrary smart contract by replicating the native transaction protocol fields in the body of the request. It can be used to make native payments, call smart contract functions, and even deploy new smart contracts. Note for reading from a "view" function on EVM chains, please use [Call Read Function](../../deprecated-apis/blockchains/call-read-function.md).

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name                           | Conditions      |
| ------------------------------ | --------------- |
| `Wallets:BroadcastTransaction` | Always Required |

## Parameters <a href="#request-example.1" id="request-example.1"></a>

### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `walletId`     | Unique identifier of the `Wallet`. ex. `wa-1f04s-lqc9q-xxxxxxxxxxxxxxxx` |

## Request Body

The body of the request will depend on the chain you are targeting.   Please find the chain in question by expanding this section in the left hand navigation:

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

