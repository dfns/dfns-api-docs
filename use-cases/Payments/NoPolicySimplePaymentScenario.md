# No Policy Simple Payment Scenario

Make an asset account without policies and try transferring money between it and other accounts in various ways, verifying the freshly performed action at each step. 

* [Create asset account](../../api-docs/assets/CreateAssetAccount.md)


* [Create asset account](../../api-docs/assets/CreateAssetAccount.md)
* Get account ([GetAssetAccountById](../../api-docs/assets/GetAssetAccountById.md))
* Try transferring money despite having a zero account balance in source asset account ([Initiate payment](../../api-docs/assets/InitiatePayment.md))
* Transfer funds from Faucet to a specified asset account ([Initiate payment](../../api-docs/assets/InitiatePayment.md) with payment details in the body) 
* Transfer funds from Faucet — payload not valid ([Initiate payment](../../api-docs/assets/InitiatePayment.md))
* Verify funds transfered correctly ([GetAssetAccountBalanceById](../../api-docs/assets/GetAssetAccountBalanceById.md))
* Transfer money back to Faucet ([Initiate payment](../../api-docs/assets/InitiatePayment.md) `POST` with payment details in the body)
* Get payment by ID [GetPaymentById](../../api-docs/assets/GetPaymentById.md)
* List payments ([Initiate payment](../../api-docs/assets/InitiatePayment.md) `GET`)

