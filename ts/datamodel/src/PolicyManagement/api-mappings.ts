export const CreatePolicyApiMapping = {
  requiredScopes: [],
  http: ['POST', 'policies/policies'],
  graphQl: ['PolicyManagement', 'Mutation', 'CreatePolicy'],
  queue: 'PolicyManagementCreatePolicy',
}

export const UpdatePolicyApiMapping = {
  requiredScopes: [],
  http: ['PUT', 'policies/policies/:policyId'],
  graphQl: ['PolicyManagement', 'Mutation', 'UpdatePolicy'],
  queue: 'PolicyManagementUpdatePolicy',
}

export const ReadyPolicyByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policies/:policyId'],
  graphQl: ['PolicyManagement', 'Query', 'ReadyPolicyById'],
  queue: 'PolicyManagementReadyPolicyById',
}

export const ListPoliciesApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policies'],
  graphQl: ['PolicyManagement', 'Query', 'ListPolicies'],
  queue: 'PolicyManagementListPolicies',
}

export const ArchivePolicyApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'policies/policies/:policyId'],
  graphQl: ['PolicyManagement', 'Mutation', 'ArchivePolicy'],
  queue: 'PolicyManagementArchivePolicy',
}

export const CreatePolicyControlApiMapping = {
  requiredScopes: [],
  http: ['POST', 'policies/policy-controls'],
  graphQl: ['PolicyManagement', 'Mutation', 'CreatePolicyControl'],
  queue: 'PolicyManagementCreatePolicyControl',
}

export const UpdatePolicyControlApiMapping = {
  requiredScopes: [],
  http: ['PUT', 'policies/policy-controls/:policyControlId'],
  graphQl: ['PolicyManagement', 'Mutation', 'UpdatePolicyControl'],
  queue: 'PolicyManagementUpdatePolicyControl',
}

export const ReadyPolicyControlByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policy-controls/:policyControlId'],
  graphQl: ['PolicyManagement', 'Query', 'ReadyPolicyControlById'],
  queue: 'PolicyManagementReadyPolicyControlById',
}

export const ListPolicyControlsApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policy-controls'],
  graphQl: ['PolicyManagement', 'Query', 'ListPolicyControls'],
  queue: 'PolicyManagementListPolicyControls',
}

export const ArchivePolicyControlApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'policies/policy-controls/:policyControlId'],
  graphQl: ['PolicyManagement', 'Mutation', 'ArchivePolicyControl'],
  queue: 'PolicyManagementArchivePolicyControl',
}

export const CreatePolicyRuleApiMapping = {
  requiredScopes: [],
  http: ['POST', 'policies/policy-rules'],
  graphQl: ['PolicyManagement', 'Mutation', 'CreatePolicyRule'],
  queue: 'PolicyManagementCreatePolicyRule',
}

export const UpdatePolicyRuleApiMapping = {
  requiredScopes: [],
  http: ['PUT', 'policies/policy-rules/:policyRuleId'],
  graphQl: ['PolicyManagement', 'Mutation', 'UpdatePolicyRule'],
  queue: 'PolicyManagementUpdatePolicyRule',
}

export const ReadyPolicyRuleByIdApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policy-rules/:policyRuleId'],
  graphQl: ['PolicyManagement', 'Query', 'ReadyPolicyRuleById'],
  queue: 'PolicyManagementReadyPolicyRuleById',
}

export const ListPolicyRulesApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/policy-rules'],
  graphQl: ['PolicyManagement', 'Query', 'ListPolicyRules'],
  queue: 'PolicyManagementListPolicyRules',
}

export const ArchivePolicyRuleApiMapping = {
  requiredScopes: [],
  http: ['DELETE', 'policies/policy-rules/:policyRuleId'],
  graphQl: ['PolicyManagement', 'Mutation', 'ArchivePolicyRule'],
  queue: 'PolicyManagementArchivePolicyRule',
}
