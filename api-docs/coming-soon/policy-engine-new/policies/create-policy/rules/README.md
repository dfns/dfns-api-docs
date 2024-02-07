# Rules

Every policy requires a rule to be specified. Upon policy evaluation, the configuration specified in the rule will be used to determine whether the activity requires approval. Supported rules include:

* `AlwaysRequireApproval:` Always trigger policy approval.
* `TransactionAmountLimit:` Trigger if transaction amount is greater than limit.
* `TransactionAmountVelocity:` Trigger if cumulative transaction amount is greater than limit.
* `TransactionCountVelocity:` Trigger if number of transactions is greater than limit.
