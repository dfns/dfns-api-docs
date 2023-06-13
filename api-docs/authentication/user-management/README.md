# Users

Users represent people with access to the Dfns platform.  These can be either Employees of your company or end users of your service who do not work for you (either consumers or corporate clients).   Alternatively, you can create [Service Accounts](../service-account-management/), which serve as API keys for programmatic access to the system. &#x20;

When you call [Create User](createUser.md) providing an email address, an email will be sent from Dfns to the user to onboard them to the Dfns dashboard.  Note in most cases, you will only do this for Employees and can accomplish this from the Settings section of our dashboard without using the API directly.

If you are implementing Delegated Signing in which your user has full control over a Dfns wallet, we recommend authenticating the user yourself, and then calling [delegated registration](../delegated-auth/delegatedregistration.md) via a service account to register on behalf of the end user.   This way, Dfns remains fully white labeled so your users will not know our platform exists.
