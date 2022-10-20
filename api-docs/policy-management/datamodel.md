# Policy Engine Overview

<figure><img src="../../.gitbook/assets/Screen Shot 2022-10-19 at 2.30.21 PM.png" alt=""><figcaption><p>Policy management overview</p></figcaption></figure>

A Policy entity holds two types of entities.

* `Policy Rules`: a set of rules that will be checked against when Policy is being evaluated (or executed).
* `Policy Controls`: a set of actions that will be executed if the Policy is breached (if one of the Policy Rules is activated (or breached).

{% hint style="info" %}
Syntax:

* When a Policy gets "checked against" -> we say it's being  <mark style="background-color:purple;">executed</mark>, or <mark style="background-color:purple;">evaluated</mark>
* When a Policy Rule being checked against “is transgressed” -> we say the Policy is <mark style="background-color:purple;">activated</mark> or <mark style="background-color:purple;">breached</mark>&#x20;
{% endhint %}

A Policy is executed in reaction to a specific activity happening, such as a specific API request.

The  `PolicyActivityKind` attached to the Policy on creation, defines which activity is going to trigger its evaluation. Eg. a policy of `activityKind`  `"PaymentInitiation"` will be evaluated when an `InitiatePayment` API request is received.



### Policy Rules

Dfns supports the following rule types, which are triggered as follows:

* Payment Amount limit rules, setting the limit of an asset quantity not to be exceeded. The rules can be narrowed down either to a given User (employee or customer), or given wallets. By default, they are applied globally to all users and wallets belonging to the customer. The amount can be specified in `USD`, `GBP`, `EUR`, `BTC`, or `ETH` :
  * `PaymentAmountLimit`: when payment exceeds a given limit.
  * `PaymentAmountVelocity`: when the compound amount of multiple payments exceeds a given limit.
* `EmployeeAdded`: when a new employee is added. This rule can be narrowed by specific permission.
* `EmployeeUpdated`: when employee details, such as name, email, contact data, or permissions are updated. This rule can be narrowed by specific permission.
* `EmployeePermissionsUpdated`: when employee permissions are updated.
* `PolicyCreatedOrUpdated`: when the `Policy` is created or updated.
* `PolicyRuleCreatedOrUpdated`: when the `PolicyRule` is created or updated.
* `PolicyControlCreatedOrUpdated`: when the `PolicyControl` is created or updated.



### Policy Controls

When a Policy is activated (or breached), each one of the `PolicyControl` is executed. For each one, it creates a `PolicyControlExecution` entity, representing the execution of this policy control at this specific moment.

Some kind of PolicyControls, like `NotifyAndAudit`, do not require any follow-up user actions.

Some kind of PolicyControlKinds, like `RequestApproval`, require a follow-up actions to be taken (approve or reject, using [Approve/Reject PolicyControlExecution](policyexecution/approve-reject-policy-execution.md))
