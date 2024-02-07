# TransactionAmountLimit

The TransactionAmountLimit rule checks the fiat amount of the transaction against a specified limit.

### Configuration Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>limit</code></td><td>Required</td><td>Amount limit in <code>currency</code></td><td>Positive Integer</td></tr><tr><td><code>currency</code></td><td>Required</td><td>Fiat currency, either EUR or USD</td><td>Enumerated Type</td></tr></tbody></table>

### Example Rule <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "kind": "TransactionAmountLimit",
  "configuration": {
    "limit": 1000,
    "currency": "EUR",
  },
}
```

**Notes:**

* Always triggers if activity is signature generation or transaction broadcast as Dfns can not reliably extract the transaction amount from the API call.
