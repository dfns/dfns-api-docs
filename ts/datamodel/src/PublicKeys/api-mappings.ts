export const ReadPublicKeyApiMapping = {
  requiredScopes: [],
  http: ['GET', 'mpc/public-keys/:publicKey'],
  graphQl: ['PublicKeys', 'Query', 'ReadPublicKey'],
  queue: 'PublicKeysReadPublicKey',
}

export const CreatePublicKeyApiMapping = {
  requiredScopes: [],
  http: ['POST', 'mpc/public-keys'],
  graphQl: ['PublicKeys', 'Mutation', 'CreatePublicKey'],
  queue: 'PublicKeysCreatePublicKey',
}

export const CreateSignatureApiMapping = {
  requiredScopes: [],
  http: ['POST', 'mpc/public-keys/:publicKeyId/signatures'],
  graphQl: ['PublicKeys', 'Mutation', 'CreateSignature'],
  queue: 'PublicKeysCreateSignature',
}

export const ReadWalletBalancesApiMapping = {
  requiredScopes: [],
  http: ['GET', 'mpc/networks/:network/wallets/:walletId/balances'],
  graphQl: ['PublicKeys', 'Query', 'ReadWalletBalances'],
  queue: 'PublicKeysReadWalletBalances',
}

export const ReadWalletAddressApiMapping = {
  requiredScopes: [],
  http: ['GET', 'mpc/networks/:network/wallets/:walletId/address'],
  graphQl: ['PublicKeys', 'Query', 'ReadWalletAddress'],
  queue: 'PublicKeysReadWalletAddress',
}

export const ReadWalletTransactionsApiMapping = {
  requiredScopes: [],
  http: ['GET', 'mpc/networks/:network/wallets/:walletId/transactions'],
  graphQl: ['PublicKeys', 'Query', 'ReadWalletTransactions'],
  queue: 'PublicKeysReadWalletTransactions',
}

export const CreateWalletTransactionApiMapping = {
  requiredScopes: [],
  http: ['POST', 'mpc/networks/:network/wallets/:walletId/transactions'],
  graphQl: ['PublicKeys', 'Mutation', 'CreateWalletTransaction'],
  queue: 'PublicKeysCreateWalletTransaction',
}
