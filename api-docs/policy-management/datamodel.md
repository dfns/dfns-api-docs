# Policy Engine Overview

<figure><img src="../../.gitbook/assets/Screenshot 2022-10-20 at 15.04.32 (1).png" alt=""><figcaption><p>Policy Engine entities</p></figcaption></figure>

A Policy entity holds two types of entities.

* `Policy Rules`: a set of rules that will be checked when a Policy is being evaluated.
* `Policy Controls`: a set of actions that will be executed if the Policy is activated (if one of the Policy Rules is activated).

{% hint style="info" %}
Syntax:

* When a Policy gets "checked against" -> we say it's being  <mark style="background-color:purple;">evaluated</mark>
* When a Policy Rule being checked against “is transgressed” -> we say the Policy is <mark style="background-color:purple;">activated</mark>
{% endhint %}

A Policy is executed in reaction to a specific activity happening, such as a specific API request.

The  `PolicyActivityKind` attached to the Policy on creation, defines which activity is going to trigger its evaluation. Eg. a policy of `activityKind`  `"PaymentInitiation"` will be evaluated when an `InitiatePayment` API request is received.



### Policy Rules

For a list of all supported Policy Rules, see [CreatePolicyRule](policy-rules/createpolicyrule.md).

### Policy Controls

When a Policy is activated (or breached), each one of the `PolicyControl` is executed. For each one, it creates a `PolicyControlExecution` entity, representing the execution of this policy control at this specific moment.

Some kind of PolicyControlKinds, like `RequestApproval`, require a follow-up actions to be taken (approve or reject, using [Approve/Reject PolicyControlExecution](policyexecution/approve-reject-policy-execution.md))
