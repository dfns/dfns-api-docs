# API Errors

## Common Errors

### 400 - Bad Request

<details>

<summary>Nonce header is missing or invalid</summary>

All requests need to include an `X-DFNS-NONCE` header. See [Request Headers](request-headers.md) for more information.

```JSON
{
  "error": {
    "message": "request nonce is missing or invalid",
  }
}
```

</details>

<details>

<summary>Nonce already used</summary>

The nonce specified in `X-DFNS-NONCE` was already used. The nonce should be uniquely generated for every request.

```JSON
{
  "error": {
    "message": "request nonce has already been used"
  }
}
```

</details>

<details>

<summary>User Action Signature already used</summary>

The User Action Signature specified in `X-DFNS-USERACTION` was already used. User action signatures can only be used once.

```JSON
{
  "error": {
    "message": "user action has already been used"
  }
}
```

</details>

### 401 - Unauthorized

<details>

<summary>Caller not authenticated</summary>

All requests to an authenticated endpoint need to include a JWT in the `Authentication` header. See [Request Headers](request-headers.md) for more information.

```JSON
{
  "error": {
    "message": "Not Authorized."
  }
}
```

</details>

### 403 - Forbidden

<details>

<summary>Caller not authenticated</summary>

**Caller does not have access to the resource or endpoint**

```JSON
{
  "error": {
    "message": "CustomerEmployee us-24vwa-92s33-8tvqi1dg0a95megt is not authorized to perform operation (Auth:Apps:Update)"
  }
}
```

</details>

<details>

<summary>User Action Signature missing or invalid</summary>

Mutating requests need to include a valid User Action Signature in the `X-DFNS-USERACTION` header. See [User Action Signing](../advanced-topics/authentication/request-signing.md) for more information.

```JSON
{
  "error": {
    "message": "user action signature is missing or invalid"
  }
}
```

</details>

### 500 - Internal Server Error

<details>

<summary>Internal Server Error</summary>

This is an unexpected error. Please try your request again. If the call continues to fail, please contact [support](mailto:support@dfns.co).

```JSON
{
  "error": {
    "message": "Internal Server Error"
  }
}
```

</details>

## Application Management Errors

Errors specific to the [Application Management](../api-docs/authentication/application-management/) endpoints.

### 400 - Bad Request

<details>

<summary>Application cannot modify its own state</summary>

The application being deactivated needs to be different then the application specified in `X-DFNS-APPID`.

```JSON
{
  "error": {
    "message": "application cannot modify its own state"
  }
}
```

</details>

### 404 - Not Found

<details>

<summary>Application not found</summary>

The specified application does not exist in the database.

```JSON
{
  "error": {
    "message": "application not found"
  }
}
```

</details>

## Credential Management Errors

Errors specific to the [Credential Management](../api-docs/authentication/credential-management/) endpoints.

## Delegated Authentication Errors

Errors specific to the [Delegated Authentication](../api-docs/authentication/delegated-auth/) endpoints.

## User Login Errors

Errors specific to the [User Login](../api-docs/authentication/login/) endpoints.

## Personal Access Token Management Errors

Errors specific to the [Personal Access Token Management](../api-docs/authentication/personal-access-token-management/) endpoints.

## User Registration Errors

Errors specific to the [User Registration](../api-docs/authentication/registration/) endpoints.

### 400 - Bad Request

<details>

<summary>Registration code expired</summary>

The registration code being used is expired.

```JSON
{
  "error": {
    "message": "Registration code expired"
  }
}
```

</details>

### 401 - Unauthorized

<details>

<summary>User already exists</summary>

The username used already exists in the system.

```JSON
{
  "error": {
    "message": "User already exists."
  }
}
```

</details>

## Service Account Management Errors

Errors specific to the [Service Account Management](../api-docs/authentication/service-account-management/) endpoints.

## User Action Signing Errors

Errors specific to the [User Action Signing](../api-docs/authentication/user-action-signing/) endpoints.

## User Management Errors

Errors specific to the [User Management](../api-docs/authentication/user-management/) endpoints.

## User Recovery Errors

Errors specific to the [User Recovery](../api-docs/authentication/user-recovery/) endpoints.
