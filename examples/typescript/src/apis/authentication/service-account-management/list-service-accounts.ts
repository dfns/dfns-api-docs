import { httpClient } from '../../../utils/dfnsHttpClient'
import { UserAccessTokenInformation } from '@dfns/datamodel/dist/Auth'

export const listServiceAccounts = async () : Promise<UserAccessTokenInformation[]> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const resourcePath = '/auth/service-accounts'

    httpClient.get<{items: UserAccessTokenInformation[]}>(
      appId,
      authToken,
      resourcePath
    ).then((serviceAccounts) => {
      if (serviceAccounts.items.length === 0) {
        console.log('No service accounts.')
      } else {
        console.log(`Service Accounts for ${serviceAccounts.items[0].userInfo.orgId}:`)
        for (const serviceAccount of serviceAccounts.items) {
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
        }
      }
      resolve (serviceAccounts.items)
    }).catch((error) => {
      console.error(`Failed to list service accounts: ${error.message}`)
      reject(error)
    })
  })
}
