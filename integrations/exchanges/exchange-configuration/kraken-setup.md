# Kraken Setup

Dfns support integrations with Kraken and Kraken Pro exchange accounts.  Users must have a Pro account in order to generate API keys to input into the Dfns Dashboard to configure the integration.

## API Key Generation

Log into your Kraken account and go to the Kraken Pro homepage at [https://pro.kraken.com/app/home](https://pro.kraken.com/app/home).  From here, click **Settings** under the profile icon in the top right and then on `API` to reach this page: [https://pro.kraken.com/app/settings/api](https://pro.kraken.com/app/settings/api).   Click **Create API Key** and generate a Read only key by selecting only the **Query** permission:&#x20;

<figure><img src="../../../.gitbook/assets/Screenshot 2024-09-11 at 4.30.20 PM.png" alt=""><figcaption></figcaption></figure>

Click **Generate** `key`.  Log into your Dfns dashboard and click **Settings=>Exchanges=>New**. Copy the Public and Private API keys from Kraken into the corresponding fields.  Go back to Kraken and generate a second Write API key with the following minimum permissions:

<figure><img src="../../../.gitbook/assets/Screenshot 2024-09-11 at 4.33.54 PM.png" alt=""><figcaption></figcaption></figure>

Copy the generated values into the Write API key fields in Dfns.  Optionally select 2FA if your Kraken account requires it.  Click **Create** and the integration setup is complete.&#x20;

## Whitelisting Withdrawal Addresses

Kraken enforces a **whitelist** policy for all withdrawal wallet addresses. This means that before withdrawing any assets to an external wallet, the wallet address must be added to a whitelist in your Kraken account.  Follow these steps to whitelist a wallet address using Kraken's standard interface:

1. **Log into your Kraken account.  Go to the main Kraken app (not Pro).**&#x20;
2. **Navigate to the “Transfer” tab:**
   * Once logged in, locate the **Transfer** tab, which is typically displayed on the left side of your dashboard.
3. **Access the “Withdrawals” section:**
   * From the Transfer tab, click on the **Withdrawals** sub-tab. This will display all available assets for withdrawal.
4. **Select Asset and Chain:**
   * In the Withdrawals section, choose the **asset** (e.g., Bitcoin, Ethereum, etc.) and the corresponding **blockchain** network (e.g., BTC, ETH) that you wish to withdraw.
5. **Manage Wallets:**
   * After selecting the asset and chain, click on the **Manage Address** link and then **Add New Withdrawal Address**. This will allow you to add a new wallet address to the whitelist for future withdrawals.
6. **Add a New Whitelist Entry:**
   * Enter the Dfns wallet address you wish to whitelist.
7. **Admin Confirmation:**
   * The added wallet address will require confirmation by the **account admin** before it becomes active. The account admin will receive a notification to confirm the newly added whitelist entry.
   * Until the wallet address is confirmed, it will not be available for withdrawals.

This whitelisting process adds an extra layer of security, ensuring that only authorized wallet addresses can receive withdrawals from your Kraken account.

<figure><img src="../../../.gitbook/assets/Screenshot 2024-09-11 at 4.38.53 PM.png" alt=""><figcaption></figcaption></figure>
