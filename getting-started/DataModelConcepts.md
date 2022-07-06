
## Tags and External Ids
Various entities that our customers need to work with on daily follow the same patter to provide `externalId` and `tags` fields. This fields allow customers to mark item and link them to their databases.

* `externalId`: Is useful when entity is generated first within customer’s database. For example `Payment`, policy, or maybe a `PublicKey`. This way `externalId` can be provided, and later used to retrieve payment using id from customer’s database.
* `tags`: Tags can be used as tags, groups, categories. They allow customers to mark entities by jurisdiction, department, seniority, business-function, or other means.

## Dfns Id
Majority of Dfns IDs have following standard:

`{prefix}-{two-to-three-words}-shortHash`

For example:
 * `pr-montana-mango-2b17a80613` – This refers to policy rule, which can be seen by prefix `pr`.
 * `pa-five-river-1e6242793d` – This refers to payment, which can be seen by prefix `pa`.

This allows us to easily identify entities, talk about them, and discuss them without leaking any information, since ids are randomly generated.