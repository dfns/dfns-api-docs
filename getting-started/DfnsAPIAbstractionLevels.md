Dfns APIs are designed to expose multiple levels of abstraction when communicating with blockchains.  Depending on your target use case, you can integrate with Dfns at the level that makes the most sense for your business.

Higher-level abstractions like asset accounts and payment initiation hide the details of the transaction body and signature process. Additionally, they enable the most granular application of policy rules. 

Lower-level APIs like Public Keys and Create Signature represent the foundational primitives for interacting with blockchains, but require significantly more programming effort to format transactions and broadcast them to validator nodes.  Additionally, as transaction metadata is hashed, using these APIs limits governance capabilities via Policy Engine. 

![dfns-api-abstraction-levels](../../gitbook/.gitbook/assets/dfns-api-abstraction-levels.png)