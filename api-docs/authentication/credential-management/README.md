# Credential Management
The Credential APIs are used to manage User Credentials.

## Credential Kinds
You can choose to allow your users to create `Key` or `WebAuthn` based credentials.

`Key` credentials give extra flexibilty over `WebAuthn` to design signing to meet your needs. For example, you could choose to have a key without a passphrase (disabling MFA), to support scenarios where you don't want the user to have to interact with your application to sign a transaction. Or, as another example, you could build an integration with an authentication device that is not supported by WebAuthn.

## Security of Key Based Credentials
It is recommended that a user's credentials never leave their system or device. This ensures that the credentials cannot be phished and that you as a service provide never have access to use the key on behalf of the user.

If you are storing the key in the user's browser. We recommend using a Service Worker to perform all cryptographic operations in a secure context.

## Performing Actions on Behalf of your User
If you (your server) need to perform an action in a user's wallet on behalf of your user, we recommend creating a `Personal Access Token` in your user's account, rather than registering a credential (in your control) for your user. This allows the user to restrict the actions you are allowed to perform, and they can time-bound your access.
