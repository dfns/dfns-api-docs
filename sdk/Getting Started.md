# Getting Started with Dfns TypeScript SDK

## Downloading an SDK

You can download Dfns SDK from npm using `@dfns/dfns-sdk` using NPM, Yarn, or package manager of your choice:

```
// Using npm
npm i @dfns/dfns-sdk

// Using Yarn
yarn add @dfns/dfns-sdk
```

## Instantiation

Once Dfns SDK is installed as dependency in your project, you have to instantiate it. 

### Full Authentication and Signature Flow with WebAuthn

```
import { DfnsClient, DfnsFactory, ClientSideParams } from '@dfns/dfns-sdk'

const getUserCredentialsSystemPrompt:GetUserCredentials = DfnsFactory.defaultGetUserCredentialsSystemPrompt(options)
const createUserCredentialsSystemPrompt: CreateUserCredentials = DfnsFactory.defaultCreateUseCredentialsSystemPrompt(options)

const dfnsClient: DfnsClient = await DfnsFactory.clientSide({
  version,
  appId,
  baseUrl,
  origin,
  rpId,
  email,
  orgId,
  getUserCredentialsSystemPrompt,
  createUserCredentialsSystemPrompt,
})

const wallets: Wallet[] = await dfnsClient.wallets.listWallets()

const newlyCreatedWallet: Wallet = await dfnsClient.wallets.createWallet({
  network: BlockchainNetwork.ETH,
  externalId: 'OptionalIdFromCustomersSystem',
  tags: ['optional', 'list', 'of', 'tags', 'or', 'categories']
  name: 'OptionalNameToIdentifyWallet'
})

const walletsAfter: Wallet[] = await dfnsClient.wallets.listWallets()

console.log('Wallets Before:', walletsBefore)
console.log('Wallets After:', walletsAfter)
```

In the example above, we are creating a client side workflow with WebAuthn. Following functions will invoke browser or system behavior to prompt user to provide WebAuthn credentials. Dfns pre-created standard (default) handlers that can be used to invoke those. Consult the source code in case you want to customise them.

```
const getUserCredentialsSystemPrompt:GetUserCredentials = DfnsFactory.defaultGetUserCredentialsSystemPrompt(options)
const createUserCredentialsSystemPrompt: CreateUserCredentials = DfnsFactory.defaultCreateUseCredentialsSystemPrompt(options)
```

Next, we create `DfnsClient`. And passing parameters:
* `version`, which is a constant `2`
* `appId`, which is the ID of the application you want to use. App ID can be found on the Dfns Dashboard under `/settings/apps`.
* `baseUrl`, which is the domain to target. For example, `api.dfns.ninja`.
* `origin`, which is the origin assigned to the application identified by `appId`. For example, `http://localhost:3000`.
* `rpId`, which is the relying party ID assigned to the application identified by `appId`. For example, `localhost`.
* `email`, which is the username of the user.
* `orgId`, which is the org Id of the user.

```
const dfnsClient: DfnsClient = await DfnsFactory.clientSide({
  version: 2,
  appId,
  baseUrl,
  origin,
  rpId,
  email,
  orgId,
  getUserCredentialsSystemPrompt,
  createUserCredentialsSystemPrompt,
})
```

And finally, to give you a taste of what can be done, we are invoking two operations, one to list existing wallets, and then create new one.

```
const walletsBefore: Wallet[] = await dfnsClient.wallets.listWallets()

const newlyCreatedWallet: Wallet = await dfnsClient.wallets.createWallet({
  network: BlockchainNetwork.ETH,
  externalId: 'OptionalIdFromCustomersSystem',
  tags: ['optional', 'list', 'of', 'tags', 'or', 'categories']
  name: 'OptionalNameToIdentifyWallet'
})

const walletsAfter: Wallet[] = await dfnsClient.wallets.listWallets()

console.log('Wallets Before:', walletsBefore)
console.log('Wallets After:', walletsAfter)
```


