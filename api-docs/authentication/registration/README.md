# Registration

When new users are created within your organization, they will receive a registration email containing a registration code. These endpoints allow this user to complete the registration process.

This registration process includes registering the user's authentication method. Either:
- WebAuthn (Passwordless MFA)
- a custom Key (public key of a public/private keypair) if this user will only interact programatically.

The registration flow is as following:

1. Create a user registration challenge (`POST /auth/registration/init`).

Dfns will verify the registration code sent by the user, and generate a challenge to be signed and passed to the second endpoint. A temporary authentication token is also sent back, to be passed in the `Authorization: Bearer [temporary token]` header of the next registration endpoint.

2. Complete the user registration (`POST /auth/registration`)

Here you will register an authentication method, and send the previous challenge with a signature.
