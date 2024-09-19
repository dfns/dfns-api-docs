# API Idempotency

## Transfer / Transaction / Signature Idempotency

When using either one of these Wallet endpoints:

* [Transfer Asset](../api-docs/wallets/transfer-asset-from-wallet.md)
* [Broadcast Transaction](../api-docs/wallets/broadcast-transaction-from-wallet/)
* [Generate Signature](../api-docs/wallets/generate-signature-from-wallet/)

you can optionally specify an `externalId` in the request body. This can be helpful for you if you want to create an ID on your side before the request, and store it on the created entity (Transfer Request, Transaction Request, Signature Request), in the `externalId` field. It can also be helpful if you need to re-submit the same API call, in case a network error (or other) prevented you to get our server's response, even if your request has actually been processed by Dfns.&#x20;

The behaviour is as follow:

* If you re-submit the same request (same url, same body, including same `externalId`), then we will respond with a `200` response containing the entity which was already created when you submitted it for the first time.
* Otherwise, if you re-use the same `externalId` to make a new request to the API (same `externalId`, but different body, or using a different wallet), the request will fail with a `409` ("Conflict") response, containing a body such as:

```json
{
  "error": {
    "id": "...",
    "status": 409,
    "message": "Conflicting transfer with same externalId",
    "details": {
    "duplicate": { "id": "...", "externalId": "..." }
  }
}
```

\
