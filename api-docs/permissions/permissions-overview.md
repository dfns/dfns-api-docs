# Permissions Overview

Security is always our top priority at Dfns. One key tenet of security is [the principle of least privilege](https://en.wikipedia.org/wiki/Principle\_of\_least\_privilege). Basically this states that any given user should have only the minimum access required in order to do their job.&#x20;

The Dfns Permissions APIs put this principle into practice. Permissions enable you to control access to the API on a highly granular basis. For example, if you have an employee who needs to initiate payments but should not be able to manipulate policies, they can have the payment permission assigned but the policy permission excluded.

Permissions rely on a list of enumerated types that take the form:

`Service:Action`

You can find the permission enum you need at the top of the relevant API docs page (eg. see [Create Wallet Permissions](https://docs.dfns.co/d/api-docs/wallets/create-wallet#required-permissions)).  To use Permissions, [create a permission](permissions/createpermission.md) with the associated operations, give it a name, and then [create an assignment](permission-assignments/createassignment.md) to a user.&#x20;

You can see the list of all the operations in the [List of operations](list-of-operations.md) page.

