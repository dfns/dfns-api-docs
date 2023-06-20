# User Action Signing
All API calls that make a change within the Dfns system need to be signed by a user. This ensures that only authorized users are able to make changes within the system, and the signature can be used to audit changes at a later time.

Signing is a three step process:
1. Get a challenge from the Dfns system.
1. Sign the challenge, and return to the Dfns system.
1. Get back a User Action Signature, and include it with your original API call.

## Signing examples using an API key

### Typescript
The [full example](/advanced-topics/request-signing/examples/key-signing-typescript.md) includes the code for the helper functions.
```typescript
const signChallenge = async (challenge: UserActionSignatureChallenge) : Promise<SignedChallenge> => {

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
```

