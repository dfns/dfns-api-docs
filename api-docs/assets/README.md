# Assets Overview

Assets encompasses both [Asset Accounts](<../../use-cases/Asset Accounts/>) and [Payments](../../use-cases/Payments/).   These are the core entities of the Dfns API.  They represent blockchain wallets and the transfer of both native and ERC20 tokens.

### Payment Lifecycle

The following diagram illustrates the phases of the payment lifecycle:&#x20;

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

Payments have 3 phases:

1. `Initiated`: When a payment is first created, it is first validated and then routed through the policy engine. This can trigger approvals or other actions as defined by `Policies`.
2. `Executed`: Once the payment is verified, it will go into the execution phase, where it will be published to the blockchain.
3. `Settled`: Payment are settled once the transfer is confirmed on the blockchain.  Dfns defines "settled" as the transaction having a minimum of six block confirmations.&#x20;

There are two failure modes in the payment lifecycle:

1. `Declined`:  This occurs when a payment doesn't pass initiation validation, data is incorrect, balance is insufficient, or policy approvals fail. See the error response for a list of failed parameters.
2. `Failed`: This is when payment failed on the blockchain.  Errors differ depending on the given blockchain network. See the response for a list of errors.
