
## ListPayments
`RESTful Endpoint: GET /assets/asset-accounts/{assetAccountId}/payments`

Scopes:
 * as Employee Auth: payments:read
 * as API Key: payments:read

Returns list of all `Payment` entities belonging to the same organization as the caller. Additional filters can be provided; see list of parameters for the operation.

### Input Query Parameters
* Path parameter `assetAccountId`: undefined  
  

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
#### `404` **NotFound** 

* serviceName: `String`. 
* message: `String`. 
* causes: `String[]`. 
* shouldTriggerInvestigaton: `Bool`. 
* isDfnsError: `Bool`. 
* httpStatus: `Integer`. 
* errorName: `String`. 

{% swagger src="../../.gitbook/assets/production-dfns-api-openapi.json" path="/assets/asset-accounts/{assetAccountId}/payments" method="get" %}
[production-dfns-api-openapi.json](../../.gitbook/assets/production-dfns-api-openapi.json)
{% endswagger %}
