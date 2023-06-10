# Create User Credential

`POST /auth/credentials`

Adds a new credential to a user's account.

The type of credentials being registered is determined by the `credentialKind` field. Supported credential kinds are:

* `Fido2`: New credential is a credential registered with `WebAuthn`.
* `Key`: New credential is a private key.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
The permissions apply to the application only.
{% endhint %}

| Name                  | Conditions                        |
| --------------------- | --------------------------------- |
| `Auth:Creds:Create`   | Always Required                   |

## Request body

| | | |
| - | - | - |
| `challengeIdentifier` <mark style="color:red;">\*</mark> | `String` | temporary authentication token returned by the [Create User Credential Challenge](./createUserCredentialChallenge.md) call |
| `credentialName` <mark style="color:red;">\*</mark> | `String` | name the user is assigning to this credential |
| `credentialKind` <mark style="color:red;">\*</mark> | `String` | kind of credential being registered |
| `credentialInfo` <mark style="color:red;">\*</mark> | `Object` | An object containing information about the credential being registered |

### Fido2 Credential

| | | |
| ------ | ----------------- | ----------- |
| `credentialKind` <mark style="color:red;">\*</mark> | `String` | will always be `Fido2` |
| `credentialInfo` <mark style="color:red;">\*</mark> | `Object` | |
| `credentialInfo.credId` <mark style="color:red;">\*</mark> | `String` | base64url encoded id of the credential |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark> | `String` | base64url encoded client data object. The underlying object is the clientData object returned by the user's WebAuthn client |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded attestation data object. The underlying object is the attestationData object returned by the user's WebAuthn client |

Example:
```JSON
{
  "challengeIdentifier":"eyJ0e...fQNA",
  "credentialName": "My Credential",
  "credentialKind":"Fido2",
  "credentialInfo":{
    "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
    "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
    "attestationData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA"
  }
}
```

### Key Credential

| | | |
| ------ | ----------------- | ----------- |
| `credentialKind` <mark style="color:red;">\*</mark> | `String` | will always be `Fido2` |
| `credentialInfo` <mark style="color:red;">\*</mark> | `Object` | |
| `credentialInfo.credId` <mark style="color:red;">\*</mark> | `String` | base64url encoded id of the credential |
| `credentialInfo.clientData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Client Data](../../../advanced-topics/authentication/credentials/user-credentials#client-data-format) JSON string object that was signed with the user's private key |
| `credentialInfo.attestationData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Credential Assertion](../../../advanced-topics/authentication/credentials/user-credentials#credential-assertion) JSON string object with the users signature and public key |

Example:
```JSON
{
  "challengeIdentifier":"eyJ0e...fQNA",
  "credentialName": "My Credential",
  "kind":"Key",
  "credentialInfo":{
    "credId":"6Ca6tAOFTx2odyJBnCoRO-gPvfpfy0EOoOcEaxfxIOk",
    "clientData":"eyJ0eXBlIjoia2V5LmNyZWF0ZSIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
    "attestationData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA"
  }
}
```

## Responses

{% tabs %}
{% tab title="200" %}
**Success: an object describing the new credential**

```JSON
{
  "credentialId": "c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
  "credentialUuid": "cr-34514-nip9c-8bppvgqgj28dbodrc",
  "dateCreated": "2023-01-11T19:05:06.773Z",
  "isActive": true,
  "kind": "Fido2",
  "name": "My Yubikey",
  "publicKey": "SHA256:E2a3ZQEb4...rPqc",
  "relyingPartyId": "dfns.ninja",
  "origin": "https://app.dfns.ninja"
}
```
{% endtab %}

{% tab title="400" %}
**`X-DFNS-NONCE` header is missing or invalid**

```JSON
{
  "error": {
    "message": "request nonce is missing or invalid",
  }
}
```

**`X-DFNS-NONCE` already used**

```JSON
{
  "error": {
    "message": "request nonce has already been used"
  }
}
```
{% endtab %}

{% tab title="401" %}
**Caller not authenticated**

```JSON
{
  "error": {
    "message": "Not Authorized."
  }
}
```
{% endtab %}

{% tab title="403" %}
**Caller does not have access to the resource or endpoint**

```JSON
{
  "error": {
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (/auth/apps)"
  }
}
```
{% endtab %}

{% tab title="500" %}
**An error occurred on the server**

```JSON
{
  "error": {
    "message": "Internal Server Error"
  }
}
```
{% endtab %}
{% endtabs %}

## Examples
