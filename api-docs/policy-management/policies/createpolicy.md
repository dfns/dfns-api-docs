# Create Policy

`POST /policies`

Policies join [Policy Rules](../policy-rules/createpolicyrule.md) and [Policy Controls ](../policy-controls/createpolicycontrol.md)with an `activityKind` that determines which actions on the API may trigger a Policy Execution. These are the supported `activityKinds`:

* `WalletsTransferAsset`: Examine Policy Rules when the [Transfer Assets from Wallet](../../beta-wallets-api-and-nfts/transfer-asset-from-wallet.md) API is called
* `WalletsBroadcastTransaction`: Examine Policy Rules when the [Broadcast Transaction from Wallet ](../../beta-wallets-api-and-nfts/broadcast-transaction-from-wallet.md)API is called.
* `WalletsGenerateSignature`: Examine Policy Rules when the [Generate Signature from Wallet](../../beta-wallets-api-and-nfts/generate-signature-from-wallet.md) API is called.



For legacy Asset Accounts, use the following:&#x20;

* `PaymentInitiation`: Examine Policy Rules when the [Initiate Payment](../../deprecated-apis/high-level-api-asset-accounts-and-payments/payments/initiatepayment.md) API is called.
* `TransactionInitiation`: Examine Policy Rules when the [Broadcast Transaction](../../deprecated-apis/low-level-api-keys-and-transactions/transaction-execution/broadcasttransaction/) API is called.
* `CreatingSignature`: Examine Policy Rules when the [Create Signature](../../deprecated-apis/low-level-api-keys-and-transactions/transaction-execution/createsignature.md) API is called.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../authentication/user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

| Name              | Conditions      |
| ----------------- | --------------- |
| `Policies:Create` | Always Required |

## Request body <a href="#request-body" id="request-body"></a>

<table><thead><tr><th width="217">Request body fields</th><th width="113">Required/Optional</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>name</code></td><td>Required</td><td>A name for the Policy</td><td>String</td></tr><tr><td><code>description</code></td><td>Required</td><td>A description for the Policy</td><td>String</td></tr><tr><td><code>activityKind</code></td><td>Required</td><td>Determines which actions on the API may trigger a Policy Execution. See supported values above.</td><td>Enumerated Type</td></tr><tr><td><code>ruleIds</code></td><td>Required</td><td>Array of Policy Rule IDs to evaluate</td><td>Array of Strings</td></tr><tr><td><code>controlIds</code></td><td>Required</td><td>Array of Policy Control IDs to apply</td><td>Array of Strings</td></tr><tr><td><code>status</code></td><td>Required</td><td>"Enabled", "Disabled"</td><td>Enumerated Type</td></tr><tr><td><code>filter</code></td><td>Optional</td><td>Specify a list of entities to scope the policy to (eg. wallets)</td><td>Object</td></tr></tbody></table>

### Filter Object

Use the following fields in the nested `filter` object to scope the policy to a specific entity:

<table><thead><tr><th width="254">Request body fields</th><th width="113">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>Specify: "Wallet"</td><td>Enumerated Type</td></tr><tr><td><code>walletIds</code></td><td>Required</td><td>IDs of wallets the policy should apply to.</td><td>Array of Strings</td></tr></tbody></table>

### Request Example <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "activityKind": "WalletsTransferAsset",
  "description": "Preventing theft",
  "name": "Anti Theft Policy",
  "ruleIds": ["pr-edward-shade-d887751054"],
  "controlIds": ["pc-music-william-failed-54497df60b"],
  "status": "Enabled",
  "filter": {
    "kind": "Wallet",
    "walletIds": ["wa-...", "wa-..."]
  }
}
```

## Response <a href="#response" id="response"></a>

### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a status indicating whether the rule has been enabled:

```json
{
  "activityKind": "WalletsGenerateSignature",
  "description": "Test AlwaysActive",
  "name": "Anti Theft Policy",
  "ruleIds": [
    "pr-nebraska-november-finch-4e10e32a0d"
  ],
  "controlIds": [
    "pc-table-pennsylvania-269c9cfee9"
  ],
  "status": "Enabled",
  "id": "pl-mockingbird-seventeen-c14e223d70",
  "version": "f1d7d94gm",
  "versionedId": "pl-mockingbird-seventeen-c14e223d70@f1d7d94gm",
  "orgId": "cu-purple-pip-1b417b958500",
  "author": "oe-nine-artist-9de60fef6963",
  "dateCreated": "2022-07-19T19:58:21.334Z"
}

```
