# ApiKeys Overview

`ApiKeys` allow Dfns customers to delegate and automate functionality by granting authorization tokens to service accounts to programmatically access the Dfns API. The functionality includes the ability to create, manage, revoke, and review authorization tokens.

## JWT token

Our `CreateAPIKey` endpoint returns a JWT token which you can securely persist and then pass in the header of your requests as a bearer token as described on the [authentication/authorization page](../../getting-started/authentication-authorization.md).

## Scopes

To create an API key, you must specify a name as well as an array of scopes the API key has access to. For a full list of scopes, call the [`ListScopes` endpoint](broken-reference). Scopes determine which entities the JWT has access to and which operations it is authorized to perform.

## Policy Engine and revoking API Key

While API key JWT tokens with the proper scopes can be used to accomplish tasks such as payment initiation, they are nonetheless subject to policy engine controls and can be revoked at any time using the [`RevokeAPIKey`](broken-reference) endpoint which invalidates the associated JWT.
