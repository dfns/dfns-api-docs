import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { UserInfo } from '@dfns/datamodel/dist/Auth'

export const activateUser = async () : Promise<UserInfo> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv/activate'

    generateUserActionSignature(
      authToken,
      appId,
      '',
      resourcePath,
      'PUT',
      privateKey,
    ).then((signature) => {
      httpClient.put<UserInfo>(
        authToken,
        appId,
        resourcePath,
        signature
      ).then((user) => {
        console.log(`Users for ${user.orgId}:`)
        console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
        console.log(`  Kind: ${user.kind}`)
        console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
        resolve(user)
      }).catch((error) => {
        console.error(`Failed to activate user: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
