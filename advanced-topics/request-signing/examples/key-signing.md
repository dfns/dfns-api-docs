# Key Based Signing Example  (Typescript)

{% code title="create-asset-account.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { IncomingMessage } from 'http'
import * as https from 'https'
import crypto from 'crypto'

// ================================
// Types
// ================================

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

type AssetAccount = {
  tags?: string[]
  externalId?: string
  orgId: string
  id: string
  status: string
  address?: string
  publicKey?: string
  publicKeyId?: string
  assetSymbol: string
  name: string
  dateCreated: string
  dateUpdate: string
  authorizations?: {
    kind: string
    entityId: string
    permission: string
  }[]
}
type ClientData = {
  type: 'key.get' | 'webauthn.get'
  challenge: string
  origin: string
  crossOrigin: boolean
}

type UserActionSignatureChallenge = {
  supportedCredentialKinds: {
    kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey"
    factor: "first" | "second" | "either"
    requiresSecondFactor: boolean
  }[]
  challenge: string
  challengeIdentifier: string
  externalAuthenticationUrl: string
  allowCredentials: {
    webauthn: {
      type: 'public-key'
      id: string
      transports?: string
    }[]
    key: {
      type: 'public-key'
      id: string
      transports?: string
    }[]
  }
}
type SignedChallenge = {
  clientData: string
  credId: string
  signature: string
}
export type SignChallenge = (supportedCredentials: UserActionSignatureChallenge) => Promise<SignedChallenge>

// ================================
// Helper Functions
// ================================

// The nonce (required for all requests) helps to ensure a request can only be run once.
const generateNonce = (): string => {
  return Buffer.from(
    JSON.stringify({
      date: new Date().toISOString(),
      uuid: crypto.randomUUID(),
    })
  ).toString('base64url')
}

// HTTP wrapper that adds the required headers.
const makeDfnsHttpRequest = async <ResponseType>(
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  resource: string,
  body: string,
  userActionSignature = ''
): Promise<ResponseType> => {
  // This is the ID of the Application created on the dashboard.
  const appId = 'REPLACE_ME'

  // Replace this with api.dfns.io, if targeting the production environment.
  const target = 'api.dfns.ninja'

  // The JWT you saved when creating the Auth V2 API Key
  const apiKeyJwt = 'REPLACE_ME'

  const options: WithRequired<https.RequestOptions, 'headers'> = {
    hostname: target,
    port: 443,
    path: resource,
    method: method,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + apiKeyJwt,
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'application/json',
      Host: target,
      'User-Agent': 'My test Application',
      'X-DFNS-APPID': appId,
      'X-DFNS-NONCE': generateNonce(),
      'X-DFNS-USERACTION': userActionSignature,
    },
  }

  return new Promise((resolve, reject) => {
    let result = ''

    const handleRequest = (response: IncomingMessage) => {
      const { statusCode } = response

      response.setEncoding('utf-8')
      response.on('data', (chunk) => {
        result += chunk
      })

      const isStatus2xx = statusCode && statusCode >= 200 && statusCode < 300

      response.on('end', () => {
        if (!isStatus2xx) {
          let errorMessage = response.statusMessage
          if (!errorMessage && result) {
            try {
              errorMessage = JSON.parse(result).error.message
            } catch {
              errorMessage = 'Unknown error'
            }
          }
          reject({
            statusCode: response.statusCode,
            message: errorMessage,
          })
        } else {
          try {
            if (result === '') {
              resolve({} as ResponseType)
            } else {
              resolve(JSON.parse(result) as ResponseType)
            }
          } catch (error) {
            reject(error)
          }
        }
      })
    }

    const request = https.request(options, handleRequest)

    request.on('error', (e) => {
      reject(e)
    })

    if (body !== '') {
      request.write(body)
    }

    request.end()
  })
}

// API Wrapper that handles the calling the user action signature endpoints when needed.
const makeDfnsApiRequest = async <ResponseType>(
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  apiPath: string,
  requestPayload: any,
  signChallengeCallback?: SignChallenge
) : Promise<ResponseType> => {
  let userActionSignature : string | undefined

  if (signChallengeCallback) {
    const createUserActionSignaturePayload : {
      userActionPayload: string
      userActionHttpMethod: string
      userActionHttpPath: string
    } = {
      userActionPayload: JSON.stringify(requestPayload),
      userActionHttpMethod: method,
      userActionHttpPath: apiPath,
    }
  
    // First call gets the challenge from the Dfns system.
    const challenge = await makeDfnsHttpRequest<UserActionSignatureChallenge>(
      'POST',
      '/auth/action/init',
      JSON.stringify(createUserActionSignaturePayload)
    )

    // The user will sign this challenge.
    const credentialAssertion = await signChallengeCallback(challenge)
  
    const userActionPayload : {
      challengeIdentifier: string
      firstFactor: {
        kind: "Fido2" | "Key" | "Password" | "Totp" | "RecoveryKey"
        credentialAssertion: SignedChallenge
      }
    } = {
      challengeIdentifier: challenge.challengeIdentifier,
      firstFactor: {
        kind: 'Key',
        credentialAssertion: credentialAssertion,
      }
    }
  
    // Then the user exchanges the signed challenge for the user action signature.
    userActionSignature = (await makeDfnsHttpRequest<{
      userAction: string
    }>(
      'POST',
      '/auth/action',
      JSON.stringify(userActionPayload)
    )).userAction
  }

  // Finally, call to the desired API, passing the user action signature as proof that the request was authorized by the user.
  return await makeDfnsHttpRequest<ResponseType>(
    method,
    apiPath,
    JSON.stringify(requestPayload),
    userActionSignature
  )
}

// ================================
// Create Asset Account
// ================================

export const createAssetAccount = async () => {
  // The private key in PEM format that backs the API key (this should match the public key given when creating the API Key)
  const apiKeyPrivateKey = 'REPLACE_ME'

  // This is the payload for the request you are trying to make
  const createAssetAccountRequestPayload : {
    assetSymbol: string
    groupSize?: number
    groupThreshold?: number
    publicKey?: string
    externalId?: string
    tags?: string[]
    name?: string
  } = {
    assetSymbol: 'ETH',
  }

  return await makeDfnsApiRequest<AssetAccount>(
    'POST',
    '/assets/asset-account',
    createAssetAccountRequestPayload,
    async (challenge: UserActionSignatureChallenge) => {

      // The data being signed includes information that is important for validating the request originated from a valid location.
      const clientData: Buffer = Buffer.from(
        JSON.stringify({
          type: 'key.get',
          challenge: challenge.challenge,
          origin: origin,
          crossOrigin: false,
        } as ClientData)
      )

      // Signing can be done locally or by calling an external signer (like AWS KMS).
      const signature = crypto.sign(
        undefined,
        clientData,
        apiKeyPrivateKey
      )

      // Pass back the signature, and the data that was signed so both can be parsed and validated properly.
      return {
        clientData: clientData.toString('base64url'),
        credId: challenge.allowCredentials.key[0].id,
        signature: signature.toString('base64url'),
      }
    }
  )
}
```
{% endcode %}
