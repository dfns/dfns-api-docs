export const CreateApiKeyApiMapping = {
  requiredScopes: [],
  http: ['POST', 'apikeys/apikeys'],
  graphQl: ['ApiKeys', 'Mutation', 'CreateApiKey'],
  queue: 'ApiKeysCreateApiKey',
}

export const RetrieveActiveApiKeysApiMapping = {
  requiredScopes: [],
  http: ['GET', 'apikeys/apikeys'],
  graphQl: ['ApiKeys', 'Query', 'RetrieveActiveApiKeys'],
  queue: 'ApiKeysRetrieveActiveApiKeys',
}

export const RevokeApiKeyApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'apikeys/apikeys/:apiKeyId'],
  graphQl: ['ApiKeys', 'Mutation', 'RevokeApiKey'],
  queue: 'ApiKeysRevokeApiKey',
}
