# Generate Signature from Wallet

`POST /wallets/{walletId}/signatures`

Request to generate a signature with the wallet key. **This process does not broadcast anything on-chain**, this is just an off-chain signature request.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
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

## Request Body

The body of the request will depend on the chain you are targeting.   Please find the chain in question by expanding this section in the left hand navigation:

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

## Response Statuses

<table><thead><tr><th width="191">Status</th><th>Definition</th></tr></thead><tbody><tr><td><code>Pending</code></td><td>The request is pending approval due to a <a href="https://docs.dfns.co/d/api-docs/policy-engine/policies#wallets-sign-activity">policy applied</a> to the wallet</td></tr><tr><td><code>Executing</code></td><td>The request is approved and is in the process of being signed (note this status is only set for a short time between pending and signed)</td></tr><tr><td><code>Signed</code></td><td>The signature is complete and available in the response body</td></tr><tr><td><code>Confirmed</code></td><td>The signature has been confirmed on-chain by our indexing pipeline</td></tr><tr><td><code>Failed</code></td><td>Indicates an internal system failure to complete the request</td></tr><tr><td><code>Rejected</code></td><td>The request has been rejected by a policy approval action</td></tr></tbody></table>

