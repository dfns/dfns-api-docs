import { httpClient } from '../../../utils/dfnsHttpClient'
import { AppInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const listApplications = async () : Promise<AppInfoWithPublicKey[]> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    httpClient.get<{items: AppInfoWithPublicKey[]}>(
      appId,
      authToken,
      '/auth/apps'
    ).then((applications) => {
      console.log(`Applications for ${applications.items[0].orgId}:`)
      for (const application of applications.items) {
        console.log(`${application.isActive ? '' : '(DEACTIVATED) '}${application.name}`)
        console.log(`  Kind: ${application.kind}`)
        console.log(`  Relying Party ID: ${application.expectedRpId}`)
        console.log(`  Origin: ${application.expectedOrigin}`)
      }
      resolve(applications.items)
    }).catch((error) => {
      console.error(`Failed to list applications: ${error.message}`)
      reject(error)
    })
  })
}
