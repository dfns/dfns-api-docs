# Personal Access Token Management
`Personal Access Tokens (PATs)` are used to automate actions on behalf a user.

`PATs` are linked to your user, and cannot have more permission then your user. However, a `PAT` has its own permissions, which can be used to limit what the `PAT` is allowed to do. For example, you could create a read only `PAT` to monitor transactions in your wallet, without having to reduce the permisison of your user.

Since `PATs` are tied to a user, if the user leaves your company, the `PAT` would be deactived at the same time as the user. Because of this, `PATs` are not meant to be used for server tasks. If you have a long lived task, it is recommended that you use a `Service Account` instead, as `Service Accounts` are not tied to a specific user. This also means that a `Service Account` can have different permissions from the user that created the `Service Account`, giving you the ability to limit user permissions without effecting server tasks.
