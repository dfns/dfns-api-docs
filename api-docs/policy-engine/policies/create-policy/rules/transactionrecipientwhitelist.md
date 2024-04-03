# TransactionRecipientWhitelist

The `TransactionRecipientWhitelist` rule validates whether the destination address is in the list of whitelisted addresses.  This rule will trigger if the recipient is NOT on the specified whitelist.&#x20;

{% hint style="warning" %}
Note for [Broadcast Transaction](../../../../wallets/broadcast-transaction-from-wallet.md) and [Generate Signature](../../../../wallets/generate-signature-from-wallet/) methods, Dfns can not reliably determine the recipient of the transaction.  Therefore this rule will "fail closed" by always triggering in response to these API calls.&#x20;
{% endhint %}

### Configuration Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>addresses</code></td><td>Required</td><td>Whitelisted addresses</td><td>String Array</td></tr></tbody></table>

### Example Rule <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "kind": "TransactionRecipientWhitelist",
  "configuration": {
    "addresses": ["0x...0", "0x...1"],
  },
}
```
