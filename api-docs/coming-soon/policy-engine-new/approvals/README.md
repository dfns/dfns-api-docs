# Approvals

Whenever an activity is evaluated, an approval object is created. When an activity is approved or denied, the policy engine notifies the relevant service to either execute or reject the activity.

Only a single approval is allowed from one specific user. If multiple approval groups exist, an approval from a single user will count as an approval for each group that they are able to approve.

A denial immediately rejects an activity. The initiator is not allowed to approve their activity, but can deny it.
