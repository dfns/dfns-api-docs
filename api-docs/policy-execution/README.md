# PolicyExecution Overview

Policies are executed when certain actions are taken using the Dfns API.  For example, a policy with `PaymentInitiation` as the `PolicyActivityKind` will trigger every time a payment is initiated.

Every time a `Policy` is triggered, it creates a `PolicyExecution`.   It's the responsibility of your internal control applications to monitor these executions and to notify the relevant parties when approvals are required.  Approvals can be submitted by updating the `PolicyExecution` status.&#x20;
