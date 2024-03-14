# ApiKeys Overview

{% hint style="danger" %}
Warning: This API has been deprecated.  Please contact us to move to the latest Authentication system and transition to using [Service Accounts](../../../authentication/service-account-management/).&#x20;
{% endhint %}

`ApiKeys` allow Dfns customers to delegate and automate functionality by granting authorization tokens to service accounts to programmatically access the Dfns API. The functionality includes the ability to create, manage, revoke, and review authorization tokens.

## JWT token

Our `CreateAPIKey` endpoint returns a JWT token which you can securely persist and then pass in the header of your requests as a bearer token as described on the [authentication page](../../../../advanced-topics/authentication/authentication-authorization.md).

## Permissions

Once an API key has been created, like users, it must be granted permissions to access various API endpoints. See the [permissions documentation](../../apikeys/broken-reference/) for more information.

## Policy Engine and revoking API Key

While API key JWT tokens with the proper permissions can be used to accomplish tasks such as payment initiation, they are nonetheless subject to policy engine controls and can be revoked at any time using the [`RevokeAPIKey`](revokeapikey.md) endpoint which invalidates the associated JWT. _API keys can not approve policy control executions._
