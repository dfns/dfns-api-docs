import { IncomingMessage } from 'http'
import * as https from 'https'
import crypto from 'crypto'

type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

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
  appId: string,
  authToken: string,
  resource: string,
  body: string,
  userActionSignature = ''
): Promise<ResponseType> => {
  // Replace this with api.dfns.io, if targeting the production environment.
  const target = 'api.dfns.ninja'

  const options: WithRequired<https.RequestOptions, 'headers'> = {
    hostname: target,
    port: 443,
    path: resource,
    method: method,
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + authToken,
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

export class HttpClient {
  async get<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('GET', appId, authToken, resource, '', userActionSignature)
  }
  async post<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    body: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('POST', appId, authToken, resource, body, userActionSignature)
  }
  async put<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    body: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('PUT', appId, authToken, resource, body, userActionSignature)
  }
  async delete<ResponseType>(
    appId: string,
    authToken: string,
    resource: string,
    userActionSignature = '',
  ) : Promise<ResponseType> {
    return makeDfnsHttpRequest('DELETE', appId, authToken, resource, '', userActionSignature)
  }
}

export const httpClient = new HttpClient()
