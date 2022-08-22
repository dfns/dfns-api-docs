
## InitiatePayment
`RESTful Endpoint: post /assets/asset-accounts/{assetAccountId}/payments`

Initiates payment in provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within same network and same kind of asset (currency or otherwise). Response either confirms initiation of payment process (success) or gives reason why it’s not possible (failure).

## Notes

1.  This operation can be used to transfer native currencies, ERC20 coins, and FA1.2 coins.
2.  When the payment is in the process of being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the [`GetPaymentById` method](./GetPaymentById.md).
3.  Error `replacement fee too low` can occur with all state-changing operations (such as this one). It happens when the address you are trying to send from has a pending transaction that has not been confirmed yet. When you then try to resend a new transaction it has the same nonce as the unconfirmed one. What that message error means is that the gas price is lower for this new transaction than the gas price on the pending transaction.

<!--  -->

### Input Query Parameters
* Path parameter `assetAccountId`: `String`.  
  

### Input Body Parameters
* externalId: `String` [_Optional_] 
* assetSymbol: `AssetSymbol` 
* amount: `Amount` 
* receiver: `PaymentInstrument` 
* note: `String` [_Optional_] 
* narrative: `String` [_Optional_] 

_Please consult OpenAPI file full breakdown and including nested properties._


{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{assetAccountId}/payments" method="post" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
