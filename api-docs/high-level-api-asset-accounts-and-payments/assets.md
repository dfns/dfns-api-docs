# Assets Overview

Assets encompasses both [Asset Accounts](broken-reference) and [Payments](broken-reference). These are the core entities of the Dfns API. They represent, respectively, blockchain wallets and the transfer of both native and ERC20 tokens.

## Payment Lifecycle

The following diagram illustrates the phases of the payment lifecycle:

```
                  
                  
                  ┌───────────┐
                  │ Initiated │
                  └─────┬─────┘
                        │
                        │
          ┌─────────────▼─────────────┐          ┌──────────┐
          │ Verified Against Policies ├──────────► Rejected │
          └─────────────┬─────────────┘          └──────────┘
                        │
                        │
    ┌───────────────────▼──────────────────┐
    │ Executed (Broadcasted to Blockchain) ├───┐
    └───────────────────┬──────────────────┘   │
                        │                      │
                        │                      │
      ┌─────────────────▼────────────────┐     │
      │ Confirmed (Transaction Confirmed)│     │
      └──────────────────────────────────┘     │
                                               │
                                               │
         ┌───────────────────────────┐         │
         │ Failed (Blockchain Error) ◄─────────┘
         └───────────────────────────┘
```

## Payment Phases

Payments have 2 phases:

1. `Initiated`: When a payment is first created, it is first validated and then routed through the policy engine. This can trigger the execution of approvals or other actions as defined by `Policies`.
2. `Approved`: Temporary state just after a policy blocking a payment has been approved. After this the payment's state should change to `Executed`
3. `Executed`: Once the payment is verified, it will go into the execution phase, where it will be published to the blockchain.
4. `Confirmed`: Once the block containing the `txHash` of our payment is mined, the payment is confirmed.&#x20;



## Payment Failure Modes

There are two failure modes in the payment lifecycle:

1. `Rejected`: This occurs when a payment doesn't pass initiation validation, data is incorrect, balance is insufficient, or policy approvals fail. See the error response for a list of failed parameters.
2. `Failed`: This is when payment failed on the blockchain. Errors differ depending on the given blockchain network. See the response for a list of errors.
