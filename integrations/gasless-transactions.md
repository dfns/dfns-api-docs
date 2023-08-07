# Gasless Transactions

{% hint style="info" %}
The following article is relevant primarily for EVM compatible networks.&#x20;
{% endhint %}

## Overview

Ethereum and other Ethereum virtual machine (EVM) compatible networks require transactions to be originated from an externally owned account (EOA) and for that account to cover the gas fees of the transaction in the native cryptocurrency of the chain (for example, Ether in the case of Ethereum).  Blockchain users pay gas in order to purchase scarce block space and fund the chain, incentivizing validators to participate in securing the network.&#x20;

For projects operating primarily over tokens or NFTs, however, requiring a native cryptocurrency balance to fund transactions introduces onboarding friction.  Additionally, ensuring end-user wallets are sufficiently funded to execute transactions creates ongoing operational overhead. For these reasons, the notion of “gasless” transactions has been an area of ongoing debate for a number of years.  Unfortunately, the Ethereum community has failed to settle on a single standard nor enshrined this capability in the layer 1 protocol, leaving developers to contend with various approaches and weigh trade-offs depending on their specific use case.&#x20;

One application-level standard that has stood the test of time is called meta-transactions and is specified in [ERC-2771](https://eips.ethereum.org/EIPS/eip-2771). In this approach, end user transactions are forwarded off-chain to relayers that fund gas cost in exchange for a fee. The primary caveat is the target contract must support the standard by implementing the [ERC2771Context](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/metatx/ERC2771Context.sol) interface which replaces the built in msg.sender variable with a \_MsgSender() function.  This implementation extracts the original sender from the call data to prevent the relayer address from being used in its place.&#x20;

If you control the target smart contact and can support this interface or if you have validated your target contract already supports 2771, there are a number of relayer providers you can work with in order to sponsor transactions on behalf of your users and provide a gasless user experience while signing transactions with Dfns. The following are a few examples.&#x20;

## Open Gas Station Network (GSN)

GSN is an open-source public good funded by the Ethereum Foundation and built by the authors of ERC-2771 to help promote the standard.  They offer detailed [documentation](https://docs.opengsn.org/) on configuring a relayer and have published a sample ["capture the flag" workshop](https://github.com/opengsn/workshop) to demonstrate the changes required to make a smart contract compatible with 2771.   They even have a [detailed tutorial on setting up a relay server](https://docs.opengsn.org/relay-server/tutorial.html#introduction).  You can reach out to the GSN team in [discord](https://discord.gg/NXXTCbh58s) with any questions.

## Gelato Network

Gelato describes themselves as "web3’s decentralized backend" and provides a number of services to enhance smart contracts, including 2771 compatible relayers.  They expose a centralized funding service called [1 Balance](https://docs.gelato.network/developer-services/1balance).  Once an account is funded, it can be used to sponsor transactions on behalf of users by implementing [sponsoredCallERC2771](https://docs.gelato.network/developer-services/relay/erc-2771-recommended/sponsoredcallerc2771) as detailed in their documentation.  Please contact Gelato directly with questions pertaining to their specific configuration.&#x20;

##

