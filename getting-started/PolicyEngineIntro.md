# Policy Engine

Policies are used as part of risk management, information security, or other compliance functions. They intercept activities and execute controls to reduce the risk or to cancel activity altogether.

Policy Engine allows you to create `PolicyRules` (conditions to be met) and `PolicyControls` (actions to be taken), and then put them together to create `Policies`. Take the following example:

Clare, the customer's compliance officer, has to implement four new policies:

1. When a new employee is added, notify the Managing Directors.
2. When payment above $50,000 is initiated, notify senior management.
3. For payments over $100,000, request approval from a Vice President and notify Managing Directors.
4. For payments over $250,000, request approval from both a Vice President and a Managing Director.

To do that Clare will have to create `Policies` composed of different `PolicyRules` and `PolicyControls`:

### `PolicyRules`

* **Onboarded Employee**: `EmployeeAdded`, with the default configuration.
* **Medium Payment**: `PaymentAmountLimit` with amount value of $50,000.
* **Large Payment**: `PaymentAmountLimit` with amount value of $100,000.
* **Very Large Payment**: `PaymentAmountLimit` with amount value of $250,000.

### `PolicyControls`

* Notify Vice Presidents: `NotifyOverEmail` scoped to VicePresident group.
* Notify Managing Directors: `NotifyOverEmail` scoped to ManagingDirector group.
* Vice President Approval: `RequestApproval` scoped to VicePresident group.
* Managing Director Approval: `RequestApproval` scoped to ManagingDirector group.

### `Policies`

* New Employee Added `Policy` with:
  * Rules: Onboarded Employee
  * Controls: Notify Managing Directors
* Medium Payment `Policy` with:
  * Rules: Medium Payment
  * Controls: Notify Vice Presidents, Notify Managing Directors.
* Large Payment `Policy` with:
  * Rules: Large Payment
  * Controls: Vice President Approval
* Very Large Payment `Policy` with:
  * Rules: Very Large Payment
  * Controls: Vice President Approval, Managing Director Approval
