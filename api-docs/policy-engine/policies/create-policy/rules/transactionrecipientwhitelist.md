# TransactionRecipientWhitelist

The TransactionRecipientWhitelist rule validates whether the destination address is in the list of whitelisted addresses.

### Configuration Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>addresses</code></td><td>Required</td><td>Whitelisted addresses</td><td>String Array</td></tr></tbody></table>

### Example Rule <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "kind": "TransactionRecipientWhitelist",
  "configuration": {
    "addresses": ["0x...0"],
  },
}
```
