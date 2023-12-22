# Policy Engine

Policies are used as part of risk management, information security, or other compliance functions. They intercept activities and execute controls to reduce the risk or to cancel activity altogether.

The policy Engine allows you to create a policy, specifying the conditions that will result in an approval being triggered, as well as the approval groups whose approval will be required.

Clare, the customer's compliance officer, has to implement these new policies:

1. For payments over $100,000, request approval from a Vice President.
2. For payments over $250,000, request approval from both a Vice President and a Managing Director.

To do that Clare will have to create two `Policies`:

* **Large Payment**:&#x20;
  * Rule: `TransactionAmountLimit` with amount value of $100,000.
  * Approval scoped to VicePresidents.
* **Very Large Payment**:
  * Rule: `TransactionAmountLimit` with amount value of $250,000.
  * Approval scoped to ManagingDirectors.
