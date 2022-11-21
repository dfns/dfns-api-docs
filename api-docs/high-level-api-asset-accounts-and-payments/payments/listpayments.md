# ListPayments

`GET /assets/asset-accounts/{AssetAccountId}/payments`

Retrieves all outbound`Payments` for the specified `AssetAccount`.&#x20;

### Required Permissions

Payments:Read

### Parameters <a href="#parameters.1" id="parameters.1"></a>

#### Path parameters <a href="#path-parameters" id="path-parameters"></a>

| Path parameter   | Description                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| `AssetAccountId` | <p>Unique identifier of the <code>AssetAccount</code> like:<br><br>aa<code>-orange-magnesium-a0606d08b2</code></p> |

### Request Example <a href="#request-example.1" id="request-example.1"></a>

#### Sample request <a href="#sample-request" id="sample-request"></a>

```shell
curl "/assets/asset-accounts/aa-orange-magnesium-a0606d08b2/payments"
-H "Content-Type: application/json" \
-H "Authorization: Bearer <TOKEN>"
```

### Response <a href="#response" id="response"></a>

#### Response example <a href="#response-example" id="response-example"></a>

The response contains a list of Payments each with a status indicating whether the Payment has been Initiated or Executed.  Once executed, it will also return the transaction hash:

```json
{
   "items": [
   {
       "amount": "0.01",
       "assetAccountId": "aa-iowa-washington-7a99aa2fd5",
       "assetSymbol": "ETH",
       "dateCreated": "2022-07-19T19:41:15.656Z",
       "externalId": "1-2-3-4",
       "id": "pa-edward-emma-9e5130c59f",
       "initiator": {
           "kind": "Employee",
           "orgId": "cu-purple-pip-1b417b958500",
           "employeeId": "oe-nine-artist-9de60fef6963"
       },
       "narrative": "some payment",
       "note": "testing",
       "orgId": "cu-purple-pip-1b417b958500",
       "receiver": {
           "kind": "BlockchainWalletAddress",
           "address": "0x8b25C5DDeeB75fD73a62Cd8c1E2Ad4EbCf2BA076"
       },
       "receiverAddress": "0x8b25C5DDeeB75fD73a62Cd8c1E2Ad4EbCf2BA076",
       "status": "Executed",
       "txHash": "0x7ded8fa5f4a82ddac94608e109eca9944bf98e30b8e6d7faf04f591e0b5769c6"
    },
    ...
  ]
}
```
