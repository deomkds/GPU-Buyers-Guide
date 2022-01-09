(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{412:function(e,r,t){"use strict";t.r(r);var o=t(31),a=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"what-gpus-to-avoid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-gpus-to-avoid"}},[e._v("#")]),e._v(" What GPUs to avoid")]),e._v(" "),t("p",[e._v("With GPUs to avoid it's a bit of a mixed bag - the specific brand to avoid 100% is Powercolor, HIS and VisionTek regardless of what core they runs. They're the most common GPUs to have instability issues and many users will outright not get any video out past the Clover boot-screen making a macOS install virtually impossible. XFX should also be avoided if you can, because people also have trouble with it, although most XFX cards will work with CSM/legacy mode turned off (XFX cards have an issue with VBIOS, but the UEFI VBIOS is fine.)(Though it is possible to get the XFX RX 460/560 working with a VBIOS flash, it's risky and not recommended). And while Sapphire may be the best brand for Polaris GPUs, Vega GPUs are quite a bit of a different story. While many have working systems with Sapphire Vega, a good chunk of users also experience instability and issues with macOS functioning correctly. "),t("strong",[e._v("Update")]),e._v(": With the advent of macOS 10.14.5, support for Sapphire Vega has been greatly improved. But do note that these issues were quite serious so tread lightly as all the kinks may not have been truly resolved")]),e._v(" "),t("p",[e._v("Most 550s will "),t("strong",[e._v("not")]),e._v(" work except for some models like "),t("a",{attrs:{href:"https://www.sapphiretech.com/en/consumer/pulse-rx-550-2g-g5-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sapphire Pulse 550 640 SP"),t("OutboundLink")],1),e._v(", as most other 550s are Lexa core, while 640 SP variants are Polaris. See below for more info")]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Baffin vs Lexa Breakdown")]),e._v(" "),t("p",[e._v("As mentioned above, RX 550 models come in 2 flavours known as Baffin and Lexa. The former is officially supported in macOS however the latter is not. Here we have a simple breakdown explaining how to determine which GPU is Baffin and which is Lexa even if OEMs do not openly mention.")]),e._v(" "),t("p",[t("strong",[e._v("Specification differences")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Old Lexa Core (incompatible)")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Stream Processors 512 (CUs 8)")]),e._v(" "),t("li",[e._v("Memory Speed 1750MHz (7000Mz effective)")]),e._v(" "),t("li",[e._v("Reference Clock 1183MHz")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Newer Baffin Core (compatible)")])]),e._v(" "),t("ul",[t("li",[e._v("Stream Processors 640 (CUs 10)")]),e._v(" "),t("li",[e._v("Memory Speed 1500MHz (6000Mz effective)")]),e._v(" "),t("li",[e._v("Reference Clock 1071MHz")])])])]),e._v(" "),t("p",[t("strong",[e._v("PCI ID Differences")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("Cards with the "),t("a",{attrs:{href:"https://devicehunt.com/view/type/pci/vendor/1002/device/67FF",target:"_blank",rel:"noopener noreferrer"}},[e._v("Device ID of 0x67ff"),t("OutboundLink")],1),e._v(" should be supported OOB\n"),t("ul",[t("li",[e._v("Device ID 0x699f = RX 550 512SP")]),e._v(" "),t("li",[e._v("Device ID 0x67ff Rev FF = RX 550 640SP")]),e._v(" "),t("li",[e._v("Device ID 0x67ff Rev CF = RX 560")])])])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/dortania/bugtracker/issues/129",target:"_blank",rel:"noopener noreferrer"}},[e._v("Credit to cat2devnull for gathering such information"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("And for those who are wondering why this list contradicts "),t("a",{attrs:{href:"https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/#AMD_Graphics_Cards",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tonymacx86's buyers guide"),t("OutboundLink")],1),e._v(", remember that their bottom line is to get users to buy hardware through their affiliate program. This is also the same website that recommended Pascal GPUs "),t("a",{attrs:{href:"https://web.archive.org/web/20190213211919/https://www.tonymacx86.com/buyersguide/building-a-customac-hackintosh-the-ultimate-buyers-guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 months after Mojave's release"),t("OutboundLink")],1),e._v(", would you really trust a website that's neither kept up-to date and offers "),t("em",[e._v("shivers")]),e._v(" the "),t("a",{attrs:{href:"https://github.com/khronokernel/Tonymcx86-stance",target:"_blank",rel:"noopener noreferrer"}},[e._v("beast tools"),t("OutboundLink")],1),e._v("?")]),e._v(" "),t("p",[t("strong",[e._v("Important note for MSI Navi users")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("10.15.X installers and under currently have a VBIOS bug which crashes installers if an MSI Navi card is present. This can be resolved by injecting "),t("code",[e._v("ATY,Rom#")]),e._v(" in your GPU's DeviceProperties with any value. See here for more details: "),t("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/901",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installer not working with 5700XT #901"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("MSI's Polaris and Vega line are not affected by this bug")])]),e._v(" "),t("h2",{attrs:{id:"powercolor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powercolor"}},[e._v("#")]),e._v(" Powercolor")]),e._v(" "),t("h3",{attrs:{id:"avoid-vega-and-polaris-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoid-vega-and-polaris-models"}},[e._v("#")]),e._v(" "),t("strong",[e._v("AVOID VEGA AND POLARIS MODELS")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.powercolor.com/product?id=1511340918",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerColor Red Devil RX VEGA 56/64"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.powercolor.com/products?id=1492658578&type=1493173705",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerColor Red Dragon/Devil RX 580"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.powercolor.com/products?id=1492658578&type=1493173679",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerColor Red Dragon RX 560/570"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"xfx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xfx"}},[e._v("#")]),e._v(" XFX")]),e._v(" "),t("h3",{attrs:{id:"avoid-vega-and-590-560-460-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoid-vega-and-590-560-460-models"}},[e._v("#")]),e._v(" "),t("strong",[e._v("AVOID VEGA AND 590/560/460 MODELS")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-vega#*",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX Reference RX Vega 56/64"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-vega/amd-radeon-rx-vega-56-hbm2-8gb-3xdp-hdmi-double-dissipation-rx-vegaldff6",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX Vega 56 Double Dissipation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX RX 590 Fatboy"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX RX 580/570"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-rx-500-series#*",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX RX 560"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://xfxforce.com/en-us/products/amd-radeon-rx-400-series#*",target:"_blank",rel:"noopener noreferrer"}},[e._v("XFX RX 460"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"his"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#his"}},[e._v("#")]),e._v(" HIS")]),e._v(" "),t("h3",{attrs:{id:"avoid-all-models"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoid-all-models"}},[e._v("#")]),e._v(" "),t("strong",[e._v("AVOID ALL MODELS")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.hisdigital.com/gb/product2-943.shtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("HIS RX 580 IceQ X² OC"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.hisdigital.com/gb/product2-945.shtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("HIS RX 570 IceQ X² OC"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://www.hisdigital.com/un/product2-958.shtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("HIS RX 560 iCooler OC"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"visiontek"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#visiontek"}},[e._v("#")]),e._v(" VisionTek")]),e._v(" "),t("h3",{attrs:{id:"avoid-all-models-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoid-all-models-2"}},[e._v("#")]),e._v(" "),t("strong",[e._v("AVOID ALL MODELS")])]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.visiontek.com/radeon-rx-590-oc-limited-edition.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VisionTek RX 590 OC Limited Edition"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.visiontek.com/ocpc-radeon-rx-580-8gb-gddr5-metallic-shroud.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VisionTek OCPC RX 580"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.visiontek.com/radeon-rx-560-2gb-gddr5-oc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("VisionTek RX 560 Overclocked"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);