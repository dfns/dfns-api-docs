import { httpClient } from '../../../utils/dfnsHttpClient'
import { AccessTokenInfoWithPublicKey } from '@dfns/datamodel/dist/Auth'

export const listPersonalAccessTokens = async () : Promise<AccessTokenInfoWithPublicKey[]> => {
  return new Promise((resolve, reject) => {
    const authToken = process.env['DFNS_API_KEY'] || ''
    const appId = process.env['DFNS_APP_ID'] || ''

    httpClient.get<{items: AccessTokenInfoWithPublicKey[]}>(
      appId,
      authToken,
      '/auth/pats'
    ).then((tokens) => {
      if (tokens.items.length === 0) {
        console.log('No Access Tokens')
      } else {
        console.log(`Access Tokens for ${tokens.items[0].linkedUserId}:`)
        for (const token of tokens.items) {
          console.log(`${token.isActive ? '' : '(DEACTIVATED) '}${token.name}`)
          console.log(`  Kind: ${token.kind}`)
          console.log(`  Public Key: ${token.publicKey}`)
          console.log(`  Cred ID: ${token.credId}`)
        }
      }
      resolve(tokens.items)
    }).catch((error) => {
      console.error(`Failed to list personal access tokens: ${error.message}`)
      reject(error)
    })
  })
}
