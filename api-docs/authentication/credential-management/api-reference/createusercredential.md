# Create Credential Code

`POST /auth/credentials/code`

Part of the flow [Create Credential With Code](../../../../advanced-topics/authentication/credentials/#create-credential-with-code-flow).

Creates a one-time-code that can then be used to create a new credential from a place you don't have access to one of your existing credential.

{% hint style="info" %}
* User action signature required. See [User Action Signing](../../user-action-signing/) for more information.
* Request headers required. See [Request Headers](../../../../getting-started/request-headers.md) for more information.
* Authentication required. See [Authentication Headers](../../../../getting-started/request-headers.md#authentication-headers) for more information.
{% endhint %}

## Required Permissions

{% hint style="info" %}
The permissions apply to the Application only.
{% endhint %}

| Name                     | Conditions                           |
| ------------------------ | ------------------------------------ |
| `Auth:Creds:Create`      | Always Required (on the Application) |
| `Auth:Creds:Code:Create` | Always Required (on the Application) |

## Request body

<table><thead><tr><th width="178">Property</th><th width="159.33333333333331">Type</th><th></th></tr></thead><tbody><tr><td><code>expiration</code> <mark style="color:red;">*</mark></td><td>ISO-8601 Date (String), or Unix epoch (Integer)</td><td>Expiration date (as a <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601</a> date string, or a <a href="https://en.wikipedia.org/wiki/Unix_time">Unix epoch</a> ) of the code, max is 1 minute in the future. So the code can never be valid for more than 1 minute, which should be enough time for a user to copay/paste the code from one place to the other.</td></tr></tbody></table>

```json
{
  "expiration":"2024-04-18T10:00:31.478Z",
}
```

## Response body

{% tabs %}
{% tab title="200" %}
**Success**

```json
{
  "code":"A7U-KY6-9PT",
  "expiration":"2024-04-18T10:00:31.478Z",
}
```
{% endtab %}
{% endtabs %}
