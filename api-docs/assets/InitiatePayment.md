
## InitiatePayment
`RESTful Endpoint: POST /assets/asset-accounts/{assetAccountId}/payments`

Scopes:
 * as Employee Auth: Payments:InitiatePayment
 * as API Key: Payments:InitiatePayment

Initiates payment in provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within same network and same kind of asset (currency or otherwise). Response either confirms initiation of payment process (success) or gives reason why it’s not possible (failure).

## Notes

1.  This operation can be used to transfer native currencies, ERC20 coins, and FA1.2 coins.
2.  When the payment is in the process of being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the [`GetPaymentById` method](./GetPaymentById.md).
3.  Error `replacement fee too low` can occur with all state-changing operations (such as this one). It happens when the address you are trying to send from has a pending transaction that has not been confirmed yet. When you then try to resend a new transaction it has the same nonce as the unconfirmed one. What that message error means is that the gas price is lower for this new transaction than the gas price on the pending transaction.

<!--  -->
### Input Query Parameters
* Path parameter `assetAccountId`: undefined
### Input Body Parameters
* externalId: 
* assetSymbol: 
* amount: 
* receiver: 
* note: 
* narrative: 

_Please consult OpenAPI file full breakdown and including nested properties._
### Successful Response
* tags: `Tag[]`. Multiple tags can be attached to an entity to categorise or otherwise mark it. For example tags could indicate risk (High, Medium, Low), departments (Trading, Sales, IT), purpose (Treasury, Hot, Deposits), and jurisdictions (US, EU, DE).

Multiple tags can be attached to same entity.
* externalId: `String`. Field can be used if entity is created in external (customer’s) system first. This way the external id can be attached to identify entity from Dfns’s data store.
* orgId: `EntityId`. Indicates id of the Organisation, such as usually a customer, or sub-devision, sub-tenant, and others.
* id: `EntityId`. 
* status: `PaymentStatus`. 
* initiator: `Initiator`. 
* assetAccountId: `EntityId`. 
* assetSymbol: `AssetSymbol`. 
* amount: `Amount`. 
* sender: `DfnsAssetAccount`. 
* receiver: `PaymentInstrument`. 
* narrative: `String`. SWIFT (MT, ISO15022) field. Represents additional information about payment.
* note: `String`. 
* receiverAddress: `String`. 
* policyCertificate: `DfnsCertificate`. 
* dateCreated: `IsoDatetime`. 
* dateUpdated: `IsoDatetime`. 
* dateExecuted: `IsoDatetime`. 
* dateBroadcasted: `IsoDatetime`. 
* dateFirstConfirmed: `IsoDatetime`. 
* dateConfirmed: `IsoDatetime`. 
* dateSettled: `IsoDatetime`. 
* txHash: `String`. 
* blockHeight: `Integer`.
### Error Responses
#### `400` **badPaymentInitiation** 
Payment initiation payload is invalid, and missing parameters. See `description` field for additional details.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `402` **paymentRequired** 
GasStation requires additional top-up.
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

#### `422` **InsufficientFunds** 
Asset Account doesn't have sufficient funds to process payment
* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`.


