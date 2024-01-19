# Storing WebAuthn Credentials in Password Managers

Many modern devices now ship with dedicated internal hardware chips called trusted execution environments (TEEs) for generating and signing with cryptographic secrets.  By default, when available, WebAuthn will use these resources to generate passkeys and signatures as they are the  most secure method for storing sensitive cryptographic material.

That said, not every consumer device is equipped with this specialized hardware.  Furthermore, despite the fact that [WebAuthn is projected to have over 96% coverage across consumer devices](https://caniuse.com/?search=webauthn), some operating systems, including certain Linux distributions like Ubuntu, may not have full support for storing passkeys.

In these cases, we recommend using password managers like [1Password](https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?pli=1), [Bitwarden](https://chromewebstore.google.com/detail/bitwarden-free-password-m/nngceckbapebfimnlniiiahkandclblb) or [Dashlane](https://www.dashlane.com/).  You can instruct users on unsupported devices to download and install the official chrome extensions from the webstore at the links above.   They can then use the extensions to securely persist their passkeys as shown below.&#x20;

## 1Password Extension

Set up an account, log in, and then make sure passkeys are enabled in the extension.  Click the menu dropdown and then Settings:&#x20;

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-04 at 12.48.46 PM.png" alt=""><figcaption></figcaption></figure>

Then select Autofill and ensure "Offer to save and sign in with passkeys" is selected:

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-04 at 12.47.05 PM (1).png" alt=""><figcaption></figcaption></figure>

Here is a video showing the full passkey generation UX with 1Password:&#x20;

{% embed url="https://www.loom.com/share/30fdef5c6d51404c8ba9e5c9644d7c7c?sid=8dc41798-11ef-4059-86e0-a7fd17e1d479" %}

## Bitwarden Extension

Set up an account, log in, and then make sure passkeys are enabled in the extension.  Click the  Settings menu, then Options:&#x20;

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-04 at 2.22.11 PM.png" alt=""><figcaption></figcaption></figure>

Then ensure "Ask to save and use passkeys" is selected:

<figure><img src="../../../.gitbook/assets/Screenshot 2024-01-04 at 2.22.27 PM.png" alt=""><figcaption></figcaption></figure>

Here is a video showing the full passkey generation UX with Bitwarden:

{% embed url="https://www.loom.com/share/8f1e52f70bd44469beff52b78be9ba04?sid=d194fb5c-4396-4bc4-be24-81ba62506232" %}
