# Access Token Credentials

When registering a new access token (Service Account or Personal Access Token), you need to link a public private key pair to your token. This is done by passing a public key with the API call.

See [Generate a Key Pair](generate-a-key-pair.md) for information about how to generate a key pair.

## Public Key Format

Public Keys need to be formated with PEM encoding.

### PEM Encoding

PEM encoding base64 encodes the public key data and places it between a header and footer. The header and footer can be slightly different depending on the crypto library you use, but it will always have the same basic format:

```
-----BEGIN <OPTIONAL_VALUE> PUBLIC KEY-----
-----END <OPTIONAL_VALUE> PUBLIC KEY-----
```

For example

```
-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEYsHwe62PxDXIXjvSd0/ZdndtvenLqZ6u62pp2/SejCs4NuJ5fOCsUDzqFXxBNJpA9CkFnqASaKP9n4N3XgQ1mQ==
-----END PUBLIC KEY-----
```

### Converting from raw to PEM

Some cyrpto libraries do not support PEM format. If your library supports exporting to SPKI you can export the key into SPKI format, base64 encode that value, and place it inside the header and footer.

```javascript
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  return btoa(String.fromCharCode(...bytes))
}

async function exportPublicKeyInPemFormat(key) {
  const exported = await crypto.subtle.exportKey('spki', key)
  const pem = `-----BEGIN PUBLIC KEY-----\n${arrayBufferToBase64(exported)}\n-----END PUBLIC KEY-----`
  return pem
}
```
