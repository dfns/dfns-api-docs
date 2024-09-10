# Chainalysis

{% embed url="https://www.chainalysis.com/" %}

[Chainalysis](https://www.chainalysis.com/) provides AML / KYT services. The Dfns-Chainalaysis integration allows you to start analysing the transactions that are made on Dfns wallets.

To activate the integration, you need to go to [Dfns Dashboard](https://app.dfns.io), and activate the integration from the settings, by adding your Chainalaysis API key.

Once that is done, the integration is done through the [Policy Engine](../../api-docs/policy-engine/):



## Transfer Screening

### For outgoing transfers

Outgoing transfer attempts from a given wallet can be screened by Chainalysis before they make it on chain. To achieve that, you need to create a Policy with these traits:

* [activity kind `Wallets:Sign`](../../api-docs/policy-engine/policies.md#wallets-sign-activity)
* [rule kind `ChainalysisTransactionPrescreening`](../../api-docs/policy-engine/policies.md#chainalysistransactionprescreening-policy-rule)
* action kind [`Block`](../../api-docs/policy-engine/policies.md#block-policy-action) or [`RequestApproval`](../../api-docs/policy-engine/policies.md#requestapproval-policy-action) or [`NoAction`](../../api-docs/policy-engine/policies.md#noaction-policy-action)

When using policy rule `ChainalysisTransactionPrescreening`, the transfer attempt will be sent to Chainalysis for a KYT screening. If the screening result triggers the rule (based on the criterias you defined in the rule), then the details of the Chainalysis pre-screening results will be published in the   [Webhook Event](../../api-docs/webhooks/#webhook-events) `policy.triggered`, which is published for any policy which triggers.



### For incoming transfers

When an incoming transfers in a wallet is picked ou by our indexer, it can be screened by Chainalysis, and reported to you if something is detected as a result. To achieve that, you need to create a Policy with these traits:

* [activity kind `Wallets:IncomingTransaction`](../../api-docs/policy-engine/policies.md#wallets-incomingtransaction-activity)
* [rule kind `ChainalysisTransactionScreening`](../../api-docs/policy-engine/policies.md#chainalysistransactionscreening-policy-rule)
* action kind [`NoAction`](../../api-docs/policy-engine/policies.md#noaction-policy-action)

When using policy rule `ChainalysisTransactionScreening`, the transfer attempt will be sent to Chainalysis for a KYT screening. If the screening result triggers the rule (based on the criterias you defined inthe rule), then the details of the Chainalysis screening results will be published in the   [Webhook Event](../../api-docs/webhooks/#webhook-events) `policy.triggered`, which is published for any policy which triggers.



## Supported Transfers

For now, the range of supported transfers kinds that can be screened is this the following:

#### Native tokens transfers:

Native token transfer on the following networks can be screened

```
Algorand
ArbitrumOne
AvalancheC
Bitcoin
Bsc
Ethereum
FantomOpera
Litecoin
Optimism
Polygon
Solana
Tron
XrpLedger
```

#### ERC-20 tokens:

ERC-20 token transfer on the following networks can be screened:

```
ArbitrumOne
AvalancheC
Bsc
Ethereum
Optimism
Polygon
```
