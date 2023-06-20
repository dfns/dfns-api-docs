# Dfns Helper HTTP Client

## Http Client Helper <a href="#dfnsHttpClient" id="dfnsHttpClient"></a>
{% tabs %}
{% tab title="dfnsHttpClient.ts" %}
{% code title="dfnsHttpClient.ts" overflow="wrap" lineNumbers="true" %}
```typescript
import { IncomingMessage } from 'http'
import { randomUUID } from 'crypto'
import * as https from 'https'
import {
  ApiKind,
  AuthenticateUserFirstFactorInput,
  AuthenticateUserInitInput,
  AuthenticateUserSecondFactorInput,
  AuthenticationResponse,
  ConfirmRegistrationInput,
  CreateUserCredentialChallengeInput,
  CreateUserCredentialInput,
  CreateUserCredentialOptions,
  CreateUserCredentials,
  CreateUserLoginChallengeResponse,
  CreateUserLoginInput,
  CredentialKind,
  CredentialInfo,
  GetUserCredentials,
  HttpBody,
  InitUserRegistrationInput,
  noCreateUserCredentialsFnProvided,
  noGetUserCredentialsFnProvided,
  noSignFnProvided,
  RegistrationFirstFactor,
  RegistrationSecondFactor,
  RiskKind,
  SignMessage,
  UserActionResponse,
  UserActionSignatureInput,
  UserCreationInfo,
  UserCredentialChallenge,
  UserCredentialOptions,
  UserCredentials,
  UserRegistrationChallenge,
  WebAuthnChallenge,
  WebAuthnChallengeKind,
  WithRequired,
} from './utils'
import { arrayBufferToBase64UrlString, base64url, base64UrlStringToBuffer } from './base64url'

export interface HttpClient {
  get<ResponseType>(url: string, body?: HttpBody, options?: RequestOptions, apiKind?: ApiKind): Promise<ResponseType>

  post<ResponseType>(url: string, body?: HttpBody, options?: RequestOptions, apiKind?: ApiKind): Promise<ResponseType>

  put<ResponseType>(url: string, body?: HttpBody, options?: RequestOptions, apiKind?: ApiKind): Promise<ResponseType>

  delete<ResponseType>(url: string, body?: HttpBody, options?: RequestOptions, apiKind?: ApiKind): Promise<ResponseType>
}

const getEnvVariable = (name: string, defaultValue?: string): string => {
  const value = process.env[name]

  if (typeof value === 'string' && value.length > 2) {
    return value
  } else {
    if (defaultValue === undefined) {
      throw new Error(`DfnsHttpClient::getEnvVariable: Unable to find environment variable ${name}`)
    }
    return defaultValue
  }
}

class HttpClientBase {
  baseUrl = ''
  appSecret = ''
  appId = ''
  appOrigin = ''
  appRelyingPartyId = ''
  authToken = ''
  signChallengeWithKeyFn: SignMessage = noSignFnProvided
  apiSignatureFn: SignMessage
  getUserCredentials: GetUserCredentials
  createUserCredentials: CreateUserCredentials

  async signWebAuthnChallenge(challenge: WebAuthnChallenge): Promise<PublicKeyCredential> {
    let response: Credential | null = null
    if (challenge.kind === WebAuthnChallengeKind.Create) {
      response = await navigator.credentials.create(challenge.creationOptions)
    } else {
      response = await navigator.credentials.get(challenge.requestOptions)
    }
    if (response === null) {
      throw `Failed to get sign WebAuthn challenge.`
    }
    return response as PublicKeyCredential
  }

  constructor(
    appId?: string,
    baseUrl?: string,
    appOrigin?: string,
    appRelyingPartyId?: string,
    appSecret = '',
    apiSignatureFn: SignMessage = noSignFnProvided
  ) {
    this.baseUrl = baseUrl || getEnvVariable('DFNS_BASE_URL')
    this.appSecret = appSecret || getEnvVariable('DFNS_APP_SECRET', '')
    this.appId = appId || getEnvVariable('DFNS_APP_ID')
    this.appOrigin = appOrigin || getEnvVariable('DFNS_APP_ORIGIN')
    this.appRelyingPartyId = appRelyingPartyId || getEnvVariable('DFNS_APP_RPID')
    this.apiSignatureFn = apiSignatureFn
    this.getUserCredentials = noGetUserCredentialsFnProvided
    this.createUserCredentials = noCreateUserCredentialsFnProvided
  }

  async authAsApiKey(
    apiKey: string,
    signatureFn: SignMessage,
    createUserCredentials: CreateUserCredentials = noCreateUserCredentialsFnProvided
  ) {
    this.authToken = apiKey
    this.signChallengeWithKeyFn = signatureFn
    this.createUserCredentials = createUserCredentials
    return true
  }

  async authAsPesron(
    username: string,
    orgId: string,
    getUserCredentials: GetUserCredentials,
    createUserCredentials: CreateUserCredentials
  ): Promise<void> {
    this.getUserCredentials = getUserCredentials
    this.createUserCredentials = createUserCredentials

    await this.login(username, orgId)
  }

  async logoutUser(): Promise<void> {
    try {
      await this.apiRequest<{ message: string }>(RiskKind.AuthRequired, ApiKind.Customer, 'PUT', '/auth/logout', '')
    } catch {
      // do nothing
    }
    this.authToken = ''
  }

  async registerUser(username: string, orgId: string, registrationCode: string): Promise<void> {
    await this.register(username, orgId, registrationCode)
  }

  async completeDelegatedUserRegistration(
    challenge: UserRegistrationChallenge,
    createUserCredentials: CreateUserCredentials
  ): Promise<void> {
    this.createUserCredentials = createUserCredentials
    await this.delegatedRegister(challenge)
  }

  async createNewCredential(
    credName: string,
    credentialKind: CredentialKind
  ): Promise<CredentialInfo> {
    const challengeInput: CreateUserCredentialChallengeInput = {
      kind: credentialKind,
    }

    const createCredentialChallenge: UserCredentialChallenge =
      await this.apiRequest<UserCredentialChallenge>(
        RiskKind.AuthRequired,
        ApiKind.Customer,
        'POST',
        '/auth/credentials/init',
        JSON.stringify(challengeInput),
      )

    const newUserCredential: CreateUserCredentialInput = await this.createCredential(
      credName,
      createCredentialChallenge
    )

    return this.apiRequest<CredentialInfo>(
      RiskKind.UserActionSignatureRequired,
      ApiKind.Customer,
      'POST',
      '/auth/credentials',
      JSON.stringify(newUserCredential)
    )
  }

  private generateNonce(): string {
    return Buffer.from(
      JSON.stringify({
        date: new Date().toISOString(),
        uuid: randomUUID(),
      })
    ).toString('base64url')
  }

  private async login(username: string, orgId: string): Promise<void> {
    const createLoginChallengeRequest: AuthenticateUserInitInput = {
      username: username,
      orgId: orgId,
    }

    const loginChallenge: CreateUserLoginChallengeResponse = await this.request<CreateUserLoginChallengeResponse>(
      ApiKind.Customer,
      'POST',
      '/auth/login/init',
      JSON.stringify(createLoginChallengeRequest)
    )

    const loginCredentials: CreateUserLoginInput = await this.sign(loginChallenge)

    const loginResponse: AuthenticationResponse = await this.request<AuthenticationResponse>(
      ApiKind.Customer,
      'POST',
      '/auth/login',
      JSON.stringify(loginCredentials)
    )

    this.authToken = loginResponse.token
  }

  private async register(username: string, orgId: string, registrationCode: string): Promise<void> {
    const createRegisterUserChallenge: InitUserRegistrationInput = {
      username: username,
      orgId: orgId,
      registrationCode: registrationCode,
    }

    const registerChallenge: UserRegistrationChallenge =
      await this.request<UserRegistrationChallenge>(
        ApiKind.Customer,
        'POST',
        '/auth/registration/init',
        JSON.stringify(createRegisterUserChallenge)
      )

    const registerCredentials: ConfirmRegistrationInput = await this.createRegistrationCredential(registerChallenge)

    await this.request<UserCreationInfo>(
      ApiKind.Customer,
      'POST',
      '/auth/registration',
      JSON.stringify(registerCredentials),
      this.authToken
    )

    this.authToken = ''
  }

  private async delegatedRegister(registerChallenge: UserRegistrationChallenge): Promise<void> {
    const registerCredentials: ConfirmRegistrationInput = await this.createRegistrationCredential(registerChallenge)

    await this.request<UserCreationInfo>(
      ApiKind.Customer,
      'POST',
      '/auth/registration',
      JSON.stringify(registerCredentials),
      this.authToken
    )

    this.authToken = ''
  }

  private async computeUserActionSignature(
    apiKind: ApiKind,
    method: string,
    resource: string,
    body: string
  ): Promise<string> {
    const createUserActionChallenge: UserActionSignatureInput = {
      userActionHttpMethod: method,
      userActionHttpPath: resource,
      userActionPayload: body || '',
      userActionServerKind: apiKind === ApiKind.Staff ? 'Staff' : 'Api',
    }

    const userActionChallenge: CreateUserLoginChallengeResponse = await this.request<CreateUserLoginChallengeResponse>(
      ApiKind.Customer,
      'POST',
      '/auth/action/init',
      JSON.stringify(createUserActionChallenge),
      this.authToken
    )

    const signingCredentials: CreateUserLoginInput = await this.sign(userActionChallenge)

    const userActionResponse: UserActionResponse = await this.request<UserActionResponse>(
      ApiKind.Customer,
      'POST',
      '/auth/action',
      JSON.stringify(signingCredentials),
      this.authToken
    )

    return userActionResponse.userAction
  }

  private async sign(challenge: CreateUserLoginChallengeResponse): Promise<CreateUserLoginInput> {
    const userCredentialOptions: UserCredentialOptions = {
      supportedCredentialKinds: challenge.supportedCredentialKinds,
      externalAuthenticationUrl: challenge.externalAuthenticationUrl,
      humanReadableChallenge: challenge.challenge,
      credentialData: {
        webAuthnClientData: {
          kind: WebAuthnChallengeKind.Get,
          requestOptions: {
            mediation: 'required',
            publicKey: {
              challenge: Buffer.from(challenge.challenge),
              allowCredentials: challenge.allowCredentials.webauthn.map((cred) => ({
                id: base64UrlStringToBuffer(cred.id),
                type: 'public-key',
                transports: [],
              })),
              rpId: this.appRelyingPartyId,
              userVerification: 'required',
              timeout: 60000,
            },
          },
        },
        keyOrPasswordClientData: {
          type: 'key.get',
          challenge: challenge.challenge,
          origin: this.appOrigin,
          crossOrigin: false,
        },
        allowedKeys: challenge.allowCredentials.key.map((cred) => cred.id),
      },
    }

    let credentials: UserCredentials
    if (this.signChallengeWithKeyFn !== noSignFnProvided) {
      const signature = await this.signChallengeWithKeyFn(
        Buffer.from(JSON.stringify(userCredentialOptions.credentialData.keyOrPasswordClientData)),
        userCredentialOptions.humanReadableChallenge,
        userCredentialOptions.credentialData.allowedKeys[0]
      )
      credentials = {
        firstFactor: {
          kind: CredentialKind.Key,
          credentialId: userCredentialOptions.credentialData.allowedKeys[0],
          signature: {
            authenticatorData: new Uint8Array(Buffer.from('')),
            signature: new Uint8Array(signature),
            clientDataJson: new Uint8Array(
              Buffer.from(JSON.stringify(userCredentialOptions.credentialData.keyOrPasswordClientData))
            ),
            userHandle: new Uint8Array(Buffer.from('')),
          },
        },
      }
    } else {
      credentials = await this.getUserCredentials(userCredentialOptions)
    }

    let firstFactor: AuthenticateUserFirstFactorInput
    if (credentials.firstFactor.kind === CredentialKind.Fido2) {
      firstFactor = {
        kind: CredentialKind.Fido2,
        credentialAssertion: {
          authenticatorData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.authenticatorData),
          clientData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.clientDataJson),
          credId: credentials.firstFactor.credentialId,
          signature: arrayBufferToBase64UrlString(credentials.firstFactor.signature.signature),
          userHandle: arrayBufferToBase64UrlString(credentials.firstFactor.signature.userHandle),
        },
      }
    } else if (credentials.firstFactor.kind === CredentialKind.Key) {
      firstFactor = {
        kind: CredentialKind.Key,
        credentialAssertion: {
          clientData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.clientDataJson),
          credId: credentials.firstFactor.credentialId,
          signature: arrayBufferToBase64UrlString(credentials.firstFactor.signature.signature),
        },
      }
    } else {
      throw new Error('Not supported')
    }

    let secondFactor: AuthenticateUserSecondFactorInput | undefined = undefined
    if (credentials.secondFactor) {
      if (credentials.secondFactor.kind === CredentialKind.Fido2) {
        secondFactor = {
          kind: CredentialKind.Fido2,
          credentialAssertion: {
            authenticatorData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.authenticatorData),
            clientData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.clientDataJson),
            credId: credentials.secondFactor.credentialId,
            signature: arrayBufferToBase64UrlString(credentials.secondFactor.signature.signature),
            userHandle: arrayBufferToBase64UrlString(credentials.secondFactor.signature.userHandle),
          },
        }
      } else if (credentials.secondFactor.kind === CredentialKind.Key) {
        secondFactor = {
          kind: CredentialKind.Key,
          credentialAssertion: {
            clientData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.clientDataJson),
            credId: credentials.secondFactor.credentialId,
            signature: arrayBufferToBase64UrlString(credentials.secondFactor.signature.signature),
          },
        }
      } else if (credentials.secondFactor.kind === CredentialKind.Totp) {
        secondFactor = {
          kind: CredentialKind.Totp,
          otpCode: credentials.secondFactor.otpCode,
        }
      }
    }

    return {
      challengeIdentifier: challenge.challengeIdentifier,
      firstFactor: firstFactor,
      secondFactor: secondFactor,
    }
  }

  private async createCredential(
    credName: string,
    challenge: UserCredentialChallenge
  ): Promise<CreateUserCredentialInput> {
    let challengeToSign = ''
    let pubKeyCredParams: PublicKeyCredentialParameters[] = []
    let excludeCredentials: PublicKeyCredentialDescriptor[] = []
    let authenticatorSelection: AuthenticatorSelectionCriteria | undefined
    let supportedCredentialKinds: {
      firstFactor: CredentialKind[]
      secondFactor: CredentialKind[]
    } = {
      firstFactor: [],
      secondFactor: [],
    }
    switch (challenge.kind) {
      case CredentialKind.Fido2: {
        challengeToSign = challenge.challenge
        pubKeyCredParams = challenge.pubKeyCredParams.map((cred) => ({
          alg: cred.alg,
          type: cred.type,
        }))
        excludeCredentials = challenge.excludeCredentials.map((cred) => ({
          id: base64UrlStringToBuffer(cred.id),
          type: cred.type,
          transports: [],
        }))
        authenticatorSelection = challenge.authenticatorSelection
        supportedCredentialKinds.firstFactor.push(CredentialKind.Fido2)
        break
      }
      case CredentialKind.Key: {
        challengeToSign = challenge.challenge
        supportedCredentialKinds.firstFactor.push(CredentialKind.Key)
        break
      }
      case CredentialKind.Totp: {
        supportedCredentialKinds.secondFactor.push(CredentialKind.Totp)
        break
      }
      case CredentialKind.Password: {
        throw new Error('Not supported.')
      }
    }
    const userCredentialOptions: CreateUserCredentialOptions = {
      supportedCredentialKinds: {
        firstFactor: challenge.kind === CredentialKind.Totp ? [] : [
          challenge.kind
        ],
        secondFactor: challenge.kind !== CredentialKind.Totp ? [] : [
          challenge.kind
        ],
      },
      credentialData: {
        keyOrPasswordClientData: {
          type: 'key.create',
          challenge: base64url(challengeToSign),
          origin: this.appOrigin,
          crossOrigin: false,
        },
        webAuthnClientData: {
          kind: WebAuthnChallengeKind.Create,
          creationOptions: {
            publicKey: {
              challenge: Buffer.from(challengeToSign),
              pubKeyCredParams: pubKeyCredParams,
              rp: {
                name: challenge.rp.name,
                id: challenge.rp.id,
              },
              user: {
                displayName: challenge.user.displayName,
                id: Buffer.from(challenge.user.id),
                name: challenge.user.name,
              },
              attestation: 'direct',
              excludeCredentials: excludeCredentials,
              authenticatorSelection: authenticatorSelection,
              timeout: 60000,
            },
          },
        },
      },
    }

    const credentials = await this.createUserCredentials(userCredentialOptions)

    if (credentials.firstFactor) {
      if (
        credentials.firstFactor.kind === CredentialKind.Fido2 ||
        credentials.firstFactor.kind === CredentialKind.Key
      ) {
        return {
          challengeIdentifier: challenge.temporaryAuthenticationToken,
          credentialName: credName,
          credentialKind: credentials.firstFactor.kind,
          credentialInfo: {
            attestationData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.attestationData),
            clientData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.clientData),
            credId: credentials.firstFactor.credentialId,
          }
        }
      }
    } else {
      if (credentials.secondFactor && credentials.secondFactor.kind === CredentialKind.Totp) {
        return {
          challengeIdentifier: challenge.temporaryAuthenticationToken,
          credentialName: '',
          credentialKind: CredentialKind.Totp,
          credentialInfo: {
            otpCode: credentials.secondFactor.otpCode,
          },
        }
      }
    }

    throw new Error('Not supported')
  }

  private async createRegistrationCredential(
    challenge: UserRegistrationChallenge
  ): Promise<ConfirmRegistrationInput> {
    const userCredentialOptions: CreateUserCredentialOptions = {
      supportedCredentialKinds: challenge.supportedCredentialKinds,
      credentialData: {
        keyOrPasswordClientData: {
          type: 'key.create',
          challenge: base64url(challenge.challenge),
          origin: this.appOrigin,
          crossOrigin: false,
        },
        webAuthnClientData: {
          kind: WebAuthnChallengeKind.Create,
          creationOptions: {
            publicKey: {
              challenge: Buffer.from(challenge.challenge),
              pubKeyCredParams: challenge.pubKeyCredParams.map((cred) => ({
                alg: cred.alg,
                type: cred.type,
              } as PublicKeyCredentialParameters)),
              rp: {
                name: challenge.rp.name,
                id: challenge.rp.id,
              },
              user: {
                displayName: challenge.user.displayName,
                id: Buffer.from(challenge.user.id),
                name: challenge.user.name,
              },
              attestation: 'direct',
              excludeCredentials: challenge.excludeCredentials.map((cred) => ({
                id: base64UrlStringToBuffer(cred.id),
                type: cred.type,
                transports: [],
              } as PublicKeyCredentialDescriptor)),
              authenticatorSelection: challenge.authenticatorSelection as AuthenticatorSelectionCriteria,
              timeout: 60000,
            },
          },
        },
      },
    }

    const credentials = await this.createUserCredentials(userCredentialOptions)
    let firstFactor: RegistrationFirstFactor
    if (!credentials.firstFactor) {
      throw new Error('Missing first factor credential.')
    }
    if (credentials.firstFactor.kind === CredentialKind.Fido2) {
      firstFactor = {
        credentialKind: CredentialKind.Fido2,
        credentialInfo: {
          attestationData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.attestationData),
          clientData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.clientData),
          credId: credentials.firstFactor.credentialId,
        },
      }
    } else if (credentials.firstFactor.kind === CredentialKind.Key) {
      firstFactor = {
        credentialKind: CredentialKind.Key,
        credentialInfo: {
          attestationData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.attestationData),
          clientData: arrayBufferToBase64UrlString(credentials.firstFactor.signature.clientData),
          credId: credentials.firstFactor.credentialId,
        },
      }
    } else {
      throw new Error('Not supported')
    }

    let secondFactor: RegistrationSecondFactor | undefined = undefined
    if (credentials.secondFactor) {
      if (credentials.secondFactor.kind === CredentialKind.Fido2) {
        secondFactor = {
          credentialKind: CredentialKind.Fido2,
          credentialInfo: {
            attestationData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.attestationData),
            clientData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.clientData),
            credId: credentials.secondFactor.credentialId,
          },
        }
      } else if (credentials.secondFactor.kind === CredentialKind.Key) {
        secondFactor = {
          credentialKind: CredentialKind.Key,
          credentialInfo: {
            attestationData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.attestationData),
            clientData: arrayBufferToBase64UrlString(credentials.secondFactor.signature.clientData),
            credId: credentials.secondFactor.credentialId,
          },
        }
      } else if (credentials.secondFactor.kind === CredentialKind.Totp) {
        secondFactor = {
          credentialKind: CredentialKind.Totp,
          credentialInfo: {
            otpCode: credentials.secondFactor.otpCode,
          },
        }
      }
    }

    this.authToken = challenge.temporaryAuthenticationToken
    return {
      firstFactorCredential: firstFactor,
      secondFactorCredential: secondFactor,
    }
  }

  private async computeApiSignature(
    request: WithRequired<https.RequestOptions, 'headers'>,
    body: string
  ): Promise<string> {
    const requestPayload = {
      'h-accept': request.headers['Accept'] || '',
      'h-accept-encoding': request.headers['Accept-Encoding'] || '',
      'h-authorization': request.headers['Authorization'] || '',
      'h-connection': request.headers['Connection'] || '',
      'h-content-length': request.headers['Content-Length']?.toString() || '',
      'h-content-type': request.headers['Content-Type'] || '',
      'h-host': request.headers['Host'] || '',
      'h-user-agent': request.headers['User-Agent'] || '',
      'h-x-dfns-appid': request.headers['X-DFNS-APPID'] || '',
      'h-x-dfns-appsecret': request.headers['X-DFNS-APPSECRET'] || '',
      'h-x-dfns-nonce': request.headers['X-DFNS-NONCE'] || '',
      'h-x-dfns-useraction': request.headers['X-DFNS-USERACTION'] || '',
      'r-authority': request.hostname,
      'r-body': base64url(Buffer.from(body)),
      'r-method': request.method?.toLowerCase() || 'get',
      'r-path': request.path,
      'r-scheme': 'https',
    }

    const requestSigningHeader = {
      alg: 'RS256',
      typ: 'JWT',
    }

    const requestToSign = Buffer.from(
      base64url(Buffer.from(JSON.stringify(requestSigningHeader))) +
        '.' +
        base64url(Buffer.from(JSON.stringify(requestPayload)))
    )

    const signature = await this.apiSignatureFn(requestToSign, '', '')
    return base64url(signature)
  }

  async request<ResponseType>(
    apiKind: ApiKind,
    method: string,
    resource: string,
    body: string,
    authToken = '',
    userActionSignature = ''
  ): Promise<ResponseType> {
    const target = (apiKind === ApiKind.Staff ? 'staff-' : '') + this.baseUrl
    const options: WithRequired<https.RequestOptions, 'headers'> = {
      hostname: target,
      port: 443,
      path: resource,
      method: method,
      headers: {
        Accept: 'application/json',
        Authorization: authToken ? 'Bearer ' + authToken : '',
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'application/json',
        Host: target,
        'User-Agent': 'DFNS NodeJs SDK',
        'X-DFNS-APPID': this.appId,
        'X-DFNS-APPSECRET': this.appSecret,
        'X-DFNS-NONCE': this.generateNonce(),
        'X-DFNS-APISIGNATURE': '',
        'X-DFNS-USERACTION': userActionSignature,
      },
    }

    if (this.apiSignatureFn !== noSignFnProvided) {
      options.headers['X-DFNS-APISIGNATURE'] = await this.computeApiSignature(options, body)
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
            let errorMessage: string | undefined
            let errorName: string | undefined
            if (result) {
              try {
                const errorResponse: {
                  error: {
                    message: string
                    errorName: string
                    name: string
                  }
                } = JSON.parse(result)
                errorMessage = errorResponse.error.message
                errorName = errorResponse.error.errorName || errorResponse.error.name
              } catch {
                errorMessage = 'Unknown error'
              }
            }
            if (!errorMessage) {
              errorMessage = response.statusMessage || 'Unknown error'
            }
            if (!errorName) {
              console.log(result)
              errorMessage = 'Unknown error'
            }
            reject({
              statusCode: response.statusCode,
              name: errorName,
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

  async apiRequest<ResponseType>(
    risk: RiskKind,
    apiKind: ApiKind,
    method: string,
    resource: string,
    body: string
  ): Promise<ResponseType> {
    let userActionSignature = ''
    if (risk !== RiskKind.NoAuth) {
      if (!this.authToken) {
        throw 'No authentication token set. Please, call authAsApiKey or authAsPesron before calling other functions.'
      }

      if (risk === RiskKind.UserActionSignatureRequired) {
        userActionSignature = await this.computeUserActionSignature(apiKind, method, resource, body)
      }
    }

    return await this.request<ResponseType>(apiKind, method, resource, body, this.authToken, userActionSignature)
  }
}

const toJson = (obj?: HttpBody): string => {
  return obj ? JSON.stringify(obj) : ''
}

export type RequestOptions = {
  risk?: RiskKind
  authToken?: string
  userActionSignature?: string
}

export class ServerSideHttpClient extends HttpClientBase implements HttpClient {
  async get<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: undefined,
      authToken: '',
      userActionSignature: '',
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.request<ResponseType>(
      apiKind,
      'GET',
      resource,
      toJson(body),
      options?.authToken,
      options?.userActionSignature
    )
  }

  async post<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: undefined,
      authToken: '',
      userActionSignature: '',
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.request<ResponseType>(
      apiKind,
      'POST',
      resource,
      toJson(body),
      options?.authToken,
      options?.userActionSignature
    )
  }

  async put<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: undefined,
      authToken: '',
      userActionSignature: '',
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.request<ResponseType>(
      apiKind,
      'PUT',
      resource,
      toJson(body),
      options?.authToken,
      options?.userActionSignature
    )
  }

  async delete<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: undefined,
      authToken: '',
      userActionSignature: '',
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.request<ResponseType>(
      apiKind,
      'DELETE',
      resource,
      toJson(body),
      options?.authToken,
      options?.userActionSignature
    )
  }
}

export class ClientSideHttpClient extends HttpClientBase implements HttpClient {
  async get<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: RiskKind.AuthRequired,
      authToken: undefined,
      userActionSignature: undefined,
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.apiRequest<ResponseType>(options?.risk || RiskKind.AuthRequired, apiKind, 'GET', resource, toJson(body))
  }

  async post<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: RiskKind.AuthRequired,
      authToken: undefined,
      userActionSignature: undefined,
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.apiRequest<ResponseType>(
      options?.risk || RiskKind.AuthRequired,
      apiKind,
      'POST',
      resource,
      toJson(body)
    )
  }

  async put<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: RiskKind.AuthRequired,
      authToken: undefined,
      userActionSignature: undefined,
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.apiRequest<ResponseType>(options?.risk || RiskKind.AuthRequired, apiKind, 'PUT', resource, toJson(body))
  }

  async delete<ResponseType>(
    resource: string,
    body?: HttpBody,
    options: RequestOptions = {
      risk: RiskKind.AuthRequired,
      authToken: undefined,
      userActionSignature: undefined,
    },
    apiKind = ApiKind.Customer
  ): Promise<ResponseType> {
    return this.apiRequest<ResponseType>(
      options?.risk || RiskKind.AuthRequired,
      apiKind,
      'DELETE',
      resource,
      toJson(body)
    )
  }
}
```
{% endcode %}
{% endtab %}
{% tab title="base64url.ts" %}
{% code title="base64url.ts" overflow="wrap" lineNumbers="true" %}
```typescript
export const base64url = (buf: string | Buffer): string => {
  if (typeof buf === 'string') {
    buf = Buffer.from(buf)
  }

  if (Buffer.isEncoding('base64url')) {
    return buf.toString('base64url')
  }

  return buf.toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_')
}

const padString = (str: string): string => {
  const padLength = 4 - (str.length % 4)
  if (padLength < 4) {
    str += '='.repeat(padLength)
  }
  return str
}

export const base64FromUrl = (base64Url: string): string => {
  if (Buffer.isEncoding('base64url')) {
    return Buffer.from(base64Url, 'base64url').toString('base64')
  }

  return padString(base64Url).replace(/-/g, '+').replace(/_/g, '/')
}

export const arrayBufferToBase64UrlString = (buf: ArrayBuffer | null): string => {
  if (!buf) {
    return ''
  }
  return base64url(Buffer.from(new Uint8Array(buf)))
}

export const base64UrlStringToBuffer = (base64Url: string): Buffer => {
  return Buffer.from(base64FromUrl(base64Url), 'base64')
}
```
{% endcode %}
{% endtab %}
{% tab title="utils.ts" %}
{% code title="utils.ts" overflow="wrap" lineNumbers="true" %}
```typescript
/***********************
 * Types and Errors *
 ***********************/

export type HttpBody = Record<string, unknown>

export enum DfnsAuthKind {
  ClientSide,
  ServerSide,
}

export enum ApiKind {
  Customer,
  Staff,
}

export enum RiskKind {
  NoAuth,
  AuthRequired,
  UserActionSignatureRequired,
}

export enum CredentialFactor {
  first = 'first',
  second = 'second',
  either = 'either',
}

export type CredentialTransports = string

export type AllowCredential = {
  type: PubKeyCredType
  id: string
  transports?: CredentialTransports
}

export type CreateUserLoginChallengeResponse = {
  supportedCredentialKinds: {
    kind: CredentialKind
    factor: CredentialFactor
    requiresSecondFactor: boolean
  }[]
  challenge: string
  challengeIdentifier: string
  externalAuthenticationUrl: string
  allowCredentials: {
    webauthn: AllowCredential[]
    key: AllowCredential[]
  }
}

export type UserCredentialOptions = {
  supportedCredentialKinds: {
    kind: CredentialKind
    factor: CredentialFactor
    requiresSecondFactor: boolean
  }[]
  humanReadableChallenge: string
  externalAuthenticationUrl: string
  credentialData: {
    webAuthnClientData: WebAuthnChallenge
    keyOrPasswordClientData: KeyClientData
    allowedKeys: string[]
  }
}

export enum CredentialKind {
  Fido2 = 'Fido2',
  Key = 'Key',
  Password = 'Password',
  Totp = 'Totp',
  RecoveryKey = 'RecoveryKey',
}

export type UserActionSignatureOptions =
  | AuthenticationOptionsPassword
  | AuthenticationOptionsFido2
  | AuthenticationOptionsKey

export type AuthenticationOptions =
  | AuthenticationOptionsPassword
  | AuthenticationOptionsFido2
  | AuthenticationOptionsKey

export type ChallengeInfo = {
  challenge: string
  challengeIdentifier: string
  authenticationCode?: string
}

export type AuthenticationOptionsPassword = ChallengeInfo & {
  kind: CredentialKind.Password
}

export type AuthenticationOptionsKeyBase = ChallengeInfo & {
  allowCredentials: {
    type: PubKeyCredType
    id: string
    transports: string[]
  }[]
}

export type AuthenticationOptionsFido2 = AuthenticationOptionsKeyBase & {
  kind: CredentialKind.Fido2
}

export type AuthenticationOptionsKey = AuthenticationOptionsKeyBase & {
  kind: CredentialKind.Key
}

export type PubKeyCredType = string

export type SignMessage = (message: Buffer, humanReadableMessage: string, keyId: string) => Promise<Buffer>

export type ConfirmUserActionInput =
  | AuthenticateUserPasswordInput
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput

export declare type AuthenticateUserInput =
  | AuthenticateUserPasswordInput
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput

export type AuthenticateUserPasswordInput = {
  kind: CredentialKind.Password
  password: string
}

export type AuthenticateUserFido2Input = {
  kind: CredentialKind.Fido2
  credentialAssertion: {
    credId: string
    clientData: string
    authenticatorData: string
    signature: string
    userHandle: string
  }
}

export type AuthenticateUserKeyInput = {
  kind: CredentialKind.Key
  credentialAssertion: {
    credId: string
    clientData: string
    signature: string
  }
}

export type AuthenticateUserInitInput = {
  username: string
  orgId: string
}

export type AuthenticationResponse = {
  token: string
}

export type CredentialSignature = {
  authenticatorData: ArrayBuffer
  clientDataJson: ArrayBuffer
  signature: ArrayBuffer
  userHandle: ArrayBuffer
}

export const noSignFnProvided = (message: Buffer) => {
  throw `Signature Function is not set. Unable to sign ${message.toString('ascii')}`
}

export const noGetUserCredentialsFnProvided = () => {
  throw 'Get User Credentials Function is not set.'
}

export const noCreateUserCredentialsFnProvided = () => {
  throw 'Create User Credentials Function is not set.'
}

export enum WebAuthnChallengeKind {
  Create = 'create',
  Get = 'get',
}

export type WebAuthnCreateCredentialChallenge = {
  kind: WebAuthnChallengeKind.Create
  creationOptions: CredentialCreationOptions
}

export type WebAuthnGetCredentialChallenge = {
  kind: WebAuthnChallengeKind.Get
  requestOptions: CredentialRequestOptions
}

export type WebAuthnChallenge = WebAuthnGetCredentialChallenge | WebAuthnCreateCredentialChallenge

export type SignWebAuthnChallenge = (challenge: WebAuthnChallenge) => Promise<PublicKeyCredential>

export type KeyClientData = {
  type: 'key.get' | 'key.create'
  challenge: string
  origin: string
  crossOrigin?: boolean
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type UserActionSignatureInput = {
  userActionHttpMethod: string
  userActionHttpPath: string
  userActionPayload: string
  userActionServerKind?: string
}

export type UserActionResponse = {
  userAction: string
}

export type SupportedCredentialKinds = {
  firstFactor: CredentialKind[]
  secondFactor: CredentialKind[]
}

export type UserCredentials = {
  firstFactor: {
    kind: CredentialKind.Fido2 | CredentialKind.Key | CredentialKind.Password
    credentialId: string
    signature: CredentialSignature
  }
  secondFactor?:
    | {
        kind: CredentialKind.Totp
        credentialId: string
        otpCode: string
      }
    | {
        kind: CredentialKind.Fido2 | CredentialKind.Key
        credentialId: string
        signature: CredentialSignature
      }
}

export type CreateUserCredentialOptions = {
  supportedCredentialKinds: SupportedCredentialKinds
  credentialData: {
    webAuthnClientData: WebAuthnChallenge
    keyOrPasswordClientData: KeyClientData
  }
}

export type NewCredentialSignature = {
  clientData: ArrayBuffer
  attestationData: ArrayBuffer
}

export type NewUserCredentials = {
  firstFactor?: {
    kind: CredentialKind.Fido2 | CredentialKind.Key | CredentialKind.Password
    credentialId: string
    signature: NewCredentialSignature
  }
  secondFactor?:
    | {
        kind: CredentialKind.Totp
        credentialId: string
        otpCode: string
      }
    | {
        kind: CredentialKind.Fido2 | CredentialKind.Key
        credentialId: string
        signature: NewCredentialSignature
      }
}

export type GetUserCredentials = (supportedCredentials: UserCredentialOptions) => Promise<UserCredentials>
export type CreateUserCredentials = (supportedCredentials: CreateUserCredentialOptions) => Promise<NewUserCredentials>

export type AuthenticateUserTotpInput = {
  kind: CredentialKind.Totp
  otpCode: string
}

export type AuthenticateUserFirstFactorInput =
  | AuthenticateUserPasswordInput
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput

export type AuthenticateUserSecondFactorInput =
  | AuthenticateUserTotpInput
  | AuthenticateUserFido2Input
  | AuthenticateUserKeyInput

export type CreateUserLoginInput = {
  challengeIdentifier: string
  firstFactor: AuthenticateUserFirstFactorInput
  secondFactor?: AuthenticateUserSecondFactorInput
}

export type InitUserRegistrationInput = {
  username: string
  registrationCode: string
  orgId: string
}
export type CreateUserRegistrationChallengeResponse = {
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    displayName: string
    name: string
  }
  temporaryAuthenticationToken: string
  challenge: string
  pubKeyCredParams: { type: 'public-key'; alg: number }[]
  excludeCredentials: { type: 'public-key'; id: string; transports: CredentialTransports[] }[]
  authenticatorSelection: {
    authenticatorAttachment?: 'platform' | 'cross-platform'
    residentKey: 'discouraged' | 'preferred' | 'required'
    requireResidentKey: boolean
    userVerification: 'required' | 'preferred' | 'discouraged'
  }
  attestation: Attestation
  otpUrl: string
  supportedCredentialKinds: {
    firstFactor: CredentialKind[]
    secondFactor: CredentialKind[]
  }
}

export enum Attestation {
  None = 'none',
  Indirect = 'indirect',
  Direct = 'direct',
  Enterprise = 'enterprise',
}

export type Fido2Options = UserRegistrationBase & {
  kind: CredentialKind.Fido2
  challenge: string
  pubKeyCredParams: { type: 'public-key'; alg: number }[]
  excludeCredentials: { type: 'public-key'; id: string; transports: CredentialTransports[] }[]
  authenticatorSelection: {
    authenticatorAttachment?: 'platform' | 'cross-platform'
    residentKey: 'discouraged' | 'preferred' | 'required'
    requireResidentKey: boolean
    userVerification: 'required' | 'preferred' | 'discouraged'
  }
  attestation: 'none' | 'indirect' | 'direct' | 'enterprise'
}

export type UserRegistrationBase = {
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    displayName: string
    name: string
  }
  temporaryAuthenticationToken: string
}

export type PublicKeyOptions = UserRegistrationBase & {
  kind: CredentialKind.Key
  challenge: string
  pubKeyCredParams: { type: PubKeyCredType; alg: number }[]
  attestation: Attestation
}

export type PasswordRegistration = UserRegistrationBase & {
  kind: CredentialKind.Password
  otpUrl: string
}

export type CredentialAsssertion = {
  credId: string
  clientData: string
  attestationData: string
}

export type RegistrationConfirmationFido2 = {
  credentialKind: CredentialKind.Fido2
  credentialInfo: CredentialAsssertion
}

export type RegistrationConfirmationPublicKey = {
  credentialKind: CredentialKind.Key
  credentialInfo: CredentialAsssertion
}

export type RegistrationConfirmationPassword = {
  credentialKind: CredentialKind.Password
  credentialInfo: {
    password: string
  }
}

export type RegistrationConfirmationTotp = {
  credentialKind: CredentialKind.Totp
  credentialInfo: {
    otpCode: string
  }
}

export type RegistrationFirstFactor =
  | RegistrationConfirmationPassword
  | RegistrationConfirmationPublicKey
  | RegistrationConfirmationFido2

export type RegistrationSecondFactor =
  | RegistrationConfirmationPublicKey
  | RegistrationConfirmationFido2
  | RegistrationConfirmationTotp

export type ConfirmRegistrationInput = {
  firstFactorCredential: RegistrationFirstFactor
  secondFactorCredential?: RegistrationSecondFactor
}

export type UserCreationInfo = {
  credential: {
    uuid: string
    kind: CredentialKind
    name: string
  }
  user: {
    id: string
    username: string
    orgId: string
  }
}

export type TotpCredential = {
  temporaryAuthenticationToken: string
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    displayName: string
    name: string
  }
  kind: CredentialKind.Totp
  otpUrl: string
}

export type PasswordCredential = {
  temporaryAuthenticationToken: string
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    displayName: string
    name: string
  }
  kind: CredentialKind.Password
}

export type CreateUserCredentialChallengeInput = {
  kind: CredentialKind;
}

export type UserCredentialChallenge = Fido2Options | PublicKeyOptions | TotpCredential | PasswordCredential

export type TotpCredentialInformation = {
  otpCode: string
}

export type CreateUserCredentialTotpInput = {
  challengeIdentifier: string
  credentialName: string
  credentialKind: CredentialKind.Totp
  credentialInfo: TotpCredentialInformation
}

export type PasswordCredentialInformation = {
  password: string
}

export type CreateUserCredentialPasswordInput = {
  credentialKind: CredentialKind.Password
  credentialInfo: PasswordCredentialInformation
  challengeIdentifier: string
  credentialName: string
}

export type CredentialAssertion = {
  credId: string
  clientData: string
  attestationData: string
}

export type CreateUserCredentialPublicKeyInput = {
  challengeIdentifier: string
  credentialName: string
  credentialKind: CredentialKind.Key
  credentialInfo: CredentialAssertion
}

export type CreateUserCredentialFido2Input = {
  credentialKind: CredentialKind.Fido2
  credentialInfo: CredentialAssertion
  challengeIdentifier: string
  credentialName: string
}

export type CreateUserCredentialInput = CreateUserCredentialTotpInput | CreateUserCredentialPasswordInput | CreateUserCredentialPublicKeyInput | CreateUserCredentialFido2Input

export type CredentialInfo = {
  credentialId: string;
  credentialUuid: string
  dateCreated: string
  isActive: boolean
  kind: CredentialKind
  name: string
  publicKey?: string
  relyingPartyId: string
  origin: string
}

export enum AuthenticatorRequirementOptions {
  required = 'required',
  preferred = 'preferred',
  discouraged = 'discouraged',
}

export enum AuthenticatorAttestationOptions {
  none = 'none',
  indirect = 'indirect',
  direct = 'direct',
  enterprise = 'enterprise',
}

export type AuthenticatorSelection = {
  authenticatorAttachment?: string
  residentKey: AuthenticatorRequirementOptions
  requireResidentKey: boolean
  userVerification: AuthenticatorRequirementOptions
}

export type PubKeyCredParams = {
  type: string
  alg: number
}

export type UserRegistrationChallenge = {
  temporaryAuthenticationToken: string
  rp: {
    id: string
    name: string
  }
  user: {
    id: string
    displayName: string
    name: string
  }
  supportedCredentialKinds: SupportedCredentialKinds
  otpUrl: string
  challenge: string
  authenticatorSelection: AuthenticatorSelection
  attestation: AuthenticatorAttestationOptions
  pubKeyCredParams: PubKeyCredParams[]
  excludeCredentials: AllowCredential[]
}
```
{% endcode %}
{% endtab %}
{% endtabs %}
