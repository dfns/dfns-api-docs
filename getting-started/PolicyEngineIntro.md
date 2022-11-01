# Policy Engine

Policies are used as part of risk management, information security, or other compliance functions. They intercept activities and execute controls to reduce the risk or to cancel activity altogether.

Policy Engine allows you to create `PolicyRules` (conditions to be met) and `PolicyControls` (actions to be taken), and then put them together to create `Policies`. Take the following example:

Clare, the customer's compliance officer, has to implement these new policies:

1. For payments over $100,000, request approval from a Vice President.
2. For payments over $250,000, request approval from both a Vice President and a Managing Director.

To do that Clare will have to create `Policies` composed of different `PolicyRules` and `PolicyControls`:

### `PolicyRules`

* **Large Payment**: `PaymentAmountLimit` with amount value of $100,000.
* **Very Large Payment**: `PaymentAmountLimit` with amount value of $250,000.

### `PolicyControls`

* Vice President Approval: `RequestApproval` scoped to VicePresidents.
* Managing Director Approval: `RequestApproval` scoped to ManagingDirectors.

### `Policies`

* Large Payment `Policy` with:
  * Rules: Large Payment
  * Controls: Vice President Approval
* Very Large Payment `Policy` with:
  * Rules: Very Large Payment
  * Controls: Vice President Approval, Managing Director Approval
