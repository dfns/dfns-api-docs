# Assets

Assets

### InitiatePayment

`assets/asset-accounts/{accountId}/payments`

Operations trigger payment initiation. This will instruct funds to be transfered from one wallet to another within same network and same asset.

This operation will trigger PolicyEngine.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="undefined" method="undefined" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="assets/asset-accounts/{accountId}/payments" method="post" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

### CreateAssetAccount

`assets/asset-accounts`

Creates new `AssetAccount` entity. If `publicKey` is provided then `AssetAccount` will be added to the existing public-key (SigningGroup).

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="assets/asset-accounts" method="post" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

### ReadAssetAccountById

`assets/asset-accounts/{id}`

Reads and returns an instance of `AssetAccount` by `id`.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="assets/asset-accounts/{id}" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

### ListAssetAccounts

`assets/asset-accounts`

Returns list of `AssetAccount` items. Additional filters can be provided, see list of parameters for the operation.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="assets/asset-accounts" method="get" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}

### ArchiveAssetAccount

`assets/asset-accounts/{id}`

Operation marks `AssetAccount` as `Archived` which deactivates account.

{% swagger src="../.gitbook/assets/dfns-api-openapi.json" path="assets/asset-accounts/{id}" method="delete" %}
[dfns-api-openapi.json](../.gitbook/assets/dfns-api-openapi.json)
{% endswagger %}
