# Foundations – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

## Foundations contain data types and operations that shared and can be used by any domain. Reusable errors, types, aliases should be stored in this domain.

## Models

<a name="type/AssetPairPrice"></a>

### AssetPairPrice – Type

#### Properties

##### `pair` – Required Property

Type: `string`

##### `dateUpdated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `base` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `counter` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

Id in `AssetMarketData` is always a copy of `pair` value, such as `USDBTC`. There is no need for additional entropy, since the pair is always unique.

<a name="type/EmployeeInitiator"></a>

### EmployeeInitiator – Type

#### Properties

##### `kind` – Required Property

Type: [`InitiatorKind`](#type/InitiatorKind)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `employeeId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/DfnsStaffInitiator"></a>

### DfnsStaffInitiator – Type

#### Properties

##### `kind` – Required Property

Type: [`InitiatorKind`](#type/InitiatorKind)

##### `maintainerId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `country` – Required Property

Type: [`Countries`](#type/Countries)

<a name="type/DfnsCustomerServiceInitiator"></a>

### DfnsCustomerServiceInitiator – Type

#### Properties

##### `kind` – Required Property

Type: [`InitiatorKind`](#type/InitiatorKind)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `apiKeyId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/IsoDate"></a>

### IsoDate – Type

_Alias for primitive type `string`._

Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture date-only in `yyyy-mm-dd` format.

<a name="type/IsoDatetime"></a>

### IsoDatetime – Type

_Alias for primitive type `string`._

Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture full date and time with optional timezone component.

<a name="type/Amount"></a>

### Amount – Type

_Alias for primitive type `string`._

Represents monetary amount. When transported the type should be serialised as string to avoid IEEE/Float errors. When parsed within application logic, `Bid Decimal` or similar high-precision types should be used.

<a name="type/EntityId"></a>

### EntityId – Type

_Alias for primitive type `string`._

Represents ids, such as indices, foreign keys, etc. In most cases should be string.

<a name="type/Username"></a>

### Username – Type

_Alias for primitive type `string`._

Represents usernames within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value.

<a name="type/GroupOrPermission"></a>

### GroupOrPermission – Type

_Alias for primitive type `string`._

Represents individual permissions, groups, or role within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value.

<a name="type/DocumentSnapshot"></a>

### DocumentSnapshot – Type

_Alias for primitive type `string`._

Represents snapshot of documents. Usually this means that this is a serialised form of a data-object, using XML, JSON, or other readable by both machine and human datasets.

This should be used highlight the higher-than-usual risk type of the transported or stored value.

<a name="type/Tag"></a>

### Tag – Type

_Alias for primitive type `string`._

Represents tags within a system, that can be used by customers to mark up and organise various items. For example – they could tag employees, api-keys, and accounts to separate them in groups by department.

<a name="type/PublicKey"></a>

### PublicKey – Type

_Alias for primitive type `string`._

Represents public key entities.

This should be used highlight the higher-than-usual risk type of the transported or stored value.

<a name="type/DfnsCertificate"></a>

### DfnsCertificate – Type

_Alias for primitive type `string`._

Represents a certificate that can be issued by various systems such as PolicyEngine, StrategyEngine or DefenceEngine to acknowledge that certain operation passed them.

<a name="type/Epoch"></a>

### Epoch – Type

_Alias for primitive type `integer`._

<a name="type/BlockchainAddress"></a>

### BlockchainAddress – Type

_Alias for primitive type `string`._

<a name="type/EntityNotFoundError"></a>

### EntityNotFoundError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/EntityExpiredError"></a>

### EntityExpiredError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/BadRequestError"></a>

### BadRequestError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/DuplicateError"></a>

### DuplicateError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/PaymentRequiredError"></a>

### PaymentRequiredError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/DfnsError"></a>

### DfnsError – Error Response

Foundational type for the errors, defining everything that any error within Dfns product needs.

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

<a name="type/Initiator"></a>

### Initiator – Union

#### Alias to Types:

- Alias for [`EmployeeInitiator`](#type/EmployeeInitiator)
- Alias for [`DfnsStaffInitiator`](#type/DfnsStaffInitiator)
- Alias for [`DfnsCustomerServiceInitiator`](#type/DfnsCustomerServiceInitiator)

<a name="type/Countries"></a>

### Countries – Enumeration

#### States:

- State `DE`:
- State `GB`:
- State `FR`:
- State `US`:

<a name="type/AssetSymbol"></a>

### AssetSymbol – Enumeration

#### States:

- State `ADA`: Cardano native currency
- State `ALGO`: Algorand native currency
- State `BCH`: Bitcoin Cash
- State `BTC`: Bitcoin. The first and the only.
- State `BSV`: Bitcoin [so-called] Satoshi Vision
- State `DOGE`: Elon’s favorite Dog.
- State `DOT`: Polkadot native currency
- State `ETH`: Ethereum
- State `EOS`: EOS
- State `LTC`: Lite Coin native currency
- State `1INCH_ETH`: 1INCH ERC20 token
- State `DAI_ETH`: DAI token
- State `USDT_ETH`: Tether USDT token
- State `USDC_ETH`: Coinbase USDC token
- State `JEUR_ETH`: JEUR token
- State `JCHF_ETH`: JCHF token
- State `JGBP_ETH`: JGBP token
- State `WBTC_ETH`: Wrapped BTC token
- State `AAVE_ETH`: AAVE token
- State `BAT_ETH`: BAT token
- State `COMP_ETH`: Compound token
- State `LINK_ETH`: ChainLink token
- State `MKR_ETH`: Maker token
- State `SUSHI_ETH`: SushiSwap token
- State `UNI_ETH`: UniSwap token
- State `KSM`: Kusama – Polkadot’s Canary network
- State `XLM`: Stellar native coin.
- State `XRP`: Ripple.
- State `BNB_BSC`: Binance Coin
- State `MATIC`: Polygon
- State `XTZ`: Tezos native currency
- State `SOL`: Solana
- State `POLYX`: Polymesh
- State `EURL_XTZ`: EURL token tezos
- State `EUR`: Euro
- State `USD`: US Dollar
- State `GBP`: Pound sterling
- State `CHF`: Swiss franc

<a name="type/InitiatorKind"></a>

### InitiatorKind – Enumeration

#### States:

- State `Employee`:
- State `DfnsCustomerService`:
- State `DfnsStaff`:

# Auth – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

# Orgs – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

## Customers Domain is responsible for the storage and mapping of the customers and their organisations to Dfns products.

## Models

<a name="type/Org"></a>

### Org – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `legalName` – Required Property

Type: `string`

##### `tradingName` – Optional Property

Type: `string`

##### `country` – Required Property

Type: [`Countries`](#type/Countries)

##### `dateOfIncorporation` – Required Property

Type: [`IsoDate`](#type/IsoDate)

##### `dateOnboarded` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `status` – Required Property

Type: [`OrgStatus`](#type/OrgStatus)

##### `employees` – Required Property

Type: Array of [`OrgEmployee`](#type/OrgEmployee)

##### `groups` – Optional Property

Type: Array of [`EmployeeGroup`](#type/EmployeeGroup)

<a name="type/OrgEmployee"></a>

### OrgEmployee – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `status` – Required Property

Type: [`OrgEmployeeStatus`](#type/OrgEmployeeStatus)

##### `orgId` – Required Property

Type: `string`

##### `username` – Required Property

Type: `string`

##### `email` – Required Property

Type: `string`

##### `issuer` – Optional Property

Type: `string`

Identity issuer (eg Auth0). Empty if it's the default one (Dfns one). The issuer will be filled for non-Dfns issuers.

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateUpdated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `fullName` – Required Property

Type: `string`

##### `dateOfBirth` – Required Property

Type: [`IsoDate`](#type/IsoDate)

##### `groups` – Optional Property

Type: Array of [`EmployeeGroup`](#type/EmployeeGroup)

<a name="type/ProductAvailabilityReport"></a>

### ProductAvailabilityReport – Type

#### Properties

##### `product` – Required Property

Type: [`ProductKind`](#type/ProductKind)

##### `isAvailable` – Required Property

Type: `boolean`

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/EmployeeGroup"></a>

### EmployeeGroup – Type

#### Properties

##### `name` – Required Property

Type: `string`

<a name="type/CreateEmployee"></a>

### CreateEmployee – Request/Input

#### Properties

##### `username` – Required Property

Type: `string`

##### `email` – Required Property

Type: `string`

##### `issuer` – Optional Property

Type: `string`

##### `fullName` – Required Property

Type: `string`

##### `dateOfBirth` – Required Property

Type: [`IsoDate`](#type/IsoDate)

<a name="type/UpdateEmployee"></a>

### UpdateEmployee – Request/Input

#### Properties

##### `fullName` – Optional Property

Type: `string`

##### `dateOfBirth` – Optional Property

Type: [`IsoDate`](#type/IsoDate)

##### `email` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `status` – Required Property

Type: [`OrgEmployeeStatus`](#type/OrgEmployeeStatus)

<a name="type/UpdateOrg"></a>

### UpdateOrg – Request/Input

#### Properties

##### `legalName` – Optional Property

Type: `string`

##### `tradingName` – Optional Property

Type: `string`

##### `dateOfIncorporation` – Optional Property

Type: [`IsoDate`](#type/IsoDate)

##### `companyNumber` – Optional Property

Type: `string`

##### `taxId` – Optional Property

Type: `string`

<a name="type/OrgStatus"></a>

### OrgStatus – Enumeration

Indicates customer’s status within a lifecycle.

#### States:

- State `Archived`: Customer is archived and no longer functional. Customer will have to go through re-onboarding to be enabled again.
- State `Disabled`: Customer is disabled. Usually temporary action, in case something goes wrong.
- State `Enabled`: Customer is enabled and operational.
- State `Creating`: Customer is being created at the moment.
- State `Approved`: Customer is approved to be created and initialized.

<a name="type/OrgEmployeeStatus"></a>

### OrgEmployeeStatus – Enumeration

#### States:

- State `Enabled`:
- State `Disabled`:
- State `Archived`:

<a name="type/ProductKind"></a>

### ProductKind – Enumeration

#### States:

- State `AssetAccountManagement`:
- State `PaymentInitiation`:
- State `PolicyEngine`:

# PublicKeys – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

<a name="type/Signature"></a>

### Signature – Type

#### Properties

##### `r` – Required Property

Type: `string`

##### `s` – Required Property

Type: `string`

##### `recid` – Required Property

Type: `integer`

<a name="type/PublicKeyRecord"></a>

### PublicKeyRecord – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: `string`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `publicKey` – Required Property

Type: [`PublicKey`](#type/PublicKey)

##### `signerIds` – Required Property

Type: Array of `string`

##### `groupThreshold` – Required Property

Type: `integer`

##### `groupSize` – Required Property

Type: `integer`

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `isEddsa` – Required Property

Type: `boolean`

<a name="type/WalletBalance"></a>

### WalletBalance – Type

#### Properties

##### `walletId` – Required Property

Type: `string`

##### `asset` – Required Property

Type: `string`

##### `balance` – Required Property

Type: [`Amount`](#type/Amount)

##### `timestamp` – Required Property

Type: [`Epoch`](#type/Epoch)

<a name="type/WalletAddress"></a>

### WalletAddress – Type

#### Properties

##### `walletId` – Required Property

Type: `string`

##### `asset` – Required Property

Type: `string`

##### `address` – Required Property

Type: [`BlockchainAddress`](#type/BlockchainAddress)

<a name="type/WalletTx"></a>

### WalletTx – Type

#### Properties

##### `from` – Required Property

Type: [`BlockchainAddress`](#type/BlockchainAddress)

##### `to` – Required Property

Type: [`BlockchainAddress`](#type/BlockchainAddress)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `asset` – Required Property

Type: `string`

##### `txHash` – Required Property

Type: `string`

##### `timestamp` – Required Property

Type: [`Epoch`](#type/Epoch)

##### `status` – Required Property

Type: `string`

##### `blockHash` – Required Property

Type: `string`

##### `blockHeight` – Required Property

Type: `string`

##### `confirmations` – Optional Property

Type: `integer`

<a name="type/CreateSignatureInput"></a>

### CreateSignatureInput – Request/Input

#### Properties

##### `hash` – Required Property

Type: `string`

<a name="type/CreatePublicKeyInput"></a>

### CreatePublicKeyInput – Request/Input

#### Properties

##### `externalId` – Optional Property

Type: `string`

##### `assetAccountId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `groupThreshold` – Required Property

Type: `integer`

##### `groupSize` – Required Property

Type: `integer`

##### `isEddsa` – Required Property

Type: `boolean`

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

<a name="type/CreateWalletTxInput"></a>

### CreateWalletTxInput – Request/Input

#### Properties

##### `to` – Required Property

Type: [`BlockchainAddress`](#type/BlockchainAddress)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `asset` – Required Property

Type: `string`

<a name="type/PublicKeyStatus"></a>

### PublicKeyStatus – Enumeration

#### States:

- State `Active`:
- State `Disabled`:
- State `Compromised`:

# Assets – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

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

---

## Models

<a name="type/PaymentInitiation"></a>

### PaymentInitiation – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `paymentId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: [`EntityId`](#type/EntityId)

##### `status` – Required Property

Type: [`PaymentInitiationStatus`](#type/PaymentInitiationStatus)

##### `orgId` – Optional Property

Type: [`EntityId`](#type/EntityId)

##### `initiator` – Required Property

Type: [`Initiator`](#type/Initiator)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `sender` – Required Property

Type: [`DfnsAssetAccount`](#type/DfnsAssetAccount)

##### `receiver` – Required Property

Type: [`PaymentInstrument`](#type/PaymentInstrument)

##### `dateInitiated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `rejectionReason` – Optional Property

Type: `string`

In case payment initiation is rejected by the system, this field will contain information about it.

<a name="type/BlockchainWalletAddress"></a>

### BlockchainWalletAddress – Type

#### Properties

##### `kind` – Required Property

Type: [`PaymentInstrumentKind`](#type/PaymentInstrumentKind)

##### `address` – Required Property

Type: `string`

<a name="type/DfnsAssetAccount"></a>

### DfnsAssetAccount – Type

#### Properties

##### `kind` – Required Property

Type: [`PaymentInstrumentKind`](#type/PaymentInstrumentKind)

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/AssetAccount"></a>

### AssetAccount – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: [`EntityId`](#type/EntityId)

Field can be used, if account or wallet created in liqidity management, core banking, or other system prior to creating it in the Dfns system.

This way account can be linked, and tracked by external system.

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `status` – Required Property

Type: [`AssetAccountStatus`](#type/AssetAccountStatus)

##### `address` – Optional Property

Type: `string`

##### `publicKey` – Optional Property

Type: `string`

##### `publicKeyId` – Optional Property

Type: [`EntityId`](#type/EntityId)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `name` – Required Property

Type: `string`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateUpdate` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `groupSize` – Required Property

Type: `decimal`

##### `groupThreshold` – Required Property

Type: `decimal`

##### `authorizations` – Optional Property

Type: Array of [`AssetAccountAuthorization`](#type/AssetAccountAuthorization)

<a name="type/Payment"></a>

### Payment – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: [`EntityId`](#type/EntityId)

Field can be used, if payment created in liqidity management, core banking, or other system prior to creating it in the Dfns system.

This way account can be linked, and tracked by external system.

##### `status` – Required Property

Type: [`PaymentStatus`](#type/PaymentStatus)

##### `orgId` – Optional Property

Type: [`EntityId`](#type/EntityId)

##### `initiator` – Required Property

Type: [`Initiator`](#type/Initiator)

##### `assetAccountId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `sender` – Required Property

Type: [`DfnsAssetAccount`](#type/DfnsAssetAccount)

##### `receiver` – Required Property

Type: [`PaymentInstrument`](#type/PaymentInstrument)

##### `narrative` – Optional Property

Type: `string`

SWIFT (MT, ISO15022) field. Represents additional information about payment.

##### `note` – Optional Property

Type: `string`

##### `receiverAddress` – Required Property

Type: `string`

##### `policyCertificate` – Optional Property

Type: [`DfnsCertificate`](#type/DfnsCertificate)

##### `dateCreated` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateUpdated` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateExecuted` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateBroadcasted` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateFirstConfirmed` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateConfirmed` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateSettled` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `txHash` – Optional Property

Type: `string`

##### `blockHeight` – Optional Property

Type: `integer`

<a name="type/AssetAccountAuthorization"></a>

### AssetAccountAuthorization – Type

#### Properties

##### `kind` – Required Property

Type: [`AssetAccountAuthorizationKind`](#type/AssetAccountAuthorizationKind)

##### `entityId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `permission` – Required Property

Type: [`AssetAccountPermissions`](#type/AssetAccountPermissions)

<a name="type/AssetAccountBalance"></a>

### AssetAccountBalance – Type

Balance of one asset account.

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

Id of the AssetAccount.

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

Asset Symbol of the account.

##### `balance` – Required Property

Type: [`Amount`](#type/Amount)

Balance of the account.

<a name="type/UpdateAssetAccountPayload"></a>

### UpdateAssetAccountPayload – Request/Input

#### Properties

##### `status` – Required Property

Type: [`AssetAccountStatus`](#type/AssetAccountStatus)

##### `address` – Optional Property

Type: `string`

##### `publicKey` – Optional Property

Type: `string`

##### `uniqueName` – Optional Property

Type: `string`

<a name="type/CreateAssetAccountInput"></a>

### CreateAssetAccountInput – Request/Input

#### Properties

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `groupSize` – Optional Property

Type: `integer`

##### `groupThreshold` – Optional Property

Type: `integer`

##### `publicKey` – Optional Property

Type: [`PublicKey`](#type/PublicKey)

If public key is present, the asset account will be added to an existing signing group.

##### `externalId` – Optional Property

Type: `string`

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `name` – Optional Property

Type: `string`

Name chosen for the Asset Account

<a name="type/CreatePaymentInput"></a>

### CreatePaymentInput – Request/Input

#### Properties

##### `externalId` – Optional Property

Type: `string`

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `amount` – Required Property

Type: [`Amount`](#type/Amount)

##### `receiver` – Required Property

Type: [`PaymentInstrument`](#type/PaymentInstrument)

##### `note` – Optional Property

Type: `string`

##### `narrative` – Optional Property

Type: `string`

<a name="type/InsufficientFunds"></a>

### InsufficientFunds – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/PaymentInstrument"></a>

### PaymentInstrument – Union

#### Alias to Types:

- Alias for [`BlockchainWalletAddress`](#type/BlockchainWalletAddress)
- Alias for [`DfnsAssetAccount`](#type/DfnsAssetAccount)

<a name="type/PaymentInstrumentKind"></a>

### PaymentInstrumentKind – Enumeration

#### States:

- State `DfnsAssetAccount`:
- State `BlockchainWalletAddress`:

<a name="type/PaymentInitiationStatus"></a>

### PaymentInitiationStatus – Enumeration

#### States:

- State `Initiated`:
- State `Canceled`:
- State `Rejected`:

<a name="type/AssetAccountStatus"></a>

### AssetAccountStatus – Enumeration

#### States:

- State `Creating`: Initial state of `AssetAccount` entity, indicating that it’s being created at the moment.
- State `Enabled`:
- State `Failed`:

<a name="type/PaymentStatus"></a>

### PaymentStatus – Enumeration

#### States:

- State `Initiated`:
- State `Declined`:
- State `Approved`:
- State `Executed`:
- State `Rejected`:
- State `Broadcasted`:
- State `Confirmed`:
- State `Settled`:

<a name="type/AssetAccountAuthorizationKind"></a>

### AssetAccountAuthorizationKind – Enumeration

#### States:

- State `Employee`:
- State `Group`:
- State `ApiKey`:

<a name="type/AssetAccountPermissions"></a>

### AssetAccountPermissions – Enumeration

#### States:

- State `InitiatePayments`:
- State `ReadBalance`:
- State `ReadPublicKey`:

# PolicyManagement – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

Policy Management domain responsibilities are:

- To allow customers to create, update, and read the policies they've created.
- To ensure that policy updates are stored appropriately and in compliant way.

---

## Models

<a name="type/Policy"></a>

### Policy – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `version` – Required Property

Type: `string`

##### `activityKind` – Required Property

Type: [`PolicyActivityKind`](#type/PolicyActivityKind)

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `isImmutable` – Required Property

Type: `boolean`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `description` – Optional Property

Type: `string`

##### `author` – Required Property

Type: [`Username`](#type/Username)

##### `name` – Optional Property

Type: `string`

##### `status` – Required Property

Type: [`PolicyStatus`](#type/PolicyStatus)

##### `controlIds` – Required Property

Type: Array of [`EntityId`](#type/EntityId)

##### `ruleIds` – Required Property

Type: Array of [`EntityId`](#type/EntityId)

<a name="type/NotifyAndAuditPolicyControl"></a>

### NotifyAndAuditPolicyControl – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyControlKind`](#type/PolicyControlKind)

##### `usernames` – Optional Property

Type: Array of `string`

##### `groups` – Optional Property

Type: Array of `string`

<a name="type/RequestApprovalPolicyControl"></a>

### RequestApprovalPolicyControl – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyControlKind`](#type/PolicyControlKind)

##### `approverGroups` – Optional Property

Type: Array of `string`

##### `approverUsernames` – Optional Property

Type: Array of `string`

##### `numApprovals` – Required Property

Type: `integer`

##### `timeoutInSeconds` – Required Property

Type: `integer`

<a name="type/PolicyRule"></a>

### PolicyRule – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `version` – Required Property

Type: `string`

##### `kind` – Required Property

Type: [`PolicyRuleKind`](#type/PolicyRuleKind)

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `isImmutable` – Required Property

Type: `boolean`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `author` – Required Property

Type: [`Username`](#type/Username)

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `configuration` – Required Property

Type: [`PolicyRuleConfiguration`](#type/PolicyRuleConfiguration)

<a name="type/PolicyControl"></a>

### PolicyControl – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `version` – Required Property

Type: `string`

##### `kind` – Required Property

Type: [`PolicyControlKind`](#type/PolicyControlKind)

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `isImmutable` – Required Property

Type: `boolean`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `author` – Required Property

Type: [`Username`](#type/Username)

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `shouldMergeWithSameControl` – Required Property

Type: `boolean`

Indicates whether control should merge with same one (compared by values).
This property should not be set to true, unless outcomes are understood. For example: Let's say we have 3 policies:

1. policy to require approval for payments over €5000
1. policy to require approval for payments done out of office hours
1. policy to require approval for payments done out of Geofence.

In this case policies will require 3 approvals combined, which might not be an intent, and only one approval is required.

<a name="type/CreateAmountLimitPrConf"></a>

### CreateAmountLimitPrConf – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyRuleKind`](#type/PolicyRuleKind)

##### `limit` – Required Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `shouldIgnoreAssetsWithoutMarketValue` – Required Property

Type: `boolean`

##### `assetAccountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/UpdateAmountLimitPrConf"></a>

### UpdateAmountLimitPrConf – Type

#### Properties

##### `limit` – Optional Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Optional Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `shouldIgnoreAssetsWithoutMarketValue` – Optional Property

Type: `boolean`

##### `assetAccountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/CreateOutgoingVelocityPrConf"></a>

### CreateOutgoingVelocityPrConf – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyRuleKind`](#type/PolicyRuleKind)

##### `velocity` – Required Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `intervalInMinutes` – Required Property

Type: `integer`

##### `shouldIgnoreAssetsWithoutMarketValue` – Required Property

Type: `boolean`

##### `assetAccountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/CreateSiphoningPrConf"></a>

### CreateSiphoningPrConf – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyRuleKind`](#type/PolicyRuleKind)

##### `maxTxCount` – Required Property

Type: `integer`

##### `intervalInMinutes` – Required Property

Type: `integer`

##### `assetAcountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/SiphoningPrConf"></a>

### SiphoningPrConf – Type

#### Properties

##### `maxTxCount` – Required Property

Type: `integer`

##### `intervalInMinutes` – Required Property

Type: `integer`

<a name="type/UpdateSiphonPrConf"></a>

### UpdateSiphonPrConf – Type

#### Properties

##### `maxTxCount` – Optional Property

Type: `integer`

##### `intervalInMinutes` – Optional Property

Type: `integer`

##### `assetAccountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/AmountLimitPrConf"></a>

### AmountLimitPrConf – Type

#### Properties

##### `limit` – Required Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `shouldIgnoreAssetsWithoutMarketValue` – Required Property

Type: `boolean`

<a name="type/UpdateOutgoingVelocityPrConf"></a>

### UpdateOutgoingVelocityPrConf – Type

#### Properties

##### `velocity` – Optional Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Optional Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `intervalInMinutes` – Optional Property

Type: `integer`

##### `shouldIgnoreAssetsWithoutMarketValue` – Optional Property

Type: `boolean`

##### `assetAccountSelectors` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/OutgoingVelocityPrConf"></a>

### OutgoingVelocityPrConf – Type

#### Properties

##### `velocity` – Required Property

Type: [`Amount`](#type/Amount)

##### `assetSymbol` – Required Property

Type: [`AssetSymbol`](#type/AssetSymbol)

##### `intervalInMinutes` – Required Property

Type: `integer`

##### `shouldIgnoreAssetsWithoutMarketValue` – Required Property

Type: `boolean`

<a name="type/CreateRequestApprovalPcConf"></a>

### CreateRequestApprovalPcConf – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyControlKind`](#type/PolicyControlKind)

##### `approverUsernames` – Optional Property

Type: Array of `string`

##### `approverGroups` – Optional Property

Type: Array of `string`

##### `timeoutInMinutes` – Optional Property

Type: `integer`

##### `canInitiatorApprove` – Required Property

Type: `boolean`

##### `numApprovals` – Required Property

Type: `integer`

<a name="type/UpdateRequestApprovalPcConf"></a>

### UpdateRequestApprovalPcConf – Type

#### Properties

##### `approverUsernames` – Optional Property

Type: Array of `string`

##### `approverGroups` – Optional Property

Type: Array of `string`

##### `timeoutInMinutes` – Optional Property

Type: `integer`

##### `canInitiatorApprove` – Optional Property

Type: `boolean`

##### `numApprovals` – Optional Property

Type: `integer`

<a name="type/CreateNotifyAndAuditPcConf"></a>

### CreateNotifyAndAuditPcConf – Type

#### Properties

##### `kind` – Required Property

Type: [`PolicyControlKind`](#type/PolicyControlKind)

##### `usernames` – Optional Property

Type: Array of `string`

##### `groups` – Optional Property

Type: Array of `string`

<a name="type/UpdateNotifyAndAuditPcConf"></a>

### UpdateNotifyAndAuditPcConf – Type

#### Properties

##### `groups` – Optional Property

Type: Array of `string`

##### `usernames` – Optional Property

Type: Array of `string`

<a name="type/AssetAccountSelector"></a>

### AssetAccountSelector – Type

#### Properties

##### `assetAccountIds` – Optional Property

Type: Array of [`EntityId`](#type/EntityId)

##### `tags` – Optional Property

Type: Array of [`Tag`](#type/Tag)

##### `assetSymbols` – Optional Property

Type: Array of [`AssetSymbol`](#type/AssetSymbol)

<a name="type/PolicyManagementPreferences"></a>

### PolicyManagementPreferences – Type

#### Properties

##### `policyRuleAssetSymbol` – Optional Property

Type: `boolean`

Sets default `AssetSymbol` for the policy rules that use it, such as Limit, Velocity, Siphoning, and others.

##### `policyRuleVelocityIntervalInMinutes` – Optional Property

Type: `integer`

Sets default interval in minutes for policy rules that use intervals, such as Velocity and Siphoning.

This setting does not update existing rules. This will only impact rules that are created after this setting is set.

<a name="type/Create"></a>

### Create – Type

#### Properties

<a name="type/UpdatePolicyRuleInput"></a>

### UpdatePolicyRuleInput – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `configuration` – Required Property

Type: [`UpdatePolicyRuleConfiguration`](#type/UpdatePolicyRuleConfiguration)

##### `assetAccountSelector` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/CreatePolicyInput"></a>

### CreatePolicyInput – Request/Input

#### Properties

##### `activityKind` – Required Property

Type: [`PolicyActivityKind`](#type/PolicyActivityKind)

##### `isImmutable` – Required Property

Type: `boolean`

##### `description` – Required Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `controlIds` – Required Property

Type: Array of [`EntityId`](#type/EntityId)

##### `ruleIds` – Required Property

Type: Array of [`EntityId`](#type/EntityId)

##### `status` – Required Property

Type: [`PolicyStatus`](#type/PolicyStatus)

<a name="type/UpdatePolicyInput"></a>

### UpdatePolicyInput – Request/Input

#### Properties

##### `description` – Optional Property

Type: `string`

##### `controlIds` – Optional Property

Type: Array of [`EntityId`](#type/EntityId)

##### `ruleIds` – Optional Property

Type: Array of [`EntityId`](#type/EntityId)

##### `status` – Optional Property

Type: [`PolicyStatus`](#type/PolicyStatus)

<a name="type/CreatePolicyControlInput"></a>

### CreatePolicyControlInput – Request/Input

#### Properties

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `configuration` – Required Property

Type: [`CreatePolicyControlConfiguration`](#type/CreatePolicyControlConfiguration)

<a name="type/UpdatePolicyControlInput"></a>

### UpdatePolicyControlInput – Request/Input

#### Properties

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `configuration` – Optional Property

Type: [`UpdatePolicyControlConfiguration`](#type/UpdatePolicyControlConfiguration)

<a name="type/CreatePolicyRuleInput"></a>

### CreatePolicyRuleInput – Request/Input

#### Properties

##### `description` – Optional Property

Type: `string`

##### `name` – Optional Property

Type: `string`

##### `configuration` – Required Property

Type: [`CreatePolicyRuleConfiguration`](#type/CreatePolicyRuleConfiguration)

##### `assetAccountSelector` – Optional Property

Type: [`AssetAccountSelector`](#type/AssetAccountSelector)

<a name="type/CreatePolicyRuleConfiguration"></a>

### CreatePolicyRuleConfiguration – Union

#### Alias to Types:

- Alias for [`CreateAmountLimitPrConf`](#type/CreateAmountLimitPrConf)
- Alias for [`CreateOutgoingVelocityPrConf`](#type/CreateOutgoingVelocityPrConf)
- Alias for [`CreateSiphoningPrConf`](#type/CreateSiphoningPrConf)

<a name="type/UpdatePolicyRuleConfiguration"></a>

### UpdatePolicyRuleConfiguration – Union

#### Alias to Types:

- Alias for [`UpdateAmountLimitPrConf`](#type/UpdateAmountLimitPrConf)
- Alias for [`UpdateSiphonPrConf`](#type/UpdateSiphonPrConf)
- Alias for [`UpdateOutgoingVelocityPrConf`](#type/UpdateOutgoingVelocityPrConf)

<a name="type/UpdatePolicyControlConfiguration"></a>

### UpdatePolicyControlConfiguration – Union

#### Alias to Types:

- Alias for [`UpdateRequestApprovalPcConf`](#type/UpdateRequestApprovalPcConf)
- Alias for [`UpdateNotifyAndAuditPcConf`](#type/UpdateNotifyAndAuditPcConf)

<a name="type/CreatePolicyControlConfiguration"></a>

### CreatePolicyControlConfiguration – Union

#### Alias to Types:

- Alias for [`CreateRequestApprovalPcConf`](#type/CreateRequestApprovalPcConf)
- Alias for [`CreateNotifyAndAuditPcConf`](#type/CreateNotifyAndAuditPcConf)

<a name="type/PolicyRuleConfiguration"></a>

### PolicyRuleConfiguration – Union

#### Alias to Types:

- Alias for [`SiphoningPrConf`](#type/SiphoningPrConf)
- Alias for [`AmountLimitPrConf`](#type/AmountLimitPrConf)
- Alias for [`OutgoingVelocityPrConf`](#type/OutgoingVelocityPrConf)
- Alias for [`OutgoingVelocityPrConf`](#type/OutgoingVelocityPrConf)

<a name="type/PolicyActivityKind"></a>

### PolicyActivityKind – Enumeration

#### States:

- State `PaymentInitiation`:
- State `EmployeeAdded`:
- State `EmployeeDetailsUpdated`:
- State `EmployeeRemoved`:

<a name="type/PolicyStatus"></a>

### PolicyStatus – Enumeration

#### States:

- State `Enabled`:
- State `Disabled`:
- State `Archived`:

<a name="type/PolicyControlKind"></a>

### PolicyControlKind – Enumeration

#### States:

- State `NotifyAndAudit`:
- State `RequestApproval`:

<a name="type/PolicyRuleKind"></a>

### PolicyRuleKind – Enumeration

#### States:

- State `PaymentAmountLimit`:
- State `PaymentAmountOutgoingVelocity`:
- State `EmployeeAdded`:
- State `EmployeeDetailsUpdated`:
- State `OutgoingPaymentVelocity`:
- State `Siphoning`:

# PolicyExecution – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

Policy execution domain responsibilities are:

- To intercept activities that can be under purview of risk management, information security, or other compliance function.
- And to execute controls required to reduce risk, or to cancel activity alltogether.

---

## Models

<a name="type/PolicyExecution"></a>

### PolicyExecution – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `kind` – Required Property

Type: [`PolicyActivityKind`](#type/PolicyActivityKind)

##### `status` – Required Property

Type: [`ExecutionStatus`](#type/ExecutionStatus)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `initiatorKind` – Required Property

Type: [`InitiatorKind`](#type/InitiatorKind)

##### `initiatingEventId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `documentedPolicies` – Optional Property

Type: Array of [`DocumentSnapshot`](#type/DocumentSnapshot)

Applied poliies stored along with PolicyExecution status as-raw-json-string. This ensures that even if somebody tampers with policy, the audit log would have actual-literal representation of what was executed.

##### `documentedActivity` – Required Property

Type: [`DocumentSnapshot`](#type/DocumentSnapshot)

##### `controlExecutions` – Optional Property

Type: Array of [`PolicyControlExecution`](#type/PolicyControlExecution)

##### `policyId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/PolicyControlExecution"></a>

### PolicyControlExecution – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `status` – Required Property

Type: [`ExecutionStatus`](#type/ExecutionStatus)

##### `controlId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `dateExecuted` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `dateFullfiled` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `policyExecutionId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/ExecutionCertificate"></a>

### ExecutionCertificate – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `checksum` – Required Property

Type: `string`

##### `initiatingEventId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `appliedPolicies` – Optional Property

Type: Array of [`Policy`](#type/Policy)

<a name="type/AppraisableActivity"></a>

### AppraisableActivity – Type

#### Properties

<a name="type/PolicyApprovalNotAllowedError"></a>

### PolicyApprovalNotAllowedError – Error Response

#### Properties

##### `serviceName` – Required Property

Type: `string`

##### `message` – Required Property

Type: `string`

##### `causes` – Optional Property

Type: Array of `string`

##### `shouldTriggerInvestigaton` – Required Property

Type: `boolean`

##### `isDfnsError` – Required Property

Type: `boolean`

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/ExecutionStatus"></a>

### ExecutionStatus – Enumeration

#### States:

- State `Awaiting`:
- State `Passed`:
- State `Failed`:
- State `Timedout`:

# BlockchainRails – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

<a name="type/CreateKeychainAttempt"></a>

### CreateKeychainAttempt – Request/Input

#### Properties

##### `parties` – Required Property

Type: `decimal`

##### `threshold` – Required Property

Type: `decimal`

##### `accountId` – Required Property

Type: [`EntityId`](#type/EntityId)

<a name="type/CreateKeychainStatus"></a>

### CreateKeychainStatus – Enumeration

#### States:

- State `Success`:
- State `Failed`:

# SignersNetwork – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

<a name="type/SignersGroup"></a>

### SignersGroup – Type

#### Properties

##### `threshold` – Required Property

Type: `integer`

##### `publicKey` – Required Property

Type: `string`

##### `participantPublicKeys` – Optional Property

Type: Array of `string`

# ApiKeys – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

ApiKeys domain responsibilities are:

- To allow customers to delegate and automate functionality, by granting authorization tokens to machines.
- To allow customers to manage, revoke, and review their authorization tokens.

---

## Models

<a name="type/ApiKeyRecord"></a>

### ApiKeyRecord – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `status` – Required Property

Type: [`ApiKeyStatus`](#type/ApiKeyStatus)

##### `externalId` – Optional Property

Type: `string`

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `dateCreated` – Required Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `name` – Optional Property

Type: `string`

##### `authorId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `apiKey` – Required Property

Type: `string`

##### `scopes` – Optional Property

Type: Array of `string`

<a name="type/ApiKeyActionNotAllowed"></a>

### ApiKeyActionNotAllowed – Error Response

#### Properties

##### `httpStatus` – Required Property

Type: `integer`

##### `errorName` – Required Property

Type: `string`

<a name="type/ApiKeyStatus"></a>

### ApiKeyStatus – Enumeration

#### States:

- State `Active`:
- State `Archived`:

# Universe – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

# Notifications – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

# Callbacks – Domain

---

## PATHS

### ReadPublicKey

RESTful Path: `/mpc/public-keys/{publicKey}`<br />Retrieves accounts by public key.<br />Parameters: [{"name":"publicKey","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePublicKey

RESTful Path: `/mpc/public-keys`<br /><br />Parameters: []<br />

### CreateSignature

RESTful Path: `/mpc/public-keys/{publicKeyId}/signatures`<br />Operation accepts a message, and uses Dfns MPC network to create signature against it.<br />Parameters: [{"name":"publicKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletBalances

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/balances`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletAddress

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/address`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"asset","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadWalletTransactions

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"assets","in":"query","description":"Asset symbol that is being retrieved.\n\n - If this is a native currency (such as BTC on BTC network) it will be duplicated.\n - If this is an ERC20 (or analog on other networks, such as FA 1.2) then it will indicate particular coin. This can be either supported by Dfns asset, or supported by a given customer.","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateWalletTransaction

RESTful Path: `/mpc/networks/{network}/wallets/{walletId}/transactions`<br /><br />Parameters: [{"name":"network","in":"path","description":"","required":true,"schema":{"type":"string"}},{"name":"walletId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### InitiatePayment

RESTful Path: `/assets/asset-accounts/{accountId}/payments`<br />Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.<br />Parameters: [{"name":"accountId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateAssetAccount

RESTful Path: `/assets/asset-accounts`<br />Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup). <br />Parameters: []<br />

### ListAssetAccounts

RESTful Path: `/assets/asset-accounts`<br />Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.<br />Parameters: [{"name":"status","in":"query","description":"","required":true,"schema":{"type":"string","enum":["Creating","Enabled","Failed"]}}]<br />

### ReadAssetAccountById

RESTful Path: `/assets/asset-accounts/{id}`<br />Reads and returns an instance of `AssetAccount` by `id`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveAssetAccount

RESTful Path: `/assets/asset-accounts/{id}`<br />Operation marks `AssetAccount` as `Archived` which deactivates account.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadAssetAccountBalanceById

RESTful Path: `/assets/asset-accounts/{id}/balance`<br />Get the balance of the `AssetAccount` with its `id`. Returns an instance of `AssetAccountBalance`.<br />Parameters: [{"name":"id","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicy

RESTful Path: `/policies/policies`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicies

RESTful Path: `/policies/policies`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicy

RESTful Path: `/policies/policies/{policyId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyById

RESTful Path: `/policies/policies/{policyId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicy

RESTful Path: `/policies/policies/{policyId}`<br /><br />Parameters: [{"name":"policyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyControl

RESTful Path: `/policies/policy-controls`<br />Creates new `PolicyControl` item. <br />Parameters: []<br />

### ListPolicyControls

RESTful Path: `/policies/policy-controls`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"policyControlKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["NotifyAndAudit","RequestApproval"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Updates existing policy control, this operation will create new `PolicyControl` with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyControlById

RESTful Path: `/policies/policy-controls/{policyControlId}`<br />Lists all available `PolicyControl` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyControl

RESTful Path: `/policies/policy-controls/{policyControlId}`<br /><br />Parameters: [{"name":"policyControlId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreatePolicyRule

RESTful Path: `/policies/policy-rules`<br />Creates new policy. This will bind list of `PolicyRule` entities with `PolicyControl` entities to a given `ActivityKind`.<br />Parameters: []<br />

### ListPolicyRules

RESTful Path: `/policies/policy-rules`<br />Lists all available `Policy` items. List can be further filtered using using additional parameters below.<br />Parameters: [{"name":"dateCreated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"dateUpdated","in":"query","description":"","required":true,"schema":{"type":"string"}},{"name":"activityKind","in":"query","description":"","required":true,"schema":{"type":"string","enum":["PaymentInitiation","EmployeeAdded","EmployeeDetailsUpdated","EmployeeRemoved"]}},{"name":"isEnabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isDisabled","in":"query","description":"","required":true,"schema":{"type":"boolean"}},{"name":"isArchived","in":"query","description":"","required":true,"schema":{"type":"boolean"}}]<br />

### UpdatePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Updates existing policy, this operation will create new policy with same `id` but different `version`. Old policy will be marked as `Archived` and no longer available for execution, but can be reviewed and audited.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadyPolicyRuleById

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br />Retrieves single `Policy` item by it’s `id`.<br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchivePolicyRule

RESTful Path: `/policies/policy-rules/{policyRuleId}`<br /><br />Parameters: [{"name":"policyRuleId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadPolicyCertificateByHash

RESTful Path: `/policies/execution-certificates/{policyCertificate}`<br /><br />Parameters: [{"name":"policyCertificate","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateApiKey

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RetrieveActiveApiKeys

RESTful Path: `/apikeys/apikeys`<br /><br />Parameters: []<br />

### RevokeApiKey

RESTful Path: `/apikeys/apikeys/{apiKeyId}`<br /><br />Parameters: [{"name":"apiKeyId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### CreateCallbackSubscription

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ListCallbackSubscriptions

RESTful Path: `/callback-subscriptions`<br /><br />Parameters: []<br />

### ReadCallbackSubscriptionById

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ArchiveCallbackSubscription

RESTful Path: `/callback-subscriptions/{callbackSubscriptionId}`<br /><br />Parameters: [{"name":"callbackSubscriptionId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ReadCallbackEventById

RESTful Path: `/callback-events/{callbackEventId}`<br /><br />Parameters: [{"name":"callbackEventId","in":"path","description":"","required":true,"schema":{"type":"string"}}]<br />

### ListCallbackEvents

RESTful Path: `/callback-events`<br /><br />Parameters: []<br />

---

---

## Models

<a name="type/CallbackEvent"></a>

### CallbackEvent – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: `string`

##### `callbackSubscriptionId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `kind` – Required Property

Type: [`CallbackEventKind`](#type/CallbackEventKind)

##### `documentSnapshot` – Required Property

Type: [`DocumentSnapshot`](#type/DocumentSnapshot)

##### `timestampUtc` – Optional Property

Type: [`IsoDatetime`](#type/IsoDatetime)

##### `status` – Required Property

Type: [`CallbackEventStatus`](#type/CallbackEventStatus)

<a name="type/CallbackSubscription"></a>

### CallbackSubscription – Type

#### Properties

##### `id` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `orgId` – Required Property

Type: [`EntityId`](#type/EntityId)

##### `externalId` – Optional Property

Type: `string`

##### `eventKind` – Required Property

Type: [`CallbackEventKind`](#type/CallbackEventKind)

##### `url` – Required Property

Type: `string`

##### `statusFilter` – Optional Property

Type: Array of `string`

##### `tagsFilter` – Optional Property

Type: Array of `string`

<a name="type/CallbackEventKind"></a>

### CallbackEventKind – Enumeration

#### States:

- State `Payment`:
- State `PolicyExecution`:

<a name="type/CallbackEventStatus"></a>

### CallbackEventStatus – Enumeration

#### States:

- State `Sent`:
- State `Failed`:

<a name="type/CallbackStatus"></a>

### CallbackStatus – Enumeration

#### States:

- State `Active`:
- State `Archived`:
