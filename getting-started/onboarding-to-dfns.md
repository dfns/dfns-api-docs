# Onboarding to Dfns

## Overview

Welcome to Dfns! This guide will help you get set up with our industry-leading authentication and clone our sample app to test delegated signing.&#x20;

We’ve also created a video walking through this setup for EthParis (July 2023) which you can find [here](https://www.youtube.com/watch?v=uGVjRFeNmWU\&t=313s).  If you have any questions, don't hesitate to reach out to us in DFNSCare. Thanks!

## Register from Email

1. Dfns staff provisions your new org and creates the first Employee in the organization, called the Org Owner. &#x20;
2. Org Owner receives an email with a link to register in our system.

![](https://lh5.googleusercontent.com/0E8Iihc2SAZcOLb3nPW\_A5eu1pVFQqdKp5DEU2J2ZXTGzNI6BY4pxXhjPQ2X2YQufl7E4q2-3tjF6m\_OIyUinsaRBg-ZnCzXxpA-2xhTAbH0DdEcEmyG0fLRQEoNZ9ziGehMGHEyMEsFm5\_L2mvvl0M)

## Create your Credentials and Login

1. Click the link to be directed to the registration page with the username prepopulated.  Copy and paste the registration code from the email. Click the register button.   Note: Registration codes only last 4 hours so if yours is expired, just click "Send New Code To My Email”.&#x20;

![](<../.gitbook/assets/Screenshot 2024-02-06 at 3.57.50 PM.png>)

2. Create credentials and submit.  Login in using the new credentials.&#x20;

![](https://lh3.googleusercontent.com/\_mh2NClFnmFofnIAM8acW-H\_PSwrC2Eoe7mA0tgKHCC2zxDnaj7\_5yur8ijom8MDTtlEH3uPanbuUDZf1Kuky1Ws6zvhcoLWfukfCxiSS29U7O6FbKEMyhx6gzhymb3TmJYprXc\_sxyBgpb3m49s\_bM)

3. &#x20;Click your user icon in the top right and then click Settings

![](https://lh5.googleusercontent.com/4NRh8sMOQvumXpXwjXxXPa\_iL1bjspD9LBkCsfVz7DVl8-Si6PBVW5NpQ8QlL6z0Bt5eq8OE7UXwj2\_XnRJg1aSxlzmNvohuGGE\_2VOHuEhr-y1d2aSxpbglf6\_x4-AcPmgVTGpofPkqFn1O0UmSonc)

4. Now click “Users” in the left navigation

![](<../.gitbook/assets/Screenshot 2023-06-29 at 5.29.37 PM.png>)

5. Add Users to the organization by clicking “New User”.  (Note ExternalID is optional)

![](<../.gitbook/assets/Screenshot 2023-06-29 at 5.30.57 PM.png>)

6. Employees receive an email and follow the same registration flow.
7. The Org Owner creates and assigns the necessary permissions to allow users to  access the parts of the system required for their job responsibilities.  For convenience, we've exposed a control on the user list page to give a user all access to the system here:

![](https://lh6.googleusercontent.com/b1Yq7btcMdliZmKDXY4H9MCXnB6sFFIePnWRKyAMwoclW1mu-cUHaPedL3J2z4FO1VJgjZXtdRQBCzN68t4riCnvLcpZFeIXX1ZNGWiVfH-eESejYr-qwNf1QPL7O1UfRFUKncC56IDkCvxU39jTC8s)

That said, we strongly encourage implementing the principle of least privilege by setting up your own permissions in the dashboard under Settings=>Permissions:&#x20;

![](<../.gitbook/assets/image (1) (1).png>)

You can then assign permissions to Users, Service Account, and Applications by clicking the target card in the list to go to the detail page:&#x20;

![](<../.gitbook/assets/image (1) (1) (1).png>)

## Create a Service Account

Once you register in your Dfns org and invite your Users, the next step is to create a Service Account which you can think of as a machine user.

1. Create a Public / Private Key pair that you will use for API signing from the terminal command.  You can use the commands shown below or see our [documentation on key generation](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair):&#x20;
   * ```sh
     # Generate RSA Private Key
     openssl genrsa -out rsa2048.pem 2048
     # Generate the Public Key
     openssl pkey -in rsa2048.pem -pubout -out rsa2048.public.pem
     ```
2. Navigate to Settings. Service Accounts=>New Service Account. &#x20;
3. Name the Service Account, copy in the public key (including begin/end lines like “-----BEGIN PUBLIC KEY-----”)  and click “Create”.&#x20;

![](<../.gitbook/assets/Screenshot 2023-06-29 at 5.41.27 PM.png>)

4. This will output a masked JWT one time.  Copy it to a secure location before leaving the page.&#x20;

![](<../.gitbook/assets/Screenshot 2023-06-29 at 5.33.23 PM.png>)

At this point, you can make server side API calls by signing requests with your secret key. Please see [our Typescript SDK](https://docs.dfns.co/dfns-docs/getting-started/typescript-sdk) and specifically [the Service Account sample app](https://github.com/dfnsext/typescript-sdk/tree/m/examples/sdk/service-account).&#x20;

## Delegated Signing Configuration

{% hint style="info" %}
For a full overview of Delegated Signing, please see the [Delegated Signing page](../advanced-topics/delegated-signing.md) under Advanced Topics.&#x20;
{% endhint %}

If you want to implement Delegated Signing in which your customer generates credentials to our API via WebAuthn, continue with these steps:&#x20;

1. Create an Application running at localhost:3000. &#x20;
2. Go to Org Settings => Applications
3. Click New Application
4. Give it a name and specify the following values:&#x20;

![](<../.gitbook/assets/Screenshot 2023-06-29 at 5.34.41 PM.png>)



5. Click Create, then copy the App ID like “ap-2vemp-hl3c9-9j1rgcf9quurph” to paste into your .env file as described below
6. Clone one of the two demo apps in the SDK & follow the steps in the Readme
   1. [NextJS config](https://github.com/dfnsext/typescript-sdk/tree/m/examples/sdk/nextjs-delegated)
   2. [React & Express](https://github.com/dfnsext/typescript-sdk/tree/m/examples/sdk/auth-delegated)
7. Populate your .env file based on the [.env.example ](https://github.com/dfnsext/typescript-sdk/blob/m/examples/sdk/nextjs-delegated/.env.example)(see[ this video](https://www.youtube.com/watch?v=uGVjRFeNmWU\&t=1012s) for the July 2023 EthParis event for a step by step walkthrough)

## All the docs!

Our documentation should have everything you need to get up and running on Dfns!  Here's an overview of some of the key sections:

* Overviews of Dfns's [policy engine](../api-docs/policy-engine/) and [data model concepts](DataModelConcepts.md)
* Our [API Authentication](../advanced-topics/authentication/authentication-authorization.md) page & [Advanced Topics](../advanced-topics/authentication/) around authentication to understand our signing requirements in detail
* The [**API DOCS**](../api-docs/) reference section of all currently supported endpoints and their operations
* [Integrations](../integrations/fiat-on-offboarding.md) to learn about how to integrate with Fiat on/offboarding providers
