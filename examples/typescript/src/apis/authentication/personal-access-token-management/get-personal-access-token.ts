import { httpClient } from '../../../utils/dfnsHttpClient'
import { AccessTokenInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const getPersonalAccessToken = async () : Promise<AccessTokenInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''

    httpClient.get<AccessTokenInfoWithPublicKey>(
      appId,
      authToken,
      '/auth/pats/to-7vwr2-h2f29-9m6a0fmkk7rr2hj7'
    ).then((token) => {
      console.log(`Access Tokens for ${token.linkedUserId}:`)
      console.log(`${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
      console.log(`  Kind: ${token.kind}`)
      console.log(`  Public Key: ${token.publicKey}`)
      console.log(`  Cred ID: ${token.credId}`)
      resolve(token)
    }).catch((error) => {
      console.error(`Failed to get personal access token: ${error.message}`)
      reject(error)
    })
  })
}
