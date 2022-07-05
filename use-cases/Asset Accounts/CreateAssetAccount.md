Create Asset Account
===

```http
POST /assets/asset-accounts
```

To create an asset account, send a `POST` request to the `/assets/asset-accounts` endpoint, including an asset account identifier in the request body:

```json
{
    "assetSymbol":  "ETH"
}
```

If successful, the response confirms that **a new asset account is being created**, with the **correct type** and a **new asset ID**:

```json
{ 
    "status": "Creating",
    "assetSymbol": "ETH",
    "id": aa-five-blue-caab30165c"
}
```

When the account is in the process of being created, its `status` is `Creating`. Once created, the account's `status` changes from `Creating` to `Enabled`. To confirm that this has occurred, you can use the [`GetAccountById` method](GetAccountById.md).

