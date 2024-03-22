# Permissions Overview

Permissions enable you to control access to the API on a granular basis (following the [principle of least privilege](https://en.wikipedia.org/wiki/Principle\_of\_least\_privilege)). As an example, if you have an employee who needs to initiate payments, but shouldn't be able to manipulate policies, you can do that.

Start by [Creating a Permission](permissions/createpermission.md), and then [Assign it](permissions/createassignment.md) to a User.

## Terminology

* **Permission -** a "Permission" contains a set of "Operations", granting access to specific actions (specific endpoints). You create those Permissions, and each Permission has a unique name and ID.
* **Operation -** an operation is an action, and _usually_ maps 1-to-1 with an API endpoint. You don't create operations, there is a fixed list of operations ([see below](permissions-overview.md#available-operations)) that you can include in a Permissions that you create. Every API endpoint has a set of required operations to use it (eg. [Create Wallet Required Permissions](../wallets/create-wallet/#required-permissions))
* **Assignment** - or "Permission Assignment", is the assignment of a given Permission to a Particular User (or Service-Account, or Application). For a given Permission you created, you can assign it to a User (aka "grant it"), or un-assign it from him (aka "revoke it").



## Dfns-managed Permissions

When you onboard with Dfns, some Permissions will be pre-created by Dfns for your organisation, and potentially automatically assigned (eg. the first User of the organisation is automatically granted the "`DfnsFullAdminAccess`" upon creation).

Here's a list of those special "Dfns-managed" Permissions:

* `DfnsFullAdminAccess` -  This Permission includes all existing (and future) operations available in Dfns API. It is automatically assigned to the first User of the Organisation. It is immutable (`isImmutable: true`), so you cannot update it or archive it. You can only assign it or revoke it.



## Available Operations

Here's a list of all operations available in Dfns API:

```
AssetAccounts:Archive
AssetAccounts:Create
AssetAccounts:Read
Auth:Action:Sign
Auth:Apps:Create
Auth:Apps:Read
Auth:Apps:Update
Auth:Creds:Create
Auth:Creds:Read
Auth:Creds:Update
Auth:Types:Application
Auth:Types:Employee
Auth:Types:EndUser
Auth:Types:Pat
Auth:Types:ServiceAccount
Auth:Users:Create
Auth:Users:Delegate
Auth:Users:Read
Auth:Users:Update
Balances:Read
CallbackEvents:Read
CallbackSubscriptions:Archive
CallbackSubscriptions:Create
CallbackSubscriptions:Read
Employees:Read
Payments:Create
Payments:Read
PermissionAssignments:Create
PermissionAssignments:Read
PermissionAssignments:Revoke
PermissionPredicates:Archive
PermissionPredicates:Create
PermissionPredicates:Read
PermissionPredicates:Update
Permissions:Archive
Permissions:Create
Permissions:Read
Permissions:Update
Policies:Archive
Policies:Create
Policies:Read
Policies:Update
Policies:Approvals:Read
Policies:Approvals:Approve
PolicyControlExecutions:Read
PolicyControlExecutions:Update
PolicyControls:Archive
PolicyControls:Create
PolicyControls:Read
PolicyControls:Update
PolicyRules:Archive
PolicyRules:Create
PolicyRules:Read
PolicyRules:Update
PublicKeyAddresses:Read
PublicKeys:Create
PublicKeys:Read
Signatures:Create
Signatures:Read
Signers:ListSigners
Transactions:Create
Transactions:Read
Wallets:BroadcastTransaction
Wallets:Create
Wallets:Delegate
Wallets:Export
Wallets:GenerateSignature
Wallets:Import
Wallets:Read
Wallets:ReadSignature
Wallets:ReadTransaction
Wallets:ReadTransfer
Wallets:TransferAsset
Wallets:Update
Webhooks:Create
Webhooks:Read
Webhooks:Update
Webhooks:Delete
Webhooks:Ping
Webhooks:Events:Read
```

