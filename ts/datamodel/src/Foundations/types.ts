// FIXME: Missing documentation for AssetPairPrice
export type AssetPairPrice = {
  // FIXME: Missing documentation for pair
  pair: string

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for base
  base: AssetSymbol

  // FIXME: Missing documentation for counter
  counter: AssetSymbol

  // FIXME: Missing documentation for amount
  amount: Amount

  /**
   * Id in `AssetMarketData` is always a copy of `pair` value, such as `USDBTC`. There is no need for additional entropy, since the pair is always unique.
   */
  id: EntityId
}

// FIXME: Missing documentation for EmployeeInitiator
export type EmployeeInitiator = {
  // FIXME: Missing documentation for kind
  kind: InitiatorKind.Employee

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for employeeId
  employeeId: EntityId
}

// FIXME: Missing documentation for DfnsStaffInitiator
export type DfnsStaffInitiator = {
  // FIXME: Missing documentation for kind
  kind: InitiatorKind.DfnsStaff

  // FIXME: Missing documentation for maintainerId
  maintainerId: EntityId

  // FIXME: Missing documentation for country
  country: Countries
}

// FIXME: Missing documentation for DfnsCustomerServiceInitiator
export type DfnsCustomerServiceInitiator = {
  // FIXME: Missing documentation for kind
  kind: InitiatorKind.DfnsCustomerService

  // FIXME: Missing documentation for orgId
  orgId: EntityId

  // FIXME: Missing documentation for apiKeyId
  apiKeyId: EntityId
}

/**
 * Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture date-only in `yyyy-mm-dd` format.
 */
export type IsoDate = string

/**
 * Representation of [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date as a string. This datatype used to capture full date and time with optional timezone component.
 */
export type IsoDatetime = string

/**
 * Represents monetary amount. When transported  the type should be serialised as string to avoid IEEE/Float errors. When parsed within application logic, `Bid Decimal` or similar high-precision types should be used.
 */
export type Amount = string

/**
 * Represents ids, such as indices, foreign keys, etc. In most cases should be string.
 */
export type EntityId = string

/**
 * Represents usernames within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value.
 */
export type Username = string

/**
 * Represents individual permissions, groups, or role within the platform. This should be used highlight the higher-than-usual risk type of the transported or stored value.
 */
export type GroupOrPermission = string

/**
 * Represents snapshot of documents. Usually this means that this is a serialised form of a data-object, using XML, JSON, or other readable by both machine and human datasets.
 *
 * This should be used highlight the higher-than-usual risk type of the transported or stored value.
 *
 */
export type DocumentSnapshot = string

/**
 * Represents tags within a system, that can be used by customers to mark up and organise various items. For example – they could tag employees, api-keys, and accounts to separate them in groups by department.
 */
export type Tag = string

/**
 * Represents public key entities.
 *
 * This should be used highlight the higher-than-usual risk type of the transported or stored value.
 *
 */
export type PublicKey = string

/**
 * Represents a certificate that can be issued by various systems such as PolicyEngine, StrategyEngine or DefenceEngine to acknowledge that certain operation passed them.
 *
 */
export type DfnsCertificate = string

// FIXME: Missing documentation for Epoch
export type Epoch = number

// FIXME: Missing documentation for BlockchainAddress
export type BlockchainAddress = string

// FIXME: Missing documentation for Initiator
export type Initiator =
  | EmployeeInitiator
  | DfnsStaffInitiator
  | DfnsCustomerServiceInitiator

// FIXME: Missing documentation for Countries
export enum Countries {
  // FIXME: Missing documentation for DE
  DE = 'DE',

  // FIXME: Missing documentation for GB
  GB = 'GB',

  // FIXME: Missing documentation for FR
  FR = 'FR',

  // FIXME: Missing documentation for US
  US = 'US',
}

// FIXME: Missing documentation for AssetSymbol
export enum AssetSymbol {
  //Cardano native currency
  ADA = 'ADA',

  //Algorand native currency
  ALGO = 'ALGO',

  //Bitcoin Cash
  BCH = 'BCH',

  //Bitcoin. The first and the only.
  BTC = 'BTC',

  //Bitcoin [so-called] Satoshi Vision
  BSV = 'BSV',

  //Elon’s favorite Dog.
  DOGE = 'DOGE',

  //Polkadot native currency
  DOT = 'DOT',

  //Ethereum
  ETH = 'ETH',

  //EOS
  EOS = 'EOS',

  //Lite Coin native currency
  LTC = 'LTC',

  //1INCH ERC20 token
  '1INCH_ETH' = '1INCH.ETH',

  //DAI token
  DAI_ETH = 'DAI.ETH',

  //Tether USDT token
  USDT_ETH = 'USDT.ETH',

  //Coinbase USDC token
  USDC_ETH = 'USDC.ETH',

  //JEUR token
  JEUR_ETH = 'JEUR.ETH',

  //JCHF token
  JCHF_ETH = 'JCHF.ETH',

  //JGBP token
  JGBP_ETH = 'JGBP.ETH',

  //Wrapped BTC token
  WBTC_ETH = 'WBTC.ETH',

  //AAVE token
  AAVE_ETH = 'AAVE.ETH',

  //BAT token
  BAT_ETH = 'BAT.ETH',

  //Compound token
  COMP_ETH = 'COMP.ETH',

  //ChainLink token
  LINK_ETH = 'LINK.ETH',

  //Maker token
  MKR_ETH = 'MKR.ETH',

  //SushiSwap token
  SUSHI_ETH = 'SUSHI.ETH',

  //UniSwap token
  UNI_ETH = 'UNI.ETH',

  //Kusama – Polkadot’s Canary network
  KSM = 'KSM',

  //Stellar native coin.
  XLM = 'XLM',

  //Ripple.
  XRP = 'XRP',

  //Binance Coin
  BNB_BSC = 'BNB.BSC',

  //Polygon
  MATIC = 'MATIC',

  //Tezos native currency
  XTZ = 'XTZ',

  //Solana
  SOL = 'SOL',

  //Polymesh
  POLYX = 'POLYX',

  //EURL token tezos
  EURL_XTZ = 'EURL.XTZ',

  //Euro
  EUR = 'EUR',

  //US Dollar
  USD = 'USD',

  //Pound sterling
  GBP = 'GBP',

  //Swiss franc
  CHF = 'CHF',
}

// FIXME: Missing documentation for InitiatorKind
export enum InitiatorKind {
  // FIXME: Missing documentation for Employee
  Employee = 'Employee',

  // FIXME: Missing documentation for DfnsCustomerService
  DfnsCustomerService = 'DfnsCustomerService',

  // FIXME: Missing documentation for DfnsStaff
  DfnsStaff = 'DfnsStaff',
}
