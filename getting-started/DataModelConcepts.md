# Data Model Concepts

### Tags and External IDs

Many entities in the DFNS data model provide `tags and` `externalID` fields which allow customers to mark items and link them to external databases.

* `tags`: Tags can be used to specify groups or categories. They allow customers to mark entities by jurisdiction, department, seniority, business-function, or other classification criteria.
* `externalId`:  Useful when an entity such as`Payment`, policy, or`PublicKey`,is generated initially within a customer’s database. The `externalID` of the database record can be provided and later used as a "foreign key" to retrieve data using the ID from customer’s database.

### Dfns ID

The majority of Dfns IDs are formed using the following standard:

`{prefix}-{two-to-three-words}-shortHash`

For example:

* `pr-montana-mango-2b17a80613` – This refers to policy rule, which can be seen by prefix `pr-`.
* `pa-five-river-1e6242793d` – This refers to payment, which can be seen by prefix `pa-`.

This allows clients to easily identify entities, talk about them, and discuss them without leaking any information, since IDs are randomly generated.
