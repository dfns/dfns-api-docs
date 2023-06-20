# Login

User login is a two step process.

1. A User initiates the login by [Creating a User Login Challenge](initlogin.md). This will generate a challenge to be signed by the user.
2. The User signs the login challenge with one of his Credentials, and sends the signed challenge to [Complete User Login](completeLogin.md).

At the end of the process you will get an authentication token that you can use in the header `Authorization: Bearer {auth_token}` of your API calls.
