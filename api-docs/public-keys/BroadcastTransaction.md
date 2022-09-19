# Broadcast Transaction

Depending on the payload sent via request body, this operation can perform the following tasks:
* Create a contract.
* Call a function in a contract that needs signing.
* Send ETH to another account.

## Notes

Our current `BroadcastTransaction` endpoint is only meant for state-changing transactions which require signing (eg. making requests to a contract which needs to be signed). This endpoint is not made to read the blockchain with a read-only contract call (which does not require signing). We offer no support for the read-only use case.