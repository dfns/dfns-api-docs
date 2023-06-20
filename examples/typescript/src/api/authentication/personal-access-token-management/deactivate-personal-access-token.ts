import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { AccessTokenInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const deactivatePersonalAccessToken = async () : Promise<AccessTokenInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/pats/to-7vwr2-h2f29-9m6a0fmkk7rr2hj7/deactivate'

    generateUserActionSignature(
      authToken,
      appId,
      '',
      resourcePath,
      'PUT',
      privateKey,
    ).then((signature) => {
      httpClient.put<AccessTokenInfoWithPublicKey>(
        authToken,
        appId,
        resourcePath,
        signature
      ).then((token) => {
        console.log(`Access Tokens for ${token.linkedUserId}:`)
        console.log(`${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
        console.log(`  Kind: ${token.kind}`)
        console.log(`  Public Key: ${token.publicKey}`)
        console.log(`  Cred ID: ${token.credId}`)
        resolve(token)
      }).catch((error) => {
        console.error(`Failed to deactivate personal access token: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
