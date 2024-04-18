# Credentials

User Credentials are used to sign any API call that requires user signature. Most API requests (non-readonly requests mostly) require such a signature.

Credentials can be of different kinds (see below), but are essentially all a public/private keypair. The private part is only known and kept by the user. The public key is shared with Dfns, so Dfns can validate the signature produced by the private key.&#x20;



## Credential Kinds

The different Credential kinds are:

* **`Fido2` Credential** (also known as "Passkeys" or "WebauthN credential"). This type of credential is the recommended one for any human user. It's relies on the [WebauthN standard](https://en.wikipedia.org/wiki/WebAuthn). Most recent devices (laptop, phones, browsers, password managers etc...) support passkeys nowadays. Your device will handle creating a passkey and storing it securely so the user can re-use it later on this same device. Passkeys are tied to a domain name, which is the domain of the application you are using, and cannot be used from one domain to the next.
* **`Key` Credential**. This is a "raw" public/private keypair, mostly meant to be used by [Service Accounts](../../../api-docs/authentication/service-account-management/) (aka "machine Users"). You are responsible for storing it securely, so that for example your Service Account can perform some API actions from your server. See [Generate a Key Pair](generate-a-key-pair.md).
* **`RecoveryKey` Credential**. This is essentially like a Key Credential, but wrapped in a way where the User can just safekeep an intelligible human-readable recovery code. Users can print it and store it securely, or save this recovery code in some password manager, etc...



## Redundancy

A User can create many Credentials, and that's even recommended, in case he loses one of his credential (eg. he loses his phone where was stored his passkey credential). They can create several passkeys credential on different devices (eg. one on his laptop, one on his phone, one in his password manager, on a yubikey etc...)



## Credential Signature Flow

Most API requests (non-readonly requests mostly) require the signature from a valid Credential owned by the User. The credential signature flow usually looks like:

1. User calls a first endpoint to get a challenge back (some cypher text that needs to be signed)
2. User sign the challenge using a valid credential
3. User calls a second endpoint to submit the signature

Different types of challenges that can be requested by a User:

* A Registration Challenge (to register the first user credential, when user registers)
* A Login Challenge (to login and get an auth token)
* A User Action Challenge (required by most non-readonly API calls)
* A Credential Challenge (used to create a new Credential)



## Credential Creation Flows

There are two possible flows to create a new Credential for a User. The flow you will choose depend on where the User is (which app), and whether he has access access to his existing credential from this place.

### Regular flow

This flow requires the last call (registration of the new credential) to be signed by an existing valid credential. That means that the user needs to have an existing credential accessible from the place where he's adding a new credential.

1. Call [Create Credential Challenge](../../../api-docs/authentication/credential-management/api-reference/createusercredentialchallenge.md) to get a  "Credential challenge" back. This endpoint does not require a user-action-signature required, so no credential signature involved here.
2. Create a new credential locally, sign the above challenge with it.
3. Call [Create Credential](../../../api-docs/authentication/credential-management/api-reference/createusercredential-1.md)  to complete. This endpoint requires a [User Action Flow](../../../getting-started/authentication-authorization.md#sign-api-requests-user-action-signing), so it involves signing first **with an existing valid credential** to get an user action token.

### Create Credential With Code flow

This flow requires the first call to be signed by an existing valid credential (creating the code). From then, the last steps can be performed without signature from a valid credential.

This flow is useful when you want a user to create a new Credential from an app which doesn't have access to the existing valid credential (since passkeys are tied to the domain name, they cannot be used "cross-domain", eg. a passkey registered on domain `www.app-1.com` cannot be used inside the app `www.app-2.com)`

1. In App 1, call [Create Credential Code](../../../api-docs/authentication/credential-management/api-reference/createusercredential.md) to get a one-time code. The code will only be valid for 1 minute. This endpoint requires a [User Action Flow](../../../getting-started/authentication-authorization.md#sign-api-requests-user-action-signing), so it involves signing first **with an existing valid credential** to get an user action token.
2. In App 2, call [Create Credential Challenge With Code](../../../api-docs/authentication/credential-management/api-reference/createusercredentialchallenge-1.md) (passing the code from step 1) to get a  "Credential challenge" back
3. In App 2, create a new credential locally, sign the above challenge with it.
4. In App 2, call [Create Credential With Code](../../../api-docs/authentication/credential-management/api-reference/createusercredential-2.md) to complete (passing the code from step 1). This endpoint does not require a user-action-signature required, so no credential signature involved here
