# PolicyExecution Overview

Based on `ActivityKind`, a `Policy` is activated and its `PolicyRule` is evaluated. This creates a `PolicyExecution` entity recording this activation.


`PolicyExecution` entities serve as an audit log of executed Policies.For example, every time a payment is initiated, a policy of the kind `PolicyActivityKind: PaymentInitiation` will get executed.


It's the responsibility of your internal control applications to monitor these executions and to notify the relevant parties when approvals are required.  Approvals can be submitted by updating the `PolicyControlExecution` status.&#x20;


<!-- 
~~

Policies are executed when certain actions are taken using the Dfns API. For example, a policy with `PolicyActivityKind = PaymentInitiation` will execute every time a payment is initiated.

Every time a `Policy` is executed, it creates a `PolicyExecution` entity. 

It's the responsibility of your internal control applications to monitor these executions and to notify the relevant parties when approvals are required. Approvals can be submitted by updating the `PolicyExecution` status.

~~

Policy executed = we create a `PolicyExecution` entity.
Policy triggered = we create a `PolicyControlExecution` entity. You should monitor these entities specifically; any approvals update their status.
 -->

