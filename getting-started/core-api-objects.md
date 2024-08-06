# Core API Objects

The following are the core objects (also called entities) that you will interact with when using the Dfns APIs/SDKs.

## Organizations

An Organization (or Org for short) is the master workspace under which all other objects reside.  Currently only Dfns staff can create orgs, but soon users will be able to generate them in a self service flow from our marketing website to initiate trials.  An org is a fully isolated instance.  The only entity which can span orgs is Users.&#x20;

## Users

Users are people who use the Dfns platform.  Users generally leverage passkeys via WebAuthn to sign API requests.  Users can be either `Employees` or `EndUsers`.   Users can span between many orgs and must be assigned Permissions to execute operations.  See [here](../api-docs/authentication/user-management/) for more information on Users.&#x20;

## Service Accounts

Service Accounts are machine users.  They are instantiated with a public key which is used to verify signatures created with a secret known only to the Service Account.  Like Users, Service Accounts must be assigned Permissions.  See [here](../api-docs/authentication/service-account-management/) for more information on Service Accounts.&#x20;

## Applications

Applications are used to scope WebAuthn credentials to specific domains.  For security, a credential created on one origin cannot be used to sign on another origin. Applications also may be granted Permissions.  See [here](../api-docs/authentication/application-management/) for more information on Applications.

## Credentials

Users can have many credentials which authenticate them to the platform. There are two types of credentials: standard credentials for signing API requests on an ongoing basis, and recovery credentials used one time to recover account access.  Both credential types use asymmetric key pairs to sign challenges sent from the authentication service to verify user identity. See [here](../api-docs/authentication/credential-management/) for more information on Credentials.

## Permissions & Permission Assignments

Permissions are collections of API operations which constitute user roles in the system.  Permissions must be assigned to specific users in order to grant them access to platform functionality.  Required permissions for any given API endpoint are found at the top of the API reference page. See [here](../api-docs/permissions/) for more information on Permissions.

## Wallets

Wallets are the core entity used to execute MPC/TSS and interact with blockchains on the Dfns platform. Creating wallets executes distributed key generation, storing key shares in a distributed network. Transactions are initiated from wallets and blockchain events are indexed into wallet history. See [here](../api-docs/wallets/) for more information on Wallets.

## Policies & Approvals

Policies are the core entity used to configure the Dfns policy engine. Policies contain a target transaction type, rule set, action, and filters. Policies can be used to trigger approvals requiring multiple signatures to execute a transaction. These are represented as approval entities. See [here](../api-docs/policy-engine/) for more information on Policies.

## Webhooks & Events

Webhooks enable programmatic callbacks in response to events which take place within the Dfns platform or on chain. When you subscribe to webhook events, you receive Event entities with detailed information on the events that occurred in order to trigger programmatic actions in response. See [here](../api-docs/webhooks/) for more information on Webhooks.



