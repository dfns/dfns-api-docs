import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { AppInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const activateApplication = async () : Promise<AppInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/apps/ap-4s6se-e2t7n-89gfg50iaos73pm6/activate'

    generateUserActionSignature(
      authToken,
      appId,
      'PUT',
      resourcePath,
      '',
      privateKey,
    ).then((signature) => {
      httpClient.put<AppInfoWithPublicKey>(
        appId,
        authToken,
        resourcePath,
        '',
        signature
      ).then((application) => {
        console.log(`Application in ${application.orgId}:`)
        console.log(`${application.isActive ? '' : '(DEACTIVATED) '}${application.name}`)
        console.log(`  Kind: ${application.kind}`)
        console.log(`  Relying Party ID: ${application.expectedRpId}`)
        console.log(`  Origin: ${application.expectedOrigin}`)

        resolve(application)
      }).catch((error) => {
        console.error(`Failed to activate application: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
