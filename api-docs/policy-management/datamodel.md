# PolicyManagement Data Model

Here is a schematic of the policy management data model.  Policies serve as a container for policy rules and policy controls. When the API actions on the left are taken, if a rule is triggered, a corresponding policy execution is created. This policy execution must then be either approved or rejected via [Approve/Reject PolicyControlExecution](policy-control-executions/approve-reject-policycontrolexecution.md).&#x20;

<figure><img src="../../.gitbook/assets/Screen Shot 2022-10-19 at 2.30.21 PM.png" alt=""><figcaption><p>Policy management data model</p></figcaption></figure>
