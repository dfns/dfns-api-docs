# API Endpoint Template

`POST /assets/asset-accounts/{accountId}/payments`

Initiates payment in provided `AssetSymbol`, instructing funds to be transferred from one wallet to another within same network and same asset (currency). Response either confirms initiation of payment process (success) or gives reason why it’s not possible (failure).

### Required Permissions <a href="#scopes" id="scopes"></a>

`the permissions for this operation`

### Triggers <a href="#triggers.1" id="triggers.1"></a>

`PolicyEngine`

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter   | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetAccountId` | <p>Unique identifier of the asset account.<br><br>Asset Account IDs look like this:<br><code>aa-orange-apple-2b17a80613</code><br><br>They follow this format:<br><code>aa-&#x3C;random-words>-&#x3C;random-alphanumeric-string></code><br><br>Read more on the <a href="https://dfns.gitbook.io/dfns-docs/getting-started/datamodelconcepts#dfns-id">Data Model Concepts</a>page.</p><p>[Discussion of this entry].</p> |

#### Query parameters <a href="#query-parameters" id="query-parameters"></a>

| Query string parameter | Required/Optional | Description | Type |
| ---------------------- | ----------------- | ----------- | ---- |
| N/A                    | N/A               | N/A         | N/A  |

### Request body <a href="#request-body" id="request-body"></a>

In the **request body** send the **amount and type of funds** as well as the **receiver's kind and address**.

| Request body fields | Required/Optional | Description                                                   | Type                    |
| ------------------- | ----------------- | ------------------------------------------------------------- | ----------------------- |
| `assetSymbol`       | Required          | Currency symbol to send funds in.                             | String                  |
| `amount`            | Required          | Amount of funds in `assetSymbol` currency.                    | Number (format: double) |
| `address`           | Required          | The blockchain address of the receiving party.                | String                  |
| `kind`              | Required          | Type of blockchain address, such as `BlockchainWalletAddress` | String                  |

### Request example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl -X POST "/policies/policy-controls" \
-H "Content-Type: application/json" \
-H "Bearer: <TOKEN>" \
-d '{"description": "My policy control"}
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

If successful, the response contains, among other things, a **date stamp** and a **new payment ID**, confirming that a new payment of the correct **amount** and **type** is being **initiated**:

```json
// Some codeo
```

### Notes <a href="#notes" id="notes"></a>

When the payment is in the process of being initiated, its `status` is `Initiated`. Once complete, the payment's `status` changes from `Initiated` to `Executed`. To confirm that this has occurred, you can use the `GetPaymentById` method.
