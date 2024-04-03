# Action

An action specifies the logic in case a policy is triggered. For `RequestApproval` actions, approval groups are a list of objects that specify the approvers whose decision is required for an activity to be approved.

### Action Object

<table><thead><tr><th width="254">Request body fields</th><th width="113">Required/Optional</th><th width="218">Description</th><th>Type</th></tr></thead><tbody><tr><td><code>kind</code></td><td>Required</td><td>RequestApproval or Blocked.</td><td>Enumerated Type</td></tr><tr><td><code>approvalGroups</code></td><td>Required / Optional</td><td>Quorum required for approval of activity.</td><td>Object</td></tr><tr><td><code>autoRejectTimeout</code></td><td>Required / Optional</td><td>Fine-grained approval group configuration.</td><td>Object</td></tr></tbody></table>

### Example action (RequestApproval) <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "action": {
    "kind": "RequestApproval",
    "approvalGroups": [
      {
        "name": "Admins",
        "quorum": 1,
        "approvers": {
          "userId": {
            "in": [
              "us-..."
            ]
          }
        }
      }
    ],
    "autoRejectTimeout": 60
  }
}
```

The `quorum` is the number of approvals required for the activity to be approved.

### Example action (Block) <a href="#request-example.1" id="request-example.1"></a>

```json
{
  "action": {
    "kind": "Block"
  }
}
```

