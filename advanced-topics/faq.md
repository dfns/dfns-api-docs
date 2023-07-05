# FAQ

### Authentication

#### _**Q: Isn't the signing secret you discuss the same thing as an API access key?**_ &#x20;

A: No, all calls to the Dfns API necessitate an API access key, which takes the form of a JWT (JSON Web Token), and must be provided in the authorization header as a Bearer token. This adherence to standard API security measures ensures that we validate this token for each request. On the other hand, we never possess the end user's signing secret (also known as “API credentials”); our role is limited to verifying generated signatures. This guarantees that even if there were a bad actor within our own system, they would be unable to impersonate an end user and steal funds.



#### _**Q: What's the difference between Service Accounts and Personal Access Tokens?**_&#x20;

A: Think of Service Accounts as analogous to a User Account designed for machine access. Similar to regular users, Service Accounts have individual permissions. On the other hand, personal access tokens are always linked to the user who generated them. They are incapable of having more permissions than their parent user, although they can have fewer permissions. If a user is disabled, all personal access tokens associated with that user are also disabled.



#### _**Q: How should I use Applications? When would I create a new one?**_&#x20;

A: Think of Applications as the website or mobile app that will be calling Dfns APIs. When your organization is created, a default application will automatically be created for you. You should [create a new Application](../api-docs/authentication/application-management/createClientSideApplication.md) when you need to specify a new “expected origin” and “relying party”, which in most cases are simply the URL and primary domain of your app. These values allow WebAuthn to scope user credentials to the specific app so they cannot be used across domains.&#x20;



#### _**Q: Under “New Application”, what is the difference between a Client Side and a Server Side application type?**_&#x20;

A: Server Side Applications require an application key pair to validate that all transactions are sent from the server side. This is only required if you want to ensure it is not possible to send any transaction from a client side application.  We generally recommend using a Client Side application type for simplicity. \


#### _**Q: I'm coding native mobile apps (Swift/Kotlin). What should I specify for expected origin and relying party?**_&#x20;

A: On iOS you can set up an "associated domains entitlement" for the app to specify which credentials it can access as specified [here](https://developer.apple.com/documentation/bundleresources/entitlements/com\_apple\_developer\_associated-domains) (Android details are [here](https://developer.android.com/training/sign-in/passkeys)). You can use webcredentials and specify the origin you have in your application like:

* Eg: \`webcredentials:[https://app.dfns.io](https://app.dfns.io)\`\


### Delegated Signing

#### _**Q: Where are your key shares stored today?**_&#x20;

A: Key shares are encrypted and persisted in databases across multiple cloud regions and availability zones in T3+/T4 data centers. This geographic distribution helps to ensure reliable business continuity. We plan to decentralize this network further by contracting with highly secure, compliant and pre-vetted partners such as insurance companies, telecommunications companies, banks, private data centers, energy providers, etc.), to host key shares and sign transactions. This work is in progress.&#x20;



#### _**Q: If you maintain all key shares in your key management network, doesn't that make you a custodian?**_&#x20;

A: No. Firstly, custodianship is a regulatory status that can only be granted by local financial market authorities – it is not merely a philosophical concept. Secondly, the definition of digital asset custodianship, distinct from the traditional definition of financial custodianship, will vary across countries. For instance, in the EU under the MiCA regulation, custodianship is determined by the ability to move assets on-chain. In this specific context, Dfns does not qualify as a custodian since its employees lack access to key shares and cannot utilize the API to impersonate clients or end-users due to their inability to provide a valid signature. We are currently in the process of encapsulating our signers in  [AWS Nitro Enclaves](https://aws.amazon.com/ec2/nitro/nitro-enclaves/)  to further ensure that key shares remain inaccessible, preventing collusion between root engineers who operate within the network partners. Lastly, it is important to note that custodianship is primarily defined by the contractual agreements between the key management solution and the client. The intentions outlined in these contractual agreements often hold significant importance for regulators, sometimes even surpassing the significance of technical controls and guarantees.



#### _**Q: Isn’t an end user wallet recovery code basically the same thing as a seed phrase?**_

A: No. A seed phrase directly recovers the private key, granting immediate and complete access to all assets. If the seed phrase is compromised, all assets will be irretrievably lost. In contrast, our customers maintain control over the end user recovery process. When a recovery is requested, an email can be sent to verify the user's identity. Additionally, the customer's administrative staff can receive notifications, especially if the wallet contains assets exceeding a predetermined threshold. Once a recovery is successfully executed, the wallet and all assets can be locked for a given number of days, ensuring that the original owner is contacted to confirm their initiation of the process. These measures collectively safeguard the end user from potential attackers and even their own mistakes.



#### _**Q: Can end-users export their private keys?**_

A: Users of Dfns wallets are never locked into the platform. They have the freedom to create a wallet using any other product or service and effortlessly transfer their assets out of Dfns using the API whenever they want. We are planning to introduce a private key export feature in Q3 2023. It's important to note that once the keys are exported, Dfns can no longer ensure the security of the wallet. Hence, the wallet will no longer be accessible within the Dfns platform post-export.

\
