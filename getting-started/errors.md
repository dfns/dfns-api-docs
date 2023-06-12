# API Errors

## 400 - Bad Request

<details>
<summary>Nonce header is missing or invalid</summary>

All requests need to include an `X-DFNS-NONCE` header. See [Request Headers](./request-headers.md) for more information.

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

## 401 - Unauthorized

<details>
<summary>Caller not authenticated</summary>
All requests to an authenticated endpoint need to include a JWT in the `Authentication` header. See [Request Headers](./request-headers.md) for more information.

```JSON
{
  "error": {
    "message": "Not Authorized."
  }
}
```
</details>

## 403 - Forbidden

## 404 - Not Found

## 500 - Internal Server Error
