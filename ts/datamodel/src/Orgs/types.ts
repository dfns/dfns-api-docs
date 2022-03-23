import {
  Countries,
  EntityId,
  IsoDate,
  IsoDatetime,
  BadRequestError,
  PaymentRequiredError,
  EntityNotFoundError,
  DuplicateError,
} from '../Foundations'

// FIXME: Missing documentation for Org
export type Org = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for legalName
  legalName: string

  // FIXME: Missing documentation for tradingName
  tradingName?: string

  // FIXME: Missing documentation for country
  country: Countries

  // FIXME: Missing documentation for dateOfIncorporation
  dateOfIncorporation: IsoDate

  // FIXME: Missing documentation for dateOnboarded
  dateOnboarded: IsoDatetime

  // FIXME: Missing documentation for status
  status: OrgStatus

  // FIXME: Missing documentation for employees
  employees: OrgEmployee[]

  // FIXME: Missing documentation for groups
  groups?: EmployeeGroup[]
}

// FIXME: Missing documentation for OrgEmployee
export type OrgEmployee = {
  // FIXME: Missing documentation for id
  id: EntityId

  // FIXME: Missing documentation for status
  status: OrgEmployeeStatus

  // FIXME: Missing documentation for orgId
  orgId: string

  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for email
  email: string

  /**
   * Identity issuer (eg Auth0). Empty if it's the default one (Dfns one). The issuer will be filled for non-Dfns issuers.
   */
  issuer?: string

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for dateUpdated
  dateUpdated: IsoDatetime

  // FIXME: Missing documentation for fullName
  fullName: string

  // FIXME: Missing documentation for dateOfBirth
  dateOfBirth: IsoDate

  // FIXME: Missing documentation for groups
  groups?: EmployeeGroup[]
}

// FIXME: Missing documentation for ProductAvailabilityReport
export type ProductAvailabilityReport = {
  // FIXME: Missing documentation for product
  product: ProductKind

  // FIXME: Missing documentation for isAvailable
  isAvailable: boolean

  // FIXME: Missing documentation for dateCreated
  dateCreated: IsoDatetime

  // FIXME: Missing documentation for orgId
  orgId: EntityId
}

// FIXME: Missing documentation for EmployeeGroup
export type EmployeeGroup = {
  // FIXME: Missing documentation for name
  name: string
}

// FIXME: Missing documentation for CreateEmployee
export type CreateEmployee = {
  // FIXME: Missing documentation for username
  username: string

  // FIXME: Missing documentation for email
  email: string

  // FIXME: Missing documentation for issuer
  issuer?: string

  // FIXME: Missing documentation for fullName
  fullName: string

  // FIXME: Missing documentation for dateOfBirth
  dateOfBirth: IsoDate
}

// FIXME: Missing documentation for UpdateEmployee
export type UpdateEmployee = {
  // FIXME: Missing documentation for fullName
  fullName?: string

  // FIXME: Missing documentation for dateOfBirth
  dateOfBirth?: IsoDate

  // FIXME: Missing documentation for email
  email?: string

  // FIXME: Missing documentation for name
  name?: string

  // FIXME: Missing documentation for status
  status: OrgEmployeeStatus
}

// FIXME: Missing documentation for UpdateOrg
export type UpdateOrg = {
  // FIXME: Missing documentation for legalName
  legalName?: string

  // FIXME: Missing documentation for tradingName
  tradingName?: string

  // FIXME: Missing documentation for dateOfIncorporation
  dateOfIncorporation?: IsoDate

  // FIXME: Missing documentation for companyNumber
  companyNumber?: string

  // FIXME: Missing documentation for taxId
  taxId?: string
}

/**
 * Indicates customer’s status within a lifecycle.
 */
export enum OrgStatus {
  //Customer is archived and no longer functional. Customer will have to go through re-onboarding to be enabled again.
  Archived = 'Archived',

  //Customer is disabled. Usually temporary action, in case something goes wrong.
  Disabled = 'Disabled',

  //Customer is enabled and operational.
  Enabled = 'Enabled',

  //Customer is being created at the moment.
  Creating = 'Creating',

  //Customer is approved to be created and initialized.
  Approved = 'Approved',
}

// FIXME: Missing documentation for OrgEmployeeStatus
export enum OrgEmployeeStatus {
  // FIXME: Missing documentation for Enabled
  Enabled = 'Enabled',

  // FIXME: Missing documentation for Disabled
  Disabled = 'Disabled',

  // FIXME: Missing documentation for Archived
  Archived = 'Archived',
}

// FIXME: Missing documentation for ProductKind
export enum ProductKind {
  // FIXME: Missing documentation for AssetAccountManagement
  AssetAccountManagement = 'AssetAccountManagement',

  // FIXME: Missing documentation for PaymentInitiation
  PaymentInitiation = 'PaymentInitiation',

  // FIXME: Missing documentation for PolicyEngine
  PolicyEngine = 'PolicyEngine',
}
