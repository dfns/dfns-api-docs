Assets domain responsibilities are:
- to represent blockchain wallets, payments, and other necessary data to Dfns products. 
- to allow customers to use the datasets in both crypto-native and in traditional-payment ways.


Payment Lifecycle
```

                  
                  
                  ┌───────────┐
                  │ Initiated │
                  └─────┬─────┘
                        │
                        │
          ┌─────────────▼─────────────┐          ┌──────────┐
          │ Verified Against Policies ├──────────► Declined │
          └─────────────┬─────────────┘          └──────────┘
                        │
                        │
    ┌───────────────────▼──────────────────┐
    │ Executed (Broadcasted to Blockchain) ├───┐
    └───────────────────┬──────────────────┘   │
                        │                      │
                        │                      │
      ┌─────────────────▼───────────────┐      │
      │ Settled (Transaction Confirmed) │      │
      └─────────────────────────────────┘      │
                                               │
                                               │
         ┌───────────────────────────┐         │
         │ Failed (Blockchain Error) ◄─────────┘
         └───────────────────────────┘


```

Payments have 3 notable stages:

1. `Initiated`: is when payment is first created. This will pass data validation, and go through the policy engine. This can trigger additional approvals, audits, and other steps as defined by policies.
1. `Executed`: once payment is verified, it will go into the execution phase, where it will be published on the blockchain.
1. `Settled`: finally, payment will be settled once the transfer is confirmed on the blockchain.

There are two failure modes in the payment lifecycle:

1. `Declined`: Is when payment didn't pass initiation validation, either data is incorrect, balance is insufficient, or it didn’t pass policies. See error body for list of failed parameters.
1. `Failed`: This is when payment failed on the blockchain. An error can depend on a given blockchain network. See body for list of errors.