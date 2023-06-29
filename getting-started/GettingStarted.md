# Getting Started

## Overview

Welcome to Dfns! This guide will help you get set up with our industry-leading authentication and clone our sample app to test delegated signing.&#x20;

We’ve also created a video walking through this setup for EthParis (July 2023) which you can find [here](https://www.youtube.com/watch?v=uGVjRFeNmWU\&t=313s).  If you have any questions, don't hesitate to reach out to us in DFNSCare. Thanks!

## Register & Create Credentials

1. Dfns staff provisions your new org and creates the first Employee in the organization, called the Org Owner. &#x20;
2. Org Owner receives an email with a link to register in our system.

![](https://lh5.googleusercontent.com/0E8Iihc2SAZcOLb3nPW\_A5eu1pVFQqdKp5DEU2J2ZXTGzNI6BY4pxXhjPQ2X2YQufl7E4q2-3tjF6m\_OIyUinsaRBg-ZnCzXxpA-2xhTAbH0DdEcEmyG0fLRQEoNZ9ziGehMGHEyMEsFm5\_L2mvvl0M)

1. Click the link to be directed to the registration page with the username prepopulated.  Copy and paste the registration code from the email. Click the register button.   Note: Registration codes only last 4 hours so if yours is expired, just click "Email Me a New Registration Code".

![](https://lh6.googleusercontent.com/mEzEUMi\_47rNbFdHzyh3Wp9TdBsAEnHzblj-N7abbGw-J2DufmwcPSepe7QWvNzwSdkpZv4ewgkJOjHnuPfs9UZIPLz-DWn5qdKWVxE2ZvVMg4OK9GIylyhVUpfQSE2ZNWGEUbNlQehA54glNwpsRIc)

2. Create credentials and submit.  Login in using the new credentials.&#x20;

![](https://lh3.googleusercontent.com/\_mh2NClFnmFofnIAM8acW-H\_PSwrC2Eoe7mA0tgKHCC2zxDnaj7\_5yur8ijom8MDTtlEH3uPanbuUDZf1Kuky1Ws6zvhcoLWfukfCxiSS29U7O6FbKEMyhx6gzhymb3TmJYprXc\_sxyBgpb3m49s\_bM)

3. &#x20;Now click “Users” in the left navigation

![](https://lh3.googleusercontent.com/HU4dqUD9LVKjeaCY3fYJvpq9V2bQw2gQ0OVlIata\_Xt0c5YEzs87ICcACDn7hPmaPTK7IRzGXyDQ13qxRAyDkMjEtZxYFqLmVSD4Wv81YEoQ5g8Rh3WXqqgBujMnZaWmyKxLhd\_0i9vchhzDJOKP6tg)

5. Add Users to the organization by clicking “New User”.  (Note ExternalID is optional)

![](https://lh6.googleusercontent.com/24-FzHFkDc99cbS8lw9nO9f5ZLChLfXIj0vmlt8pq0MQqJtvQ8XJEq8U7h6sK9IqddNREpT7xNcdZpFB0t1j10qaaRL8ZUG6XmNAnwegoou6LkzdXQ\_1VqgSQRk-lBUVW\_f20Iqm8cyPu60DDWjABQc)

6. Employees receive an email and follow the same registration flow.
7. The Org Owner creates and assigns the necessary permissions to allow users to  access the parts of the system required for their job responsibilities.  For the time being, we've exposed a control on the user list page to give a user all access to the system here:

![](https://lh6.googleusercontent.com/b1Yq7btcMdliZmKDXY4H9MCXnB6sFFIePnWRKyAMwoclW1mu-cUHaPedL3J2z4FO1VJgjZXtdRQBCzN68t4riCnvLcpZFeIXX1ZNGWiVfH-eESejYr-qwNf1QPL7O1UfRFUKncC56IDkCvxU39jTC8s)

While we plan to build a fully functional permissions UI in the future, do note you can configure any permissions you want for any user [via the permissions API](https://dfns.gitbook.io/dfns-docs/api-docs/permissions/permissions-overview) using an Service Account to sign requests (as described below).   Check out our [postman collection](postman-integration.md) to make this easier!

## Create an Service Account

Once you register in your Dfns org, the first step is to create a Service Account.

1. Create a Public / Private Key pair that you will use for API signing from the terminal command.  See our [documentation on key generation](https://docs.dfns.co/dfns-docs/advanced-topics/authentication/credentials/generate-a-key-pair)
2. Navigate to Settings. Service Accounts=>New Service Account. &#x20;
3. Name the Service Account, copy in the public key (including begin/end lines like “-----BEGIN PUBLIC KEY-----”)  and click “Create”.&#x20;

![](https://lh5.googleusercontent.com/BrOsqtCJ59hQOk6ijqwHzO2-0Htl9ORQbF9\_6gQre0LBIqKs004eSoLG\_rUDkVhVtVXhE\_rgXgZoXct7xhj-FT-f91u1xD5Kh4yEoBWqCJ08imUJcYEELvGlm6id-W62di3sSGlPlxFgh-8MA9LI\_uU)

4. This will output a masked JWT one time.  Copy it to a secure location before leaving the page.&#x20;

![](https://lh4.googleusercontent.com/rR6X-g0KXR4gTfOctanid0Xwrc\_G90yr4dkoGPamlOVX5QlJ0iLX2deBMksNRN6V4pQ5kKeB0eHtsrZUZm91\_BOPNdTdmjTmOyoT5qhmfnkkghCiVOAGydOPsx9PziuhqUupPXpp4Z5E8wMapkW7\_Us)

At this point, you can make server side API calls by signing requests with your secret key. Please see [our Typescript SDK](https://docs.dfns.co/dfns-docs/getting-started/typescript-sdk) and specifically [the Service Account sample app](https://github.com/dfnsext/typescript-sdk/tree/m/packages/examples/service-account).&#x20;

## Delegated Signing Configuration

If you want to implement Delegated Signing in which your customer generates credentials to our API via WebAuthn, continue with these steps:&#x20;

5. Create an Application running at localhost:3000. &#x20;
6. Go to Org Settings => Applications
7. Click New Application
8. Give it a name and specify the following values:&#x20;

![](https://lh5.googleusercontent.com/ihBJomG0zPX8YPnGQWZhucT4nO\_st1429gkWGfuk-WhRuXMp-lG836pkjQdC396mra31IFTWG1YzJcrb21n27fUlWoJIx4pf-4rxSeUnmBFbFbHgIq9OughtO4nNRZw8m6J0uyqroZeMAaVpXMOjVp4)

4. Click Create, then copy the App ID like “ap-2vemp-hl3c9-9j1rgcf9quurph” to paste into your .env file as described below
5. Clone one of the two demo apps in the SDK
   1. [NextJS config](https://github.com/dfnsext/typescript-sdk/tree/m/packages/examples/nextjs-delegated)
   2. [React & Express](https://github.com/dfnsext/typescript-sdk/tree/m/packages/examples/auth-delegated)
6. Follow the steps in [the sample app Readme](https://github.com/dfnsext/typescript-sdk/tree/m/packages/examples/nextjs-delegated#readme)
7. Populate your .env file based on [the .env.example](https://github.com/dfnsext/typescript-sdk/blob/m/packages/examples/nextjs-delegated/.env.example) (see[ this video](https://www.youtube.com/watch?v=uGVjRFeNmWU\&t=1012s) for the July 2023 EthParis event for a step by step walkthrough)

## All the docs!

Our documentation should have everything you need to get up and running on Dfns!  Here's an overview of some of the key sections:

* Overviews of Dfns's [policy engine](PolicyEngineIntro.md) and [data model concepts](DataModelConcepts.md)
* Our [API Authentication](authentication-authorization.md) page & [Advanced Topics](../advanced-topics/authentication/) around authentication to understand our signing requirements in detail
* The [**API DOCS**](../api-docs/) reference section of all currently supported endpoints and their operations
* [Integrations](../integrations/fiat-on-offboarding.md) to learn about how to integrate with Fiat on/offboarding providers
