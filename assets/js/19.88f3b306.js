(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{184:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("If you are ready to press forward with your first test asset chain, some basic knowledge about how to connect two nodes is recommended for the initial setup.")]),e._v(" "),a("p",[e._v("As per the original blockchain designs of Satoshi Nakamoto, on which Komodo is based, a Komodo asset chain does not exist on a single node. Rather, it exists via a connection between two or more nodes. This is the nature of decentralization: it is on the network we rely, rather than a single authority. Therefore, the design of the technology requires you to have two separate nodes, which are able to connect over a network.")]),e._v(" "),a("p",[e._v("In the most ideal circumstance, the new Komodo developer will already have two virtual private servers (VPS's) available for testing. VPS's can be cheap and easy to manage. A typical VPS will either have a static external IP or can be assigned one; this makes it simple to create a connection between the two VPS nodes.")]),e._v(" "),a("p",[e._v("If the new developer does not have two VPS's available, setting up a test asset chain on two local machines in a home or office-type setting is still achievable, but it may require a little more troubleshooting.")]),e._v(" "),a("p",[e._v("If using a home or office-type setup, the challenge lies in the way the network is created, and there are myriad network setups.")]),e._v(" "),a("p",[e._v("For example, if the developers are operating on a local router, where the two machines are connected via wi-fi, the local ip addresses of the machines are harder to find. This is because the router assigns new local ip addresses to the machines each time they re-connect to the router. It is not possible to see the ip addresses from the Internet. In this situation, the developer must log into the router's software interface and search for the currently assigned local ip addresses.")]),e._v(" "),a("p",[e._v("A home or office-type setup can suffice, if you're just looking to test an asset chain quickly and don't want to spend money on a VPS. However, don't be surprised if you need to ask for help. Please reach out to us, and we'll help the best we can.")]),e._v(" "),a("p",[e._v("You will know that your machines have successfully connected when you can run the following command in the terminal of one of your machines:")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),a("p",[e._v("If you do not see a continuing response in the shell, your machines are not yet connected. Please reach out to our team and we will do our best to assist you.")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("(Mac & GNU/Linux)")]),e._v(" "),e._m(14),a("p",[e._v("(Windows)")]),e._v(" "),e._m(15),a("p",[e._v("After issuing this command in the terminal, you will find the p2p port in the terminal window.")]),e._v(" "),e._m(16),e._m(17),e._v(" "),a("p",[e._v("This completes the first half of the asset-chain creation process. Scroll down to "),a("router-link",{attrs:{to:"./../installations/creating-asset-chains.html#part-ii-connecting-the-second-node"}},[e._v("Part II")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Please refer to "),a("router-link",{attrs:{to:"./../installations/asset-chain-parameters.html"}},[e._v("Asset Chain Parameters")]),e._v(" for a full list of parameters to customize the characteristics of your blockchain.")],1)]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Please note the requirements for "),a("router-link",{attrs:{to:"./../installations/asset-chain-parameters.html#ac-supply"}},[e._v("ac_supply")]),e._v(", and instructions for using "),a("router-link",{attrs:{to:"./../installations/common-runtime-parameters.html#addnode"}},[e._v("addnode")]),e._v(" under various network conditions, including firewalls and LANs.")],1)]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),a("p",[e._v("Once the second node connects, it will automatically mine blocks.")]),e._v(" "),a("p",[e._v("On a Komodo-based blockchain, all of the pre-mined coins are mined in the first block. Therefore, whichever machine executes the mining command will receive the entirety of the blockchain's pre-mined coin supply, as set in the "),a("router-link",{attrs:{to:"./../installations/asset-chain-parameters.html#ac-supply"}},[e._v("ac_supply")]),e._v(" parameter. Upon mining the first block, these coins are be available in the default "),a("code",[e._v("wallet.dat")]),e._v(" file.")],1),e._v(" "),a("p",[e._v("These are the coins you will later distribute to your community, using either our native DEX, "),a("router-link",{attrs:{to:"./../installations/basic-instructions.html#komodo-s-native-dex-barterdex"}},[e._v("BarterDEX")]),e._v(", or our decentralized-ICO software (coming soon), or on any other third-party exchange.")],1),e._v(" "),a("p",[e._v("You can check the contents of the wallet by executing the following command in the terminal:")]),e._v(" "),e._m(21),a("p",[e._v("More info can be found in the debug.log of the chain found at:")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),a("p",[e._v("Since the Komodo software began as a fork of Zcash and BTC, essentially all commands that are available on these two upstream blockchains are also available on your new asset chain.")]),e._v(" "),a("p",[e._v("Furthermore, a key purpose of the Komodo blockchain is to create features and functions that facilitate and enhance your development experience. Information regarding these enhancements is available throughout this documentation.")]),e._v(" "),a("p",[e._v("In addition, since you are building on a Komodo-based blockchain, you have easy access to our multi-coin wallet, "),a("a",{attrs:{href:"https://komodoplatform.com/komodo-wallets/#desktopsection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Agama"),a("OutboundLink")],1),e._v(", our atomic-swap powered decentralized exchange, "),a("router-link",{attrs:{to:"./../installations/basic-instructions.html#komodo-s-native-dex-barterdex"}},[e._v("BarterDEX")]),e._v(", our decentralized-ICO software (coming soon), and our future upgrades.")],1),e._v(" "),e._m(25),e._v(" "),a("p",[e._v("To see general information about your new asset chain, execute this command:")]),e._v(" "),e._m(26),e._v(" "),a("p",[e._v("The following command returns information about all available RPC and API commands:")]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),a("p",[e._v('Your new asset chain can receive the same security of the Bitcoin hash rate through our security mechanism, called "delayed Proof of Work" (dPoW).')]),e._v(" "),a("p",[e._v('There are two aspects to the cost for dPoW services. The first comes from the cost of making records in your asset chain\'s database, and in the records of the KMD main chain. These records are called "notarizations."')]),e._v(" "),a("p",[e._v("Notarizations are performed as transactions on your blockchain and on the main KMD blockchain. The transactions have messages included inside that indicate the most recent and secure state of your asset chain. Your Komodo asset chain will know how to recognize and rely on notarizations automatically.")]),e._v(" "),a("p",[e._v("Every ten to twenty minutes, our notary nodes will hash the history of your asset chain and insert it as a record into the KMD main chain. This provides an initial layer of security, but it is not the final layer.")]),e._v(" "),a("p",[e._v("In another ten to twenty minutes, all of the information in the KMD chain (including your asset chain's hashed data) is hashed and inserted into the BTC blockchain. Once your information is pushed into BTC, your asset chain will consider all notarized information effectively settled and immutable; only the recent, un-notarized transactions are still relying on your asset chain's raw consensus mechanism. "),a("router-link",{attrs:{to:"./../installations/asset-chain-parameters.html#ac-staked"}},[e._v("Click here to learn more about the types of consensus mechanisms you can choose on a KMD asset chain")]),e._v(".")],1),e._v(" "),a("p",[e._v("Thus, your asset chain will have all the power of Bitcoin securing your blockchain's history, with the zero-knowledge privacy of the Zcash parameters pre-installed, and all of the interoperability, scalability, and more that Komodo adds to your development experience.")]),e._v(" "),a("p",[e._v("As the notarizations are transactions, they naturally have a cost, and this cost is covered by you, the asset-chain developer. Over the course of a year, assuming consistent activity, the cost for performing these transactions is 365 KMD, and also 365 of your asset chain's coins.")]),e._v(" "),a("p",[e._v("There are extra costs involved that are aimed to compensate the Notary Nodes for the setup and maintainance of the dPOW service. You may reach out to our third-party service providers to receive a quote. siu (Discord: @siu#3920) is the head of ChainMakers, and PTYX (Discord: @PTYX#6840) is the head of Chainzilla. Both can provide various services related to asset-chain creation, electrum-server (SPV) setup and maintenance, explorer setup, and other blockchain services.")]),e._v(" "),a("p",[e._v("Several teams have already signed up for our services and are developing on our platform. From our experience with them we can confidently say that our pricing is competitive compared to other blockchain services. Furthermore, when considering that a Komodo-based asset chain does not require KMD for gas and transaction fees, the cost to your end-users can be exponentially cheaper. All things considered, creating a fully independent blockchain on Komodo can cost but a small fraction of what it would cost to deploy a single smart contract on the platforms of some of our competitors.")]),e._v(" "),e._m(29),e._v(" "),a("p",[e._v("The Komodo security system, dPoW, functions best for asset chains that are being actively used. If there is an end-user performing a transaction every minute on average, dPoW should function as normal. This includes hashing the asset chain's most recent state and inserting it into the KMD blockchain every ten to twenty minutes on average (and from there, a hash protecting this data is soon pushed into the Bitcoin blockchain).")]),e._v(" "),a("p",[e._v("Many blockchains will not be used on a regular basis, however. The developers also may not elect to have any block rewards that would act as an incentive for miners to maintain activity on the chain.")]),e._v(" "),a("p",[e._v("It is not economically efficient to notarize every single block that occurs. Therefore Komodo's dPoW security system requires several blocks to be generated before a notarization takes place. Without activity or miners, the notarization process naturally will stall.")]),e._v(" "),a("p",[e._v("This creates a situation which is easily remedied, but only if the developer is proactive to maintain activity on their chain. We advise asset-chain developers who do not expect frequent transaction volume to ensure activity at crucial moments. If a transaction occurs on the blockchain from an end-user, for which notarization security is required, a simple solution can be to have a node running a script to watch for such transactions. When the transaction enters the mempool, the node can perform minimum-amount transactions until the end-user's transaction is notarized, and then the script can cease activity.")]),e._v(" "),a("p",[e._v("The amount it costs the developer to perform these occasional minimum-amount transactions is far cheaper than it would cost the developer to have the asset chain notarized every ten to twenty minutes on an inactive chain.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"creating-komodo-asset-chains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-komodo-asset-chains","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Komodo Asset Chains")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-a-new-asset-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-asset-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating A New Asset Chain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"requirements-for-creating-a-new-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements-for-creating-a-new-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements for Creating a New Chain")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("2 nodes with the ability to open ports (a node can be either a computer or a VPS)")]),e._v(" "),a("li",[e._v("At least 4GB RAM each")]),e._v(" "),a("li",[e._v("At least 2 CPU cores each")]),e._v(" "),a("li",[e._v("64-bit Operating System (Ubuntu 16.04 recommended)")]),e._v(" "),a("li",[a("code",[e._v("komodod")]),e._v(" built on each\n"),a("ul",[a("li",[e._v("(when the goal is only to build a new asset chain, there is no need to sync the KMD main chain)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("When you are building and testing a Komodo asset chain, please do not hesitate to reach out to us when you are stuck. We wish to make this as easy as possible. Our support agents are available in our "),t("a",{attrs:{href:"https://komodoplatform.com/discord"}},[this._v("#support channel in Discord")]),this._v(" for many hours each day, and during off hours you can file a ticket on "),t("a",{attrs:{href:"https://support.komodoplatform.com/support/home"}},[this._v("our support page")]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v('The word "node" is used throughout this documentation, and it can be confusing for beginners. A node can be a unique desktop computer connected to the Internet. It can also be a virtual-private server (VPS) that is rented or purchased, and which the developer can access at will. Or, it can be another type of unique instance of a computational machine.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"basic-info-for-connecting-at-least-two-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-info-for-connecting-at-least-two-nodes","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Info for Connecting At Least Two Nodes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("ping <insert ip address of your other machine here>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This command will generate a response every second, indicating the "),t("code",[this._v("ping")]),this._v(" speed with which your machines are able to connect.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ping")]),e._v(" 192.168.1.101\n\nPING 192.168.1.101 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("192.168.1.101"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" 56"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("84"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" bytes of data\n\n64 bytes from 192.168.1.101: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("64 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("131 ms\n\n64 bytes from 192.168.1.101: icmp_seq"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2 ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("64 time"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("2.40 ms\n\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"part-i-creating-a-new-komodo-asset-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-i-creating-a-new-komodo-asset-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Part I: Creating a New Komodo Asset Chain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("With your machines successfully able to "),t("code",[this._v("ping")]),this._v(" each other, you are ready to create your first asset chain.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following instructions use the simplest possible set of parameters in creating a new asset chain: a coin with the ticker symbol "),t("code",[this._v("HELLOWORLD")]),this._v(", "),t("code",[this._v("777777")]),this._v(" pre-mined coins, and a block reward of "),t("code",[this._v(".0001")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On your first node, change into the directory where Komodo's "),t("code",[this._v("komodod")]),this._v(" and "),t("code",[this._v("komodo-cli")]),this._v(" are installed and execute the following commands in the terminal:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodod -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD -ac_supply"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777777 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IP address of the second node"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodod.exe -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD -ac_supply"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777777 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IP address of the second node"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">>")]),this._v(" HELLOWORLD: p2p.8096 rpc.8097 magic.c89a5b16 3365559062 777777 coins\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In this case, the p2p port is "),t("code",[this._v("8096")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"part-ii-connecting-the-second-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part-ii-connecting-the-second-node","aria-hidden":"true"}},[this._v("#")]),this._v(" Part II: Connecting the Second Node")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On the second node you issue the same command, with two key differences. You will use the first node's IP address, and you will include an additional setting that initiates mining on this node, "),t("code",[this._v("-gen -genproclimit=$(nproc)")]),this._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./komodod -ac_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD -ac_supply"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777777 -addnode"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("IP address of the first node"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -gen -genproclimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("nproc"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("HELLOWORLD getwalletinfo\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("strong",[e._v("MacOS:")]),e._v(" "),a("code",[e._v("~/.komodo/HELLOWORLD/debug.log")])]),e._v(" "),a("li",[a("strong",[e._v("Windows:")]),e._v(" "),a("code",[e._v("%appdata%\\komodo\\HELLOWORLD\\debug.log")])]),e._v(" "),a("li",[a("strong",[e._v("GNU/Linux:")]),e._v(" "),a("code",[e._v("~/.komodo/HELLOWORLD/debug.log")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"querying-the-asset-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-the-asset-chain","aria-hidden":"true"}},[this._v("#")]),this._v(" Querying the Asset Chain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Using the "),t("code",[this._v("komodo-cli")]),this._v(" software, which is included in any default installation of "),t("code",[this._v("komodod")]),this._v(", you can now execute many commands on your new asset chain. This enables you to perform transactions, create and execute smart contracts, store data in KV storage, etc.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-commands","aria-hidden":"true"}},[this._v("#")]),this._v(" Example commands")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD getinfo")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("./komodo-cli -ac_name=HELLOWORLD help")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"secure-this-asset-chain-with-delayed-proof-of-work"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#secure-this-asset-chain-with-delayed-proof-of-work","aria-hidden":"true"}},[this._v("#")]),this._v(" Secure this Asset Chain with Delayed Proof of Work")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"a-note-about-low-activity-blockchains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-note-about-low-activity-blockchains","aria-hidden":"true"}},[this._v("#")]),this._v(" A Note About Low-Activity Blockchains")])}],!1,null,null,null);t.default=o.exports}}]);