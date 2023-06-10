# Application Management
Applications are used by the Dfns API to identify the customer and organization that is calling the API.

## Application Types
There are two types of applications; `Client-Side Applications` and `Server-Side Applications`.

In most cases, you will want to use a `Client-Side Application`, however, `Server-Side Applications` can be used when you want to ensure your customers need to use your server to call the Dfns API. When using a `Server-Side Application` you will send the `App Secret`, `App ID`, and a sign every request with the applications `private key`.

`Client-Side Applications` (despite the name) can be used in your client application or the your server application. To use a `Client-Side Application` you only need to pass the `App ID`.

## App Permissions
Applications do not have access to the API on their own. However, applications do have their own permissions. These permissions are used to limit what the calling user is allowed to do in the Dfns API.

### Access Check Logic
1. Does the application have access to the requested endpoint?
    * If no, deny access.
1. Does the endpoint require authentication?
    * If no, grant access.
1. Does the user have access to the requested endpoint and resource?
    * If no, deny access.
1. Is the User's JWT for a token (sevice account or personal access token)?
    * If no, grant access.
1. Does the token have access to the requested endpoint?
    * If no, deny access.
    * If yes, grant access.
