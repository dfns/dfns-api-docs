import { httpClient } from '../../../utils/dfnsHttpClient'
import { UserInfo } from '@dfns/datamodel/dist/Auth'

export const listUsers = async () : Promise<UserInfo[]> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''

    httpClient.get<{items: UserInfo[]}>(
      appId,
      authToken,
      '/auth/users'
    ).then((users) => {
      if (users.items.length === 0) {
        console.log('No Users')
      } else {
        console.log(`Users for ${users.items[0].orgId}:`)
        for (const user of users.items) {
          console.log(`${user.isActive ? '' : '(DEACTIVATED) '}${user.username}`)
          console.log(`  Kind: ${user.kind}`)
          console.log(`  Registration Status: ${user.isRegistered ? 'Registered':'Pending'}`)
        }
      }
      resolve(users.items)
    }).catch((error) => {
      console.error(`Failed to list users: ${error.message}`)
      reject(error)
    })
  })
}
