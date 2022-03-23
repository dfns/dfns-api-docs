export const InitiatePaymentApiMapping = {
  requiredScopes: [
    { authMechanism: 'EmployeeAuth', scope: 'write:payments' },
    { authMechanism: 'ApiKeyAuth', scope: 'write:payments' },
  ],
  http: ['POST', 'assets/asset-accounts/:accountId/payments'],
  graphQl: ['Assets', 'Mutation', 'InitiatePayment'],
  queue: 'AssetsInitiatePayment',
}

export const CreateAssetAccountApiMapping = {
  requiredScopes: [],
  http: ['POST', 'assets/asset-accounts'],
  graphQl: ['Assets', 'Mutation', 'CreateAssetAccount'],
  queue: 'AssetsCreateAssetAccount',
}

export const ReadAssetAccountByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'assets/asset-accounts/:id'],
  graphQl: ['Assets', 'Query', 'ReadAssetAccountById'],
  queue: 'AssetsReadAssetAccountById',
}

export const ListAssetAccountsApiMapping = {
  requiredScopes: [],
  http: ['GET', 'assets/asset-accounts'],
  graphQl: ['Assets', 'Query', 'ListAssetAccounts'],
  queue: 'AssetsListAssetAccounts',
}

export const ArchiveAssetAccountApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'assets/asset-accounts/:id'],
  graphQl: ['Assets', 'Mutation', 'ArchiveAssetAccount'],
  queue: 'AssetsArchiveAssetAccount',
}

export const ReadAssetAccountBalanceByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'assets/asset-accounts/:id/balance'],
  graphQl: ['Assets', 'Query', 'ReadAssetAccountBalanceById'],
  queue: 'AssetsReadAssetAccountBalanceById',
}
