(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The method of transferring contract-related assets is often slightly different than the typical asset-chain transaction.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("When using CryptoConditions, however, there are a few new types of addresses to keep in mind when working with transactions. It is not necessary to fully understand all of the address types, but basic knowledge about a few addresses will be necessary.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("The first address you must understand is the pubkey. Any user using a Crypto Conditions based contract must have a pubkey indicated in their daemon. This forms the basis for all addresses related to various contract modules.")]),e._v(" "),s("p",[e._v("Typically, each contract module will take the pubkey, combine it with a unique and contract-specific number called the "),s("code",[e._v("EVAL code")]),e._v(", and create a new "),s("a",{attrs:{href:"https://en.bitcoin.it/wiki/Base58Check_encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("Base58Check"),s("OutboundLink")],1),e._v(" encoded address from it. This "),s("code",[e._v("Base58Check")]),e._v(" encoded address will be the address you use for interacting with the specific Crypto Conditions-based contract.")]),e._v(" "),s("p",[e._v("To get a pubkey, launch the chain with the normal launch parameters and execute the "),s("router-link",{attrs:{to:"./../komodo-api/wallet.html#getnewaddress"}},[e._v("getnewaddress")]),e._v(" rpc call.")],1),e._v(" "),e._m(4),s("p",[e._v("This will return a new address:")]),e._v(" "),e._m(5),s("p",[e._v("Now, execute the "),s("router-link",{attrs:{to:"./../komodo-api/util.html#validateaddress"}},[e._v("validateaddress")]),e._v(" RPC.")],1),e._v(" "),e._m(6),s("p",[e._v("This will return a json object with many properties. In the properties you will see:")]),e._v(" "),e._m(7),s("p",[e._v("This is will be your contract pubkey; you must now indicate it to the daemon.")]),e._v(" "),s("p",[e._v("To do this, first stop the daemon.")]),e._v(" "),e._m(8),s("p",[e._v("Then relaunch your daemon using the required parameters, and make sure to include your pubkey as an additional parameter. For example:")]),e._v(" "),e._m(9),e._m(10),e._v(" "),s("p",[e._v("The daemon will now use the above pubkey as the basis for all addresses used for the different contract modules.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("The use-cases of the different addresses depends on the functionality in question, and the desired outcome.")]),e._v(" "),s("p",[e._v("Also, each contract module has its own RPC calls for moving coins or tokens. For example, if you are dealing with the "),s("code",[e._v("tokens")]),e._v(" contract, you may use the "),s("router-link",{attrs:{to:"./../cryptoconditions/cc-tokens.html#tokentransfer"}},[e._v("tokentransfer")]),e._v(" method.")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"crypto-conditions-instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crypto-conditions-instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Crypto Conditions Instructions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"understanding-the-types-of-addresses-used-in-crypto-conditions-based-contracts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#understanding-the-types-of-addresses-used-in-crypto-conditions-based-contracts","aria-hidden":"true"}},[this._v("#")]),this._v(" Understanding the Types of Addresses Used in Crypto Conditions-Based Contracts")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When making a transaction on an asset chain, you typically only deal with a sending address and a receiving address. To move coins, you might use methods such as "),t("code",[this._v("sendtoaddress")]),this._v(" or "),t("code",[this._v("z_sendmany")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating-and-launching-with-a-pubkey"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-launching-with-a-pubkey","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating and Launching With a Pubkey")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("HELLOWORLD getnewaddress\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("HELLOWORLD validateaddress DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"pubkey"')]),t("span",{pre:!0,attrs:{class:"token keyword"}},[this._v(":")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[this._v('"DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756"')]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./komodo-cli -ac_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("HELLOWORLD stop\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./komodo-cli -ac_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("HELLOWORLD -ac_supply"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777777 -ac_cc"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("777 -pubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"other-types-of-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-types-of-addresses","aria-hidden":"true"}},[this._v("#")]),this._v(" Other Types of Addresses")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To discover the addresses the pubkey provides, you will typically use an "),t("code",[this._v("address")]),this._v(" related RPC from the list of available RPC calls of your chosen contract module. For example, "),t("code",[this._v("faucetaddress")]),this._v(" would return a response like this:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"result"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"FaucetCCaddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"R9zHrofhRbub7ER77B7NrVch3A63R39GuC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Faucetmarker"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RKQV4oYs4rvxAWx1J43VnT73rSTVtUeckk"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"GatewaysPubkey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"03ea9c062b9652d8eff34879b504eda0717895d27597aaeb60347d65eed96ccb40"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"FaucetCCassets"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RQ3ZQycSBM5MPPEopxoEC6R7VLRo1Fmk6f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"myCCaddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RReGLfH2MTrkeLSepkVy5vnQPE29g7KofS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"myaddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RJYiWn3FRCSSLf9Pe5RJcbrKQYosaMburP"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In this list, the "),s("code",[e._v("FaucetCCaddress")]),e._v(" is the address that corresponds to the default "),s("code",[e._v("Faucet")]),e._v(" contract. "),s("code",[e._v("myCCaddress")]),e._v(" is the address your node uses for interacting with  the "),s("code",[e._v("Faucet")]),e._v(" contract; it is based on the combination of your pubkey and the "),s("code",[e._v("Faucet")]),e._v(" contract's unique "),s("code",[e._v("EVAL")]),e._v(" code (which you do not typically see).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("myaddress")]),this._v(" property is the unmodified address that corresponds to your pubkey.")])}],!1,null,null,null);t.default=r.exports}}]);