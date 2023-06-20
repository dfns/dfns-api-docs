import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { AppInfoWithPublicKey, ApplicationKind, CreateApplicationInput } from '@dfns/datamodel/dist/Auth'

export const createClientSideApplication = async () : Promise<AppInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] ||  ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/apps'
    const body : CreateApplicationInput = {
      name: 'My New Application Name',
      kind: ApplicationKind.ClientSideApplication,
      relyingPartyId: 'localhost',
      origin: 'http://localhost:3000',
    }

    generateUserActionSignature(
      authToken,
      appId,
      'POST',
      resourcePath,
      JSON.stringify(body),
      privateKey,
    ).then((signature) => {
      httpClient.post<AppInfoWithPublicKey>(
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
