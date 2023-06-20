import { httpClient } from '../../../utils/dfnsHttpClient'
import { generateUserActionSignature } from '../../../utils/generateUserActionSignature'
import { AccessTokenInfoWithPublicKey, CreateAccessTokenInput } from '@dfns/datamodel/dist/Auth'

export const createPersonalAccessToken = async () : Promise<AccessTokenInfoWithPublicKey> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''
    const privateKey = (process.env['DFNS_SIGN_KEY'] || '').replace(/\\n/g, '\n')
    const resourcePath = '/auth/pats'
    const body : CreateAccessTokenInput = {
      name: 'My New Personal Access Token',
      publicKey: '-----BEGIN PUBLIC KEY-----\nMFkwEzYHKoZIzj0CAQYIKoZIzj0DAQcWQgAEZQt0YI1hdsFNmKJesSkAHldyPLIV\nFLI/AhQ5eGasA7jU8tEXOb6nGvxRaTIXrgZ2NPdk78O9zMqz5u9AekH8jA==\n-----END PUBLIC KEY-----',
      daysValid: 730
    }

    generateUserActionSignature(
      authToken,
      appId,
      JSON.stringify(body),
      resourcePath,
      'POST',
      privateKey,
    ).then((signature) => {
      httpClient.post<AccessTokenInfoWithPublicKey>(
        appId,
        authToken,
        resourcePath,
        signature
      ).then((newToken) => {
        console.log(`Access Tokens for ${newToken.linkedUserId}:`)
        console.log(`${newToken.isActive ? '' : '(DEACTIVATED) '}${newToken.name}`)
        console.log(`  Kind: ${newToken.kind}`)
        console.log(`  Public Key: ${newToken.publicKey}`)
        console.log(`  Cred ID: ${newToken.credId}`)
        resolve(newToken)
      }).catch((error) => {
        console.error(`Failed to create personal access token: ${error.message}`)
        reject(error)
      })
    }).catch((error) => {
      console.error(`Failed to authorize request: ${error.message}`)
      reject(error)
    })
  })
}
