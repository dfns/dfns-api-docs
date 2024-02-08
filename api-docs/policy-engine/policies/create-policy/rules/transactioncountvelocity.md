# TransactionCountVelocity

The TransactionCountVelocity rule validates the number of transactions, including the current one, in the specified timeframe.

### Configuration Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Required</td><td>Count limit</td><td>Positive Integer</td></tr><tr><td><code>timeframe</code></td><td>Required</td><td>Time period in minutes. Minimum 1, Maximum 43,200</td><td>Positive Integer</td></tr></tbody></table>

### Example Rule <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "kind": "TransactionCountVelocity",
  "configuration": {
    "limit": 5,
    "timeframe": 60,
  },
}
```
