# Data Model Concepts

## Dfns IDs

The majority of Dfns IDs are formed using the following standard:

`{prefix}-{two-to-three-words}-shortHash`

For example:

* `pr-montana-mango-2b17a80613` – This refers to `Policy Rule`, which can be seen by prefix `pr-`.
* `pa-five-river-1e6242793d` – This refers to `Payment`, which can be seen by prefix `pa-`.
* `aa-` stands for `Asset Account` and so forth

IDs are randomly generated. This allows clients to easily identify entities, talk about them, and discuss them without leaking any information.

##

## Tags and External IDs

Entities in the Dfns data model expose `tags` and `externalID` fields which allow customers to mark items and link them to external databases.

### `tags`

Tags can be used to specify groups or categories. They allow customers to mark entities by jurisdiction, department, seniority, business-function, or other classification criteria.

### `externalId`

Useful when an entity such as `Payment`, `Policy`, or `PublicKey` is generated initially within a customer’s database. The `externalID` of the database record can be provided and later used as a [foreign key](https://en.wikipedia.org/wiki/Foreign\_key) to retrieve data by using the ID from the customer’s database.
