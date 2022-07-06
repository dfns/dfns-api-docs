# No Policy Simple Payment Scenario

Make an asset account without policies and try transferring money between it and other accounts in various ways, verifying the freshly performed action at each step. 

* [Create asset account](/solution-architecture/data/gitbook/api-docs/assets/CreateAssetAccount.md)
* Get account ([ReadAssetAccountById](/solution-architecture/data/gitbook/api-docs/assets/ReadAssetAccountById.md))
* Try transferring money despite having a zero account balance in source asset account ([Initiate payment](/solution-architecture/data/gitbook/api-docs/assets/InitiatePayment.md))
* Transfer funds from Faucet to a specified asset account ([Initiate payment](/solution-architecture/data/gitbook/api-docs/assets/InitiatePayment.md) with payment details in the body) 
* Transfer funds from Faucet — payload not valid ([Initiate payment](/solution-architecture/data/gitbook/api-docs/assets/InitiatePayment.md))
* Verify funds transfered correctly ([ReadAssetAccountBalanceById](/solution-architecture/data/gitbook/api-docs/assets/ReadAssetAccountBalanceById.md)]
* Transfer money back to Faucet ([Initiate payment](/solution-architecture/data/gitbook/api-docs/assets/InitiatePayment.md) `POST` with payment details in the body)
* Get payment by ID ([GetPaymentById](/solution-architecture/data/gitbook/use-cases/Payments/GetPaymentById.md))
* Get payment by ID — Error 404 ID does not exist ([GetPaymentById](/solution-architecture/data/gitbook/use-cases/Payments/GetPaymentById.md))
* List payments ([Initiate payment](/solution-architecture/data/gitbook/api-docs/assets/InitiatePayment.md) `GET`)

