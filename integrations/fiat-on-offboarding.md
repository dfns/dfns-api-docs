# Fiat On/Offboarding

The Dfns APIs seamlessly interoperate with most fiat on/offboarding providers. &#x20;

## Mt Pelerin

For customers who are not explicitly targeting the US market, we recommend using [`Mt Pelerin`](https://www.mtpelerin.com/).  You can find the full documentation for their solution [here](https://developers.mtpelerin.com/).  They have highly [competitive pricing and limited KYC requirements](https://developers.mtpelerin.com/why-mt-pelerin) leading to a seamless user experience. &#x20;

<figure><img src="../.gitbook/assets/Screen Shot 2022-10-06 at 3.10.05 PM.png" alt=""><figcaption><p>Mt Pelerin Widget</p></figcaption></figure>



Mt Pelerin offers flexibility in how their widget is integrated [on the web](https://developers.mtpelerin.com/integration-guides/web-integration) and [on mobile](https://developers.mtpelerin.com/integration-guides/mobile-integration).  In all cases, developers can pass a blockchain address as the default recipient account for onboarding from fiat to crypto.  See the `addr` parameter description under [their options page](https://developers.mtpelerin.com/integration-guides/options).  Dfns customers can populate this parameter using either [addresses for asset accounts](../api-docs/high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbyid.md) or [addresses derived from public keys](../api-docs/low-level-api-keys-and-transactions/public-keys-1/getaddressfornetwork.md).&#x20;



In order to offboard from crypto to fiat, Mt Pelerin provides end users with an address to transfer funds to that facilitates the conversion process.  Customers can easily initiate payments to these addresses using the Dfns [payment APIs](../api-docs/high-level-api-asset-accounts-and-payments/payments/initiatepayment.md).&#x20;

## Ramp.Network

Ramp is another popular Fiat on/offboarding provider that offers an easy to implement SDK across web and mobile devices.  [Here is there documentation](https://docs.ramp.network/web/quick-start-overlay) for their RampInstantSDK Overlay for example.  The resulting UI looks like this:



<figure><img src="../.gitbook/assets/Screen Shot 2022-11-30 at 3.13.19 PM.png" alt=""><figcaption><p>Ramp UI Widget</p></figcaption></figure>

Similar to Mt Pelerin, developers can pass a blockchain address as the default recipient account for onboarding from fiat to crypto.  See the `userAddress` parameter in [their SDK reference](https://docs.ramp.network/configuration#useraddress).  Dfns customers can populate this parameter using either [addresses for asset accounts](../api-docs/high-level-api-asset-accounts-and-payments/asset-accounts/getassetaccountbyid.md) or [addresses derived from public keys](../api-docs/low-level-api-keys-and-transactions/public-keys-1/getaddressfornetwork.md).&#x20;



In order to offboard from crypto to fiat, Ramp provides end users with an address to transfer funds to that facilitates the conversion process as shown below.  Customers can easily initiate payments to these addresses using the Dfns [payment APIs](../api-docs/high-level-api-asset-accounts-and-payments/payments/initiatepayment.md).&#x20;



<figure><img src="../.gitbook/assets/Screen Shot 2022-11-30 at 3.24.19 PM.png" alt=""><figcaption><p>Ramp offboarding</p></figcaption></figure>









