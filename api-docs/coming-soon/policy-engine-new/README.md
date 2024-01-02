# Policy Engine (New)

Policies enable businesses to enforce rules and request approvals on top of actions taken using the Dfns API.

Until the old policy engine is removed, the following logic will be applied to asset transfer from wallets:

* The new policy engine will be triggered only if:
  * No relevant policies from the old policy engine exist.
  * No policies from the old policy engine are triggered.
* If a policy from the new engine is triggered, then the new approval flow will be started. Otherwise, the old approval flow will be triggered.
