# Complete User Login

`POST /auth/login`

Completes the login process and provides the authenticated user with their authentication token.

The type of credentials used to login is determined by the `kind` field in the nested objects (`firstFactor` and `secondFactor`). Supported credential kinds are:

* `Fido2`: Login challenge is signed by a user's signing device using `WebAuthn`.
* `Key`: Login challenge is signed by a user's private key.

{% hint style="info" %}
* Request headers required. See [Request Headers](../../../getting-started/request-headers.md) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
Since this endpoint is not authentication, the permissions apply to the application only.
{% endhint %}

| Name              | Conditions      |
| ----------------- | --------------- |
| `Auth:Users:Read` | Always Required |

## Request body

|                                                          |          |                                                                                            |
| -------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| `challengeIdentifier` <mark style="color:red;">\*</mark> | `String` | temporary authentication token returned by the [Create User Login Challenge](initlogin.md) |
| `firstFactor` <mark style="color:red;">\*</mark>         | `Object` | first factor credential used to sign the challenge                                         |
| `secondFactor`                                           | `Object` | `Optional` second factor credential used to authenticate a user                            |

### Fido2 Credential

|                                                                            |          |                                                                                    |
| -------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| `kind` <mark style="color:red;">\*</mark>                                  | `String` | will always be `Fido2`                                                             |
| `credentialAssertion` <mark style="color:red;">\*</mark>                   | `Object` |                                                                                    |
| `credentialAssertion.credId` <mark style="color:red;">\*</mark>            | `String` | base64url encoded id of the credential returned by the user's WebAuthn client      |
| `credentialAssertion.clientData` <mark style="color:red;">\*</mark>        | `String` | base64url encoded client data object returned by the user's WebAuthn client        |
| `credentialAssertion.authenticatorData` <mark style="color:red;">\*</mark> | `String` | base64url encoded authenticator data object returned by the user's WebAuthn client |
| `credentialAssertion.signature` <mark style="color:red;">\*</mark>         | `String` | base64url encoded signature returned by the user's WebAuthn client                 |
| `credentialAssertion.userHandle` <mark style="color:red;">\*</mark>        | `String` | base64url encoded userHandle returned by the user's WebAuthn client                |

Example:

```JSON
{
  "challengeIdentifier":"eyJ0e...fQNA",
  "firstFactor":{
    "kind":"Fido2",
    "credentialAssertion":{
      "credId":"c1QEdgnPLJargwzy3cbYKny4Q18u0hr97unXsF3DiE8",
      "clientData":"eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiTVdNME1tWTVZVFEwTURSaU56ZGhOVEZoTnpZNU9EUXdOV0k1WlRRNFkyUmhPRFppTkRrM1pUWXpPVEU1T0dZeU1EY3haakJqWXprNE1tUTVZelkxTUEiLCJvcmlnaW4iOiJodHRwczovL2FwcC5kZm5zLm5pbmphIiwiY3Jvc3NPcmlnaW4iOmZhbHNlfQ",
      "authenticatorData":"WT-zFZUBbJHfBkmhzTlPf49LTn7asLeTQKhm_riCvFgFAAAAAA",
      "signature":"MEUCIQDJ8G9J1NTjdoKx0yloYw45bpn6fJhcqCoUGiZuOU1IAQIgAtPt7S8FHFYW9OMHh3S5FVAxk-lhli-2lX22bBNSDog",
      "userHandle":"dXMtMmJhMGgtbHZwMnEtOHYxODYwcGNqMWJoNWlyaQ"
    }
  }
}
```

### Key Credential

|                                                                     |          |                                                                                                                                                                            |
| ------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind` <mark style="color:red;">\*</mark>                           | `String` | will always be `Key`                                                                                                                                                       |
| `credentialAssertion` <mark style="color:red;">\*</mark>            | `Object` |                                                                                                                                                                            |
| `credentialAssertion.credId` <mark style="color:red;">\*</mark>     | `String` | base64url encoded id of the credential                                                                                                                                     |
| `credentialAssertion.clientData` <mark style="color:red;">\*</mark> | `String` | base64url encoded [Client Data](../../../advanced-topics/authentication/request-signing.md#key-client-data) JSON string object that was signed with the user's private key |
| `credentialAssertion.signature` <mark style="color:red;">\*</mark>  | `String` | base64url encoded signature generated by signing the clientData JSON string object                                                                                         |

Example:

```JSON
{
  "challengeIdentifier":"eyJ0e...fQNA",
  "firstFactor":{
    "kind":"Key",
    "credentialAssertion":{
      "credId":"6Ca6tAOFTx2odyJBnCoRO-gPvfpfy0EOoOcEaxfxIOk",
      "clientData":"eyJ0eXBlIjoia2V5LmdldCIsImNoYWxsZW5nZSI6Ik1XTTBNbVk1WVRRME1EUmlOemRoTlRGaE56WTVPRFF3TldJNVpUUTRZMlJoT0RaaU5EazNaVFl6T1RFNU9HWXlNRGN4WmpCall6azRNbVE1WXpZMU1BIiwib3JpZ2luIjoiaHR0cHM6Ly9hcHAuZGZucy5uaW5qYSIsImNyb3NzT3JpZ2luIjpmYWxzZX0",
      "signature":"owt8WtpJT_6eEuw4UwdIX2HMMwENgk0SrI-RoCMPhx_9YMVpNKJGmJfHUusf_R1Mor9a_hinQVuXj4_XRdeJFSY2AySXSUk",
    }
  }
}
```

## Responses

{% hint style="info" %}
* See [Common Errors](../../../getting-started/errors.md#common-errors) for common errors.
* See [User Login Errors](../../../getting-started/errors.md#user-login-errors) for user login errors.
{% endhint %}

{% tabs %}
{% tab title="200" %}
**Success** - a user authentication token

```JSON
{
  "token": "eyJ0eX...bzrQakA"
}
```
{% endtab %}
{% endtabs %}

## Examples
