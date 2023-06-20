import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { CreateAccessTokenInput, UserAccessTokenInformation } from '@dfns/datamodel/dist/Auth'

export const createServiceAccount = async () : Promise<UserAccessTokenInformation> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/pats'
    const body : CreateAccessTokenInput = {
      name: 'My new service account',
      publicKey: '-----BEGIN PUBLIC KEY-----\nMFkwEzYHKoZIzj0CAQYIKoZIzj0DAQcWQgAEZQt0YI1hdsFNmKJesSkAHldyPLIV\nFLI/AhQ5eGasA7jU8tEXOb6nGvxRaTIXrgZ2NPdk78O9zMqz5u9AekH8jA==\n-----END PUBLIC KEY-----',
      daysValid: 730
    }

    generateUserActionSignature(
      authToken,
      appId,
      JSON.stringify(body),
      resourcePath,
      'POST',
      privateKey,
    ).then((signature) => {
      httpClient.post<UserAccessTokenInformation>(
        appId,
        authToken,
        resourcePath,
        signature
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
        console.error(`Failed to create service account: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
