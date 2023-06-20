import { httpClient } from '../../../utils/dfnsHttpClient'
import { UserInfo } from '@dfns/datamodel/dist/Auth'

export const getUser = async () : Promise<UserInfo> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const resourcePath = '/auth/users/us-2mhcm-9r90a-92ran47bjpl60hmv'

    httpClient.get<UserInfo>(
      authToken,
      appId,
      resourcePath
    ).then((user) => {
      console.log(`Users for ${user.orgId}:`)
      console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
      console.log(`  Kind: ${user.kind}`)
      console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
      resolve(user)
    }).catch((error) => {
      console.error(`Failed to get user: ${error.message}`)
      reject(error)
    })
  })
}
