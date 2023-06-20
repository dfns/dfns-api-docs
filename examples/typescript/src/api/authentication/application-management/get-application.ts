import { httpClient } from '../../../utils/dfnsHttpClient'
import { AppInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const getApplication = async () : Promise<AppInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''

    httpClient.get<AppInfoWithPublicKey>(
      appId,
      authToken,
      '/auth/apps/ap-4s6se-e2t7n-89gfg50iaos73pm6'
    ).then((application) => {
      console.log(`Applications for ${application.orgId}:`)
      console.log(`${application.isActive ? '' : '(DEACTIVATED) '}${application.name}`)
      console.log(`  Kind: ${application.kind}`)
      console.log(`  Relying Party ID: ${application.expectedRpId}`)
      console.log(`  Origin: ${application.expectedOrigin}`)
      resolve(application)
    }).catch((error) => {
      console.error(`Failed to get application: ${error.message}`)
      reject(error)
    })
  })
}
