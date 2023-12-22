# TransactionAmountVelocity

The TransactionAmountVelocity rule calculates the cumulative fiat amount for all transactions, including the current one, in the specified timeframe.

### Configuration Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Required</td><td>Amount limit.</td><td>Enumerated Type</td></tr><tr><td><code>currency</code></td><td>Required</td><td>Fiat currency, either EUR or USD.</td><td>Enumerated Type</td></tr><tr><td><code>timeframe</code></td><td>Required</td><td>Time period in minutes. Minimum 1, Maximum 43,200.</td><td>Number</td></tr></tbody></table>

### Example Rule <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "kind": "TransactionAmountVelocity",
  "configuration": {
    "limit": 1000,
    "currency": "EUR",
    "timeframe": 60,
  },
}
```

**Notes:**

* Triggers if any of the activities in the specified timeframe do not have market data.
* Always triggers if any activity in specified timeframe, including the current activity, is signature generation or transaction broadcast.
