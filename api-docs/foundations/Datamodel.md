
## Foundations Data Models   


### AssetPairPrice
 
    

### EmployeeInitiator
 
    

### DfnsStaffInitiator
 
    

### DfnsCustomerServiceInitiator
 
    

### IsoDate
Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture date-only in `yyyy-mm-dd` format. 
    

### IsoDatetime
Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture full date and time with optional timezone component. 
    

### Amount
Represents monetary amount. When transported  the type should be serialised as string to avoid IEEE/Float errors. When parsed within application logic, `Bid Decimal` or similar high-precision types should be used. 
    

### EntityId
Represents ids, such as indices, foreign keys, etc. In most cases should be string. 
    

### Username
Represents usernames within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value. 
    

### GroupOrPermission
Represents individual permissions, groups, or role within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value. 
    

### DocumentSnapshot
Represents snapshot of documents. Usually this means that this is a serialised form of a data-object, using XML, JSON, or other readable by both machine and human datasets.

This should be used highlight the higher-than-usual risk type of the transported or stored value.
 
    

### Tag
Represents tags within a system, that can be used by customers to mark up and organise various items. For example – they could tag employees, api-keys, and accounts to separate them in groups by department. 
    

### PublicKey
Represents public key entities.

This should be used highlight the higher-than-usual risk type of the transported or stored value.
 
    

### DfnsCertificate
Represents a certificate that can be issued by various systems such as PolicyEngine, StrategyEngine or DefenceEngine to acknowledge that certain operation passed them.
 
    

### Epoch
 
    

### BlockchainAddress
 
    

### EntityNotFoundError
 
    

### EntityExpiredError
 
    

### BadRequestError
 
    

### DuplicateError
 
    

### PaymentRequiredError
 
    

### DfnsError
Foundational type for the errors, defining everything that any error within Dfns product needs. 
    

### Initiator
 
    

### Countries
 
    

### AssetSymbol
 
    

### InitiatorKind
 
    
