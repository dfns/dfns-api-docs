# Data Model Concepts

### Tags and External Ids

Many entities in the DFNS data model provide `tags and` `externalId` fields which allow customers to mark items and link them to external databases.

* `externalId`: Is useful when an entity is generated first within a customer’s database. For example `Payment`, policy, or a `PublicKey`. The `externalId` of the database record can be provided and later used as a "foreign key" to retrieve data using the id from customer’s database.
* `tags`: Tags can be used as to specify groups or categories. They allow customers to mark entities by jurisdiction, department, seniority, business-function, or other classification criteria.

### Dfns Id

The majority of Dfns IDs have following standard:

`{prefix}-{two-to-three-words}-shortHash`

For example:

* `pr-montana-mango-2b17a80613` – This refers to policy rule, which can be seen by prefix `pr`.
* `pa-five-river-1e6242793d` – This refers to payment, which can be seen by prefix `pa`.

This allows clients to easily identify entities, talk about them, and discuss them without leaking any information, since ids are randomly generated.
