module "Payment_table"{
source = "terraform-aws-modules/dynamodb-table/aws"
version = "0.11.0"
name = "PAYMENT_TABLE_NAME"
billing_mode = "PAY_PER_REQUEST"
hash_key = "id"
attributes = [
{
name = "id"
type = "S"
},
{
name = "externalId"
type = "S"
},
{
name = "status"
type = "S"
},
{
name = "assetSymbol"
type = "S"
}
]
global_secondary_indexes = [
{
name = "by-id-index"
hash_key = "id"
projection_type = "ALL"
},
{
name = "by-externalId-index"
hash_key = "externalId"
projection_type = "ALL"
},
{
name = "by-status-index"
hash_key = "status"
projection_type = "ALL"
},
{
name = "by-assetSymbol-index"
hash_key = "assetSymbol"
projection_type = "ALL"
}
]
}

