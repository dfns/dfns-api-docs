import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { AppInfoWithPublicKey, ApplicationKind, CreateApplicationInput } from '@dfns/datamodel/dist/Auth'

export const createServerSideApplication = async () : Promise<AppInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/apps'
    const body : CreateApplicationInput = {
      name: 'My New Application Name',
      kind: ApplicationKind.ServerSideApplication,
      relyingPartyId: 'localhost',
      origin: 'http://localhost:3000',
      publicKey: '-----BEGIN PUBLIC KEY-----\nMFkwEzYHKoZIzj0CAQYIKoZIzj0DAQcWQgAEZQt0YI1hdsFNmKJesSkAHldyPLIV\nFLI/AhQ5eGasA7jU8tEXOb6nGvxRaTIXrgZ2NPdk78O9zMqz5u9AekH8jA==\n-----END PUBLIC KEY-----',
      daysValid: 730
    }

    generateUserActionSignature(
      authToken,
      appId,
      JSON.stringify(body),
      resourcePath,
      'PUT',
      privateKey,
    ).then((signature) => {
      httpClient.put<AppInfoWithPublicKey>(
        appId,
        authToken,
        resourcePath,
        JSON.stringify(body),
        signature
      ).then((newApplication) => {
        console.log(`New Application in ${newApplication.orgId}:`)
        console.log(`${newApplication.isActive ? '' : '(DEACTIVATED) '}${newApplication.name}`)
        console.log(`  Kind: ${newApplication.kind}`)
        console.log(`  Relying Party ID: ${newApplication.expectedRpId}`)
        console.log(`  Origin: ${newApplication.expectedOrigin}`)
        console.log(`  Access Token (JWT): ${newApplication.accessTokens[0].accessToken}`)
        console.log(`  Public Key Fingerprint: ${newApplication.accessTokens[0].publicKey}`)
        resolve(newApplication)
      }).catch((error) => {
        console.error(`Failed to create application: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
