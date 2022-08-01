# Policy Engine

Policy Engine allows you to create `PolicyRules`, `PolicyControls`, and then use them to create `Policies`.  Take the following example:

Clare, a compliance officer, has to implement four new policies:

1. Notify the Managing Directors when a new employee is added.
2. Notify senior management when a payment above $50,000 is initiated.
3. Request approval from a Vice President and notify Managing Directors for payments over $100,000.
4. Request approval from a Vice President and a Managing Director for payments over $250,000.

To do that Clare will have to create `PolicyRules`:

* **Onboarded Employee**: `EmployeeAdded`, with the default configuration.
* **Medium Payment**: `PaymentAmountLimit` with amount value of $50,000.
* **Large Payment**: `PaymentAmountLimit` with amount value of $100,000.
* **Very Large Payment**: `PaymentAmountLimit` with amount value of $250,000.

And the following `PolicyControls`:

* Notify Vice Presidents: `NotifyOverEmail` scoped to VicePresident group.
* Notify Managing Directors: `NotifyOverEmail` scoped to ManagingDirector group.
* Vice President Approval: `RequestApproval` scoped to VicePresident group.
* Managing Director Approval: `RequestApproval` scoped to ManagingDirector group.

Finally, Clare will create the following `Policies`:

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

It is important to note that `PolicyRules, PolicyControls`, and `Policies` are immutable. When they are updated, a new `Policy` is created, and the previous `Policy` is marked as `Archived`.  A specific `Policy` can be identified by a compound key containing its unique id and version. This way a full audit log can be produced, with references to the exact versions of the `Policies` that were used.

## More about Rules

Dfns supports the following rule types:

* The `PaymentAmountLimit` rule is triggered when payment exceeds a given limit. The amount can be specified in the following denominations: USD, GBP, EUR, BTC, or ETH. Furthermore, the rule can be narrowed down either to a given User (employee or customer) or to given wallets. By default, it is applied globally to all users and wallets belonging to the customer.
* The `PaymentAmountVelocity` rule is triggered when multiple payments in aggregate exceed a given limit.  The same parameters apply as above for `PaymentAmountLimit.`
* The `EmployeeAdded` rule is triggered when a new employee is added. This rule can be narrowed by specific permissions.
* The `EmployeeUpdated` rule is triggered when employee details, such as name, email, contact data, or permissions are updated.&#x20;
* The `EmployeePermissionsUpdated` rule is triggered when employee permissions are updated.
* The `PolicyCreatedOrUpdated` rule is triggered when a `Policy` is created or updated.
* The `PolicyRuleCreatedOrUpdated` rule is triggered when a `PolicyRule` is created or updated.
* The `PolicyControlCreatedOrUpdated` rule is triggered when a `PolicyControl` is created or updated.
