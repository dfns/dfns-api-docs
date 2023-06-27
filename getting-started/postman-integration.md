# Postman

If you are using [Postman](https://www.postman.com/), you can fork our Postman collection.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19400008-34e4f004-4873-439a-86ea-394a3a96fd05?action=collection%2Ffork\&source=rip\_markdown\&collection-url=entityId%3D19400008-34e4f004-4873-439a-86ea-394a3a96fd05%26entityType%3Dcollection%26workspaceId%3D7d5b8af2-ddaf-4fc0-bbe2-1b6b14de353a#?env%5BDfns%20API%20-%20Auth%20v2%5D=W3sia2V5IjoiZGZuc0FwaURvbWFpbiIsInZhbHVlIjoiYXBpLmRmbnMuaW8iLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5IjoiYXV0aFRva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJjcmVkZW50aWFsUHJpdmF0ZUtleSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6InNlY3JldCJ9LHsia2V5IjoiYXBwbGljYXRpb25JZCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifSx7ImtleSI6ImFwcGxpY2F0aW9uT3JpZ2luIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5IjoidXNlQXV0aFYyIiwidmFsdWUiOiJ0cnVlIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)

This collection includes:

* Dfns api endpoints
* An environment to fill out
* A pre-request script that handles [User Action Signing](authentication-authorization.md#sign-api-requests-user-action-signing) for you for every POST requests.

The purpose of the pre-request script is to populate some of the [required headers](request-headers.md) for authentication. If you're interested in what it does and how it works, you can check the detail of the pre-request script in the collection itself, here:

<figure><img src="../.gitbook/assets/Screenshot 2023-06-27 at 20.22.29.png" alt=""><figcaption></figcaption></figure>

#### Setup

To make calls within postman you need to:

<details>

<summary>1. Create a public / private key pair</summary>

The public private key pair will be used to sign user actions within the Dfns API.

```shell
# Generate a ECDSA Private Key and the public key pair
openssl ecparam -genkey -name prime256v1 -noout -out prime256v1.pem
openssl pkey -in prime256v1.pem -pubout -out prime256v1.public.pem
```

</details>

<details>

<summary>2. Create a Personal Access Token or Service Account in the Dfns Dashboard</summary>

Personal access tokens can be created in the Dfns dashboard under the Settings page.

When creating a new Personal Access Token, you will need to copy the public key (in `prime256v1.public.pem`) you create earlier into the Public Key.

Be sure to copy the JWT, after the Personal Access Token is created, as you will need it in the next step.

</details>

<details>

<summary>3. Populate the environment in Postman</summary>

In the environment you need to set the following variables:

* `dfnsApiDomain` - Domain of Dfns API. `api.dfns.ninja` or `api.dfns.io`
* `authToken` - User PAT (Personal Access Token), or Service Account token
* `credentialPrivateKey` - Private key of the credentials registered during PAT/Service Account creation. Copy the key including all newlines into the variable
* `applicationId` - ID of the Dfns Application used
* `applicationOrigin` - The `Expected Origin` from your Dfns Application. Also found on the Applications page on the Dfns Dashboard.

</details>
