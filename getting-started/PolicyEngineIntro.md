# Policy Engine

Policies are used as part of risk management, information security, or other compliance functions. They intercept activities and execute controls to reduce the risk or to cancel activity altogether.

<!-- Policy Engine allows you to create a `PolicyRule` (a condition to be met) and one or more `PolicyControls` (actions to be taken when the condition is met), and then put them together to create `Policies`.  Take the following example: -->


Policy Engine allows you to create `PolicyRules` (conditions to be met) and `PolicyControls` (actions to be taken), and then put them together to create `Policies`.  Take the following example:

Clare, the customer's compliance officer, has to implement four new policies:
1. When a new employee is added, notify the Managing Directors.
2. When payment above $50,000 is initiated, notify senior management.
3. For payments over $100,000, request approval from a Vice President and notify Managing Directors.
4. For payments over $250,000, request approval from both a Vice President and a Managing Director.

To do that Clare will have to create the following `PolicyRules`, `PolicyControls`, and `Policies`.

###  `PolicyRules`
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


It is important to note that `PolicyRules`, `PolicyControls`, and `Policy` are immutable. When they are updated, the new `Policy` is created, and the previous `Policy` is marked as `Archived`. The specific `Policy` can be identified by a compound key containing its unique ID and version. This way full audit logs can be produced, with reference to the exact version of the `Policy` that was used.



### More about Rules
Dfns supports the following rule types, which are triggered as follows:

* Payment Amount limit rules, setting the limit of an asset quantity not to be exceeded. The rules can be narrowed down either to a given User (employee or customer), or given wallets. By default, they are applied globally to all users and wallets belonging to the customer. The amount can be specified in  `USD`, `GBP`, `EUR`, `BTC`, or `ETH`
:
  * `PaymentAmountLimit`: when payment exceeds a given limit.  
  * `PaymentAmountVelocity`: when the compound amount of multiple payments exceeds a given limit.  
* `EmployeeAdded`: when a new employee is added. This rule can be narrowed by specific permission.
* `EmployeeUpdated`: when employee details, such as name, email, contact data, or permissions are updated. This rule can be narrowed by specific permission.
* `EmployeePermissionsUpdated`: when employee permissions are updated.
* `PolicyCreatedOrUpdated`: when the `Policy` is created or updated.
* `PolicyRuleCreatedOrUpdated`: when the `PolicyRule` is created or updated.
* `PolicyControlCreatedOrUpdated`: when the `PolicyControl` is created or updated.




