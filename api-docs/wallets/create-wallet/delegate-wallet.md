# Delegate Wallet

`POST /wallets/:walletId/delegate`

In most cases, when you want to implement [Delegated Signing](../../../advanced-topics/delegated-signing.md), simply have the end-user create the wallet, in which case it will the noncustodial from the start.  There are some rare cases, however, where the wallet must be created before the user has accessed the system.  To accommodate this, we've added the ability to create a wallet from a service account, and then later delegate it (ie. transfer ownership of it) to an end user via this endpoint.

Note: Only wallets initially created with the `delayDelegation: true` optional body parameter can be delegated using this API call. This is to prevent, for example, a treasury wallet from being unintentionally delegated to an end-user.&#x20;

{% hint style="warning" %}
Warning: This operation can not be reversed.&#x20;
{% endhint %}

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name               | Conditions      |
| ------------------ | --------------- |
| `Wallets:Delegate` | Always Required |

## Request <a href="#request-body" id="request-body"></a>

| Request body fields | Required/Optional | Description                                                                              | Type   |
| ------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------ |
| `userId`            | Required          | The ID of the end-user to delegate the wallet to.  Eg: "us-gk0i1-5bvju-lj2h98s9h9r5tqp1" | String |

#### Example

```shell
{
  "userId": "us-gk0i1-5bvju-lj2h98s9h9r5tqp1"
}
```

## Response <a href="#response" id="response"></a>

The response indicates the status of the operation.

#### 200 Response example <a href="#response-example" id="response-example"></a>

```json
{
  "status": "Delegated"
}
```
