export const ReadPolicyCertificateByHashApiMapping = {
  requiredScopes: [],
  http: ['GET', 'policies/execution-certificates/:policyCertificate'],
  graphQl: ['PolicyExecution', 'Query', 'ReadPolicyCertificateByHash'],
  queue: 'PolicyExecutionReadPolicyCertificateByHash',
}
