import { httpClient } from '../../../utils/dfnsHttpClient'
import { UserAccessTokenInformation } from '@dfns/datamodel/dist/Auth'

export const getServiceAccount = async () : Promise<UserAccessTokenInformation> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const resourcePath = '/auth/service-accounts/us-2q55i-g68v6-9etoie66crbdsh7k'

    httpClient.get<UserAccessTokenInformation>(
      appId,
      authToken,
      resourcePath
    ).then((serviceAccount) => {
      console.log(`Service Accounts for ${serviceAccount.userInfo.orgId}:`)
      console.log(`${serviceAccount.userInfo.isActive ? '' : '(DEACTIVATED) '}${serviceAccount.userInfo.username}`)
      console.log(`  User ID: ${serviceAccount.userInfo.userId}`)
      console.log(`  Kind: ${serviceAccount.userInfo.kind}`)
      console.log(`  Access Tokens:`)
      for (const token of serviceAccount.accessTokens) {
        console.log(`  ${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
        console.log(`    Kind: ${token.kind}`)
        console.log(`    Public Key: ${token.publicKey}`)
        console.log(`    Cred ID: ${token.credId}`)
      }
      resolve(serviceAccount)
    }).catch((error) => {
      console.error(`Failed to get service account: ${error.message}`)
      reject(error)
    })
  })
}
