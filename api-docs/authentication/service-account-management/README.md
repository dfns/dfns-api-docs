# Service Accounts

Service Accounts enable programmatic access to Dfns and replace legacy API Keys in our authentication system.  Service accounts exist at the same level as human users in the system. They must use a secret signing key and the corresponding public key must be passed into [Create Service Account](createServiceAccount.md).  They also must have their own [permissions](../../permissions/permissions/) assigned in order to access API endpoints.   Service Accounts also return an access token with a configurable TTL of anywhere from 1 to 730 days.&#x20;

Service Accounts are intended to be used for any server side interaction with Dfns.  Among other use cases, this includes [delegated user management](../delegated-auth/).  Please make sure to keep both the signing secret and access token associated with the service account secure.  Dfns recommends using services like AWS Secrets Manager or comparable services on other public cloud platforms.
