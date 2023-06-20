# Request Headers

All requests to the Dfns API need to include at least these headers:

<table><thead><tr><th width="267.36734693877554">Header</th><th>Description</th></tr></thead><tbody><tr><td><code>X-DFNS-APPID: &#x3C;appid></code></td><td>ID of an Application created in your organization (see <a data-mention href="../api-docs/authentication/application-management/">application-management</a>)</td></tr><tr><td><code>X-DFNS-NONCE: &#x3C;nonce></code></td><td>Random value used to prevent replay attacks. Must be a JSON string with the following fields:<br>- <code>uuid</code> - Random value of at least 12 characters<br>- <code>date</code> - Current time of the request in ISO String format</td></tr></tbody></table>

## Authentication Headers

Most requests to the Dfns API need to be authenticated, and will need to include the following additional headers:

<table><thead><tr><th width="267.36734693877554">Header</th><th>Description</th></tr></thead><tbody><tr><td><code>Authorization: Bearer &#x3C;token></code></td><td>An authentication token (see <a data-mention href="authentication-authorization.md#get-an-authentication-token">#get-an-authentication-token</a>)</td></tr></tbody></table>

## User Action Signing Header

Most requests that change the state within the Dfns system need to be signed (see [user-action-signing](../api-docs/authentication/user-action-signing/ "mention")), and require the following additional header:

<table><thead><tr><th width="289">Header</th><th>Description</th></tr></thead><tbody><tr><td><code>X-DFNS-USERACTION: &#x3C;user-action-signature></code></td><td>A one time token you got after the <a data-mention href="../api-docs/authentication/user-action-signing/">user-action-signing</a> flow</td></tr></tbody></table>

## Registration Headers

Similar to authenticated endpoints, the `Complete User Registration` endpoint needs an authentication token. This token is passed in the `Authentication` header:

<table><thead><tr><th width="267.36734693877554">Header</th><th>Description</th></tr></thead><tbody><tr><td><code>Authorization: Bearer &#x3C;token></code></td><td>The temporary authentication token returned from <a data-mention href="../api-docs/authentication/registration/initUserRegistration.md#responses">#responses</a></td></tr></tbody></table>

## Server-Side Application Headers

{% hint style="warning" %}
This is not a common scenario. Dfns recommends using a [Client-Side Application](../api-docs/authentication/application-management/#application-types) for most use cases
{% endhint %}

{% hint style="info" %}
`App Secret` and `API Signature` do not replace the authentication and user action signing requirements. For endpoints that need authentication you will still provide the `Authorization` header, and for endpoints that require user action signing, you will also still provide the `X-DFNS-USERACTION` header.

Application tokens do not grant access to the Dfns API, they are just used to enforce how the API is called
{% endhint %}

Server-side applications can be used to ensure that all requests going to the Dfns API must originate from your servers. This is enforced by the caller providing an additional signature and an application secret (token) for the request, using the following additional headers:

<table><thead><tr><th width="343.36734693877554">Header</th><th>Description</th></tr></thead><tbody><tr><td><code>X-DFNS-APPSECRET: &#x3C;app-token></code></td><td>A secret token that identifies the application that is calling the API</td></tr><tr><td><code>X-DFNS-APISIGNATURE: &#x3C;api-signature></code></td><td>The signature of the normalized request being made to the Dfns API</td></tr></tbody></table>
