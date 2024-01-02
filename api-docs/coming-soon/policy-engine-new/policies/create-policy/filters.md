# Filters

Filters are a list of objects that specify the entities to which the policy will apply.

### Filters Object

<table><thead><tr><th width="199">Request body fields</th><th width="185">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>id</code></td><td>Required</td><td>The IDs of entities that will be subject to the policy.</td><td>Object</td></tr></tbody></table>

### Example filters <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "id": {
    "oneOf": ["wal-...", "wal-..."],
  },
}
```
